import React, { useState, useMemo, useEffect, useRef } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  User,
  MapPinHouse,
  Heart,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  CalendarCheck,
} from "lucide-react";
import BlurBox from "@/components/layout component/BlurBox.component";

// Single menu item, showing icon + optional label
const MenuItem = React.memo(({ icon, label, to, onClick, isCollapsed }) => {
  const getClassName = useMemo(() => {
    return ({ isActive }) => {
      return `flex items-center justify-start gap-3 py-2 px-3 rounded-md cursor-pointer transition-colors ${
        isActive
          ? "bg-[#1D3E7A] text-white"
          : "text-gray-200 hover:bg-[#1D3E7A] hover:text-white"
      }`;
    };
  }, []);

  return (
    <NavLink to={to} className={getClassName} onClick={onClick}>
      {icon}
      {!isCollapsed && <span className="font-medium">{label}</span>}
    </NavLink>
  );
});

export default function UserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile open/close
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // desktop collapse/expand
  const sidebarRef = useRef(null);

  // Nav items with icons
  const navItems = useMemo(
    () => [
      { icon: <User size={24} />, label: "Profile", to: "/user/profile" },
      { icon: <MapPinHouse size={24} />, label: "My Address", to: "/user/address" },
      { icon: <Heart size={24} />, label: "Wishlist", to: "/user/wishlist" },
      {
        icon: <CalendarCheck size={24} />,
        label: "Meeting Schedule",
        to: "/user/meeting-schedule", // <-- This will show MeetingSchedule in <Outlet/>
      },
    ],
    []
  );

  // Close sidebar (mobile) when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }
    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-[radial-gradient(circle_at_center,_#190074_0%,_#000000_100%)] text-white">
      {/* MOBILE TOP BAR */}
      <div className="flex items-center justify-between p-4 sm:hidden">
        <NavLink to="/" className="text-xl font-bold">
          Shotlin
        </NavLink>
        <button
          className="text-white"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <Menu size={36} />
        </button>
      </div>

      {/* MOBILE BACKDROP */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <BlurBox
  ref={sidebarRef}
  className={`
    fixed sm:sticky top-0 left-0 z-50
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    sm:translate-x-0
    ${sidebarCollapsed ? "sm:w-24" : "sm:w-64"}
    w-full h-full sm:h-screen
    flex-shrink-0 py-4 px-2 sm:py-8 sm:px-6
    border-y-0 border-l-0
    transition-transform duration-300
  `}
  style={{
    background: "hsla(220, 35%, 3%, 0.4)",
    borderColor: "rgb(71, 71, 71)",
  }}
>
        {/* Desktop Sidebar Header */}
        <div className="hidden sm:block mb-8">
          {sidebarCollapsed ? (
            // Collapsed state: "S" centered, arrow at far right
            <div className="relative flex items-center h-10">
              {/* 'S' in the horizontal center */}
              <NavLink to="/" className="text-2xl font-bold mx-auto">
                S
              </NavLink>
              {/* Toggle arrow at the far right, vertically centered */}
              <button
                onClick={() => setSidebarCollapsed(false)}
                aria-label="Expand sidebar"
                className="text-gray-300 hover:text-white p-1 absolute -right-6 top-1/2 -translate-y-1/2"
              >
                <ChevronRight size={25} />
              </button>
            </div>
          ) : (
            // Expanded state: 'SHOTLIN' left, arrow on the right
            <div className="flex justify-between items-center h-10">
              <NavLink to="/" className="text-2xl font-bold">
                SHOTLIN
              </NavLink>
              <button
                onClick={() => setSidebarCollapsed(true)}
                aria-label="Collapse sidebar"
                className="text-gray-300 hover:text-white p-1"
              >
                <ChevronLeft size={25} />
              </button>
            </div>
          )}
        </div>

        {/* MOBILE CLOSE BUTTON */}
        <div className="flex justify-between items-center sm:hidden mb-4 px-2">
          <NavLink to="/" className="text-2xl font-bold">
            Shotlin
          </NavLink>
          <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
            <X size={36} className="text-white" />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              label={item.label}
              to={item.to}
              onClick={() => setSidebarOpen(false)}
              isCollapsed={sidebarCollapsed}
            />
          ))}
          <div className="mt-auto pt-8">
            <MenuItem
              icon={<LogOut size={24} />}
              label="Sign Out"
              to="/sign-out"
              onClick={() => setSidebarOpen(false)}
              isCollapsed={sidebarCollapsed}
            />
          </div>
        </nav>
      </BlurBox>

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <Outlet />
      </div>
    </div>
  );
}
