import React from "react";
import Marquee from "react-fast-marquee";

function LoopSlider({ pro, bg, data = [] }) {
  if (!data.length) return null; // Prevents rendering if no data is available

  const backgroundColor = bg?.color === "#00010f" ? "bg-[#00010f]" : "bg-[#05071A]";

  return (
    <section className={`h-auto w-full ${backgroundColor} flex flex-col items-center justify-center gap-2 pb-3`}>
      {pro?.show && (
        <div className="w-full h-14 text-[#ffffffb6] flex justify-center items-end sm:text-[1.15rem] lg:text-xl">
          <p>You're in good hands:</p>
        </div>
      )}

      <Marquee className="w-full max-w-[1200px]" gradient gradientColor={bg?.color || "#05071A"}>
        {data.map((item) => (
          <img
            key={item._id}
            src={item.brandLogo}
            alt={item.brandName || "Brand Logo"}
            className="w-36 ds:w-28 md:w-40 aspect-[1/1] object-contain mx-10"
          />
        ))}
      </Marquee>
    </section>
  );
}

export default LoopSlider;
