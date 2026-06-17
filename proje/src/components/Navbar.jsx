import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-6 px-4 md:px-12 lg:px-24 bg-white">
      
      <div className="text-3xl font-extrabold tracking-tight flex items-center">
        <span className="text-[#7A75D7]">Bu</span>
        <span className="text-[#FE7466]">cheen</span>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      <div className="hidden md:flex space-x-10 items-center font-medium text-base">
        <a href="#home" className="text-[#FE7466]">Home</a>
        <a href="#service" className="text-[#9CA3AF] hover:text-[#FE7466] transition-colors">Service</a>
        <a href="#about" className="text-[#9CA3AF] hover:text-[#FE7466] transition-colors">About</a>
        <a href="#pricing" className="text-[#9CA3AF] hover:text-[#FE7466] transition-colors">Pricing</a>
        <a href="#support" className="text-[#9CA3AF] hover:text-[#FE7466] transition-colors">Support</a>
      </div>
      <div className="hidden md:flex space-x-4 items-center">
        <button className="px-8 py-2.5 rounded-xl border border-[#FE7466] text-[#FE7466] font-medium hover:bg-orange-50 transition-colors">
          Sign In
        </button>
        <button className="px-8 py-2.5 rounded-xl bg-[#FE7466] text-white font-medium hover:bg-opacity-90 shadow-sm transition-all">
          Sign Up
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col py-4 px-6 space-y-4 md:hidden z-50">
          <a href="#home" className="text-[#FE7466] font-medium">Home</a>
          <a href="#service" className="text-[#9CA3AF]">Service</a>
          <a href="#about" className="text-[#9CA3AF]">About</a>
          <a href="#pricing" className="text-[#9CA3AF]">Pricing</a>
          <a href="#support" className="text-[#9CA3AF]">Support</a>
          <button className="px-6 py-2 rounded-xl border border-[#FE7466] text-[#FE7466] font-medium w-full">Sign In</button>
          <button className="px-6 py-2 rounded-xl bg-[#FE7466] text-white font-medium w-full">Sign Up</button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;