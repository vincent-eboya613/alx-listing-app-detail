// components/properties/PropertyCard.tsx
import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/common/Card'; // WITH CURLY BRACES (as per ALX specific requirement for Card)
import Button from '@/components/common/Button'; // NO CURLY BRACES
import { Property } from '@/interfaces';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
        <Image
          src={property.imageUrl}
          alt={property.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
          {/* Heart icon for favorites - placeholder */}
          <svg
            className="w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{property.title}</h3>
      <p className="text-gray-600 text-sm mb-2">{property.location}</p>
      <div className="flex items-center text-gray-700 text-sm mb-3">
        <span className="flex items-center mr-3">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
          {property.beds} Bed{property.beds !== 1 ? 's' : ''}
        </span>
        <span className="flex items-center mr-3">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          {property.baths} Bath{property.baths !== 1 ? 's' : ''}
        </span>
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-3-3H5a3 3 0 00-3 3v2h5m-9 0h9"></path></svg>
          {property.guests} Guest{property.guests !== 1 ? 's' : ''}
        </span>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-2xl font-bold text-gray-900">
          ${property.price}
          <span className="text-base font-normal text-gray-500"> / night</span>
        </span>
        <Button size="small">View Details</Button>
      </div>
    </Card>
  );
};

export default PropertyCard;
