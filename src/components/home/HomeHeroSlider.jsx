import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export function HomeHeroSlider() {
  const slides = [
    {
      id: 1,
      image: "/images/hero/hero-campus-main.jpg",
      badge: "CBSE Affiliated • Nur. to 10+2",
      headline: "S.B.I. School, Mundri",
      description: "Permanent Recognised school in Mundri (Kaithal) offering quality education with spacious green campus, modern laboratories, and sports grounds.",
      primaryCta: { text: "About School", link: "/about" },
      secondaryCta: { text: "Our Streams", link: "/streams" },
      imagePosition: "object-[center_45%]",
      contentAlign: "right"
    },
    {
      id: 2,
      image: "/images/hero/hero-lab-sbni.png",
      badge: "Laboratories",
      headline: "Science Laboratories",
      description: "Equipped Physics, Chemistry, and Biology labs for practical experiments.",
      primaryCta: { text: "View Streams", link: "/streams" },
      secondaryCta: { text: "Contact Us", link: "/contact" },
      imagePosition: "object-[center_40%]",
      contentAlign: "left"
    },
    {
      id: 3,
      image: "/images/hero/hero-classroom-sbni.png",
      badge: "Classrooms",
      headline: "Classrooms & Study Suites",
      description: "Airy classrooms and dedicated study spaces designed for focused learning.",
      primaryCta: { text: "Downloads", link: "/documents" },
      secondaryCta: { text: "Contact Us", link: "/contact" },
      imagePosition: "object-center",
      contentAlign: "left"
    }
  ];

  return (
    <section className="relative w-full aspect-[16/9] min-h-[480px] sm:min-h-[520px] md:min-h-[560px] max-h-[640px] lg:max-h-[680px] bg-school-primary-dark overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full select-none">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.headline}
                className={`w-full h-full object-cover ${slide.imagePosition || 'object-center'}`}
              />
              {slide.contentAlign === 'right' ? (
                <>
                  {/* Subtle overall dark scrim so contrast is uniform */}
                  <div className="absolute inset-0 bg-school-primary-dark/25" />
                  {/* Right side gradient for text legibility, keeping left building signboard fully visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-school-primary-dark/85 via-transparent to-black/25" />
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-school-primary-dark/90 via-school-primary-dark/55 to-transparent" />
                  <div className="md:hidden absolute inset-0 bg-school-primary-dark/65" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-school-primary-dark/95 via-school-primary-dark/70 md:via-school-primary-dark/45 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-primary-dark/80 via-transparent to-black/20" />
                </>
              )}
            </div>

            {/* Slide Content */}
            <div className={`relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center ${slide.contentAlign === 'right' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-xl w-full ${slide.contentAlign === 'right' ? 'md:bg-school-primary-dark/70 md:backdrop-blur-md md:p-8 md:rounded-2xl md:border md:border-white/15 md:shadow-2xl' : ''}`}>
                {/* Badge */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-school-accent/20 text-school-accent border border-school-accent/40 backdrop-blur-md mb-3.5">
                  {slide.badge}
                </span>

                {/* Main Headline */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading drop-shadow-md">
                  {slide.headline}
                </h1>

                {/* Minimal Description */}
                <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed max-w-lg drop-shadow-sm">
                  {slide.description}
                </p>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    to={slide.primaryCta.link}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-school-accent hover:bg-school-accent-dark text-school-primary-dark font-bold text-xs uppercase tracking-wider shadow-soft transition-all duration-200"
                  >
                    <span>{slide.primaryCta.text}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to={slide.secondaryCta.link}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/25 backdrop-blur-md transition-all duration-200"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-school-accent" />
                    <span>{slide.secondaryCta.text}</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HomeHeroSlider;

