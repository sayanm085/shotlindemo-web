import axios from "axios";
import api from "@/api/config.api";




const UpdateAddress = async (updateAddress) => {
        try {
        const response = await axios.put(`${api}/v1/users/updateaddress/${updateAddress.id}`, {
            newAddress:{
                FullName: updateAddress.FullName,
                CompanyName: updateAddress.CompanyName || "",
                MobileNumber: isNaN(Number(updateAddress.MobileNumber)) ? 0 : Number(updateAddress.MobileNumber),
                Address: updateAddress.Address || "",
                City: updateAddress.City || "",
                State: updateAddress.State || "",
                Pincode: isNaN(Number(updateAddress.Pincode)) ? 0 : Number(updateAddress.Pincode),
                Country: updateAddress.Country || "",
                GSTIN: updateAddress.GSTIN || "",
                isDefault: updateAddress.isDefault || false
            }
           

        },{ withCredentials: true,});
            return response.data.data; // Return the actual data
        } catch (error) {
            throw new Error("Failed to fetch user data");
        }
    };


    const newAddress = async (newAddress) => {

        console.log(newAddress);
        try {  
            const response = await axios.post(
                `${api}/v1/users/address`,
                {
                    FullName: newAddress.name,
                    CompanyName: newAddress.company,
                    MobileNumber: typeof newAddress.phone === 'number' ? newAddress.phone : Number(newAddress.phone), 
                    Address: newAddress.street,
                    City: newAddress.city,
                    State: newAddress.state,
                    Pincode: isNaN(Number(newAddress.zip)) ? 0 : Number(newAddress.zip),
                    Country: newAddress.country,
                    GSTIN: newAddress.gstNumber,
                    isDefault: newAddress.isDefault
                },
                { withCredentials: true }
            );
            return response.data.data;
        } catch (error) {
            console.error("❌ Error saving address:", error.response?.data || error.message);
            throw new Error(error.response?.data?.message || "Failed to fetch user data");
        }
    };

   const deleteAddress = async (id) => {
        try {
            const response = await axios.delete(`${api}/v1/users/deleteaddress/${id}`, { withCredentials: true });
            return response.data.data;
        } catch (error) {
            console.error("❌ Error deleting address:", error.response?.data || error.message);
            throw new Error(error.response?.data?.message || "Failed to delete address");
        }
    }
const userAddress = async () => {
        try {
        const response = await axios.get(`${api}/v1/users/useraddress`, { withCredentials: true });
            return response.data.data; // Return the actual data
        } catch (error) {
            throw new Error("Failed to fetch user data");
        }
    }


export {UpdateAddress, newAddress, userAddress,deleteAddress};