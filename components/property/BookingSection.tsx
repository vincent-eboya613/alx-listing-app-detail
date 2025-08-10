// components/property/BookingSection.tsx
import React, { useState, useEffect } from "react";

interface BookingSectionProps {
  price: number; // Nightly price
}

const BookingSection: React.FC<BookingSectionProps> = ({ price }) => {
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");
  const [totalCost, setTotalCost] = useState<number>(0);
  const [numberOfNights, setNumberOfNights] = useState<number>(0);

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);

      // Calculate difference in milliseconds
      const diffTime = Math.abs(end.getTime() - start.getTime());
      // Convert to days
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays > 0) {
        setNumberOfNights(diffDays);
        setTotalCost(price * diffDays);
      } else {
        setNumberOfNights(0);
        setTotalCost(0);
      }
    } else {
      setNumberOfNights(0);
      setTotalCost(0);
    }
  }, [checkInDate, checkOutDate, price]);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-20"> {/* Added sticky for basic fixed positioning */}
      <h3 className="text-3xl font-bold text-gray-900 mb-4">${price}<span className="text-lg font-normal text-gray-600">/night</span></h3>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="check-in" className="block text-sm font-medium text-gray-700">Check-in</label>
          <input
            type="date"
            id="check-in"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="check-out" className="block text-sm font-medium text-gray-700">Check-out</label>
          <input
            type="date"
            id="check-out"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Nightly rate x {numberOfNights} nights</span>
          <span>${price * numberOfNights}</span>
        </div>
        <div className="flex justify-between font-bold text-xl text-gray-900">
          <span>Total payment:</span>
          <span>${totalCost}</span>
        </div>
      </div>

      <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md text-lg transition duration-300">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
