// components/common/Pill.tsx
import React from 'react';

interface PillProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive = false, className }) => {
  const activeClasses = isActive
    ? 'bg-indigo-600 text-white'
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeClasses} ${className || ''}`}
    >
      {label}
    </button>
  );
};

export default Pill;