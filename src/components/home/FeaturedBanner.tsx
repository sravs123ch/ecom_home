import { Link } from 'react-router-dom';

export const FeaturedSection = () => {
  const topPicks = [
    {
      id: 1,
      title: "Wireless Earbuds",
      discount: "Min. 50% Off",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Smart Watches",
      discount: "Min. 45% Off",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Bluetooth Speakers",
      discount: "Min. 55% Off",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Power Banks",
      discount: "Min. 60% Off",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="bg-white px-4 py-8 w-full">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 min-h-[500px]">
        {/* Left: Season's Top Picks (2 columns on large screens) */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-5 flex flex-col">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold text-gray-900">Top Picks</h2>
            <Link to="/top-picks" className="text-[#FF5A5F] hover:text-[#FF5A5F] text-sm font-medium flex items-center">
              View All <span className="ml-1">›</span>
            </Link>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-2 gap-4 overflow-y-auto flex-grow">
            {topPicks.map((item) => (
              <Link 
                key={item.id} 
                to={`/product/${item.id}`}
                className="border border-gray-100 rounded-lg p-3 hover:shadow-md transition-all duration-200 flex flex-col items-center"
              >
                <div className="w-full h-40 mb-3 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-800 text-center leading-tight">{item.title}</h4>
                <p className="text-green-600 text-xs font-bold mt-2">{item.discount}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Main Banner (3 columns on large screens) */}
        <div className="lg:col-span-3 bg-gradient-to-r from-[#fff1f1] to-[#ffe5e5] rounded-xl p-8 flex flex-col justify-between h-full">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Top Selling Smartphones</h1>
            <p className="text-gray-600 text-base">Latest Technology from Premium Brands</p>
          </div>
          
          <div className="my-6 flex justify-center">
            <img
              src="https://images.indianexpress.com/2024/10/Diwali-Discounts.jpg"
              alt="Latest Smartphones Collection"
              className="h-64 object-contain"
            />
          </div>
          
          <Link 
            to="/smartphones" 
            className="bg-[#FF5A5F] hover:bg-[#FF5A5F] text-white px-6 py-3 rounded-lg text-sm font-medium text-center transition-colors duration-200"
          >
            Explore Now →
          </Link>
        </div>
      </div>
    </section>
  );
};