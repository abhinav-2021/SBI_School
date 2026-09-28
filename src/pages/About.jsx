import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { CoreValues } from '../components/about/CoreValues';
import { AboutGallerySection } from '../components/about/AboutGallerySection';
import { CTASection } from '../components/common/CTASection';

export function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="About S.B.I. School, Mundri (Kaithal) - Permanent Recognised education from Nursery to 10+2."
      />

      {/* Page Hero */}
      <PageHero
        title="About Our School"
        subtitle="Permanent recognised institution in Mundri (Kaithal) offering education from Nursery to 10+2."
        badge="About Us"
        breadcrumbs={[{ label: "About Us" }]}
        backgroundImage="/images/about-gallery/aerial-campus-view.jpeg"
      />

      {/* Core Values with Icons */}
      <CoreValues />

      {/* Modern Campus Photo Gallery Section with all real photos */}
      <AboutGallerySection />

      {/* CTA Section */}
      <CTASection
        title="Admissions Open 2026-27"
        subtitle="Admissions open for Nursery through 10+2. Visit our campus or get in touch."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Streams"
        secondaryButtonLink="/streams"
      />
    </>
  );
}

export default About;
