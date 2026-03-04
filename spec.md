# Elite City Real Estate App

## Current State
The app is a full-stack real estate listing for Elite India Projects Private Limited. It has:
- Header with logo, DTCP/RERA badges (no contact number)
- Hero banner with marketing poster image
- ProjectShowcase, ProjectDetails, Amenities, Approvals sections
- LayoutGallery and VideoGallery sections
- LocationConnectivity and PricingDetails sections
- InquiryForm at the bottom
- Footer with project list, contact (no phone numbers)

The contact numbers (9848525246 and 7013138131) were previously removed per user request. The app currently shows outdated project info and is missing the two new uploaded marketing posters.

## Requested Changes (Diff)

### Add
- Display both uploaded marketing posters (Telugu and English versions) prominently as a "Marketing Materials" section — with zoomable/lightbox viewing
- Add contact person info: N. Ajay Kumar, Elite President
- Add both WhatsApp contact numbers: 9848525246 and 7013138131 in Header, Footer, and a dedicated Contact section
- Add Head Office address: Sri Sri Nagar Colony, Mallareddy Complex, Turkayamjal, Hyderabad
- Investment insight callout: "Buy 1000G, 500G, or 150G — land value rising"

### Modify
- Update ProjectDetails to match poster data exactly:
  - Future Plan: 500+ Acres
  - Elite City Phase-1: 6 acres (Kalvakurthi Town)
  - Elite City Premium Phase-2: 10 acres (Kalvakurthi Town)
  - Total current development: 16 acres (~300 plots)
  - Plot sizes: 146 to 330 sq. yards
- Update Approvals:
  - Elite City: DTCP TLP No. 94/2025/H, RERA P01600010279
  - Elite Township: DTCP TLP No. 123/2024/H, RERA P01600009014
  - Elite City Premium: Approval Process Ongoing
  - ISO 9001:2015 Certified
- Update PricingDetails prices (per sq. yard):
  - Elite Township: Rs. 9,499
  - Elite City Phase-1: Rs. 19,999
  - Elite City Phase-2: Rs. 17,999
  - Elite City Premium: Rs. 19,999
  - Commercial Plots (Tirupati Bypass facing): Rs. 25,000
  - Add note: "Facing charges extra"
- Update LocationConnectivity to include all poster details:
  - Airport: 64 KM, Pharma City: 30 KM, RRR: 16.5 KM
  - Sub Registrar Office: 200m, Municipality Office: 300m
  - Hospital: 300m, Spinning Mill: 500m, Bharat Petrol Bunk
  - B.Ed College, Mini Cricket Stadium, Gurukul School nearby
- Update Header to show both contact numbers and N. Ajay Kumar's name
- Update Footer contact section with both phone numbers and head office address
- Update HeroBanner to display both new uploaded images (replace old poster image)
- Update Amenities to match poster highlights exactly (Radium Lights, Geo Fiber, 6ft Footpaths, etc.)

### Remove
- Nothing to remove

## Implementation Plan
1. Update Header.tsx — add both contact numbers prominently
2. Update HeroBanner.tsx — add both uploaded poster images in the marketing section (bilingual display)
3. Update ProjectDetails.tsx — use updated project data from posters
4. Update Amenities.tsx — add Radium Lights, Geo Fiber, 6ft Footpaths, Stormwater, Lift & View Room, 2 Gazebos from poster
5. Update Approvals.tsx — fix RERA numbers, add ISO certification badge
6. Update LocationConnectivity.tsx — add all specific distances from poster
7. Update PricingDetails.tsx — update prices, add facing charges note
8. Update InquiryForm.tsx — update project names to match new data
9. Update Footer.tsx — add both phone numbers, head office address, N. Ajay Kumar contact
10. Add a dedicated Contact/CTA section component with WhatsApp buttons for both numbers
