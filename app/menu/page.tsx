'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

import duckImg from "@/assets/dish-garden-duck.jpg";
import dimsumImg from "@/assets/dish-garden-dimsum.jpg";
import noodlesImg from "@/assets/dish-garden-noodles.jpg";
import mapoImg from "@/assets/dish-garden-mapo.jpg";
import springrollsImg from "@/assets/dish-garden-springrolls.jpg";
import soupImg from "@/assets/dish-garden-soup.jpg";
import riceImg from "@/assets/dish-garden-rice.jpg";
import menuHeroImage from "@/assets/hero-dumplings.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  isSpecial?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

interface MenuCategory {
  label: string;
  items: MenuItem[];
}

const menuCategories: Record<string, MenuCategory> = {
  starters: {
    label: "Starters",
    items: [
      { name: "Golden Spring Rolls", price: "$12", description: "Crispy vegetable rolls with sweet chili dip", image: springrollsImg.src, isVegetarian: true },
      { name: "Wonton Soup", price: "$10", description: "Delicate pork wontons in clear golden broth", image: soupImg.src },
      { name: "Prawn Toast", price: "$14", description: "Sesame-crusted shrimp on golden bread", image: dimsumImg.src, isSpecial: true },
      { name: "Salt & Pepper Squid", price: "$15", description: "Lightly dusted with Sichuan spice", image: springrollsImg.src, isSpicy: true },
      { name: "Pork Dumplings (8 pcs)", price: "$16", description: "Steamed dumplings with premium pork filling", image: dimsumImg.src },
    ],
  },
  soups: {
    label: "Soups",
    items: [
      { name: "Hot & Sour Soup", price: "$10", description: "Traditional soup with tofu, mushrooms, and egg", image: soupImg.src, isSpicy: true, isVegetarian: true },
      { name: "Wonton Soup", price: "$10", description: "Delicate pork wontons in clear broth", image: soupImg.src },
      { name: "Corn Soup", price: "$9", description: "Silky sweet corn with egg drop", image: soupImg.src, isVegetarian: true },
    ],
  },
  noodles: {
    label: "Noodles",
    items: [
      { name: "Hand-Pulled Noodles", price: "$18", description: "In rich slow-simmered beef broth", image: noodlesImg.src, isSpecial: true },
      { name: "Dan Dan Noodles", price: "$16", description: "Spicy sesame peanut sauce", image: noodlesImg.src, isSpicy: true },
      { name: "Chow Mein", price: "$15", description: "Wok-tossed with seasonal vegetables", image: noodlesImg.src, isVegetarian: true },
      { name: "Singapore Noodles", price: "$17", description: "Curry-spiced rice vermicelli", image: noodlesImg.src, isSpicy: true },
      { name: "Beef Lo Mein", price: "$20", description: "Soft noodles with tender beef and vegetables", image: noodlesImg.src },
    ],
  },
  rice: {
    label: "Rice Dishes",
    items: [
      { name: "Yangzhou Fried Rice", price: "$15", description: "Char siu, shrimp, and egg", image: riceImg.src },
      { name: "Claypot Rice", price: "$18", description: "Slow-cooked with Chinese sausage", image: riceImg.src, isSpecial: true },
      { name: "Vegetarian Fried Rice", price: "$16", description: "Wok-fried rice with mixed vegetables and tofu", image: riceImg.src, isVegetarian: true },
      { name: "Steamed Jasmine Rice", price: "$5", description: "Fragrant long-grain", image: riceImg.src },
    ],
  },
  specials: {
    label: "Chef's Specials",
    items: [
      { name: "Peking Duck", price: "$38", description: "Whole roasted, carved tableside with pancakes", image: duckImg.src, isSpecial: true },
      { name: "Kung Pao Chicken", price: "$22", description: "Peanuts, dried chili, Sichuan pepper", image: mapoImg.src, isSpicy: true },
      { name: "Mapo Tofu", price: "$15", description: "Fiery silken tofu in chili bean sauce", image: mapoImg.src, isSpicy: true, isVegetarian: true },
      { name: "Sweet & Sour Pork", price: "$20", description: "Crispy battered with tangy glaze", image: springrollsImg.src },
    ],
  },
  desserts: {
    label: "Desserts",
    items: [
      { name: "Mango Pudding", price: "$8", description: "Silky smooth mango pudding with fresh fruit", image: dimsumImg.src, isVegetarian: true },
      { name: "Sesame Balls", price: "$7", description: "Crispy glutinous rice with sweet red bean paste", image: springrollsImg.src, isVegetarian: true },
    ],
  },
};

const categoryKeys = Object.keys(menuCategories);

const Menu = () => {
  const [activeCat, setActiveCat] = useState("starters");
  const currentCategory = menuCategories[activeCat];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden px-4 pt-28 pb-16">
        <Image
          src={menuHeroImage}
          alt="Fresh dumplings arranged for service"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/58" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/72 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-secondary">
              Chinese Garden
            </p>
            <h1 className="heading-hero mb-5 text-white">Our Menu</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/82 md:text-xl">
              Authentic dishes prepared with traditional techniques and the finest ingredients
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-[72px] z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex justify-center gap-1 sm:gap-2 flex-wrap">
            {categoryKeys.map(key => (
              <button
                key={key}
                onClick={() => setActiveCat(key)}
                className={`px-4 py-2 rounded text-sm font-medium transition-all duration-300 ${
                  activeCat === key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {menuCategories[key].label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 md:py-16 bg-parchment">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-serif-display text-2xl md:text-3xl text-foreground mb-3">
                {currentCategory.label}
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-primary/30" />
                <span className="text-secondary text-xs">✦</span>
                <div className="h-px w-12 bg-primary/30" />
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {currentCategory.items.map((dish, i) => (
              <ScrollReveal key={`${activeCat}-${dish.name}`} delay={i * 60}>
                <div className="flex items-start gap-4 py-5 border-b border-border/40 group transition-all duration-300 hover:pl-1">
                  {/* Dish image */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shrink-0 border border-border">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-foreground font-medium text-base font-serif-display">
                          {dish.name}
                        </span>
                        {dish.isSpecial && (
                          <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold">
                            Chef&apos;s Pick
                          </span>
                        )}
                        {dish.isSpicy && (
                          <span className="text-[10px] text-primary font-medium">🌶</span>
                        )}
                        {dish.isVegetarian && (
                          <span className="text-[10px] text-jade font-medium">🌿</span>
                        )}
                      </div>
                      <span className="text-primary font-semibold font-serif-display text-lg shrink-0">
                        {dish.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">{dish.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-parchment-deep">
        <div className="max-w-2xl mx-auto text-center px-4">
          <ScrollReveal>
            <div className="ornament-divider mb-6">
              <span className="text-secondary text-sm">✦</span>
            </div>
            <h3 className="font-serif-display text-2xl text-foreground mb-4">
              Ready to Dine?
            </h3>
            <p className="text-muted-foreground mb-8">
              Reserve your table and experience these flavors in person
            </p>
            <Button className="btn-primary-premium" asChild>
              <a href="/reservations">Book a Table</a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Menu;
