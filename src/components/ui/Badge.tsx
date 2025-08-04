import React from 'react';

type BadgeVariant = 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = 'default', 
  children, 
  className = '' 
}) => {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
  
  const variantStyles = {
    default: 'bg-indigo-100 text-indigo-800',
    secondary: 'bg-emerald-100 text-emerald-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-amber-100 text-amber-800',
    error: 'bg-red-100 text-red-800',
    outline: 'bg-transparent border border-slate-200 text-slate-700'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};