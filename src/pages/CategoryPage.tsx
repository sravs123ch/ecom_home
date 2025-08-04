import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ChevronRight, SlidersHorizontal, X, Search } from 'lucide-react';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/ui/Button';
import { categories, products } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const category = categories.find(cat => cat.id === categoryId);
  const categoryProducts = products.filter(product => product.category === categoryId);

  // All available colors and sizes from products
  const allColors = Array.from(new Set(
    categoryProducts
      .filter(p => p.colors)
      .flatMap(p => p.colors || [])
  ));
  
  const allSizes = Array.from(new Set(
    categoryProducts
      .filter(p => p.sizes)
      .flatMap(p => p.sizes || [])
  ));

  // Apply filters and sorting
  const filteredProducts = categoryProducts
    .filter(product => 
      (product.price >= priceRange[0] && product.price <= priceRange[1]) &&
      (selectedColors.length === 0 || (product.colors && selectedColors.some(c => product.colors.includes(c)))) &&
      (selectedSizes.length === 0 || (product.sizes && selectedSizes.some(s => product.sizes.includes(s)))) &&
      (searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low-high':
          return a.price - b.price;
        case 'price-high-low':
          return b.price - a.price;
        case 'newest':
          return a.isNew ? -1 : b.isNew ? 1 : 0;
        case 'bestselling':
          return a.isBestseller ? -1 : b.isBestseller ? 1 : 0;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.isFeatured ? -1 : b.isFeatured ? 1 : 0;
      }
    });

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 500]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSearchQuery('');
  };

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Category Not Found</h1>
        <p className="text-slate-600 mb-8">The category you're looking for doesn't exist or has been removed.</p>
        <Button as={Link} to="/">Return to Home</Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${category.name} | ShopHub`}</title>
        <meta name="description" content={category.description} />
      </Helmet>

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-6">
            <ol className="flex items-center text-sm">
              <li>
                <Link to="/" className="text-slate-500 hover:text-indigo-600 transition-colors">Home</Link>
              </li>
              <ChevronRight size={14} className="mx-2 text-slate-400" />
              <li>
                <Link to="/collections" className="text-slate-500 hover:text-indigo-600 transition-colors">Collections</Link>
              </li>
              <ChevronRight size={14} className="mx-2 text-slate-400" />
              <li className="text-slate-900 font-medium capitalize">
                {category.name}
              </li>
            </ol>
          </nav>

          {/* Category header */}
          <div className="relative h-64 rounded-xl overflow-hidden mb-8">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-transparent flex items-center">
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.name}</h1>
                <p className="text-white/90 max-w-md">{category.description}</p>
              </div>
            </div>
          </div>

          {/* Filters and products */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile filter button */}
            <div className="lg:hidden">
              <Button 
                onClick={() => setFilterOpen(true)}
                variant="outline" 
                fullWidth
                leftIcon={<SlidersHorizontal size={18} />}
              >
                Filters ({selectedColors.length + selectedSizes.length + (priceRange[0] > 0 || priceRange[1] < 500 ? 1 : 0)})
              </Button>
            </div>

            {/* Mobile filter sidebar */}
            <AnimatePresence>
              {filterOpen && (
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 25 }}
                  className="fixed inset-0 z-50 bg-white p-6 overflow-y-auto lg:hidden"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-slate-900">Filters</h2>
                    <button 
                      onClick={() => setFilterOpen(false)}
                      className="p-2 rounded-full hover:bg-slate-100"
                    >
                      <X size={20} className="text-slate-700" />
                    </button>
                  </div>
                  
                  {/* Filter content - same as desktop but adapted for mobile */}
                  <div className="space-y-8">
                    {/* Search */}
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 mb-4">Search</h3>
                      <div className="relative">
                        <input 
                          type="text"
                          placeholder="Search products..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      </div>
                    </div>

                    {/* Price range */}
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 mb-4">Price Range</h3>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-600">${priceRange[0]}</span>
                        <span className="text-sm text-slate-600">${priceRange[1]}</span>
                      </div>
                      <input 
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                      />
                    </div>

                    {/* Colors */}
                    {allColors.length > 0 && (
                      <div>
                        <h3 className="text-sm font-medium text-slate-900 mb-4">Colors</h3>
                        <div className="flex flex-wrap gap-2">
                          {allColors.map(color => (
                            <button
                              key={color}
                              onClick={() => toggleColor(color)}
                              className={`px-3 py-1 rounded-full border text-sm transition-colors ${
                                selectedColors.includes(color)
                                  ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                                  : 'border-slate-300 text-slate-700 hover:border-slate-400'
                              }`}
                            >
                              {color}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Sizes */}
                    {allSizes.length > 0 && (
                      <div>
                        <h3 className="text-sm font-medium text-slate-900 mb-4">Sizes</h3>
                        <div className="flex flex-wrap gap-2">
                          {allSizes.map(size => (
                            <button
                              key={size}
                              onClick={() => toggleSize(size)}
                              className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${
                                selectedSizes.includes(size)
                                  ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                                  : 'border-slate-300 text-slate-700 hover:border-slate-400'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
                      <Button onClick={clearFilters} variant="outline">Clear All Filters</Button>
                      <Button onClick={() => setFilterOpen(false)}>Apply Filters</Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop sidebar filters */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 space-y-8">
                <h2 className="text-lg font-bold text-slate-900 mb-6">Filters</h2>

                {/* Search */}
                <div>
                  <h3 className="text-sm font-medium text-slate-900 mb-4">Search</h3>
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                {/* Price range */}
                <div>
                  <h3 className="text-sm font-medium text-slate-900 mb-4">Price Range</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">${priceRange[0]}</span>
                    <span className="text-sm text-slate-600">${priceRange[1]}</span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                </div>

                {/* Colors */}
                {allColors.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-slate-900 mb-4">Colors</h3>
                    <div className="flex flex-wrap gap-2">
                      {allColors.map(color => (
                        <button
                          key={color}
                          onClick={() => toggleColor(color)}
                          className={`px-3 py-1 rounded-full border text-sm transition-colors ${
                            selectedColors.includes(color)
                              ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                              : 'border-slate-300 text-slate-700 hover:border-slate-400'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sizes */}
                {allSizes.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-slate-900 mb-4">Sizes</h3>
                    <div className="flex flex-wrap gap-2">
                      {allSizes.map(size => (
                        <button
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${
                            selectedSizes.includes(size)
                              ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                              : 'border-slate-300 text-slate-700 hover:border-slate-400'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Clear filters */}
                {(selectedColors.length > 0 || selectedSizes.length > 0 || priceRange[0] > 0 || priceRange[1] < 500 || searchQuery) && (
                  <Button onClick={clearFilters} variant="outline">Clear All Filters</Button>
                )}
              </div>
            </div>

            {/* Products grid */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div>
                  <p className="text-slate-600 mb-1">{filteredProducts.length} products</p>
                </div>
                <div className="mt-4 sm:mt-0 w-full sm:w-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full sm:w-auto px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="newest">Newest</option>
                    <option value="bestselling">Best Selling</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-slate-50 rounded-xl">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">No products found</h3>
                  <p className="text-slate-600 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CategoryPage;