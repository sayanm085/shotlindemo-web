import React, { memo } from "react";
import Particles from "@/components/ui/particles";
import Meteors from "@/components/ui/meteors";
import ShinyButton from "@/components/ui/shiny-button";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { motion } from "framer-motion";

const Hero = memo(({ data }) => {
  if (!data?.heroDescription || !data?.heroVideoUrl || !data?.heroImage) return null;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative flex flex-col items-center bg-[#05071A] overflow-hidden">
      {/* Background Effects */}
      <Meteors number={30} />
      <Particles className="absolute inset-0" quantity={400} ease={80} color="#ffffff" refresh />

      {/* Hero Content */}
      <div className="relative z-10 w-11/12 sm:w-11/12 md:w-10/12 xl:w-2/3 text-center mt-44 md:mt-52 lg:mt-72">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl sm:text-[2.49rem] md:text-[2.7rem] lg:text-[3.55rem] text-white leading-tight"
        >
          Boost your <span className="noto-serif">brand</span> with unique visuals and{" "}
          <span className="instrument-serif-regular-italic">flawless</span> sites.
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-6 text-sm lg:text-lg text-[#c1c1c1]"
        >
          {data.heroDescription}
        </motion.p>
        <ShinyButton className="bg-[#3d74ff] rounded-lg py-3 px-7 text-white text-lg">
          Get Started
        </ShinyButton>
      </div>

      {/* Hero Video Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="relative z-10 w-full flex justify-center mt-12 lg:mt-10"
      >
        <div className="w-[500px] md:w-[80%] lg:w-[850px] h-auto bg-slate-800 rounded-2xl">
          <HeroVideoDialog
            className="block "
            animationStyle="from-center"
            videoSrc={data.heroVideoUrl}
            thumbnailSrc={data.heroImage}
            thumbnailAlt="Hero Video"
          />
          {/* <img src={data.heroImage} alt="da" className="h-auto w-full rounded-2xl" /> */}
        </div>
      </motion.div>

      {/* Background Image */}
      <img
        src="https://framerusercontent.com/images/0pkkUPiiBy68AdWhcnSLJijrCvQ.svg"
        alt="Background"
        className="absolute top-[55%] sm:top-[35%] md:top-[27%] lg:top-[17%] xl:top-0 w-screen brightness-90"
        loading="lazy"
      />
    </section>
  );
});

export default Hero;
