import React from "react";
import { ArrowRight } from "lucide-react";

const sampleProducts = [
  {
    title: "Designer Rakhis",
    offer: "From ₹99",
    image: "https://static.toiimg.com/thumb/65528952/raksha.jpg?width=636&height=358&resize=4",
  },
  {
    title: "Rakhi Gift Hampers",
    offer: "Min. 40% Off",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/rakhi-set/f/d/z/4-gift-hamper-for-brother-rakhi-mug-chocolate-poorak-original-imahdfwjrnje9udq.jpeg?q=70&crop=false",
  },
  {
    title: "Rakhi Thali Sets",
    offer: "Min. 30% Off",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-rakhi/5/a/k/5-gbs256-rakhi353-craftvatika-original-imahd5uxryfz8qzb.jpeg?q=70&crop=false",
  },
  {
    title: "Kids Cartoon Rakhis",
    offer: "From ₹59",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/rakhi-set/z/8/a/5-doraemon-cartoon-rakhi-combo-set-of-2-meira-jewellery-original-imahd3sehzjg6a5e.jpeg?q=70",
  },
];

const fashionProducts = [
  {
    title: "Sarees",
    offer: "Min. 60% Off",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
  },
  {
    title: "Jewelry",
    offer: "Min. 55% Off",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop",
  },
  {
    title: "Perfumes",
    offer: "Min. 45% Off",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/perfume/e/9/h/80-hamilton-edp-srk-s-favorite-luxury-gift-pack-20ml-x-4-set-eau-original-imah29pvcwvuqgtk.jpeg?q=70&crop=false",
  },
  {
    title: "Handbags",
    offer: "Min. 65% Off",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300&h=300&fit=crop",
  },
];

const PromoBlock = ({ title, products }: { title: string; products: typeof sampleProducts }) => (
  <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow h-full flex flex-col">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <button className="text-[#FF5A5F] hover:underline flex items-center gap-1 text-sm">
        View all <ArrowRight size={16} />
      </button>
    </div>
    <div className="grid grid-cols-2 gap-4 flex-grow">
      {products.map((item, idx) => (
        <div key={idx} className="text-center group h-full flex flex-col">
          <div className="overflow-hidden rounded flex-grow">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover rounded transition-transform group-hover:scale-105"
            />
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-700 line-clamp-1">{item.title}</p>
            <p className="text-green-600 font-semibold text-sm">{item.offer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SideBanner = () => (
  <div className="bg-gradient-to-b from-pink-100 to-purple-100 rounded-lg overflow-hidden h-full w-full">
    <div className="h-full flex flex-col p-4">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Festival Special</h3>
        <p className="text-gray-600">Exclusive offers for you</p>
      </div>
      <div className="flex-grow overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&h=800&fit=crop"
          alt="Fashion Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition w-full">
        Explore Now
      </button>
    </div>
  </div>
);

export const FestivalOfferBanner = () => {
  return (
    <section className="bg-gray-50 py-8 px-4 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <PromoBlock title="Rakshabandhan Specials" products={sampleProducts} />
        <PromoBlock title="Festival Fashion" products={fashionProducts} />
        <div className="hidden lg:block h-full">
          <SideBanner />
        </div>
      </div>
    </section>
  );
};