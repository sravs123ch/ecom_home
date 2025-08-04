import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Category } from '../../types';

interface CategorySectionProps {
  categories: Category[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  const featuredCategories = categories.filter(category => category.featured);

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Shop by Category</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Browse our wide range of products across various categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/collections" 
            className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
          >
            View All Categories
            <svg 
              className="ml-1 h-4 w-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      <Link to={`/category/${category.id}`} className="block h-full">
        <div className="relative h-60">
          <img 
            src={category.image} 
            alt={category.name} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold text-white mb-1">
              {category.name}
            </h3>
            <p className="text-sm text-slate-200 opacity-90">
              {category.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};