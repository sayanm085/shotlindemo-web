import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Hero,
  LoopSlider,
  Services,
  Comparison,
  AboutContact,
  ProductShowcase,
  FAQs,
  WhyChoose,
} from "../../Layout";

import api from "@/api/config.api";

// Fetch API Data Function
const fetchWebContent = () =>
  axios.get(`${api}/v1/content/webcontent-get`).then((res) => res.data);

function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["webContent"],
    queryFn: fetchWebContent,
    staleTime: 300000, // 5 minutes
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || "Failed to load data"}</p>;

  const {
    hero,
    BrandPartners,
    Services: services,
    WhyChooseUs,
    comparison,
    callbooking,
    productShowcase,
    FAQs: faqs,
    newsletter,
  } = data.data;

  return (
    <>
      <Hero data={hero} />
      <LoopSlider data={BrandPartners} pro={{ show: true }} bg={{ color: "#05071A" }} />
      <Services data={services} />
      <WhyChoose data={WhyChooseUs} />
      <Comparison data={comparison} />
      <AboutContact data={callbooking} />
      <ProductShowcase data={productShowcase} />
      <FAQs data={faqs} />
    </>
  );
}

export default Home;
