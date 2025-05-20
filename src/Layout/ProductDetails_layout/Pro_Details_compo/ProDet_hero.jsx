import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import Meteors from "@/components/ui/meteors";
import BlurBox from "@/components/layout component/BlurBox.component";

const ProDet_hero = ({ ProductHeroDetail, onScheduleMeeting }) => {
  if (!ProductHeroDetail) return null;

  const { name, title, description, livepriview, category } = ProductHeroDetail;

  return (
    <section className="flex flex-col h-auto max-w-screen-2xl w-full items-center justify-center mx-auto relative overflow-hidden mb-4">
      <Meteors number={10} />

      {/* Breadcrumb */}
      <nav className="w-[96%] md:w-10/12 md2:w-4/5 relative z-50 h-16 flex items-center gap-2 text-center text-[#ababab] mt-20">
        <Link to="/" className="hover:text-white transition">
          Home
        </Link>
        <span className="text-sm">›</span>
        <Link
          to={`/services/${category}`}
          className="hover:text-white transition"
        >
          {category}
        </Link>
        <span className="text-sm">›</span>
        <p className="truncate">{name}</p>
      </nav>

      {/* Product Hero Section */}
      <BlurBox
        className="w-[96%] md:w-10/12 md2:w-4/5 relative z-50 bg-black rounded-lg flex flex-col md:flex-row items-center p-6"
        style={{
          background: "hsla(220, 35%, 3%, 0.4)",
          borderColor: "rgb(71, 71, 71)",
        }}
      >
        {/* Left Content */}
        <CardContent className="w-full md:w-2/3 flex flex-col justify-center md:pr-6">
          <h1 className="text-3xl md:text-4xl text-white font-bold">{name}</h1>
          <h3 className="text-gray-300 mt-2 text-base font-semibold md:text-lg">
            {title}
          </h3>
          <p className="text-sm text-gray-400 md:text-base pt-4">{description}</p>
        </CardContent>

        {/* Divider */}
        <div className="hidden md:block h-40 w-[1px] bg-gray-500"></div>

        {/* Right Content (Price & Buttons) */}
        <CardContent className="hidden md:w-1/3 md:flex flex-col justify-center items-center gap-6 md:mt-0">
          <div className="flex flex-col items-center gap-4 w-full">
            <a href={livepriview} target="_blank" rel="noopener noreferrer">
              <Button className="w-[180px] rounded-lg py-2 md:py-3">
                Live Preview <i className="fa-regular fa-eye"></i>
              </Button>
            </a>

            <Button onClick={onScheduleMeeting} className="w-[180px] rounded-lg py-2 md:py-3">
              Schedule Meeting <i class="fa-solid fa-calendar-days"></i>
            </Button>
          </div>
        </CardContent>
      </BlurBox>
    </section>
  );
};

export default React.memo(ProDet_hero);
