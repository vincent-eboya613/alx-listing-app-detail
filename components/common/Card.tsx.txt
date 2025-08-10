// components/common/Card.tsx
import React from 'react';
import { CardProps } from '@/interfaces';

// IMPORTANT: Change this line to be a NAMED export
export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className || ''}`}>
      {children}
    </div>
  );
};
// If you had 'export default Card;' previously, make sure it's removed.