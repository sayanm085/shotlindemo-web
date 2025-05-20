import React, { memo, useMemo } from "react";
import Marquee from "react-fast-marquee";

// Function to optimize image URL based on screen width
const getOptimizedImageUrl = (url) => {
  const width = window.innerWidth <= 768 ? 500 : 800; // 500px for mobile, 800px for PC/iPad
  return url.replace(/w_\d+/, `w_${width}`);
};

// Optimized ProductCard Component
const ProductCard = memo(({ image, name }) => (
  <div className="h-auto w-[280px] sm:w-[320px] mx-[1.5rem] bg-slate-50 rounded-2xl border border-[#0d0d0d]">
    <img
      src={getOptimizedImageUrl(image)}
      alt={name}
      className="w-full h-auto rounded-xl"
      loading="lazy"
      width="320"
      height="200"
    />
  </div>
));

// MarqueeRow Component for smooth scrolling
const MarqueeRow = memo(({ items, direction = "left", speed = 50 }) => {
  if (!items.length) return null;

  return (
    <Marquee
      className="max-w-[1250px] will-change-transform"
      pauseOnHover
      gradient
      gradientColor="#05071A"
      speed={speed}
      direction={direction}
    >
      {items.map(({ _id, productImage, productName }) => (
        <ProductCard key={_id} image={productImage} name={productName} />
      ))}
    </Marquee>
  );
});

// Main ProductShowcase Component
const ProductShowcase = memo(({ data = [] }) => {
  const chunkSize = Math.ceil(data.length / 3);

  // Optimize data chunking with useMemo
  const chunks = useMemo(
    () => [data.slice(0, chunkSize), data.slice(chunkSize, chunkSize * 2), data.slice(chunkSize * 2)],
    [data, chunkSize]
  );

  return (
    <section className="w-full flex justify-center items-center bg-[#05071A] py-8">
      <div className="w-full flex flex-col items-center">
        {/* Header */}
        <p className="text-lg text-white sora-regular px-4 py-2 rounded-xl border border-[#ffffff5d]">
          Trending Design
        </p>

        {/* Title */}
        <h2 className="text-4xl ds:text-3xl sm:text-4xl md:text-5xl text-white sora-regular text-center mt-4">
          Hot & Trending: Must-Have{" "}
          <span className="instrument-serif-regular-italic">Designs!</span>
        </h2>
        <h3 className="text-sm ds:text-base sm:text-sm md:text-lg text-[#ffffff96] sora-regular w-10/12 sm:w-7/12 text-center mt-2">
          Trending now! Must-have designs that redefine style and innovation. Grab yours today! 🔥🚀
        </h3>

        {/* Marquee Rows */}
        <div className="w-full flex flex-col items-center gap-5 mt-9">
          <MarqueeRow items={chunks[0]} speed={80} />
          <MarqueeRow items={chunks[1]} direction="right" speed={60} />
          <MarqueeRow items={chunks[2]} speed={50} />
        </div>
      </div>
    </section>
  );
});

export default ProductShowcase;
