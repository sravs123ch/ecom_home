import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProductCard } from "../product/ProductCard";

export const FeaturedProducts = ({
  title,
  products,
  viewAllLink = "/collections",
}) => {
  return (
    <section className="px-8">
      <div className="w-full">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
            <div className="mt-2 w-24 h-1 bg-[#FF5A5F] rounded-full"></div>
          </div>
          {viewAllLink && (
            <Link
              to={viewAllLink}
              className="text-[#FF5A5F] font-medium hover:text-indigo-700 transition-colors flex items-center"
            >
              View All
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
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
