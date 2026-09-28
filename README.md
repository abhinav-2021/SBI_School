# SBI Academy International School — Modern Web Application

A modern, elegant, professional, and fully responsive website for **SBI Academy International School**, built with React, Vite, Tailwind CSS, Lucide icons, Framer Motion, and Swiper.js. Designed with a focus on visual appeal, accessibility, performance, and user experience.

---

## 🏫 Key Features

* **Hero Slideshow (`Swiper.js`)**: Full-width interactive hero carousel featuring smooth fade transitions, campus photography, dark readable overlays, mission statements, and dual action CTAs.
* **5 Dedicated Pages**:
  * **Home**: Hero slider, urgent announcements banner, principal's welcome message, "Why Choose Us" feature cards, academic streams preview, campus life photo gallery with lightbox, and call-to-action banner.
  * **About Us**: Institutional heritage, founding story, leadership message with portrait and signature, foundational core values, state-of-the-art facilities showcase, achievements & honors, and full photo gallery.
  * **Academic Streams**: Dedicated program cards for **Science & Technology (STEM)**, **Commerce & Financial Studies**, and **Arts & Humanities**, detailing curriculum subjects, learning outcomes, career trajectories, and laboratory facilities.
  * **Document Repository**: Downloadable PDF center featuring categorized forms (Admission Forms, Academic Info, Notices, Timetables, Policies), instant frontend keyword search, category filter pills, file metadata badges, and direct PDF downloads.
  * **Contact & Campus Visit**: Contact information cards (Address, Phone, Email, Office Hours), interactive inquiry submission form with feedback states, embedded Google Maps campus locator, and official social media channels.
* **Interactive Lightbox Modal**: Fullscreen gallery modal supporting keyboard navigation (Escape, Left/Right arrows), image captions, and categories.
* **Completely Static & Zero-Config**: Runs without any database, backend server, or API. All text, images, streams, and documents are centrally managed via clean JavaScript data files in `src/data/`.
* **Vercel-Ready SPA**: Configured with `vercel.json` rewrites for single-page client-side routing on any hosting provider.

---

## 🎨 Design System & Palette

* **Primary**: Deep Navy Blue (`#142D4E`)
* **Secondary**: Royal Blue (`#2563EB`)
* **Accent**: Warm Golden Yellow (`#F4B942`)
* **Background**: Off-White (`#F8FAFC`)
* **Body Text**: Slate Gray (`#334155`)
* **Typography**: Outfit & Plus Jakarta Sans via Google Fonts

---

## 📁 Project Structure

```text
sbischool/
├── public/
│   ├── favicon.svg             # School crest favicon
│   ├── images/
│   │   ├── hero/               # Hero slideshow photography
│   │   ├── campus/             # Campus & grounds photography
│   │   ├── faculty/            # Leadership portraits
│   │   ├── facilities/         # Classrooms, labs, sports, library
│   │   ├── gallery/            # Campus events & student life
│   │   ├── streams/            # Science, Commerce, Humanities images
│   │   └── logo/               # Vector school crest logo
│   └── documents/              # Downloadable PDFs
├── src/
│   ├── components/
│   │   ├── layout/             # Navbar, MobileMenu, Footer, ScrollToTop
│   │   ├── common/             # PageHero, SectionHeading, FeatureCard, StreamCard,
│   │   │                       # DocumentCard, GalleryGrid, Lightbox, SEO, CTASection
│   │   ├── home/               # HeroSlider, HomeWelcome, WhyChooseUs, StreamsPreview
│   │   ├── about/              # PrincipalMessage, HistoryTimeline, CampusFacilities
│   │   ├── streams/            # StreamDetailCard
│   │   ├── documents/          # DocumentFilterBar
│   │   └── contact/            # ContactForm, MapSection
│   ├── data/
│   │   ├── schoolInfo.js       # Core institutional information, stats & contacts
│   │   ├── streams.js          # Academic stream curricula & careers
│   │   ├── documents.js        # Downloadable document metadata
│   │   ├── announcements.js    # Notice board circulars & alert ticker
│   │   └── gallery.js          # Photo gallery items & categories
│   ├── hooks/
│   │   ├── useScrollPosition.js # Sticky navbar & scroll detection
│   │   └── useDocumentTitle.js  # SEO title & meta description manager
│   ├── lib/
│   │   └── utils.js            # Tailwind merge utility (cn)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Streams.jsx
│   │   ├── Documents.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── vercel.json
└── package.json
```

---

## 🚀 Getting Started

### 1. Installation

Ensure Node.js (v18+) is installed on your machine.

```bash
npm install
```

### 2. Development Server

Start the local Vite development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### 3. Production Build

Build the static production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect:
   * **Framework Preset**: Vite
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
4. Click **Deploy**. The included `vercel.json` ensures direct URL routing to `/about`, `/streams`, `/documents`, and `/contact` works without 404 errors.

---

## 📄 License

SBI Academy International School © 2026. All rights reserved.
