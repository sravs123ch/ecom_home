import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

interface PromotionProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const PromotionBanner: React.FC<PromotionProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <section className="py-4">
      <div className="px-4">
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-2xl overflow-hidden h-80 md:h-96"
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-xl">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                {title}
              </h3>
              <p className="text-white/90 text-lg mb-6">{description}</p>
              <Link to={link}>
                <Button
                  size="lg"
                  className="text-indigo-700"
                >
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
