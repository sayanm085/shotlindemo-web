import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AvailableDatesApi, MeetingScheduleApi } from "@/api/ProductSchedule.api";
import Loader from "../../Layout/Loader/Loader.jsx";

export default function ScheduleCall({ onClose, ProductDetail }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [dailyTimes, setDailyTimes] = useState([]);
  const [selectedDateId, setSelectedDateId] = useState(null);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const [errormassage, setErrormassage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AvailableDatesApi()
      .then((res) => setDailyTimes(res.message))
      .catch((error) => console.error("Error fetching dates:", error));
  }, []);

  const selectedDay = dailyTimes.find((day) => day._id === selectedDateId);

  const formatDate = (isoString) => {
    const d = new Date(isoString);
    return d
      .toLocaleString("en-US", { day: "2-digit", month: "short" })
      .replace(" ", "-");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const chosenDate = selectedDay?._id;
    const chosenTimeSlot = selectedDay?.timeSlots[selectedTimeIndex];

    if (!chosenDate || !chosenTimeSlot) {
      setErrormassage("Please select both a date and time slot.");
      return;
    }

    setIsSubmitting(true);
    const data = {
      dateid: chosenDate,
      timeSlotid: chosenTimeSlot._id,
      email,
      phone,
      serviceName: ProductDetail.name,
      description,
    };

    MeetingScheduleApi(data)
      .then((res) => {
        console.log("Meeting Scheduled:", res.message);
        if (res.message === "success") {
          setSuccessMessage("Your meeting has been successfully arranged.");
          setErrormassage("");
          // Auto-close the modal after 5 seconds
          setTimeout(() => {
            onClose && onClose();
          }, 5000);
        } else {
          setErrormassage(res.message);
        }
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log("Error scheduling meeting:", error.data);
        setErrormassage(error.data);
        setIsSubmitting(false);
      });
  };

  // Limit the description to 25 words
  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    // Split by whitespace, filter out empty strings
    const words = text.trim().split(/\s+/).filter(Boolean);

    if (words.length > 25) {
      // Truncate to first 25 words
      const truncated = words.slice(0, 25).join(" ");
      setDescription(truncated);
    } else {
      setDescription(text);
    }
  };

  // Count how many words are in the description
  const wordCount = description.trim().split(/\s+/).filter(Boolean).length;

  // Loading State UI
  if (isSubmitting) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
        <Loader />
      </div>
    );
  }

  // Success State UI (after successful submission)
  if (successMessage) {
    return (
      <div className="fixed inset-0 z-[9999] overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={onClose}
          />
          <div className="relative max-w-lg w-full bg-white dark:bg-gray-900 shadow-2xl rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center">
            {/* Calendar Image */}
            <img
              src="https://res.cloudinary.com/shotlin/image/upload/v1742933023/appointment_yuw07q.png"
              alt="Meeting Scheduled"
              className="mx-auto mb-4 h-auto w-20"
            />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              Meeting Successfully Scheduled
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {ProductDetail.name}
            </p>
            {selectedDay && selectedDay.timeSlots[selectedTimeIndex] && (
              <p className="text-gray-600 dark:text-gray-400">
                {formatDate(selectedDay.date)} |{" "}
                {selectedDay.timeSlots[selectedTimeIndex].startTime} -{" "}
                {selectedDay.timeSlots[selectedTimeIndex].endTime}
              </p>
            )}
            <Button
              onClick={onClose}
              className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Form UI
  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={onClose}
        />
        <div className="relative max-w-lg w-full bg-white dark:bg-gray-900 shadow-2xl rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>

          <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            {ProductDetail.name}
          </h2>

          {/* Alert: Show error alert if any */}
          {errormassage && (
            <Alert className="mb-4">
              <AlertTitle>Alert</AlertTitle>
              <AlertDescription>{errormassage}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <Label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Phone Number
              </Label>
              <Input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full"
                required
              />
            </div>

            {/* Select Date */}
            <div>
              <h3 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Select Date
              </h3>
              <div className="flex flex-wrap gap-3">
                {dailyTimes.map((day) => (
                  <Button
                    key={day._id}
                    onClick={() => {
                      setSelectedDateId(day._id);
                      setSelectedTimeIndex(null);
                    }}
                    type="button"
                    variant={selectedDateId === day._id ? "default" : "outline"}
                    className={`px-4 py-2 text-sm rounded-lg transition transform hover:scale-105 ${
                      selectedDateId === day._id
                        ? "bg-indigo-500 text-white shadow-md"
                        : "bg-transparent text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
                    }`}
                  >
                    {formatDate(day.date)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Select Time */}
            {selectedDay && (
              <div>
                <h3 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Select Time
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedDay.timeSlots.map((slot, index) => {
                    const isFull = slot.status === "full";
                    return (
                      <Button
                        key={slot._id}
                        onClick={() => !isFull && setSelectedTimeIndex(index)}
                        type="button"
                        disabled={isFull}
                        variant={
                          selectedTimeIndex === index ? "default" : "outline"
                        }
                        className={`px-4 py-2 text-sm rounded-lg transition transform ${
                          isFull
                            ? "opacity-50 cursor-not-allowed bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400"
                            : selectedTimeIndex === index
                            ? "bg-indigo-500 text-white shadow-md hover:scale-105"
                            : "bg-transparent text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:scale-105"
                        }`}
                      >
                        {isFull
                          ? "Booked"
                          : `${slot.startTime} - ${slot.endTime}`}
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Description (25 words max) */}
            <div>
              <Label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Description for Call
              </Label>
              <Textarea
                id="description"
                placeholder="Enter call description (max 25 words)"
                rows={3}
                value={description}
                onChange={handleDescriptionChange}
                className="mt-1 w-full resize-none"
              />
              {/* Word Counter */}
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {wordCount} / 25 words
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Schedule Call
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
