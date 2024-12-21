import React from 'react';
import Navbar from '../components/DashBoard/NavBar';
import InputBox from '../components/DashBoard/InputBox';

const DashboardPage: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Add your dashboard content here */}
        <h1 className="text-2xl pt-12 font-semibold text-gray-900">Dashboard</h1>
      </div>
      <InputBox />
    </div>
  );
};

export default DashboardPage;