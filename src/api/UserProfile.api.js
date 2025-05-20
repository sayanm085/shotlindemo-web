import axios from "axios";
import api from "@/api/config.api";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Function to fetch the current user
const profileData = async () => {
  const response = await axios.get(`${api}/v1/users/profile`, { withCredentials: true });
  return response.data;
};

// Hook to get the logged-in user
const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: profileData,
    staleTime: 180000, // 3 minutes
    retry: false, // Don't retry if user is not logged in
  });
};

// Update profile mutation hook

const useProfileUpdate = () => {

    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: async ({ FullName, Email, MobileNumber }) => {
        try {
            // Sending the update request
            const response = await axios.post(
            `${api}/v1/users/update`,
            {
                FullName,
                Email,
                MobileNumber,
            },
            {
                withCredentials: true, // Send cookies with the request
            }
            );
            return response.data;
        } catch (error) {
            // Handling the error and throwing it for mutation
            return Promise.reject(error.response?.data || error.message);
        }
        },
        onSuccess: (data) => {
        // On success, set the user data in cache
        console.log("Profile update success:", data);
        queryClient.setQueryData(["profile"], data);
        },
        onError: (error) => {
        // Handle any errors here (optional)
        console.error("Profile update failed:", error);
        },
    });
};

export { useProfile, useProfileUpdate };

