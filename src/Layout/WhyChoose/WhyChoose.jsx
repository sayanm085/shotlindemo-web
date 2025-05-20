import React, { memo, useCallback } from "react";
import BlurBox from "@/components/layout component/BlurBox.component";

const WhyChoose = memo(({ data = [] }) => {
  if (!data.length) return null;

  // Memoized render function to prevent re-renders
  const renderCards = useCallback(
    () =>
      data.map(({ _id, logo, title, reason }) => (
        <BlurBox
          key={_id}
          className="p-6 bg-white shadow-lg transition-transform transform hover:scale-105"
        >
          <img
            src={logo}
            alt={title || "Service"}
            className="h-14 w-auto mb-4"
            loading="lazy"
          />
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{reason}</p>
        </BlurBox>
      )),
    [data]
  );

  return (
    <section className="py-12 bg-[#05071A] flex justify-center">
      <div className="w-11/12 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold">
            Why you’ll <span className="instrument-serif-regular-italic text-blue-300">love</span> us
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {renderCards()}
        </div>
      </div>
    </section>
  );
});

export default WhyChoose;
