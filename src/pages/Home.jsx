import { SEO } from '../components/common/SEO';
import { HomeHeroSlider } from '../components/home/HomeHeroSlider';
import { HomeWelcome } from '../components/home/HomeWelcome';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { StreamsPreview } from '../components/home/StreamsPreview';
import { HomeGalleryPreview } from '../components/home/HomeGalleryPreview';
import { CTASection } from '../components/common/CTASection';

export function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="S.B.I. School, Mundri (Kaithal) - Permanent Recognised education from Nursery to 10+2."
      />

      {/* Hero Slideshow */}
      <HomeHeroSlider />

      {/* Welcome Section */}
      <HomeWelcome />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Academic Streams Preview */}
      <StreamsPreview />

      {/* Campus Activities Preview */}
      <HomeGalleryPreview />

      {/* Admissions Call to Action */}
      <CTASection
        title="Admissions Open 2026-27"
        subtitle="Admissions open for Nursery to 10+2. Contact our office for enrollment details."
        primaryButtonText="Contact Office"
        primaryButtonLink="/contact"
        secondaryButtonText="Download Forms"
        secondaryButtonLink="/documents"
      />
    </>
  );
}

export default Home;
