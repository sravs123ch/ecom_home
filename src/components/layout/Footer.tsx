import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">ShopHub</h3>
            <p className="mb-4 text-slate-300">
              Discover the latest trends and products at competitive prices. Shop with confidence with our easy returns and secure checkout.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FF5A5F] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#FF5A5F] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#FF5A5F] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-[#FF5A5F] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/collections" className="text-slate-300 hover:text-[#FF5A5F] transition-colors">Collections</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-[#FF5A5F] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-300 hover:text-[#FF5A5F] transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-[#FF5A5F] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-slate-300 hover:text-[#FF5A5F] transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-slate-300 hover:text-[#FF5A5F] transition-colors">Shipping Information</Link>
              </li>
              <li>
                <Link to="/returns" className="text-slate-300 hover:text-[#FF5A5F] transition-colors">Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="/track-order" className="text-slate-300 hover:text-[#FF5A5F] transition-colors">Track Order</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-300 hover:text-[#FF5A5F] transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-[#FF5A5F]" />
                <span className="text-slate-300">123 Commerce St, Shopping City, SC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-[#FF5A5F]" />
                <span className="text-slate-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-[#FF5A5F]" />
                <span className="text-slate-300">support@shophub.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Subscribe to our newsletter</h3>
              <p className="text-slate-300">Get the latest updates on new products and upcoming sales</p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 rounded-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#FF5A5F] text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-700 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};