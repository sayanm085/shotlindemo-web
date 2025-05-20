import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import {  CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import BlurBox from "@/components/layout component/BlurBox.component";

const ResetPassword = () => {
  const { token } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, { newPassword: data.password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error resetting password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[radial-gradient(circle_at_center,_#010c3b_0%,_#000003_100%)] px-3 py-8">
    <BlurBox className="w-full max-w-md shadow-xl rounded-xl bg-gray-800 text-white"
     style={{
      background: "hsla(220, 35%, 3%, 0.4)",
      borderColor: "rgb(71, 71, 71)",
    }}>
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1 relative">
              <Label htmlFor="password">New Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  {...register("password", { required: "Password is required" })}
                  className={errors.password ? "border-red-500" : ""}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                >
                  {showPassword ? "👁️" : "🔒"}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
          {message && <p className="text-center mt-4 text-sm text-gray-600">{message}</p>}
        </CardContent>
      </BlurBox>
    </div>
  );
};

export default ResetPassword;
