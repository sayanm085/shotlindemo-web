import axios from "axios";
import api from "@/api/config.api";

const MeetingScheduleApi = async (data) => {
  try {
    const response = await axios.post(`${api}/v1/contact/meeting-schedule`, {
      dateid: data.dateid,
      timeSlotid: data.timeSlotid,
      email: data.email,
      phone: data.phone,
      serviceName: data.serviceName,
      description: data.description,
    }, { withCredentials: true });
    return response.data;
  } catch (error) {
    return Promise.reject(error.response?.data || error.message );
  }
};


const userMeetingDATA = async () => {
  try {
    const response = await axios.get(`${api}/v1/contact/meeting-schedule`, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

const AvailableDatesApi = async () => {
  try {
    const response = await axios.get(`${api}/v1/contact/daily-schedule`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export { AvailableDatesApi,MeetingScheduleApi,userMeetingDATA };