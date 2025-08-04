import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const PromoGridSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="grid grid-cols-1 gap-8">
            <PromoCard
              title="Flash Sale"
              subtitle="Up to 50% Off"
              description="Limited time offers on selected electronics"
              image="https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              link="/collections/flash-sale"
              color="from-emerald-900/80 to-transparent"
            />
            <PromoCard
              title="New Arrivals"
              subtitle="Spring 2025"
              description="Fresh styles to refresh your wardrobe"
              image="https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              link="/collections/new-arrivals"
              color="from-indigo-900/80 to-transparent"
            />
          </div>

          {/* Right Column */}
          <PromoCard
            title="Home Decor"
            subtitle="Transform Your Space"
            description="Stylish and functional pieces for every room"
            image="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            link="/category/home-decor"
            color="from-slate-900/80 to-transparent"
            large
          />
        </div>
      </div>
    </section>
  );
};

interface PromoCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  color: string;
  large?: boolean;
}

const PromoCard: React.FC<PromoCardProps> = ({
  title,
  subtitle,
  description,
  image,
  link,
  color,
  large = false,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`group relative rounded-xl overflow-hidden shadow-md ${
        large ? "h-full min-h-[400px]" : "h-[200px]"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} flex items-center`}
      >
        <div className="p-6 md:p-8">
          <span className="inline-block text-sm font-medium text-white/90 mb-2">
            {subtitle}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-white/80 text-sm mb-4 max-w-xs">{description}</p>
          <Link
            to={link}
            className="inline-flex items-center text-white font-medium hover:text-indigo-200 transition-colors"
          >
            Discover Now
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
