import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, X } from "lucide-react";
import BlurBox from "@/components/layout component/BlurBox.component";
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";

import { userMeetingDATA } from "@/api/ProductSchedule.api";

export default function MeetingSchedule() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [open, setOpen] = useState(false);
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    userMeetingDATA()
      .then((data) => {
        const meetings = data.message.sort(
          (a, b) => new Date(b.meetingDate) - new Date(a.meetingDate)
        );

        const events = meetings.map((meeting) => {
          const meetingDate = new Date(meeting.meetingDate);
          const dayOfWeek = meetingDate.toLocaleDateString("en-US", { weekday: "short" });
          const dayOfMonth = meetingDate.getDate();
          const monthName = meetingDate.toLocaleDateString("en-US", { month: "long" });

          return {
            date: meeting.meetingDate.split("T")[0],
            dayOfWeek,
            dayOfMonth,
            month: monthName,
            event: {
              start: meeting.meetingTime,
              end: meeting.meetingTime,
              location: "Online",
              meetinglink: meeting.meetingLink,
              title: meeting.serviceName,
              participants: [],
              description: meeting.description,
              meetingDate: meeting.meetingDate.split("T")[0],
            },
          };
        });

        const grouped = events.reduce((acc, { month, date, dayOfWeek, dayOfMonth, event }) => {
          if (!acc[month]) acc[month] = {};
          if (!acc[month][date]) {
            acc[month][date] = { date, dayOfWeek, dayOfMonth, events: [] };
          }
          acc[month][date].events.push(event);
          return acc;
        }, {});

        const scheduleArray = Object.entries(grouped).map(([month, daysObj]) => ({
          month,
          days: Object.values(daysObj).sort((a, b) => new Date(b.date) - new Date(a.date)), // Descending
        }));

        setScheduleData(scheduleArray);
      })
      .catch((error) => {
        console.error("Error fetching meeting data:", error);
      });
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  return (
    <BlurBox
      className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-6"
      style={{
        background: "hsla(220, 35%, 3%, 0.4)",
        borderColor: "rgb(71, 71, 71)",
      }}
    >
      <h1 className="text-2xl font-bold mb-1">Bookings</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        See your scheduled events from your calendar.
      </p>

      {scheduleData.length > 0 ? (
        scheduleData.map((monthData) => (
          <div key={monthData.month} className="mb-10">
            <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
              {monthData.month}
            </h2>

            <div className="space-y-6">
              {monthData.days.map((day) => (
                <div key={day.date} className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-orange-600 font-bold text-xl w-16">
                      {day.dayOfWeek} {day.dayOfMonth}
                    </div>
                    <hr className="border-t border-gray-300 dark:border-gray-700 flex-grow ml-2" />
                  </div>

                  <div className="space-y-2">
                    {day.events.map((event, idx) => (
                      <Card
                        key={idx}
                        onClick={() => handleEventClick(event)}
                        className="cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between
                                   p-4 border border-gray-200 dark:border-gray-700
                                   hover:shadow-lg transition-shadow duration-200 rounded-sm"
                        style={{
                          background: "hsla(220, 35%, 3%, 0.4)",
                          borderColor: "rgb(71, 71, 71)",
                        }}
                      >
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                            {event.start} - {event.end}
                          </div>
                          <div className="font-medium text-gray-800 dark:text-gray-100">
                            {event.title}
                          </div>
                        </div>
                        <CardContent
                          className="mt-3 md:mt-0 md:text-right flex flex-col md:block"
                          style={{ padding: 0 }}
                        >
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2 md:justify-end">
                            <MapPin className="w-4 h-4 mr-1" />
                            {event.location}
                          </div>
                          {event.participants.length > 0 && (
                            <div className="flex -space-x-3 justify-end">
                              {event.participants.map((person, index) => (
                                <Avatar
                                  key={index}
                                  className="w-8 h-8 border-2 border-white dark:border-gray-800"
                                >
                                  {person.avatar ? (
                                    <AvatarImage
                                      src={person.avatar}
                                      alt={person.name}
                                    />
                                  ) : (
                                    <AvatarFallback>
                                      {person.name?.[0] || "?"}
                                    </AvatarFallback>
                                  )}
                                </Avatar>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Loading meetings...</p>
      )}

      {/* Modal for meeting details */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 bg-black/50" />
          <BlurBox
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 rounded-lg shadow-lg z-[100]"
            style={{
              background: "hsla(220, 35%, 3%, 0.4)",
              borderColor: "rgb(71, 71, 71)",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex justify-center mb-5">
              <h1 className="text-3xl font-bold">SHOTLIN</h1>
            </div>

            <DialogTitle className="text-center text-xl font-semibold mb-1">
              {selectedEvent?.title || "Meeting Details"}
            </DialogTitle>
            <DialogDescription className="text-center text-sm text-gray-300 mb-3">
              {selectedEvent && (
                <>
                  {selectedEvent.start} - {selectedEvent.end} {" " + "IST"} |{" "}
                  {selectedEvent.location}
                </>
              )}
            </DialogDescription>

            {selectedEvent && (
              <div className="text-center text-sm text-gray-300 mb-6">
                {selectedEvent.meetingDate && (
                  <p>
                    <strong>Date:</strong> {selectedEvent.meetingDate}
                  </p>
                )}
                {selectedEvent.description && (
                  <p>
                    <strong>Description:</strong> {selectedEvent.description}
                  </p>
                )}
              </div>
            )}

            {selectedEvent?.participants?.length > 0 && (
              <div className="flex flex-col items-center mb-6">
                <h3 className="font-medium mb-2">Participants</h3>
                <div className="flex -space-x-3">
                  {selectedEvent.participants.map((person, index) => (
                    <Avatar
                      key={index}
                      className="w-10 h-10 border-2 border-[#1a1a1a]"
                    >
                      {person.avatar ? (
                        <AvatarImage src={person.avatar} alt={person.name} />
                      ) : (
                        <AvatarFallback>
                          {person.name?.[0] || "?"}
                        </AvatarFallback>
                      )}
                    </Avatar>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 items-center">
              {selectedEvent?.meetinglink && (
                <a
                  href={selectedEvent.meetinglink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-5 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors"
                >
                  Join Meeting
                </a>
              )}
              <button
                onClick={() => setOpen(false)}
                className="w-full px-5 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition-colors"
              >
                Close
              </button>
            </div>
          </BlurBox>
        </DialogPortal>
      </Dialog>
    </BlurBox>
  );
}
