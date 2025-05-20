import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/api/UserAuth.api"; // Ensure correct import path for your useAuth hook

const ProtectedRoute = ({ children }) => {
  const { data: user, isLoading } = useAuth(); // Get the logged-in user data from your hook
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading state until authenticationn status is checked
  }

  if (!user) {
    // If the user is not logged in, redirect to sign-in page
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children; // Render the protected content if the user is logged in
};

export default ProtectedRoute;
