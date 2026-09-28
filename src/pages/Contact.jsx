import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { QuickContactCards } from '../components/contact/QuickContactCards';
import { CampusVisitCTA } from '../components/contact/CampusVisitCTA';
import { DepartmentDirectory } from '../components/contact/DepartmentDirectory';
import { CampusLocationGuide } from '../components/contact/CampusLocationGuide';
import { ContactFAQ } from '../components/contact/ContactFAQ';

export function Contact() {
  return (
    <>
      <SEO
        title="Contact Us & Campus Visit"
        description="Contact S.B.I. School, Mundri (Kaithal). Direct helplines, WhatsApp chat, office hours, departmental directory, campus directions, and walk-in visit guidelines."
      />

      {/* Hero Section */}
      <PageHero
        title="Contact Us & Campus Visit"
        subtitle="Speak directly with our office, chat via WhatsApp, or visit our campus in Mundri (Kaithal). No prior form required."
        badge="Direct Contact Hub"
        breadcrumbs={[{ label: "Contact Us" }]}
        backgroundImage="/images/hero/hero-campus-main.jpg"
      />

      {/* 1. Quick Connect Cards with Call, WhatsApp, and Copy features */}
      <QuickContactCards />

      {/* 2. Walk-in Campus Tour & Admission Invitation (Replaces enquiry form) */}
      <CampusVisitCTA />

      {/* 3. Departmental Directory (Admissions, Principal, Accounts, Transport, Records) */}
      <DepartmentDirectory />

      {/* 4. Campus Location, Travel Guide & Interactive Google Map */}
      <CampusLocationGuide />

      {/* 5. Frequently Asked Questions */}
      <ContactFAQ />
    </>
  );
}

export default Contact;
