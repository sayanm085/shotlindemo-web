import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Card, CardContent } from "@/components/ui/card"; // Example shadcn UI component

// Optimize Cloudinary URLs for responsive images.
const optimizeCloudinaryUrl = (url, width = 1080) => {
  if (!url.includes("cloudinary.com")) return url;
  return url.replace(/\/upload\/.*?\/v1\//, `/upload/f_auto,q_auto:eco,w_${width}/v1/`);
};

const ProDetImg = ({ ProductImgDetail }) => {
  if (!ProductImgDetail?.img?.length) return null;

  return (
    <section className="max-w-screen-2xl mx-auto flex justify-center mt-5 px-4">
      {/* The Card acts as a consistent container box for both mobile and PC */}
      <Card className="w-full max-w-4xl border border-gray-500 bg-[hsla(220,35%,3%,0.4)] 
                      rounded-lg backdrop-blur-md p-5">
        <CardContent className="p-0">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation
            loop
            speed={800}
            // Fixed container width; height adjusts per breakpoint.
            className="w-full h-[400px] sm:h-[450px] lg:h-[500px]"
          >
            {ProductImgDetail.img.map((img, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <img
                  src={optimizeCloudinaryUrl(img)}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContent>
      </Card>
    </section>
  );
};

export default ProDetImg;
