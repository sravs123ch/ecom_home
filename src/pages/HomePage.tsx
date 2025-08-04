import React from "react";
import { Helmet } from "react-helmet";
import { HeroSection } from "../components/home/HeroSection"; 
// import { CategorySection } from "../components/home/CategorySection";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { PromotionBanner } from "../components/home/PromotionBanner";
import { PromoGridSection } from "../components/home/PromoGridSection";
import { Newsletter } from "../components/home/Newsletter";
import { categories, products, promotions } from "../data/products";
import { BannerSection } from "../components/home/BannerSection";
import { OfferBanner } from '../components/home/OfferBanner';
import { FestivalOfferBanner } from '../components/home/FestivalOfferBanner';
import { FeaturedSection } from '../components/home/FeaturedBanner';
const HomePage: React.FC = () => {
  const featuredProducts = products.filter((product) => product.isFeatured);
  const newProducts = products
    .filter((product) => product.isNew || Math.random() > 0.5)
    .slice(0, 4);

  return (
    <section>
      <Helmet>
        <title>ShopHub - Online Shopping Destination</title>
        <meta
          name="description"
          content="Discover the latest trends and products at ShopHub. Shop electronics, fashion, home decor and more."
        />
      </Helmet>

      <main>
        <HeroSection />
        {/* <CategorySection categories={categories} /> */}
        <BannerSection/>
        <OfferBanner/>
        <FestivalOfferBanner/>
        <FeaturedProducts
          title="Featured Products"
          products={featuredProducts}
          viewAllLink="/collections/featured"
        />

        <PromotionBanner {...promotions[0]} />
        <PromoGridSection />
        <FeaturedProducts
          title="New Arrivals"
          products={newProducts}
          viewAllLink="/collections/new"
        />
        <FeaturedSection/>
          <FeaturedProducts
          title="Recently viewed"
          products={featuredProducts}
          viewAllLink="/collections/featured"
        />
        <Newsletter />
      </main>
    </section>
  );
};

export default HomePage;
