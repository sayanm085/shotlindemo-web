import React from "react";
import { ProDet_hero, Prodet_Overview, ProDet_img } from "./Pro_Details_compo/index";
import Particles from "@/components/ui/particles";

const ProductDetails_layout = React.memo(({ ProductDetail }) => {
  return (
    <section className="h-auto w-full bg-[#05071A] relative  ">
      {/* Background Particles Effect */}
      <Particles className="absolute inset-0 md:block hidden " quantity={300} ease={80} color="#ffffff" refresh />

      {/* Product Hero Section */}
      <ProDet_hero ProductHeroDetail={ProductDetail} />

      {/* Product Images Section */}
      <ProDet_img ProductImgDetail={{ img: ProductDetail?.image }} />

      {/* Product Overview Section */}
      <Prodet_Overview ProductOverviewDetail={ProductDetail} />
    </section>
  );
});

export default ProductDetails_layout;
