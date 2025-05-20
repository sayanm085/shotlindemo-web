import React, { useMemo } from "react";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";
import UseblurAnimation from "@/Hooks/Animation/UseblurAnimation";
import useMediaQuery from "@mui/material/useMediaQuery";

const AboutContact = ({ data }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Memoized animation values (only apply animation on non-mobile devices)
  const blurAnimation = useMemo(() => (isMobile ? {} : UseblurAnimation()), [isMobile]);

  return (
    <section className="w-full h-80 bg-[#05071A] flex justify-center items-center">
      <motion.div
        variants={blurAnimation}
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        viewport={{ once: true }}
        className="flex flex-col gap-8 justify-center items-center w-11/12 max-w-3xl"
      >
        {/* Title */}
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white text-center sora-regular">
          {data}
        </h2>

        {/* Button */}
        <Button
          variant="contained"
          id="but-about-cont"
          className="h-10 bg-[#2563EB] shadow-md hover:shadow-lg transition-all duration-300"
        >
          Book a 15-min call
          <ArrowRightAltIcon />
        </Button>
      </motion.div>
    </section>
  );
};

export default React.memo(AboutContact);
