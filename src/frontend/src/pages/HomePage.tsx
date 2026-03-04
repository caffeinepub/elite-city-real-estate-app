import Amenities from "../components/Amenities";
import Approvals from "../components/Approvals";
import HeroBanner from "../components/HeroBanner";
import InquiryForm from "../components/InquiryForm";
import LayoutGallery from "../components/LayoutGallery";
import LocationConnectivity from "../components/LocationConnectivity";
import PricingDetails from "../components/PricingDetails";
import ProjectDetails from "../components/ProjectDetails";
import ProjectShowcase from "../components/ProjectShowcase";
import VideoGallery from "../components/VideoGallery";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroBanner />
      <ProjectShowcase />
      <ProjectDetails />
      <Amenities />
      <Approvals />
      <LayoutGallery />
      <VideoGallery />
      <LocationConnectivity />
      <PricingDetails />
      <InquiryForm />
    </div>
  );
}
