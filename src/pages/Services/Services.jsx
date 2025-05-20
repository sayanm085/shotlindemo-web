import React, { Suspense, lazy } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductSearch from "../../api/ProductSearch";

// Lazy Loading Components for Faster Initial Load
const ServicesHero = lazy(() => import("../../Layout/ServicesHero/ServicesHero.jsx"));
const AllProduct = lazy(() => import("../../Layout/ServiceProduct/AllProduct.jsx"));

// Fetch API Data Function
const fetchCategoryContent = () => ProductSearch("category&page=1&limit=25");

function Services() {
  // Fetch category data with caching optimizations
  const { data, isLoading, error } = useQuery({
    queryKey: ["AllcategoryContent"],
    queryFn: fetchCategoryContent,
    staleTime: 2 * 60 * 1000, // Cache for 2 minutes
    cacheTime: 10 * 60 * 1000, // Keep cache for 10 minutes
    retry: 2, // Retry twice if API fails
  });



  return (
    <>
      {/* Lazy Load Components */}
      <Suspense fallback={<p>Loading Hero...</p>}>
        <ServicesHero />
      </Suspense>

      {/* Handle Loading & Error States */}
      {isLoading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <Suspense fallback={<p>Loading Products...</p>}>
          <AllProduct products={data?.newProducts || []} />
        </Suspense>
      )}
    </>
  );
}

export default Services;

