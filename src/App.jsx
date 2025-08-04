// import React, { useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import { Header } from "./components/layout/Header";
// import { Footer } from "./components/layout/Footer";
// import HomePage from "./pages/HomePage";
// import ProductDetailPage from "./pages/ProductDetailPage";
// import CategoryPage from "./pages/CategoryPage";
// import CartPage from "./pages/CartPage";

// function App() {
//   const location = useLocation();

//   // Scroll to top on route change
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <div className="flex-grow">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/product/:productId" element={<ProductDetailPage />} />
//           <Route path="/category/:categoryId" element={<CategoryPage />} />
//           <Route path="/cart" element={<CartPage />} />
//           {/* Add more routes as needed */}
//         </Routes>
//       </div>
//       <Footer />
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           duration: 3000,
//           style: {
//             background: "#fff",
//             color: "#1f2937",
//             borderRadius: "0.5rem",
//             boxShadow:
//               "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
//           },
//         }}
//       />
//     </div>
//   );
// }

// export default App;
