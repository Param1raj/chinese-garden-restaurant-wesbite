'use client';

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CountUp from "@/components/CountUp";

import heroImage from "@/assets/hero-cinematic-1.jpg";
import kitchenImage from "@/assets/kitchen-wok.jpg";
import amb1 from "@/assets/ambience-garden-1.jpg";
import amb2 from "@/assets/ambience-garden-2.jpg";
import amb3 from "@/assets/ambience-garden-3.jpg";
import ctaImage from "@/assets/cta-dining-warm.jpg";
import duckImg from "@/assets/dish-garden-duck.jpg";
import dimsumImg from "@/assets/dish-garden-dimsum.jpg";
import noodlesImg from "@/assets/dish-garden-noodles.jpg";
import mapoImg from "@/assets/dish-garden-mapo.jpg";
import springrollsImg from "@/assets/dish-garden-springrolls.jpg";
import soupImg from "@/assets/dish-garden-soup.jpg";
import Link from "next/link";

const signatureDishes = [
  { name: "Peking Duck", image: duckImg, tag: "Chef's Special", description: "Crispy golden skin, carved tableside with pancakes and hoisin" },
  { name: "Dim Sum Platter", image: dimsumImg, tag: "Signature", description: "Hand-crafted dumplings steamed in bamboo baskets" },
  { name: "Hand-Pulled Noodles", image: noodlesImg, tag: "Popular", description: "Fresh noodles in rich slow-simmered broth" },
  { name: "Mapo Tofu", image: mapoImg, tag: "Spicy", description: "Silken tofu in fiery Sichuan chili oil" },
  { name: "Golden Spring Rolls", image: springrollsImg, tag: "Starter", description: "Crispy rolls with traditional sweet chili dip" },
  { name: "Wonton Soup", image: soupImg, tag: "Comforting", description: "Delicate wontons in a clear golden broth" },
];

const menuData = {
  starters: {
    label: "Starters",
    items: [
      { name: "Golden Spring Rolls", price: "$12", desc: "Crispy vegetable rolls with sweet chili dip" },
      { name: "Wonton Soup", price: "$10", desc: "Delicate pork wontons in clear broth" },
      { name: "Prawn Toast", price: "$14", desc: "Sesame-crusted shrimp on golden bread", special: true },
      { name: "Salt & Pepper Squid", price: "$15", desc: "Lightly dusted with Sichuan spice" },
    ],
  },
  noodles: {
    label: "Noodles",
    items: [
      { name: "Hand-Pulled Noodles", price: "$18", desc: "In rich slow-simmered beef broth", special: true },
      { name: "Dan Dan Noodles", price: "$16", desc: "Spicy sesame peanut sauce" },
      { name: "Chow Mein", price: "$15", desc: "Wok-tossed with seasonal vegetables" },
      { name: "Singapore Noodles", price: "$17", desc: "Curry-spiced rice vermicelli" },
    ],
  },
  rice: {
    label: "Rice Dishes",
    items: [
      { name: "Yangzhou Fried Rice", price: "$15", desc: "Char siu, shrimp, and egg" },
      { name: "Claypot Rice", price: "$18", desc: "Slow-cooked with Chinese sausage", special: true },
      { name: "Steamed Jasmine Rice", price: "$5", desc: "Fragrant long-grain" },
    ],
  },
  specials: {
    label: "Chef's Specials",
    items: [
      { name: "Peking Duck", price: "$38", desc: "Whole roasted, carved tableside", special: true },
      { name: "Kung Pao Chicken", price: "$22", desc: "Peanuts, dried chili, Sichuan pepper" },
      { name: "Mapo Tofu", price: "$15", desc: "Fiery silken tofu in chili bean sauce" },
      { name: "Sweet & Sour Pork", price: "$20", desc: "Crispy battered with tangy glaze" },
    ],
  },
};

const menuCategories = Object.entries(menuData).map(([key, val]) => ({
  key,
  label: val.label,
}));

const testimonials = [
  { name: "Li Wei", review: "The flavors are so authentic — it's like being back in my grandmother's kitchen in Chengdu.", rating: 5 },
  { name: "Sarah Mitchell", review: "The best Chinese dining experience we've ever had. Warm, welcoming, and unforgettable.", rating: 5 },
  { name: "David Chen", review: "Their Peking duck is a masterpiece. A true gem in the heart of the city.", rating: 5 },
  { name: "Emma Rodriguez", review: "Beautiful ambience and the dim sum is to die for. We visit every weekend now.", rating: 5 },
];

