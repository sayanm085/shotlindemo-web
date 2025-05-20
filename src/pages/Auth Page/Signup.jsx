import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { cn } from "@/lib/utils";
import GoogleIcon from "./iconsvg.jsx";

//  api functions  for user registration and email verification  and google sign in 
import { useRegisterAuth,useEmailVerificationAuth,resendOTP } from "@/api/UserAuth.api";
import { auth, provider, signInWithPopup } from  "@/api/firebase";

// ui components 
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import BlurBox from "@/components/layout component/BlurBox.component";
import {InputOTP,InputOTPGroup,InputOTPSeparator,InputOTPSlot} from "@/components/ui/input-otp";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
// ui components  end




// Validation Schema for Signup Form 
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  name: yup.string().required("Full Name is required"),
  email: yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Invalid email format")
    .required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  terms: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
});
// Signup Form Component  
export default function SignupForm() {
  const [otp, setOtp] = useState("");
  const [otpModal, setOtpModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [opterror, setOptError] = useState("");
  const [email, setEmail] = useState("");
  const [resendSuccess, setResendSuccess] = useState(false);
  const [timer, setTimer] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // React Hook Form Setup & Configuration
  const {
    register,
    handleSubmit,
    setValue,
    reset, // Add reset function
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

// Destructure mutate from the hooks
const { mutate: registerUser } = useRegisterAuth();  // Rename mutate from useRegisterAuth
const { mutate: verifyEmail } = useEmailVerificationAuth();  // Rename mutate from useEmailVerificationAuth

// Registration Form Submit Function

const onSubmit = (data) => {
  const formattedData = {
    varifyby: "email",
    fullName: data.name,
    username: data.username,
    email: data.email,
    password: data.password,
  };

  // Trigger the mutation for registration
  registerUser(formattedData, {
    onSuccess: (response) => {
      console.log("Registration Successful:", response.message);
      setEmail(response.data.email);

      if (response.message === "Kindly check your email inbox") {
        setOtpModal(true); // Trigger the OTP modal if email verification is required
      }
    },
    onError: (error) => {
      console.error("Registration Failed:", error);
      setErrorMsg(error.message || "Something went wrong. Please try again.");
    },
  });
};

// Google Sign In Function
const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();

    const formattedData = {
      varifyby: "google.com",
      userdata: idToken,
    };

    // Call the registerUser mutation for Google sign-in
    registerUser(formattedData, {
      onSuccess: () => {
        console.log("Google Sign-In Successful");
      },
      onError: (error) => {
        console.error("Google Sign-In Failed:", error);
        setErrorMsg(error?.message || "Google Sign-In Failed.");
      },
    });

  } catch (error) {
    console.error("Google Sign-In Failed:", error);
    setErrorMsg(error?.message || "Google Sign-In Failed.");
  }
};


  // otp verification and resend otp function
  useEffect(() => {
    let interval;
    if (!canResend && otpModal) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            setCanResend(true);
            clearInterval(interval);
            return 120;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpModal, canResend]);

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleOtpSubmit = () => {
    if (otp.length === 6) {
      // Call the verifyEmail mutation with the email and OTP
      verifyEmail({ email, OTP: otp } ,{
        onSuccess: (response) => {
          console.log("Email Verification Successful:", response.message);
          setOtpModal(false);
          reset(); // Reset the form
        },
        onError: (error) => {
          console.error("Email Verification Failed:", error);
          setOptError(error.message || "Failed to verify OTP.");
        },
      })
   
    } else {
      setOptError("OTP must be 6 digits.");
    }
  };

  // Resend OTP Function
  const handleResendOtp = () => {
    setCanResend(false);
    setResendSuccess(false);
    setTimer(120);
    resendOTP(email)
      .then(() => {
        setResendSuccess(true);
      })
      .catch((error) => {
        setOptError(error.message || "Failed to resend OTP.");
      });
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-[radial-gradient(circle_at_center,_#010c3b_0%,_#000003_100%)] px-3 py-8">
      <BlurBox
        className="w-full max-w-md shadow-xl rounded-xl bg-gray-800 text-white"
        style={{
          background: "hsla(220, 35%, 3%, 0.4)",
          borderColor: "rgb(71, 71, 71)",
        }}
      >
        <CardHeader>
          <CardTitle className="text-center text-3xl font-semibold">
            Sign up
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Show Error Alert */}
          {errorMsg && (
            <Dialog open={!!errorMsg} onOpenChange={() => setErrorMsg("")}>
              <DialogContent className="bg-gray-900 border border-gray-500 shadow-lg  rounded-lg p-6 text-white">
                <div className="flex flex-col items-center space-y-4">
                  {/* Error Icon */}
                  <div className="text-red-500 text-4xl">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                  </div>

                  {/* Error Message */}
                  <Alert
                    variant="destructive"
                    className="bg-red-700/20 border border-red-500 text-center p-3 rounded-lg"
                  >
                    <AlertDescription className="text-lg text-red-500 font-semibold">
                      {errorMsg}
                    </AlertDescription>
                  </Alert>

                  {/* Close Button */}
                  <Button
                    onClick={() => setErrorMsg("")}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                  >
                    {" "}
                    Close
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Username Input */}
            <div className="space-y-1">
              <Label htmlFor="username" className="text-gray-400">
                Username
              </Label>
              <Input
                id="username"
                placeholder="Enter username"
                {...register("username")}
                className={cn(
                  "bg-black bg-opacity-50 text-white",
                  errors.username && "border-red-500"
                )}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Name Input */}
            <div className="space-y-1">
              <Label htmlFor="name" className="text-gray-400">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter Full Name"
                {...register("name")}
                className={cn(
                  "bg-black bg-opacity-50 text-white",
                  errors.name && "border-red-500"
                )}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-1">
              <Label htmlFor="email" className="text-gray-400">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email")}
                className={cn(
                  "bg-black bg-opacity-50 text-white",
                  errors.email && "border-red-500"
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="space-y-1 relative">
              <Label htmlFor="password" className="text-gray-400">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  placeholder="Enter password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className={cn(
                    "bg-black bg-opacity-50 text-white",
                    errors.password && "border-red-500"
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                >
                  {showPassword ? (
                    <i className="fa-regular fa-eye-slash"></i>
                  ) : (
                    <i className="fa-regular fa-eye"></i>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-1 relative">
              <Label htmlFor="confirmPassword" className="text-gray-400">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  placeholder="Enter password"
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword")}
                  className={cn(
                    "bg-black text-white",
                    errors.confirmPassword && "border-red-500"
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                >
                  {showConfirmPassword ? (
                    <i className="fa-regular fa-eye-slash"></i>
                  ) : (
                    <i className="fa-regular fa-eye"></i>
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="flex items-center gap-2">
              <Checkbox
                id="terms"
                onCheckedChange={(checked) => setValue("terms", checked)}
              />
              <Label htmlFor="terms">I accept the Terms and Conditions</Label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms.message}</p>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign Up
            </Button>
          </form>
          <div className="space-y-3 mt-4">
            {/* Already have an account? */}
            <p className="text-center text-gray-400">
              Already have an account?{" "}
              <a href="/signin" className="text-blue-500">
                Sign In
              </a>
            </p>

            <div className="flex items-center justify-center">
              <div className="h-[0.8px] w-full bg-gray-600"></div>
              <span className="px-2 text-gray-200">or</span>
              <div className="h-[0.8px] w-full bg-gray-600"></div>
            </div>

            <Button
              className="w-full bg-black hover:bg-slate-900 text-white mt-2"
              onClick={handleGoogleSignIn}
            >
              <GoogleIcon />
              Sign in with Google
            </Button>
          </div>
        </CardContent>
      </BlurBox>
      {/* OTP Verification Modal */}
      <Dialog open={otpModal} onOpenChange={setOtpModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter OTP</DialogTitle>
          </DialogHeader>
          <p className="text-gray-600">
            A verification code has been sent to your email. Please enter the
            OTP below.
          </p>

          {opterror && (
            <Alert variant="destructive">
              <AlertDescription>{opterror}</AlertDescription>
            </Alert>
          )}

          {resendSuccess && (
            <Alert variant="success">
              <AlertDescription>
                OTP sent successfully! Check your email.
              </AlertDescription>
            </Alert>
          )}

          <InputOTP
            maxLength={6}
            value={otp}
            onChange={handleOtpChange}
            containerClassName="mt-3 justify-center text-lg p-2"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} className="w-12 h-12 text-2xl" />
              <InputOTPSlot index={1} className="w-12 h-12 text-2xl" />
              <InputOTPSlot index={2} className="w-12 h-12 text-2xl" />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} className="w-12 h-12 text-2xl" />
              <InputOTPSlot index={4} className="w-12 h-12 text-2xl" />
              <InputOTPSlot index={5} className="w-12 h-12 text-2xl" />
            </InputOTPGroup>
          </InputOTP>

          <Button
            onClick={handleOtpSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-3"
          >
            Verify OTP
          </Button>

          <div className="flex justify-between items-center mt-3">
            <p className="text-sm text-gray-500">Resend OTP in {timer}s</p>
            <Button
              onClick={handleResendOtp}
              disabled={!canResend}
              variant="outline"
              size="sm"
            >
              Resend OTP
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
