import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/api/config.api";

// Function to fetch the current user
const fetchUser = async () => {
  const response = await axios.get(`${api}/v1/users/currentuser`, { withCredentials: true });
  return response.data;
};

// Hook to get the logged-in user
const useAuth = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    staleTime: 60000,// 1 minute
    retry: false, // Don't retry if user is not logged in
  });
};

// Login authentication mutation hook
const useLoginAuth = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ varifyby, userdata, email, password }) => {
      try {
        // Sending the login request
        const response = await axios.post(
          `${api}/v1/users/login`,
          {
            varifyby,
            userdata,
            email,
            password,
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
      console.log("Login success:", data);
      queryClient.setQueryData(["user"], data);
    },
    onError: (error) => {
      // Handle any errors here (optional)
      console.error("Login failed:", error);
    },
  });
};



// Hook for logout mutation
const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await axios.get(`${api}/v1/users/logout`,{ withCredentials: true });
    },
    onSuccess: () => {
      queryClient.setQueryData(["user"], null); // Clear user data from cache
    },
  });
};



// Reset Password API request
const resetPassword = async (email) => {
  try {
    const response = await axios.post(`${api}/v1/users/reset-password`, { email });
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};


// Register authentication mutation hook
const useRegisterAuth = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: async (formattedData) => {
        try {
          const response = await axios.post(`${api}/v1/users/register`, {
            varifyby: formattedData.varifyby,
            userdata: formattedData.userdata,
            fullName: formattedData.fullName,
            username: formattedData.username,
            email: formattedData.email,
            password: formattedData.password,
          }, {
            withCredentials: true,
          });
          return response.data;
        } catch (error) {
          return Promise.reject(error.response?.data || error.message);
        }
      },
      onSuccess: (data) => {
        if (data.message === "User created successfully") {
          return queryClient.setQueryData(["user"], data);
        }
        return null;
      },
      onError: (error) => {
        console.error("Registration failed:", error);
      },
    });
  };
  
  // Email Verification API request hook
  const useEmailVerificationAuth = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: async ({email, OTP}) => {
        try {
          const response = await axios.post(`${api}/v1/users/verify-email`, {
            email,
            otp: OTP,
            status: 'verified',
          }, {
            withCredentials: true,
          });
          return response.data;
        } catch (error) {
          return Promise.reject(error.response?.data || error.message);
        }
      },
      onSuccess: (data) => {
        queryClient.setQueryData(["user"], data);
      },
      onError: (error) => {
        console.error("Email verification failed:", error);
      },
    });
  };


// Resend OTP API request
const resendOTP = async (email) => {
  try {
    const response = await axios.post(`${api}/v1/users/resend-otp`, { email }, {
      withCredentials: true, // Send the cookie along with the request
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error.response?.data || error.message);
  }
};



export {
  useLoginAuth ,
  resetPassword,
  useRegisterAuth,
  useEmailVerificationAuth,
  useLogout,
  resendOTP,
  useAuth
};
