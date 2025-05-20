import React, { memo, useCallback } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import BlurBox from "@/components/layout component/BlurBox.component";

// Reusable ComparisonBox Component
const ComparisonBox = memo(({ title, items = [], isShotlin }) => (
  <div className="w-full max-w-[420px] lg:max-w-[440px] flex flex-col items-center gap-4">
    <h2 className={`text-lg md:text-2xl ${isShotlin ? "text-white" : "text-gray-400"}`}>
      {title}
    </h2>
    <BlurBox className="w-full bg-white p-4 max-h-[350px] overflow-y-auto scrollbar-hide">
      <ul className="space-y-4">
        {items.map(({ _id, description }) => (
          <li key={_id} className="flex items-center text-lg gap-3">
            {isShotlin ? (
              <CheckIcon sx={{ fontSize: 26, fill: "#00EA7C" }} />
            ) : (
              <CloseIcon sx={{ fontSize: 26 }} className="text-gray-400" />
            )}
            <span className={isShotlin ? "text-white" : "text-gray-400"}>{description}</span>
          </li>
        ))}
      </ul>
    </BlurBox>
  </div>
));

// Main Comparison Component
const Comparison = memo(({ data = {} }) => {
  const renderComparisonBoxes = useCallback(() => (
    <div className="flex flex-wrap md:flex-nowrap justify-center py-6 px-4 gap-10">
      <ComparisonBox title="Other Agencies" items={data.OtherAgencies} isShotlin={false} />
      <ComparisonBox title="Shotlin" items={data.Shotlin} isShotlin={true} />
    </div>
  ), [data]);

  return (
    <section className="w-full bg-[#05071A] flex justify-center items-center pb-12">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="w-full flex justify-center mb-6">
          <p className="text-lg text-white inline-flex sora-regular px-4 py-2 rounded-xl border border-gray-500">
            Comparison
          </p>
        </div>

        {/* Title */}
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] leading-tight text-white sora-regular max-w-3xl mx-auto">
            But, why would you want to work
            <span className="instrument-serif-regular-italic"> with us?</span>
          </h2>
        </div>

        {/* Comparison Boxes */}
        {renderComparisonBoxes()}
      </div>
    </section>
  );
});

export default Comparison;
