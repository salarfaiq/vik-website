"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const GALLERY_IMAGES = [
  { src: "/images/hero.jpg", alt: "Winter camp", className: "" },
  { src: "/images/IMG_4453.jpg", alt: "Aerial camp view", className: "md:col-span-2" },
  { src: "/images/IMG_4454.jpg", alt: "Mountain panorama", className: "" },
  { src: "/images/IMG_4129.jpg", alt: "Glamping at dusk", className: "" },
  { src: "/images/ski-touring.jpg", alt: "Ski touring", className: "" },
  { src: "/images/IMG_4328.jpg", alt: "Snowy mountain camp", className: "md:col-span-2" },
];

export default function Gallery() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--vik-glacier)] mb-2 tracking-wider uppercase">
              Through the Lens
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Moments from the{" "}
              <span className="text-gradient-ember">Mountains</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {GALLERY_IMAGES.map((img, index) => (
            <ScrollReveal key={img.src} delay={index * 0.06} className={img.className}>
              <div className="rounded-xl overflow-hidden h-48 md:h-64 group cursor-pointer">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
