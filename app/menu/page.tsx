'use client'; // Important for using client-side navigation

import React from 'react';
import { useRouter } from 'next/navigation'; // ✅ correct import
import HeroBanner from '../components/heroBanner/HeroBanner';
import Categories from '../components/categoreis/Categories';

const Page = () => {
  const router = useRouter(); // ✅ initialize router

  return (
    <div>
      <HeroBanner
        title="Discover Our {highlight} Menu"
        highlightText="Premium"
        subtitle="Handcrafted meals prepared with love using traditional recipes"
        backgroundImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        ctaPrimary={{
          text: 'Order Now',
          onClick: () => router.push('/menu'), // ✅ fixed
        }}
        ctaSecondary={{
          text: 'View Specials',
          onClick: () => router.push('/specials'), // ✅ fixed
        }}
        showScrollIndicator={true}
      />
      <Categories/>
    </div>
  );
};

export default Page;
