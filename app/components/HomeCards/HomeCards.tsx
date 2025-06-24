"use client";
import React from 'react';
import { FaDrumstickBite, FaUtensils, FaStar, FaLeaf } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib/Store'; // Updated path

// Type definitions
type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

interface DishTranslation {
  title: string;
  value: string;
  caption: string;
}

interface DishTranslations {
  en: Record<string, DishTranslation>;
  ar: Record<string, DishTranslation>;
  fr: Record<string, DishTranslation>;
  es: Record<string, DishTranslation>;
}

const dishTranslations: DishTranslations = {
  en: {
    chicken_biryani: {
      title: 'Chicken Biryani',
      value: '1K+ Orders',
      caption: 'Signature Sufi Flavor'
    },
    nihari: {
      title: 'Nihari',
      value: 'Best Seller',
      caption: 'Slow-Cooked Perfection'
    },
    seekh_kebabs: {
      title: 'Seekh Kebabs',
      value: '5-Star Favorite',
      caption: 'BBQ Chargrilled Taste'
    },
    halwa_puri: {
      title: 'Halwa Puri',
      value: 'Weekend Special',
      caption: 'Traditional Breakfast'
    }
  },
  ar: {
    chicken_biryani: {
      title: 'برياني الدجاج',
      value: 'أكثر من 1K طلب',
      caption: 'نكهة صوفية مميزة'
    },
    nihari: {
      title: 'نهاري',
      value: 'الأكثر مبيعاً',
      caption: 'الكمال في الطبخ البطيء'
    },
    seekh_kebabs: {
      title: 'سيخ كباب',
      value: 'المفضلة 5 نجوم',
      caption: 'طعم الشواء'
    },
    halwa_puri: {
      title: 'حلوى بورى',
      value: 'عرض نهاية الأسبوع',
      caption: 'فطور تقليدي'
    }
  },
  fr: {
    chicken_biryani: {
      title: 'Biryani au Poulet',
      value: '1K+ Commandes',
      caption: 'Saveur Signature Sufi'
    },
    nihari: {
      title: 'Nihari',
      value: 'Meilleure Vente',
      caption: 'Perfection Cuite Lentement'
    },
    seekh_kebabs: {
      title: 'Brochettes',
      value: 'Préféré 5 Étoiles',
      caption: 'Goût Grillée au BBQ'
    },
    halwa_puri: {
      title: 'Halwa Puri',
      value: 'Spécial Weekend',
      caption: 'Petit-Déjeuner Traditionnel'
    }
  },
  es: {
    chicken_biryani: {
      title: 'Biryani de Pollo',
      value: '1K+ Pedidos',
      caption: 'Sabor Sufi Signature'
    },
    nihari: {
      title: 'Nihari',
      value: 'Más Vendido',
      caption: 'Perfección de Cocción Lenta'
    },
    seekh_kebabs: {
      title: 'Pinchitos',
      value: 'Favorito 5 Estrellas',
      caption: 'Sabor a la Parrilla'
    },
    halwa_puri: {
      title: 'Halwa Puri',
      value: 'Especial de Fin de Semana',
      caption: 'Desayuno Tradicional'
    }
  }
};

const dishKeys = [
  { id: 'chicken_biryani', icon: <FaDrumstickBite className="text-xl" /> },
  { id: 'nihari', icon: <FaUtensils className="text-xl" /> },
  { id: 'seekh_kebabs', icon: <FaStar className="text-xl" /> },
  { id: 'halwa_puri', icon: <FaLeaf className="text-xl" /> }
];

const TopDishesOverlay = () => {
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  const topDishes = dishKeys.map(dish => ({
    ...dish,
    ...dishTranslations[currentLanguage][dish.id]
  }));

  return (
    <div className="relative w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 
                        sm:-mt-16 md:-mt-20 lg:-mt-24 xl:-mt-28 relative z-10">
          {topDishes.map((dish, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl rounded-xl text-center py-6 px-4 
                         border border-orange-100 hover:shadow-2xl transition-all 
                         duration-300 transform hover:-translate-y-1"
            >
              <div className="text-white bg-gradient-to-r from-amber-500 to-orange-600 
                              w-14 h-14 mx-auto flex items-center justify-center 
                              rounded-full mb-4">
                {dish.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{dish.title}</h3>
              <p className="text-amber-600 font-semibold">{dish.value}</p>
              <p className="text-sm text-gray-500 mt-2">{dish.caption}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"></div>
    </div>
  );
};

export default TopDishesOverlay;