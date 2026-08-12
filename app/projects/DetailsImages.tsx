"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function DetailsImage({ gallery }: { gallery: string[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollThumbnails = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({
        left: dir === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      {/* ── Main Large Carousel ── */}
      <div className="relative group w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0c] shadow-2xl">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {gallery.map((img, index) => (
              <CarouselItem key={index} className="w-full">
                <div
                  className="relative w-full h-[400px] sm:h-[520px] md:h-[640px] lg:h-[720px] flex items-center justify-center p-2 sm:p-4 bg-[#08080a]/90 cursor-zoom-in"
                  onClick={() => setFullscreenImage(img)}>
                  <Image
                    src={img}
                    alt={`Project screenshot ${index + 1}`}
                    fill
                    className="object-contain p-2 sm:p-4 rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
                    priority={index === 0}
                    sizes="100vw"
                    suppressHydrationWarning
                    unoptimized
                  />
                  {/* Zoom hint overlay */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs text-white/70 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <Maximize2 size={12} />
                    <span>Click to Expand</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Previous Button */}
        {gallery.length > 1 && (
          <button
            onClick={() => api?.scrollPrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white/80 hover:text-white hover:bg-black/90 hover:border-[#a78bfa]/50 flex items-center justify-center transition-all duration-200 shadow-xl"
            aria-label="Previous Image">
            <ChevronLeft size={22} />
          </button>
        )}

        {/* Next Button */}
        {gallery.length > 1 && (
          <button
            onClick={() => api?.scrollNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white/80 hover:text-white hover:bg-black/90 hover:border-[#a78bfa]/50 flex items-center justify-center transition-all duration-200 shadow-xl"
            aria-label="Next Image">
            <ChevronRight size={22} />
          </button>
        )}

        {/* Slide counter badge */}
        {gallery.length > 1 && (
          <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-md border border-white/10 px-3.5 py-1 rounded-full text-xs font-mono text-white/80">
            {current + 1} / {count}
          </div>
        )}
      </div>

      {/* ── Thumbnail Strip ── */}
      {gallery.length > 1 && (
        <div className="relative group/thumbs w-full mt-2">
          {/* Left Arrow */}
          <button
            onClick={() => scrollThumbnails("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-14 bg-black/80 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-black flex items-center justify-center rounded-r-lg opacity-0 group-hover/thumbs:opacity-100 transition-all duration-300"
            aria-label="Scroll left">
            <ChevronLeft size={20} />
          </button>

          <div 
            ref={scrollRef}
            className="flex items-center gap-3 overflow-x-auto py-2 px-1 scrollbar-none scroll-smooth">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => api?.scrollTo(idx)}
                className={`relative shrink-0 w-24 h-16 sm:w-32 sm:h-20 rounded-xl overflow-hidden border transition-all duration-300 ${
                  current === idx
                    ? "border-[#a78bfa] ring-2 ring-[#a78bfa]/40 opacity-100 scale-105"
                    : "border-white/10 opacity-50 hover:opacity-90 hover:border-white/30"
                }`}>
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="128px"
                  suppressHydrationWarning
                  unoptimized
                />
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollThumbnails("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-14 bg-black/80 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-black flex items-center justify-center rounded-l-lg opacity-0 group-hover/thumbs:opacity-100 transition-all duration-300"
            aria-label="Scroll right">
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* ── Fullscreen Lightbox Modal ── */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          onClick={() => setFullscreenImage(null)}>
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all"
            aria-label="Close Lightbox">
            <X size={24} />
          </button>
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}>
            <Image
              src={fullscreenImage}
              alt="Fullscreen screenshot"
              fill
              className="object-contain"
              sizes="100vw"
              suppressHydrationWarning
              unoptimized
            />
          </div>
        </div>
      )}
    </div>
  );
}
