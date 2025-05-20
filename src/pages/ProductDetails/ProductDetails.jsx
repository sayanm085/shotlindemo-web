import React, { useState, useCallback, Suspense, lazy } from "react";
import { ProductShowcase } from "../../Layout";
import Particles from "@/components/ui/particles";
import { ProDet_hero, ProDet_img, Prodet_Overview } from "../../Layout/ProductDetails_layout/Pro_Details_compo";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ProductDetailsApi from "../../api/ProductDetails.api.js";
import { useAuth } from "@/api/UserAuth.api"; // Ensure correct import path for your useAuth hook

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// Lazy-load the schedule meeting overlay
const ProductSchedule = lazy(() =>
  import("../../components/layout component/ProductSchedule.component.jsx")
);

const ProductDetails = () => {
  const { product_id } = useParams();
  const [isScheduleOpen, setScheduleOpen] = useState(false);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const navigate = useNavigate();

  // Callback to open schedule overlay or show auth popup if not logged in
  const openSchedule = () => {
    if (!user) {
      setShowAuthPopup(true);
      setTimeout(() => {
        navigate("/signin");
      }, 3000); // Redirect after 3 seconds
    } else {
      setScheduleOpen(true);
    }
  };

  const closeSchedule = () => setScheduleOpen(false);

  const fetchProductData = useCallback(async () => {
    if (!product_id) throw new Error("Invalid product ID");
    return await ProductDetailsApi(product_id);
  }, [product_id]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", product_id],
    queryFn: fetchProductData,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    retry: 2,
    enabled: !!product_id,
  });

  // Get current user
  const { data: user } = useAuth();

  return (
    <section className="h-auto w-full bg-[#05071A] relative">
      <Particles className="absolute inset-0 hidden md:block" quantity={200} ease={80} color="#ffffff" refresh />

      {isLoading && <p className="text-center text-white py-10">Loading product...</p>}
      {error && <p className="text-center text-red-500 py-10">Error: {error.message}</p>}

      {data && (
        <>
          <ProDet_hero ProductHeroDetail={data} onScheduleMeeting={openSchedule} />
          <ProDet_img ProductImgDetail={{ img: data?.image }} />
          <Prodet_Overview ProductOverviewDetail={data} onScheduleMeeting={openSchedule} />
          <ProductShowcase />
        </>
      )}

      {isScheduleOpen && user && (
        <Suspense fallback={<div className="fixed inset-0 z-50 flex items-center justify-center text-white">Loading...</div>}>
          <ProductSchedule onClose={closeSchedule} ProductDetail={data} />
        </Suspense>
      )}

      {/* Auth Popup for non-logged in users */}
      {showAuthPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Alert variant="default" className="max-w-md mx-auto p-4 rounded-lg">
            <AlertTitle className="text-center text-gray-800 dark:text-gray-100">
              You're not logged in.
            </AlertTitle>
            <AlertDescription className="mt-2 text-center text-gray-600 dark:text-gray-400">
              Redirecting to sign in...
            </AlertDescription>
          </Alert>
        </div>
      )}
    </section>
  );
};

export default React.memo(ProductDetails);
