
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

interface BannerItem {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  textColor?: string;
  buttonVariant?: "default" | "secondary" | "outline" | "ghost";
}

export const BannerSection: React.FC = () => {
  const banners: BannerItem[] = [
    {
      title: "New Arrivals",
      subtitle: "Latest collection just dropped",
      ctaText: "Explore",
      ctaLink: "/collections/new",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      textColor: "text-white",
      buttonVariant: "secondary"
    },
    {
      title: "Best Sellers",
      subtitle: "Most popular items this month",
      ctaText: "View All",
      ctaLink: "/collections/bestsellers",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      textColor: "text-white",
      buttonVariant: "outline"
    },
    {
      title: "Flash Sale",
      subtitle: "Limited time offers",
      ctaText: "Shop Now",
      ctaLink: "/collections/flash-sale",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      textColor: "text-white",
      buttonVariant: "default"
    },
  ];

  return (
    <section className="py-8">
    <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {banners.map((banner, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden h-80 md:h-96 shadow-sm hover:shadow-md"
            >
              {/* Background Image */}
              <img 
                src={banner.image} 
                alt={banner.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70"></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="mb-6">
                  <h3 className={`text-2xl md:text-3xl font-bold ${banner.textColor || "text-white"} mb-2`}>
                    {banner.title}
                  </h3>
                  <p className={`${banner.textColor || "text-white"}/90`}>
                    {banner.subtitle}
                  </p>
                </div>
                <Link to={banner.ctaLink}>
                  <Button 
                    // variant={banner.buttonVariant || "default"} 
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    {banner.ctaText}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};