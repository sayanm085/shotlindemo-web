import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ProductSearch from "../../api/ProductSearch.js";

import ServicesHero from "../../Layout/ServicesHero/ServicesHero.jsx";
import ServiceCategoryProduct from "../../Layout/ServiceProduct/ServiceCategoryProduct.layout.jsx";

function ServiceCategory() {
  const { category } = useParams(); // Get category from URL

  // Fetch category data with caching optimizations
  const { data, isLoading, error } = useQuery({
    queryKey: ["ServiceCategoryContent", category],
    queryFn: () => ProductSearch(`category=${category}`),
    staleTime: 120_000, // 2 minutes
    cacheTime: 600_000, // 10 minutes
    retry: 2, // Retry twice if API fails
  });

  return (
    <>
      <ServicesHero category={category} />
      {isLoading ? (
        <div className="text-center py-10 text-lg">Loading...</div>
      ) : error ? (
        <div className="text-center py-10 text-red-500">Failed to load data.</div>
      ) : (
        <ServiceCategoryProduct products={data?.newProducts || []} />
      )}
    </>
  );
}

export default ServiceCategory;
