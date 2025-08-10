// components/layout/Footer.tsx
import React from 'react';
import { APP_NAME } from '@/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} {APP_NAME}. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-400">
          Built for ALX Software Engineering Programme.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
