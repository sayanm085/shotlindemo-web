import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/api/UserAuth.api";

const PublicRoute = ({ children }) => {
  const { data: user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user) {
    // Redirect logged-in users trying to access sign-in/sign-up to home
    return <Navigate to="/" replace />;
  }

  return children; // Allow unauthenticated users to access the page
};

export default PublicRoute;
