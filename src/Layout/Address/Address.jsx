import React, { useState, useCallback, memo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BlurBox from "@/components/layout component/BlurBox.component";
import { Edit, Trash2, PlusCircle } from "lucide-react";
import { Toaster, toast } from "sonner";

import {
  UpdateAddress,
  newAddress,
  userAddress,
  deleteAddress,
} from "../../api/UserDataUpdate.api.js";

// Dark-themed ConfirmModal Component
const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-gray-900 p-6 rounded-md shadow-md w-80">
        <p className="mb-4 text-center text-white">{message}</p>
        <div className="flex justify-around">
          <Button variant="outline" onClick={onCancel}>
            No
          </Button>
          <Button variant="default" onClick={onConfirm}>
            Yes
          </Button>
        </div>
      </div>
    </div>
  );
};

// AddressList component with layered blur
const AddressList = memo(({ addresses, onRequestUpdate, onRequestDelete }) => {
  return (
    <div className="flex flex-col gap-6 items-center">
      {addresses.map((addr) => (
        <div
          key={addr.id}
          className="
            relative
            w-11/12
            p-6
            rounded-lg
            border
            border-gray-700
            overflow-hidden
            transition-all
            duration-300
            hover:scale-105
            bg-black/20
          "
        >
          {/* Blurred background layer */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

          {/* Foreground content */}
          <div className="relative z-10">
            <div className="text-sm">
              <p className="font-bold text-white">{addr.fullName}</p>
              <p className="text-gray-300">{addr.phone}</p>
              {addr.company && <p className="text-gray-300">{addr.company}</p>}
              <p className="text-gray-300">
                {addr.streetAddress}, {addr.city}, {addr.state} {addr.zip}
              </p>
              <p className="text-gray-300">{addr.country}</p>
              {addr.gstNumber && (
                <p className="text-gray-300">GST: {addr.gstNumber}</p>
              )}
            </div>
            <div className="mt-4 flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onRequestUpdate(addr)}
                className="flex items-center gap-1"
              >
                <Edit className="w-4 h-4" />
                <span>Update</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onRequestDelete(addr.id)}
                className="flex items-center gap-1"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

// Address Form Component
const AddressForm = memo(
  ({ formData, onChange, onSubmit, onCancel, isEditing }) => {
    return (
      <div className="mt-6 p-6 border-t border-gray-700 bg-black bg-opacity-50 text-white rounded transition-all duration-300">
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="fullName" className="block mb-2">
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={onChange}
                required
                className="bg-black bg-opacity-50 text-white shadow-sm focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="block mb-2">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={onChange}
                required
                className="bg-black bg-opacity-50 text-white shadow-sm focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          {/* Company */}
          <div>
            <Label htmlFor="company" className="block mb-2">
              Company (Optional)
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={onChange}
              className="bg-black bg-opacity-50 text-white shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Street Address */}
          <div>
            <Label htmlFor="streetAddress" className="block mb-2">
              Street Address
            </Label>
            <Input
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={onChange}
              required
              className="bg-black bg-opacity-50 text-white shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* City, State, ZIP */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="city" className="block mb-2">
                City
              </Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={onChange}
                required
                className="bg-black bg-opacity-50 text-white shadow-sm focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <Label htmlFor="state" className="block mb-2">
                State
              </Label>
              <Input
                id="state"
                name="state"
                value={formData.state}
                onChange={onChange}
                required
                className="bg-black bg-opacity-50 text-white shadow-sm focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <Label htmlFor="zip" className="block mb-2">
                ZIP Code
              </Label>
              <Input
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={onChange}
                required
                className="bg-black bg-opacity-50 text-white shadow-sm focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          {/* Country */}
          <div>
            <Label htmlFor="country" className="block mb-2">
              Country
            </Label>
            <Input
              id="country"
              name="country"
              value={formData.country}
              onChange={onChange}
              required
              className="w-full p-2 bg-black bg-opacity-50 text-white border border-gray-600 rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
          {/* GST Number */}
          <div>
            <Label htmlFor="gstNumber" className="block mb-2">
              GST Number (Optional)
            </Label>
            <Input
              id="gstNumber"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={onChange}
              className="bg-black bg-opacity-50 text-white shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button type="submit" variant="default" className="flex items-center gap-1">
              {isEditing ? "Update Address" : "Add Address"}
            </Button>
            <Button variant="outline" type="button" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    );
  }
);

export default function Address() {
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    company: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    gstNumber: "",
  });

  // confirm state: { type: "update" | "updateForm" | "delete", data: address or id } or null
  const [confirm, setConfirm] = useState(null);

  // Fetch addresses from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userAddress();
        const newAddresses = response.map((address) => ({
          id: address._id,
          fullName: address.FullName,
          phone: address.MobileNumber,
          company: address.CompanyName || "",
          streetAddress: address.Address,
          city: address.City,
          state: address.State,
          zip: address.Pincode,
          country: address.Country,
          gstNumber: address.GSTIN,
        }));
        setAddresses(newAddresses);
      } catch (error) {
        console.error("❌ Error fetching user address:", error);
        toast.error("Failed to fetch addresses.");
      }
    };
    fetchData();
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  // Function to submit an update (called after final confirmation)
  const submitUpdate = useCallback(() => {
    setAddresses((prev) =>
      prev.map((addr) =>
        addr.id === editingAddress.id ? { ...editingAddress, ...formData } : addr
      )
    );
    const updatePayload = {
      id: editingAddress.id,
      FullName: formData.fullName,
      CompanyName: formData.company,
      MobileNumber: formData.phone,
      Address: formData.streetAddress,
      City: formData.city,
      State: formData.state,
      Pincode: formData.zip,
      Country: formData.country,
      GSTIN: formData.gstNumber,
    };
    UpdateAddress(updatePayload)
      .then(() => {
        toast.success("Your address has been updated successfully.");
        resetForm();
      })
      .catch((error) => {
        console.error("❌ Error updating address:", error);
        toast.error("There was an error updating your address.");
      });
    setConfirm(null);
  }, [editingAddress, formData]);

  // Function to submit a new address (no confirmation needed)
  const submitAdd = useCallback(() => {
    const newAddr = { ...formData, id: Date.now() };
    setAddresses((prev) => [...prev, newAddr]);
    newAddress({
      name: formData.fullName,
      company: formData.company,
      phone: formData.phone,
      street: formData.streetAddress,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      country: formData.country,
      gstNumber: formData.gstNumber,
    })
      .then(() => {
        toast.success("Your address has been added successfully.");
        resetForm();
      })
      .catch((error) => {
        console.error("❌ Error saving address:", error);
        toast.error("There was an error adding your address.");
      });
  }, [formData]);

  const resetForm = useCallback(() => {
    setFormData({
      fullName: "",
      phone: "",
      company: "",
      streetAddress: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      gstNumber: "",
    });
    setEditingAddress(null);
    setShowForm(false);
  }, []);

  // Intercept form submission: if editing, show final confirmation modal
  const handleFormSubmitIntercept = useCallback(
    (e) => {
      e.preventDefault();
      if (editingAddress) {
        setConfirm({ type: "updateForm", data: null });
      } else {
        submitAdd();
      }
    },
    [editingAddress, submitAdd]
  );

  // Request update from AddressList (confirmation before opening form)
  const requestUpdate = useCallback((address) => {
    setConfirm({ type: "update", data: address });
  }, []);

  // Request delete from AddressList
  const requestDelete = useCallback((id) => {
    setConfirm({ type: "delete", data: id });
  }, []);

  // If user confirms update from the list, open the form with pre-filled data
  const confirmUpdateFromList = useCallback(() => {
    const address = confirm.data;
    setEditingAddress(address);
    setFormData(address);
    setShowForm(true);
    setConfirm(null);
  }, [confirm]);

  // If user confirms delete from the list, delete the address
  const confirmDelete = useCallback(() => {
    const id = confirm.data;
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
    deleteAddress(id)
      .then(() => {
        toast.success("Your address has been deleted successfully.");
      })
      .catch((error) => {
        console.error("❌ Error deleting address:", error);
        toast.error("There was an error deleting your address.");
      });
    setConfirm(null);
  }, [confirm]);

  return (
    <main className="flex-1 p-4 sm:p-8 overflow-y-auto text-white">
      <Toaster />
      <div className="mx-auto max-w-7xl">
        <BlurBox
          className="rounded-lg shadow-xl p-4 xs1:p-8"
          style={{
            background: "hsla(220, 35%, 3%, 0.4)",
            borderColor: "rgb(71, 71, 71)",
          }}
        >
          <h2 className="text-3xl font-bold mb-6">My Addresses</h2>

          {/* Scrollable container */}
          <div className="max-h-[500px] overflow-y-auto custom-scrollbar scroll-smooth">
            <AddressList
              addresses={addresses}
              onRequestUpdate={requestUpdate}
              onRequestDelete={requestDelete}
            />
          </div>

          <div className="mt-8">
            <Button
              variant="default"
              onClick={() => {
                setShowForm(true);
                setEditingAddress(null);
                setFormData({
                  fullName: "",
                  phone: "",
                  company: "",
                  streetAddress: "",
                  city: "",
                  state: "",
                  zip: "",
                  country: "",
                  gstNumber: "",
                });
              }}
              className="flex items-center gap-2"
            >
              <PlusCircle className="w-5 h-5" />
              Add New Address
            </Button>
          </div>

          {/* Render the AddressForm if user clicks "Add New Address" or "Update" */}
          {showForm && (
            <AddressForm
              formData={formData}
              onChange={handleInputChange}
              onSubmit={handleFormSubmitIntercept}
              onCancel={resetForm}
              isEditing={Boolean(editingAddress)}
            />
          )}
        </BlurBox>
      </div>

      {/* Confirmation Modals */}
      {confirm && confirm.type === "update" && (
        <ConfirmModal
          message="Are you sure you want to edit this address?"
          onConfirm={confirmUpdateFromList}
          onCancel={() => setConfirm(null)}
        />
      )}
      {confirm && confirm.type === "delete" && (
        <ConfirmModal
          message="Are you really delete this address?"
          onConfirm={confirmDelete}
          onCancel={() => setConfirm(null)}
        />
      )}
      {confirm && confirm.type === "updateForm" && (
        <ConfirmModal
          message="Are you really update this address?"
          onConfirm={submitUpdate}
          onCancel={() => setConfirm(null)}
        />
      )}
    </main>
  );
}
