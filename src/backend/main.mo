import Set "mo:core/Set";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  public type Project = {
    address : Text;
    city : Text;
    pincode : Text;
    state : Text;
    details : Text;
    connectivityFeatures : Text;
    specialtyFeatures : Text;
    priceBreakdown : Text;
    reraApprovalDetails : Text;
    location : Text;
  };

  public type PublicProjectView = {
    address : Text;
    city : Text;
    pincode : Text;
    state : Text;
    details : Text;
    connectivityFeatures : Text;
    specialtyFeatures : Text;
    priceBreakdown : Text;
    reraApprovalDetails : Text;
    location : Text;
  };

  public type Inquiry = {
    name : Text;
    contact : Text;
    email : Text;
    message : Text;
    plotNumber : Text;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Text.compare(inquiry1.contact, inquiry2.contact);
    };
  };

  let inquiries = Set.empty<Inquiry>();
  var project : ?Project = null;

  func assertAdmin(userId : Text) {
    if (userId != "AdminUser") {
      Runtime.trap("Unauthorized: Only admin can modify project");
    };
  };

  public shared ({ caller }) func createProject(userId : Text, projectData : Project) : async () {
    assertAdmin(userId);
    project := ?projectData;
  };

  public shared ({ caller }) func updateProject(userId : Text, projectData : Project) : async () {
    assertAdmin(userId);
    project := ?projectData;
  };

  public shared ({ caller }) func deleteProject(userId : Text) : async () {
    assertAdmin(userId);
    project := null;
  };

  public query ({ caller }) func getProject() : async ?PublicProjectView {
    switch (project) {
      case (null) { null };
      case (?model) {
        ?{
          address = model.address;
          city = model.city;
          pincode = model.pincode;
          state = model.state;
          details = model.details;
          connectivityFeatures = model.connectivityFeatures;
          specialtyFeatures = model.specialtyFeatures;
          priceBreakdown = model.priceBreakdown;
          reraApprovalDetails = model.reraApprovalDetails;
          location = model.location;
        };
      };
    };
  };

  public shared ({ caller }) func submitInquiry(name : Text, contact : Text, email : Text, message : Text, plotNumber : Text) : async () {
    inquiries.add({
      name;
      contact;
      email;
      message;
      plotNumber;
    });
  };

  public shared ({ caller }) func getAllInquiries(userId : Text) : async [Inquiry] {
    assertAdmin(userId);
    inquiries.values().toArray();
  };

  public query ({ caller }) func getProjectsByCity(city : Text) : async [Project] {
    switch (project) {
      case (null) { [] };
      case (?proj) {
        if (Text.equal(proj.city, city)) { [proj] } else { [] };
      };
    };
  };

  public query ({ caller }) func getProjectsByPincode(pincode : Text) : async [Project] {
    switch (project) {
      case (null) { [] };
      case (?proj) {
        if (Text.equal(proj.pincode, pincode)) { [proj] } else { [] };
      };
    };
  };
};
