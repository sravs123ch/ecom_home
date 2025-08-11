import React from 'react';

const categories = [
  { name: 'Mobiles', image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
  { name: 'Fashion', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
  { name: 'Electronics', image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
  { name: 'Home', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
  { name: 'Beauty', image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
  { name: 'Books', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
  { name: 'Sports', image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
  { name: 'Toys', image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
  { name: 'Grocery', image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
  { name: 'Travel', image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' }
];

const CategoryNav = () => {
return (
  <div className="bg-white shadow-sm border-b">
    <div className="w-full">
      <div className="flex items-center justify-center py-3 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-8 px-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[80px] cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-2 transform group-hover:scale-110 transition-transform duration-200">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-primary-500 transition-colors text-center">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
};

export default CategoryNav;