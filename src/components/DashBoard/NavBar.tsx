import React, { useState } from 'react';
import Logo from '../../assets/images/Logo/Logo.png';
import { UserCircle } from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  // Example username - replace with actual user data
  const username = "Shiva Prasanth";

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  return (
    <>
      <nav className="bg-black text-white shadow-lg w-full fixed top-0 left-0 right-0">
        <div className="w-full px-4">
          <div className="flex justify-between items-center h-20">
            {/* Left - Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 w-auto" // Increased from h-8 to h-12
              />
            </div>

            {/* Center - Legal Sphere Text */}
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold">Legal Sphere</h1>
            </div>

            {/* Right - User Profile */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <UserCircle className="h-10 w-10" /> {/* Increased from h-8 w-8 to h-10 w-10 */}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    Signed in as <br />
                    <span className="font-medium">{username}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Logout Confirmation Dialog */}
      {showLogoutDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Confirm Logout
            </h3>
            <p className="text-gray-500 mb-4">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowLogoutDialog(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Add your logout logic here
                  console.log('Logging out...');
                  setShowLogoutDialog(false);
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add spacing for fixed navbar */}
      {/* <div className="h-20" /> */}
    </>
  );
};

export default Navbar;