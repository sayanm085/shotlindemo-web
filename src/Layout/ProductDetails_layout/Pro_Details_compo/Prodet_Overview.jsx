import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlurBox from "@/components/layout component/BlurBox.component";

const Prodet_Overview = React.memo(({ ProductOverviewDetail, onScheduleMeeting  }) => {
  return (
    <section className="max-w-screen-2xl w-full flex justify-center items-center mx-auto mt-6">

      <div className="w-[96%] md:w-10/12 md2:w-4/5 flex flex-wrap-reverse lg:flex-nowrap gap-6">
        
        {/* Overview Section */}
        <BlurBox className="w-full lg:w-2/3 bg-white rounded-lg border border-[#001170] backdrop-blur-md p-5"
           style={{
            background: "hsla(220, 35%, 3%, 0.4)",
            borderColor: "rgb(71, 71, 71)",
          }}>
          
          <h1 className="text-4xl text-white">Overview</h1>
          <p className="text-gray-400 text-base mt-5">{ProductOverviewDetail?.description}</p>
          <p className="text-gray-400 text-base mt-3">{ProductOverviewDetail?.details}</p>

          {/* Features Section */}
          <h2 className="text-2xl text-white mt-5">Features</h2>
          <ul className="list-disc pl-8 mt-3">
            {ProductOverviewDetail?.features?.map((feature, index) => (
              <li key={index} className="text-gray-400 text-base">{feature}</li>
            ))}
          </ul>

          {/* Pages Section (Only if available) */}
          {ProductOverviewDetail?.pages?.length > 0 && (
            <>
              <h2 className="text-2xl text-white mt-5">Pages</h2>
              <ul className="list-disc pl-8 mt-3">
                {ProductOverviewDetail.pages.map((page, index) => (
                  <li key={index} className="text-gray-400 text-base">{page}</li>
                ))}
              </ul>
            </>
          )}
        </BlurBox>

        {/* Pricing & Purchase Section */}

        <BlurBox
          className="h-auto lg:max-h-[350px] w-full lg:w-[31%] bg-white lg:sticky z-50 lg:top-24 rounded-lg flex lg:flex-col justify-around px-5 py-6 border border-[#001170] shadow-md"
          style={{
            background: "hsla(220, 35%, 3%, 0.4)",
            borderColor: "rgb(71, 71, 71)",
          }}>
          {/* Header Section */}
          <div className="hidden md:flex flex-col justify-start">
            <h1 className="text-2xl font-semibold text-white">
              {ProductOverviewDetail.name}
            </h1>
            <p className="text-sm text-gray-400 font-semibold mt-3">
              {ProductOverviewDetail.title}
            </p>
          </div>

          {/* Price & Buttons */}
          <div className="flex flex-col items-center gap-4">

              {/* Live Preview Button */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full md:w-[180px] lg:w-full rounded-lg py-2 md:py-3">
                  Live Preview <i className="fa-regular fa-eye"></i>
                </Button>
              </a>

              {/* Schedule Meeting Button */}
              <Button
                onClick={onScheduleMeeting}
                className="w-full md:w-[180px] lg:w-full rounded-lg py-2 md:py-3"
              >
                Schedule Meeting <i className="fa-regular fa-eye"></i>
              </Button>
          </div>
        </BlurBox>
        
      </div>
    </section>
  );
});

export default Prodet_Overview;

