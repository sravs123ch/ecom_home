// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// export const OfferBanner = () => {
//   const offers = [
//     {
//       // title: "Puret, Kent & more",
//       // subtitle: "Water purifiers",
//       // discount: "Min. 40% Off",
//       // image:"https://m.media-amazon.com/images/I/71ZZn2NMnjL._SX679_.jpg"  
//       image:"https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/b9ebd15a7ef5ae15.jpg?q=60"  
// },
//     {
//       // title: "Price drop alert!",
//       // subtitle: "From ₹5,390",
//       // brand: "Samsung, LG & more",
//       // image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
//     image:"https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/8666b744ab501a32.jpg?q=60"  
//     },
//     {
//       // title: "motorola edge 60 Fusion",
//       // subtitle: "From ₹20,999* ₹25,999",
//       // image: "https://images-cdn.ubuy.co.in/681dfbc9c845e982e309267b-motorola-edge-60-fusion-smartphone-6-67.jpg"
//     image:"https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/e25af625ed7ad312.jpg?q=60"  
//     },
//     {
//       // title: "Saving goals achieved!",
//       // subtitle: "Sports shoes, sneakers...",
//       // discount: "Min. 60% Off",
//       // image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
//     image:"https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/d4d13a167728ad9a.png?q=60"  
//     },
//     {
//       // title: "Packs your vibe!",
//       // subtitle: "Trendy trolleys",
//       // discount: "Min. 75% Off",
//       // image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
//      image:"https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/f6e310db723e9fb0.jpg?q=60"  
//     },
//     {
//       // title: "FIREBOOM SALE",
//       // subtitle: "Flipkart Travel",
//       // highlight: "International Flights From ₹4,999",
//       // coupon: "CODE : FRINT",
//       // image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
//     image:"https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/04688237bd317bd1.jpg?q=60"  
//     }
//   ];

//   return (
//     <section className="bg-white py-6 px-4">
//       <div className="w-full">
//         <div className="grid grid-cols-3 gap-4">
//           {offers.map((offer, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ 
//                 y: -5,
//                 boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
//               }}
//               className="bg-white shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all w-full"
//             >
//               <Link to="/offers" className="block h-full">
//                 <div className="relative h-60 w-full">
//                   {/* Image with overlay */}
//                   <img 
//                     src={offer.image} 
//                     // alt={offer.title}
//                     className="h-full w-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
//                     {/* Text content */}
//                     <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
//                       {/* <h3 className="font-medium text-sm md:text-base">{offer.title}</h3>
//                       <p className="text-xs mt-1">{offer.subtitle}</p>
//                       {offer.discount && (
//                         <p className="text-xs text-green-300 font-medium mt-1">{offer.discount}</p>
//                       )}
//                       {offer.brand && (
//                         <p className="text-xs text-gray-200 mt-1">{offer.brand}</p>
//                       )}
//                       {offer.highlight && (
//                         <p className="text-xs font-medium text-blue-200 mt-1">{offer.highlight}</p>
//                       )}
//                       {offer.coupon && (
//                         <p className="text-xs font-bold text-orange-200 mt-1">{offer.coupon}</p>
//                       )} */}
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// export const OfferBanner = () => {
//   const offers = [
//     {
//       image:"https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/b9ebd15a7ef5ae15.jpg?q=60"  
// },
//     {
    
//     image:"https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/8666b744ab501a32.jpg?q=60"  
//     },
//     {
    
//     image:"https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/e25af625ed7ad312.jpg?q=60"  
//     },
//     {
//     image:"https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/d4d13a167728ad9a.png?q=60"  
//     },
//     {
//      image:"https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/f6e310db723e9fb0.jpg?q=60"  
//     },
//     {
//     image:"https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/04688237bd317bd1.jpg?q=60"  
//     }
//   ];

//   return (
//     <section className="bg-white py-6 px-4">
//       <div className="w-full">
//         <div className="grid grid-cols-3 gap-2">
//           {offers.map((offer, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ 
//                 y: -5,
//                 boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
//               }}
//               className="bg-white shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all w-full"
//             >
//               <Link to="/offers" className="block h-full">
//                 <div className="relative h-60 w-full">
//                   {/* Image with overlay */}
//                   <img 
//                     src={offer.image} 
                
//                     className="h-full w-full object-contain"
//                   />
                
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const OfferBanner = () => {
  const offers = [
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/b9ebd15a7ef5ae15.jpg?q=60" },
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/8666b744ab501a32.jpg?q=60" },
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/e25af625ed7ad312.jpg?q=60" },
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/d4d13a167728ad9a.png?q=60" },
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/f6e310db723e9fb0.jpg?q=60" },
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1040/560/image/04688237bd317bd1.jpg?q=60" }
  ];

  return (
    <section className="bg-white py-4 sm:py-6 px-2 sm:px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                transition: { duration: 0.2 }
              }}
              className="bg-white shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all w-full"
            >
              <Link to="/offers" className="block h-full">
                <div className="relative aspect-[1040/560]"> 
                  <img 
                    src={offer.image} 
                    alt={`Offer ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/1040x560?text=Offer+Image";
                      e.currentTarget.className = "absolute inset-0 h-full w-full object-contain";
                    }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};