const ambienceImages = [amb1, amb2, amb3];

const Index = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [activeMenuCat, setActiveMenuCat] = useState("starters");
  const [ambienceIdx, setAmbienceIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // @ts-ignore
  const testimonialInterval = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 100);
    testimonialInterval.current = setInterval(() => {
      setTestimonialIdx(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval.current);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    setMousePos({
      x: (clientX / width - 0.5) * 20,
      y: (clientY / height - 0.5) * 20,
    });
  };

  const currentMenu = menuData[activeMenuCat as keyof typeof menuData];

  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}

      {/* ═══ CINEMATIC HERO ═══ */}
      <section
        className="relative h-screen overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Background with slow zoom + parallax */}
        <div
          className="absolute inset-0 hero-bg-zoom"
          style={{
            transform: `scale(1.05) translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          }}
        >
          <img
            src={heroImage.src}
            alt="Premium Chinese dining spread"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

        {/* Warm ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />

        {/* Steam particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full steam-float"
            style={{
              left: `${20 + i * 8}%`,
              bottom: "15%",
              width: `${3 + (i % 3) * 2}px`,
              height: `${3 + (i % 3) * 2}px`,
              background: `radial-gradient(circle, hsla(40, 80%, 70%, 0.3), transparent)`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}

        {/* Left-aligned content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div
              className={`max-w-2xl transition-all duration-1000 ease-out ${
                heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {/* Since badge */}
              <div
                className={`inline-flex items-center gap-2 mb-8 transition-all duration-1000 delay-200 ${
                  heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span className="text-secondary/80 text-sm tracking-[0.3em] uppercase font-medium">
                  Est. 1998 · Authentic Chinese Cuisine
                </span>
              </div>

              <h1 className="heading-hero text-white mb-4" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}>
                Chinese
                <br />
                <span className="text-primary" style={{ textShadow: '0 2px 40px hsl(0 70% 50% / 0.4)' }}>
                  Garden
                </span>
              </h1>

              <p
                className={`text-lg md:text-xl text-white/70 mb-10 max-w-md font-light leading-relaxed transition-all duration-1000 delay-300 ${
                  heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
              >
                Authentic Chinese Dining Experience
              </p>

              {/* CTAs */}
              <div
                className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-1000 delay-500 ${
                  heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <Link href="/reservations">
                  <Button className="btn-glow-primary text-base">
                    Book a Table
                  </Button>
                </Link>
                <Link href="/menu">
                  <Button className="btn-glass text-base">
                    Explore Menu
                  </Button>
                </Link>
              </div>

              {/* Rating badge */}
              <div
                className={`inline-flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-1000 delay-700 ${
                  heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-white/90 text-sm font-medium">4.8</span>
                <span className="text-white/40">|</span>
                <span className="text-white/60 text-sm">2000+ happy diners</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator">
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ═══ STORY ═══ */}
      <section className="py-16 md:py-20 px-4 bg-parchment relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <div className="ornament-divider">
              <span className="text-secondary text-sm">✦</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="heading-section text-foreground">Our Story</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-2">
              Recipes passed down through generations —
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              from family kitchens in Sichuan, Canton, and Beijing.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Every dish carries the warmth of home
              <br />
              and the fire of authentic craft.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="ornament-divider">
              <span className="text-secondary text-sm">✦</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SIGNATURE DISHES ═══ */}
      <section className="py-20 px-4 relative z-10 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-3 font-medium">
                Curated Selection
              </p>
              <h2 className="heading-section text-foreground">Signature Dishes</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureDishes.map((dish, i) => (
              <ScrollReveal key={dish.name} delay={i * 80}>
                <div className="group card-food">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={dish.image.src}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded">
                      {dish.tag}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm text-white/90">{dish.description}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-foreground font-serif-display">
                      {dish.name}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPERIENCE ═══ */}
      <section className="py-24 md:py-32 px-4 bg-parchment relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] border border-border shadow-sm">
                <img
                  src={kitchenImage.src}
                  alt="Our kitchen"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-3 font-medium">
                  Why Chinese Garden
                </p>
                <h2 className="heading-section text-foreground">
                  A Legacy of
                  <br />
                  Culinary Excellence
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  Our master chefs bring decades of experience from China's most celebrated regions,
                  blending ancient techniques with heartfelt presentation.
                </p>
                <div className="grid grid-cols-2 gap-10">
                  {[
                    { end: 20, suffix: "+", label: "Years of Tradition" },
                    { end: 50, suffix: "K+", label: "Happy Guests" },
                    { end: 80, suffix: "+", label: "Authentic Recipes" },
                    { end: 12, suffix: "", label: "Master Chefs" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl md:text-4xl font-bold text-primary font-serif-display">
                        <CountUp end={stat.end} suffix={stat.suffix} />
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ AMBIENCE ═══ */}
      <section className="py-24 px-4 relative z-10 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-3 font-medium">
                Our Atmosphere
              </p>
              <h2 className="heading-section text-foreground">Step Inside</h2>
            </div>
          </ScrollReveal>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-3 gap-5">
            {ambienceImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="relative rounded-lg overflow-hidden aspect-[4/3] group border border-border shadow-sm">
                  <img
                    src={img.src}
                    alt={`Restaurant ambience ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile slider */}
          <div className="md:hidden relative">
            <div className="rounded-lg overflow-hidden aspect-[4/3] border border-border shadow-sm">
              <img
                src={ambienceImages[ambienceIdx]?.src}
                alt="Restaurant ambience"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            <div className="flex justify-center mt-5 gap-2">
              {ambienceImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setAmbienceIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === ambienceIdx ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MENU PREVIEW ═══ */}
      <section className="py-24 md:py-32 px-4 bg-parchment relative z-10">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-3 font-medium">
                From Our Kitchen
              </p>
              <h2 className="heading-section text-foreground">The Menu</h2>
            </div>
          </ScrollReveal>

          {/* Category tabs */}
          <ScrollReveal delay={100}>
            <div className="flex justify-center gap-1 sm:gap-2 mb-12 flex-wrap">
              {menuCategories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActiveMenuCat(cat.key)}
                  className={`px-5 py-2.5 rounded text-sm font-medium transition-all duration-300 ${
                    activeMenuCat === cat.key
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Category heading with divider */}
          <ScrollReveal>
            <div className="text-center mb-8">
              <h3 className="font-serif-display text-2xl text-foreground mb-3">
                {currentMenu.label}
              </h3>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-primary/30" />
                <span className="text-secondary text-xs">✦</span>
                <div className="h-px w-12 bg-primary/30" />
              </div>
            </div>
          </ScrollReveal>

          {/* Menu items — list style */}
          <div className="space-y-0">
            {currentMenu.items.map((dish, i) => (
              <ScrollReveal key={dish.name} delay={i * 60}>
                <div className="menu-list-item border-b border-border/40 relative">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline">
                      <span className="text-foreground font-medium text-base">
                        {dish.name}
                      </span>
                      {dish.special && (
                        <span className="ml-2 text-[10px] uppercase tracking-widest text-secondary font-semibold">
                          Chef's Pick
                        </span>
                      )}
                      <span className="menu-dots" />
                      <span className="text-primary font-semibold font-serif-display text-lg">
                        {dish.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-0.5">{dish.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/menu">
              <Button className="btn-outline-premium">View Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-24 px-4 relative z-10 bg-background">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-3 font-medium">
                Guest Voices
              </p>
              <h2 className="heading-section text-foreground">What Our Guests Say</h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${testimonialIdx * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-4">
                    <div className="card-elegant p-8 md:p-12 text-center max-w-xl mx-auto">
                      <div className="flex justify-center gap-1 mb-5">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} size={14} className="fill-secondary text-secondary" />
                        ))}
                      </div>
                      <p className="text-foreground/90 leading-relaxed italic mb-5 font-serif-display text-lg">
                        "{t.review}"
                      </p>
                      <p className="text-muted-foreground text-sm font-medium tracking-wide">
                        — {t.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === testimonialIdx ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative py-28 md:py-36 px-4 overflow-hidden z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${ctaImage.src})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <div className="ornament-divider mb-8">
              <span className="text-secondary text-lg lantern-glow">🏮</span>
            </div>
            <h2 className="heading-hero text-white text-3xl md:text-5xl mb-6">
              Visit Us <span style={{ textShadow: '0 2px 16px hsl(0 65% 38% / 0.5)' }}>Today</span>
            </h2>
            <p className="text-white/75 mb-12 max-w-md mx-auto text-lg" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
              Experience the warmth of Chinese hospitality
              <br />
              and flavors that stay with you
            </p>
            <Link href="/reservations">
              <Button className="btn-primary-premium text-lg px-12 py-5">
                Book Your Table
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Index;
