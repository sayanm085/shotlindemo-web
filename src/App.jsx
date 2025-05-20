import React, { useEffect, useState, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "@/Layout";
import Loader from "./Layout/Loader/Loader";

function App() {
  const location = useLocation();

  // Hide Navbar & Footer for these routes
  const hideNavbarFooterRoutes = [
    "/signin",
    "/signup",
    "/user/profile",
    "/user/wishlist",
    "/user/address",
    "/user/meeting-schedule",
  ];

  // Regex to match routes like "/<order_id>/orderconfirm/<product_id>"
  const orderConfirmRegex = /^\/[^/]+\/orderconfirm\/[^/]+/;
  
  const isResetPasswordRoute =
    location.pathname.startsWith("/reset-password/") ||
    location.pathname.startsWith("/services/checkout/") ||
    orderConfirmRegex.test(location.pathname);
  
  const shouldHideNavbarFooter =
    hideNavbarFooterRoutes.includes(location.pathname) || isResetPasswordRoute;

  return (
    <>
      {!shouldHideNavbarFooter && <Header />}
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      {!shouldHideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
