// components/layout/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // Using React Fragment <> as per new requirements, and min-h-screen for main
    <>
      <Header />
      <main className="flex-grow min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;