// interfaces/index.ts

// Define the structure for the address object
export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

// Define the structure for the offers object
export interface OffersProps {
  bed: string; // Changed to string based on sample "3", "4"
  shower: string; // Changed to string
  occupants: string; // Changed to string
}

// Define the structure for a single review
export interface ReviewProps {
  name: string;
  avatar: string;
  rating: number; // Assuming a number for star rating
  comment: string;
}

// Define the main structure for a property
export interface PropertyProps {
  id: string; // Added 'id' for dynamic routing (will use 'name' as id as per instructions later)
  name: string;
  address: AddressProps; // Nested address object
  rating: number;
  category: string[]; // Array of strings for categories/amenities
  price: number;
  offers: OffersProps; // Nested offers object
  image: string; // Main image URL
  discount: string; // Discount percentage as a string ("" if none, "30" if 30%)
  // For Milestone 3, we'll need a way to store multiple images and reviews
  // Let's add placeholders for now, we'll fill them with real data later
  images: string[]; // Array of image URLs for the detail page gallery
  description: string; // Full property description
  reviews: ReviewProps[]; // Array of review objects
}

// Define interface for filter labels (from Milestone 0)
export interface FilterPillProps {
  label: string;
  onClick: (label: string) => void;
  isActive: boolean;
}

// Define interface for Card component props (from Milestone 0)
export interface CardProps {
  children: React.ReactNode;
  className?: string; // Allow custom Tailwind classes
}
