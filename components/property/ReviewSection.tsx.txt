// components/property/ReviewSection.tsx
import { ReviewProps } from "@/interfaces/index"; // Ensure this path is correct
import Image from "next/image"; // For optimized image display

interface ReviewSectionProps {
  reviews: ReviewProps[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p className="text-gray-600 mt-4">No reviews yet. Be the first!</p>;
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Reviews ({reviews.length})</h3>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border border-gray-200 p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-3">
              <Image
                src={review.avatar}
                alt={review.name}
                width={48} // Define explicit width/height
                height={48}
                className="rounded-full object-cover mr-4"
                unoptimized // Use unoptimized if the image is remote and you don't want Next.js optimization
              />
              <div>
                <p className="font-bold text-lg text-gray-800">{review.name}</p>
                <p className="text-yellow-500 text-sm">
                  {/* Simple star display based on rating */}
                  {'⭐'.repeat(Math.round(review.rating))} ({review.rating})
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;