// components/properties/PropertyItem.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import { PropertyProps } from '@/interfaces';
import { Card } from '@/components/common/Card'; // Assuming Card is still relevant and works
// Assuming Button component exists and works
// import Button from '@/components/common/Button'; // Commented out as button is used inside Link now

const PropertyItem: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <Card className="flex flex-col h-full">
      {/* Wrap the image and title with Link for navigation */}
      <Link href={`/property/${property.id}`} passHref>
        <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-t-lg overflow-hidden cursor-pointer">
          <Image
            src={property.image}
            alt={`${property.name} in ${property.address.city}, ${property.address.country}`} // Correct alt text
            layout="fill" // Revert to fill for responsive sizing
            objectFit="cover"
            className="rounded-t-lg"
            unoptimized // Use unoptimized for external images (picsum.photos)
            // Optional: Add an onError handler for broken images
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Image+Error';
            }}
          />
          <div className="absolute top-2 left-2 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full shadow">
            ${property.price}
          </div>
        </div>
      </Link>

      <div className="p-4 flex-grow flex flex-col">
        {/* Wrap the name with Link for navigation */}
        <Link href={`/property/${property.id}`} passHref>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
            {property.name} {/* Display property name instead of address here for main heading */}
          </h3>
        </Link>

        {/* CORRECTED: Access specific properties of the address object */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {property.address.city}, {property.address.state}, {property.address.country}
        </p>

        {/* CORRECTED: Use property.offers for beds, showers, and occupants */}
        <div className="flex justify-between items-center text-gray-700 text-sm mt-auto">
          {property.offers && ( // Check if offers exist before accessing
            <>
              <span className="flex items-center">
                {/* SVG for Bed icon */}
                <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                {property.offers.bed} Bed{property.offers.bed !== "1" ? 's' : ''}
              </span>
              <span className="flex items-center">
                {/* SVG for Shower icon */}
                <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                {property.offers.shower} Shower{property.offers.shower !== "1" ? 's' : ''}
              </span>
              <span className="flex items-center">
                {/* SVG for Occupants icon (using a generic one, you can change it) */}
                <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                {property.offers.occupants} Occupants
              </span>
            </>
          )}
        </div>
        <div className="mt-4">
          {/* Link the "View Details" button as well */}
          <Link href={`/property/${property.id}`} passHref>
             <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                View Details
             </button>
          </Link>
          {/* Removed direct Button component import as it's now wrapped inside a Link */}
        </div>
      </div>
    </Card>
  );
};

export default PropertyItem;