import React from 'react'
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Camera } from "lucide-react"
import BlurBox from "@/components/layout component/BlurBox.component"

import { useProfile, useProfileUpdate } from "@/api/UserProfile.api";

function MyProfile() {

  const { data: profile, isLoading } = useProfile();

  console.log(profile);

  return (
    <main className="flex-1 p-4 sm:p-8 overflow-y-auto text-white">
      <BlurBox
        className="p-8 rounded-lg shadow-xl"
        style={{
          background: "hsla(220, 35%, 3%, 0.4)",
          borderColor: "rgb(71, 71, 71)",
        }}
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Personal Information</CardTitle>
          <CardDescription>Update your profile details</CardDescription>
        </CardHeader>

        <CardContent className="mt-8 space-y-6">
          {/* Profile Picture (Centered) */}
          <div className="flex justify-center">
            <div className="relative">
              <Avatar className="h-32 w-32">
                <AvatarImage src={profile?.data?.avatar} alt="Profile" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <label
                htmlFor="avatarUpload"
                className="absolute bottom-0 right-0 p-2 bg-[#0A1F44] rounded-full cursor-pointer group-hover:scale-105 transition-transform"
                title="Change Profile Photo"
              >
                <Camera size={20} />
              </label>
              <input
                id="avatarUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  // handle file upload
                }}
              />
            </div>
          </div>

          {/* Row 1: Username & Full Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="username" className="mb-2">Username</Label>
              <Input
                id="username"
                placeholder="Your Username"
                value={profile?.data?.username}
                className="bg-black bg-opacity-50 text-white"
              />
            </div>
            <div>
              <Label htmlFor="fullName" className="mb-2">Full Name</Label>
              <Input
                id="fullName"
                placeholder="Your Full Name"
                value={profile?.data?.fullName}
                className="bg-black bg-opacity-50 text-white"
              />
            </div>
          </div>

          {/* Row 2: Mobile Number & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone" className="mb-2">Mobile Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="123 456 7890"
                className="bg-black bg-opacity-50 text-white"
              />
            </div>
            <div>
              <Label htmlFor="email" className="mb-2">Email</Label>
              <Input
                id="email"
                type="email"
                value={profile?.data?.email}
                placeholder="example@mail.com"
                className="bg-black bg-opacity-50 text-white"
              />
            </div>
          </div>

          {/* Row 3: Date of Birth & Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="dob" className="mb-2">Date of Birth</Label>
              <Input
                id="dob"
                type="date"
                className="bg-black bg-opacity-50 text-white"
              />
            </div>
            <div>
              <Label className="mb-2">Gender</Label>
              <div className="flex space-x-6 mt-2">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="gender" value="male" className="text-white" />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="gender" value="female" className="text-white" />
                  <span>Female</span>
                </label>
              </div>
            </div>
          </div>

          {/* Save Changes Button */}
          <div className="flex justify-end mt-6">
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </BlurBox>
    </main>
  )
}

export default MyProfile
