// components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/common/Button'; // Import Button without curly braces
import { APP_NAME, NAVIGATION_LINKS, FILTER_LABELS } from '@/constants'; // Import FILTER_LABELS

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Logo and App Name */}
        <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
          <Image
            src="/assets/logo.svg" // Make sure logo.svg is in public/assets
            alt={`${APP_NAME} Logo`}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-gray-800">{APP_NAME}</span>
        </Link>

        {/* Search Bar (Placeholder) */}
        <div className="w-full md:w-auto flex-grow max-w-lg mx-auto md:mx-0 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search for properties..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Navigation Links and User Actions */}
        <nav className="w-full flex-grow md:w-auto md:flex justify-end items-center space-x-4">
          {/* Types of Accommodation (simplified for now, actual implementation might be a dropdown) */}
          <div className="hidden lg:flex items-center space-x-4 text-gray-600">
            <span className="font-medium">Rooms</span>
            <span className="font-medium">Mansion</span>
            <span className="font-medium">Countryside</span>
            {/* Add more categories here or make dynamic */}
          </div>

          <Button variant="outline" size="small" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button size="small">Sign Up</Button>
          {/* Hamburger menu for mobile - placeholder */}
          <button className="md:hidden text-gray-600 hover:text-indigo-600 ml-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;