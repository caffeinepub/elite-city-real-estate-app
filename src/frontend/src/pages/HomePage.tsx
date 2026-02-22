import HeroBanner from '../components/HeroBanner';
import ProjectShowcase from '../components/ProjectShowcase';
import ProjectDetails from '../components/ProjectDetails';
import Amenities from '../components/Amenities';
import Approvals from '../components/Approvals';
import LayoutGallery from '../components/LayoutGallery';
import VideoGallery from '../components/VideoGallery';
import LocationConnectivity from '../components/LocationConnectivity';
import PricingDetails from '../components/PricingDetails';
import InquiryForm from '../components/InquiryForm';

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
