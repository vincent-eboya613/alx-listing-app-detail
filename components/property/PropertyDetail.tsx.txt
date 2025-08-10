// components/property/PropertyDetail.tsx
import React from 'react'; // <--- ADD THIS LINE
import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import Image from "next/image";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  // Dummy data for About Host (as it's not in PropertyProps currently)
  const aboutHost = {
    name: "Host Name",
    bio: "Experienced host committed to providing great stays. Available for any questions.",
    avatar: "https://picsum.photos/seed/host-avatar/50/50", // Placeholder
  };

  // Dummy descriptions for tabs (you can expand these later)
  const tabs = [
    {
      name: "Overview",
      content: property.description || "No description provided.",
    },
    {
      name: "What we offer",
      content: (
        <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
              {amenity}
            </li>
          ))}
          {property.offers && (
            <>
              <li className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Beds: {property.offers.bed}</li>
              <li className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Showers: {property.offers.shower}</li>
              <li className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Occupants: {property.offers.occupants}</li>
            </>
          )}
        </ul>
      ),
    },
    {
      name: "Reviews",
      content: <ReviewSection reviews={property.reviews} />,
    },
    {
      name: "About Host",
      content: (
        <div className="flex items-start space-x-4 mt-4">
          <Image
            src={aboutHost.avatar}
            alt={aboutHost.name}
            width={64}
            height={64}
            className="rounded-full object-cover"
            unoptimized // Use unoptimized if the image is remote and you don't want Next.js optimization
          />
          <div>
            <p className="font-semibold text-lg">{aboutHost.name}</p>
            <p className="text-gray-600 text-sm">{aboutHost.bio}</p>
          </div>
        </div>
      ),
    },
  ];

  // State for active tab
  const [activeTab, setActiveTab] = React.useState(tabs[0].name);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Property Header */}
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">{property.name}</h1>
        <div className="flex items-center space-x-4 mt-2 text-gray-600">
          <span className="flex items-center text-yellow-500 font-semibold">
            ⭐ {property.rating}
          </span>
          <span>• {property.address.city}, {property.address.state}, {property.address.country}</span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Main Image - span 2 columns on larger screens */}
        <div className="md:col-span-2 relative h-96">
          <Image
            src={property.image}
            alt={property.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
            unoptimized
          />
        </div>
        {/* Additional Images */}
        {property.images && property.images.slice(0, 4).map((imgSrc, index) => (
          <div key={index} className="relative h-48">
            <Image
              src={imgSrc}
              alt={`${property.name} ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
              unoptimized
            />
          </div>
        ))}
        {property.images && property.images.length > 5 && (
          <div className="relative h-48 flex items-center justify-center bg-gray-200 rounded-lg shadow-md text-gray-600">
            <span className="text-xl">+{property.images.length - 5} More</span>
          </div>
        )}
      </div>

      {/* Main Content Area (Description, Amenities, Reviews) and Booking Section */}
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-2/3">
          {/* Tabbed Description */}
          <div className="mb-6">
            <div className="flex border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`px-4 py-2 text-lg font-medium ${
                    activeTab === tab.name
                      ? "border-b-2 border-blue-500 text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="mt-4 text-gray-700">
              {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
          </div>
        </div>

        {/* Booking Section (fixed position on scroll is a later enhancement) */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;