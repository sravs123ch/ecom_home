import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Heart,
  User,
  Search,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { categories } from "../../data/products";

interface CategoryWithSub {
  id: string;
  name: string;
  subCategories?: Array<{
    id: string;
    name: string;
    items?: string[];
  }>;
}

const categoryStructure: CategoryWithSub[] = [
  {
    id: "electronics",
    name: "Electronics",
    subCategories: [
      {
        id: "smartphones",
        name: "Smartphones",
        items: ["Android Phones", "iPhones", "Gaming Phones"],
      },
      {
        id: "laptops",
        name: "Laptops",
        items: ["Gaming Laptops", "Ultrabooks", "2-in-1 Laptops"],
      },
      {
        id: "audio",
        name: "Audio Devices",
        items: ["Headphones", "Bluetooth Speakers", "Earbuds"],
      },
    ],
  },
  {
    id: "clothing",
    name: "Clothing",
    subCategories: [
      {
        id: "men",
        name: "Men",
        items: ["T-Shirts", "Jeans", "Jackets"],
      },
      {
        id: "women",
        name: "Women",
        items: ["Dresses", "Tops", "Activewear"],
      },
      {
        id: "kids",
        name: "Kids",
        items: ["Shirts", "Shorts", "Sleepwear"],
      },
    ],
  },
  {
    id: "home-decor",
    name: "Home & Decor",
    subCategories: [
      {
        id: "furniture",
        name: "Furniture",
        items: ["Sofas", "Coffee Tables", "Beds"],
      },
      {
        id: "lighting",
        name: "Lighting",
        items: ["Ceiling Lights", "Table Lamps", "Wall Lights"],
      },
      {
        id: "textiles",
        name: "Textiles",
        items: ["Curtains", "Rugs", "Cushions"],
      },
    ],
  },
  {
    id: "sports",
    name: "Sports & Fitness",
    subCategories: [
      {
        id: "gym",
        name: "Gym Equipment",
        items: ["Treadmills", "Dumbbells", "Yoga Mats"],
      },
      {
        id: "outdoor",
        name: "Outdoor Sports",
        items: ["Cycling", "Football", "Tennis"],
      },
    ],
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    subCategories: [
      {
        id: "skincare",
        name: "Skincare",
        items: ["Moisturizers", "Cleansers", "Sunscreens"],
      },
      {
        id: "makeup",
        name: "Makeup",
        items: ["Lipsticks", "Foundations", "Mascaras"],
      },
    ],
  },
  {
    id: "books",
    name: "Books & Media",
    subCategories: [
      {
        id: "fiction",
        name: "Fiction",
        items: ["Novels", "Fantasy", "Mystery"],
      },
      {
        id: "non-fiction",
        name: "Non-Fiction",
        items: ["Biographies", "Self-Help", "Business"],
      },
      {
        id: "media",
        name: "Media",
        items: ["Audiobooks", "DVDs", "Magazines"],
      },
    ],
  },
  {
    id: "toys",
    name: "Toys & Games",
    subCategories: [
      {
        id: "educational",
        name: "Educational Toys",
        items: ["STEM Kits", "Puzzles", "Flash Cards"],
      },
      {
        id: "action",
        name: "Action & Figures",
        items: ["Superheroes", "Dolls", "RC Toys"],
      },
    ],
  },
  {
    id: "groceries",
    name: "Groceries",
    subCategories: [
      {
        id: "fruits",
        name: "Fruits & Vegetables",
        items: ["Apples", "Tomatoes", "Spinach"],
      },
      {
        id: "staples",
        name: "Staples",
        items: ["Rice", "Wheat Flour", "Lentils"],
      },
      {
        id: "snacks",
        name: "Snacks & Beverages",
        items: ["Chips", "Soda", "Juice"],
      },
    ],
  },
  {
    id: "automotive",
    name: "Automotive",
    subCategories: [
      {
        id: "parts",
        name: "Parts & Accessories",
        items: ["Brakes", "Wipers", "Spark Plugs"],
      },
      {
        id: "tools",
        name: "Tools",
        items: ["Jacks", "Air Compressors", "Repair Kits"],
      },
    ],
  },
  {
    id: "pets",
    name: "Pet Supplies",
    subCategories: [
      {
        id: "food",
        name: "Food",
        items: ["Dry Food", "Wet Food", "Treats"],
      },
      {
        id: "accessories",
        name: "Accessories",
        items: ["Leashes", "Beds", "Toys"],
      },
    ],
  },
  {
    id: "tools",
    name: "Tools & Hardware",
    subCategories: [
      {
        id: "hand-tools",
        name: "Hand Tools",
        items: ["Hammers", "Screwdrivers", "Wrenches"],
      },
      {
        id: "power-tools",
        name: "Power Tools",
        items: ["Drills", "Grinders", "Saws"],
      },
    ],
  },
  {
    id: "garden",
    name: "Garden & Outdoor",
    subCategories: [
      {
        id: "plants",
        name: "Plants & Seeds",
        items: ["Flower Seeds", "Vegetable Seeds", "Potted Plants"],
      },
      {
        id: "furniture",
        name: "Outdoor Furniture",
        items: ["Patio Sets", "Hammocks", "Benches"],
      },
    ],
  },
  {
    id: "office",
    name: "Office Supplies",
    subCategories: [
      {
        id: "stationery",
        name: "Stationery",
        items: ["Pens", "Notebooks", "Markers"],
      },
      {
        id: "electronics",
        name: "Electronics",
        items: ["Printers", "Scanners", "Monitors"],
      },
    ],
  },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const location = useLocation();
  const { itemCount } = useCart();

  // Update scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const getCategoryStructure = (categoryId: string) => {
    return (
      categoryStructure.find((c) => c.id === categoryId)?.subCategories || []
    );
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-[#FF5A5F]">
              ShopHub
            </span>
          </Link>


          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Search"
            >
              <Search size={20} className="text-slate-700" />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <Heart size={20} className="text-slate-700" />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="p-2 rounded-full hover:bg-slate-100 transition-colors relative"
            >
              <ShoppingCart size={20} className="text-slate-700" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* User */}
            <Link
              to="/account"
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <User size={20} className="text-slate-700" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-slate-700" />
              ) : (
                <Menu size={20} className="text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="py-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-4 pr-10 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    aria-label="Search"
                  >
                    <Search size={18} className="text-slate-500" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="text-base font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
                <Link
                  to="/collections"
                  className="text-base font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                >
                  All Collections
                </Link>
                <div className="pt-2 border-t border-slate-200">
                  <Link
                    to="/account"
                    className="flex items-center py-2 text-base font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                  >
                    <User size={18} className="mr-2" />
                    My Account
                  </Link>
                  <Link
                    to="/wishlist"
                    className="flex items-center py-2 text-base font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                  >
                    <Heart size={18} className="mr-2" />
                    Wishlist
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
