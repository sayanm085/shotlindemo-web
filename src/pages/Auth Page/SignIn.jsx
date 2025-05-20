import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { cn } from "@/lib/utils";
import GoogleIcon from "./iconsvg.jsx";

// API functions for user authentication
import { useLoginAuth, resetPassword } from "@/api/UserAuth.api";
import { auth, provider, signInWithPopup } from "@/api/firebase";

// Import UI components here
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import BlurBox from "@/components/layout component/BlurBox.component";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function SignInForm() {
  // Using useLoginAuth hook in your component
  const { mutate } = useLoginAuth();

  const [errorMsg, setErrorMsg] = useState("");
  const [resetModal, setResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  // Form submit function for login authentication
  const onSubmit = (data) => {
    // Using mutate from the useLoginAuth hook for login
    mutate(
      {
        varifyby: "email",
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: (response) => {
          console.log("Login Successful");
          reset(); // Reset the form
        },
        onError: (error) => {
          // Handle error (you can access error from the mutation's onError callback)
          setErrorMsg(error.message || "Invalid email or password.");
        },
      }
    );
  };
  
   // google sign in function 
  const handleGoogleSignIn = async () => {
    try {
      // Triggering Google SignIn with Popup
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
  
      // Using mutate from useLoginAuth hook for login with Google idToken
      mutate(
        {
          varifyby: "google.com",
          userdata: idToken,
        },
        {
          onSuccess: () => {
            console.log("Google Sign In Successful");
          },
          onError: (error) => {
            setErrorMsg(error?.message || "Google Sign In Failed.");
          },
        }
      );
    } catch (error) {
      // Handling sign-in failure
      setErrorMsg(error?.message || "Google Sign In Failed.");
    }
  };
  
  
  

  const handleResetPassword = () => {
    if (!resetEmail) {
      setError("Please enter your email.");
      return;
    }
    setError("");
    // Simulate API call here
    resetPassword(resetEmail)
      .then(() => {
        setResetSuccess(true);
        setResetEmail("");
      })
      .catch((error) => {
        setError(error.message || "Failed to send reset email.");
        setResetEmail("");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[radial-gradient(circle_at_center,_#010c3b_0%,_#000003_100%)] px-3 py-8">
      <BlurBox className="w-full max-w-md shadow-xl rounded-xl bg-gray-800 text-white"
       style={{
        background: "hsla(220, 35%, 3%, 0.4)",
        borderColor: "rgb(71, 71, 71)",
      }}>
        <CardHeader>
          <CardTitle className="text-center text-3xl font-semibold">Sign In</CardTitle>
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
            <div className="space-y-1">
              <Label htmlFor="email" className='text-gray-400'>Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" {...register("email")} className="bg-black bg-opacity-50 text-white" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="space-y-1 relative">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input id="password" placeholder="Enter password" type={showPassword ? "text" : "password"} {...register("password")} className={cn("bg-black bg-opacity-50 text-white", errors.password && "border-red-500")} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                  {showPassword ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <p className="text-sm text-blue-400 cursor-pointer" onClick={() => setResetModal(true)}>
              Forgot Password?
            </p>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Sign In
            </Button>
          </form>

          <div className="space-y-3 mt-4">
            <p className="text-center text-gray-400">Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a></p>

            <div className="flex items-center justify-center">
              <div className="h-[0.8px] w-full bg-gray-600"></div>
              <span className="px-2 text-gray-200">or</span>
              <div className="h-[0.8px] w-full bg-gray-600"></div>
            </div>
          </div>

          <Button className="w-full bg-black hover:bg-slate-900 text-white" onClick={handleGoogleSignIn}>
            <GoogleIcon /> Sign in with Google
          </Button>
        </CardContent>
      </BlurBox>

      <Dialog open={resetModal} onOpenChange={setResetModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reset Password</DialogTitle>
        </DialogHeader>
        <p className="text-gray-600">Enter your email to receive a password reset link.</p>
        {resetSuccess && (
          <Alert variant="success">
            <AlertDescription>Reset link sent! Check your email.</AlertDescription>
          </Alert>
        )}
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Input
          type="email"
          placeholder="Your email"
          value={resetEmail}
          onChange={(e) => setResetEmail(e.target.value)}
          className="bg-black text-white mt-3"
        />
        <Button
          onClick={handleResetPassword}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-3"
        >
          Send Reset Link
        </Button>
      </DialogContent>
    </Dialog>
    </div>
  );
}