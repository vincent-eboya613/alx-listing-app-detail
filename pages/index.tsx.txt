// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import PropertyItem from '@/components/properties/PropertyItem';
import Pill from '@/components/common/Pill';
import { HERO_BG_IMAGE, PROPERTY_LISTING_SAMPLE, FILTER_LABELS } from '@/constants';
import { PropertyProps } from '@/interfaces';

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);

  const handleFilterClick = (label: string) => {
    if (activeFilter === label || (label === 'All' && activeFilter === null)) {
      setActiveFilter(null);
    } else {
      setActiveFilter(label);
    }
  };

  const filteredProperties = PROPERTY_LISTING_SAMPLE.filter(property => {
    if (!activeFilter || activeFilter === 'All') {
      return true;
    }
    return property.category.some(cat => cat.toLowerCase() === activeFilter.toLowerCase());
  });

  return (
    <Layout>
      <Head>
        <title>ALX Listing App - Home</title>
        <meta name="description" content="Find your next stay with ALX Listing App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center overflow-hidden">
        {/* TEMPORARY TEST: Using width and height instead of fill */}
        <Image
          src={HERO_BG_IMAGE}
          alt="Hero Background"
          width={1920} // Example width for testing
          height={1080} // Example height for testing
          className="z-0 brightness-75"
          // Removed: style={{ objectFit: 'cover' }} and sizes="100vw" for this test
        />
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Explore Categories</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {FILTER_LABELS.map((label) => (
            <Pill
              key={label}
              label={label}
              onClick={() => handleFilterClick(label)}
              isActive={activeFilter === label || (activeFilter === null && label === 'All')}
            />
          ))}
        </div>
      </section>

      {/* Property Listings Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Listings</h2>
        {filteredProperties.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No properties found for this filter. Try another!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProperties.map((property) => (
              <PropertyItem key={property.id} property={property} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Home;