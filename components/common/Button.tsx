// components/common/Button.tsx
import React from 'react';
import { ButtonProps } from '@/interfaces'; // This import will work once interfaces/index.ts is created

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}) => {
  const baseStyles = 'font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out';

  const variantStyles = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50',
  };

  const sizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg px-6 py-3',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
