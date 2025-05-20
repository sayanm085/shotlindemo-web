import React, { useEffect, useState } from "react";
import "../../App.css";
import { motion } from "framer-motion";
import UseblurAnimation from "@/Hooks/Animation/UseblurAnimation";
import BlurBox from "@/components/layout component/BlurBox.component";

// Service Card Component
const ServiceCard = React.memo(({ service }) => {
  if (!service) return null;

  return (
    <BlurBox
      className="h-72 w-full lg:w-[26rem] xl:w-[31rem] flex justify-center items-center"
      style={{
        background:
          "linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)",
      }}
    >
      <div className="flex flex-col justify-center items-center h-4/5 w-4/5 gap-4 text-center">
        <h3 className="text-5xl text-white sora-regular">{service.serviceName}</h3>
        <p className="text-sm text-gray-300 sora-regular">{service.serviceDescription}</p>
      </div>
    </BlurBox>
  );
});

// Main Services Component
const Services = React.memo(({ data = [] }) => {
  const [enableAnimations, setEnableAnimations] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setEnableAnimations(false); // Disable animations on mobile
    }
  }, []);

  const blurAnimation = enableAnimations ? UseblurAnimation() : null;

  return (
    <section
      id="Services"
      className="bg-[#05071A] flex justify-center items-center"
      style={{ willChange: "transform, opacity", scrollBehavior: "smooth" }}
    >
      <div className="w-full">
        
        {/* Header */}
        <div className="flex justify-center items-center ds:h-20 md:h-28">
          <p className="text-lg text-white sora-regular px-4 py-2 rounded-xl border border-[#ffffff5d]">
            Services
          </p>
        </div>

        {/* Title & Description */}
        {enableAnimations ? (
          <motion.div
            initial={blurAnimation.offscreen}
            whileInView={blurAnimation.onscreen}
            exit={blurAnimation.exit}
            variants={blurAnimation}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center gap-5 ds:h-40 md:h-48 text-center"
          >
            <h2 className="text-3xl ds:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white sora-regular">
              How can we help{" "}
              <span className="instrument-serif-regular-italic">you?</span>
            </h2>
            <h3 className="text-sm ds:text-sm md:text-base lg:text-xl ds:w-10/12 w-2/4 text-[#ffffff96] sora-regular">
              From Google ads, to Meta ads, to TikTok ads, and even content creation, we've got you covered on everything front.
            </h3>
          </motion.div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-5 ds:h-40 md:h-48 text-center">
            <h2 className="text-3xl ds:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white sora-regular">
              How can we help{" "}
              <span className="instrument-serif-regular-italic">you?</span>
            </h2>
            <h3 className="text-sm ds:text-sm md:text-base lg:text-xl ds:w-10/12 w-2/4 text-[#ffffff96] sora-regular">
              From Google ads, to Meta ads, to TikTok ads, and even content creation, we've got you covered on everything front.
            </h3>
          </div>
        )}

        {/* Services List */}
        <div className="flex justify-center">
          <div className="w-10/12 lg:w-auto py-9 flex flex-col gap-4 items-center">
            
            {/* First Row (2 Services) */}
            <div className="flex gap-7 flex-wrap w-full justify-center">
              {data.slice(0, 2).map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>

            {/* Third Service (Spans full width) */}
            {data[2] && (
              <BlurBox className="h-72 w-full flex justify-center items-center">
                <div className="flex flex-col justify-center items-center h-4/5 w-4/5 gap-4 text-center">
                  <h3 className="text-5xl text-white sora-regular">{data[2].serviceName}</h3>
                  <p className="text-sm text-gray-300 sora-regular">{data[2].serviceDescription}</p>
                </div>
              </BlurBox>
            )}
          
          </div>
        </div>
      </div>
    </section>
  );
});

export default Services;
