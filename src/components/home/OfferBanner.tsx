import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const OfferBanner = () => {
  const offers = [
    {
      title: "Puret, Kent & more",
      subtitle: "Water purifiers",
      discount: "Min. 40% Off",
      image:"https://m.media-amazon.com/images/I/71ZZn2NMnjL._SX679_.jpg"    
},
    {
      title: "Price drop alert!",
      subtitle: "From ₹5,390",
      brand: "Samsung, LG & more",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "motorola edge 60 Fusion",
      subtitle: "From ₹20,999* ₹25,999",
      image: "https://images-cdn.ubuy.co.in/681dfbc9c845e982e309267b-motorola-edge-60-fusion-smartphone-6-67.jpg"
    },
    {
      title: "Saving goals achieved!",
      subtitle: "Sports shoes, sneakers...",
      discount: "Min. 60% Off",
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Packs your vibe!",
      subtitle: "Trendy trolleys",
      discount: "Min. 75% Off",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "FIREBOOM SALE",
      subtitle: "Flipkart Travel",
      highlight: "International Flights From ₹4,999",
      coupon: "CODE : FRINT",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="bg-white py-6 px-4">
      <div className="w-full">
        <div className="grid grid-cols-3 gap-4">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
              }}
              className="bg-white shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all w-full"
            >
              <Link to="/offers" className="block h-full">
                <div className="relative h-48 w-full">
                  {/* Image with overlay */}
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    {/* Text content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-medium text-sm md:text-base">{offer.title}</h3>
                      <p className="text-xs mt-1">{offer.subtitle}</p>
                      {offer.discount && (
                        <p className="text-xs text-green-300 font-medium mt-1">{offer.discount}</p>
                      )}
                      {offer.brand && (
                        <p className="text-xs text-gray-200 mt-1">{offer.brand}</p>
                      )}
                      {offer.highlight && (
                        <p className="text-xs font-medium text-blue-200 mt-1">{offer.highlight}</p>
                      )}
                      {offer.coupon && (
                        <p className="text-xs font-bold text-orange-200 mt-1">{offer.coupon}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};