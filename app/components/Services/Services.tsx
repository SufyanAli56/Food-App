"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib/Store';
import {
  FaUtensils,
  FaClock,
  FaStar,
  FaConciergeBell,
  FaGift,
  FaMapMarkedAlt,
} from 'react-icons/fa';

// Type definitions consistent with Navbar
type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

interface ServiceTranslation {
  title: string;
  description: string;
}

interface ServicesTranslations {
  servicesTitle: string;
  cuisine: ServiceTranslation;
  delivery: ServiceTranslation;
  specials: ServiceTranslation;
  catering: ServiceTranslation;
  rewards: ServiceTranslation;
  tracking: ServiceTranslation;
}

const translations: Record<LanguageCode, ServicesTranslations> = {
  en: {
    servicesTitle: 'Our Services',
    cuisine: {
      title: 'Authentic Sufi Cuisine',
      description: 'Enjoy traditional dishes crafted with soulful recipes and rich, aromatic spices.',
    },
    delivery: {
      title: 'Fast & Fresh Delivery',
      description: 'Hot meals delivered quickly to your door without compromising on taste.',
    },
    specials: {
      title: 'Weekly Specials',
      description: 'Limited-time Sufi delicacies every week to keep your taste buds excited.',
    },
    catering: {
      title: 'Event Catering',
      description: 'Perfectly curated Sufi menus for gatherings, weddings, and special events.',
    },
    rewards: {
      title: 'Loyalty Rewards',
      description: 'Earn Bites Points on every order and unlock exclusive perks and discounts.',
    },
    tracking: {
      title: 'Live Order Tracking',
      description: 'Watch your food being prepared and delivered in real-time.',
    },
  },
  ar: {
    servicesTitle: 'خدماتنا',
    cuisine: {
      title: 'المطبخ الصوفي الأصيل',
      description: 'استمتع بالأطباق التقليدية المحضرة بوصفات صوفية عريقة ونكهات عطرية.',
    },
    delivery: {
      title: 'توصيل سريع وطازج',
      description: 'وجبات ساخنة تصل إلى باب منزلك بسرعة دون المساس بالجودة.',
    },
    specials: {
      title: 'عروض أسبوعية',
      description: 'أطباق صوفية خاصة أسبوعياً لإرضاء ذوقك.',
    },
    catering: {
      title: 'خدمة المناسبات',
      description: 'قوائم صوفية منسقة للمناسبات، والأعراس، واللقاءات الخاصة.',
    },
    rewards: {
      title: 'نقاط الولاء',
      description: 'اكسب نقاطًا على كل طلب واستفد من عروض حصرية.',
    },
    tracking: {
      title: 'تتبع الطلب المباشر',
      description: 'راقب تحضير وتسليم طعامك في الوقت الحقيقي.',
    },
  },
  fr: {
    servicesTitle: 'Nos Services',
    cuisine: {
      title: 'Cuisine Soufie Authentique',
      description: 'Savourez des plats traditionnels avec des recettes soufies et des épices aromatiques.',
    },
    delivery: {
      title: 'Livraison Rapide et Fraîche',
      description: 'Des repas chauds livrés rapidement sans compromis sur la qualité.',
    },
    specials: {
      title: 'Offres Hebdomadaires',
      description: 'Nouveaux plats soufis chaque semaine pour éveiller vos papilles.',
    },
    catering: {
      title: 'Service Traiteur',
      description: 'Menus soufis pour événements, mariages et rassemblements.',
    },
    rewards: {
      title: 'Récompenses Fidélité',
      description: 'Gagnez des points à chaque commande et profitez d\'avantages exclusifs.',
    },
    tracking: {
      title: 'Suivi de Commande en Direct',
      description: 'Suivez la préparation et la livraison de vos plats en temps réel.',
    },
  },
  es: {
    servicesTitle: 'Nuestros Servicios',
    cuisine: {
      title: 'Cocina Sufí Auténtica',
      description: 'Disfruta platos tradicionales con recetas sufíes y especias aromáticas.',
    },
    delivery: {
      title: 'Entrega Rápida y Fresca',
      description: 'Comida caliente a tu puerta rápidamente sin sacrificar calidad.',
    },
    specials: {
      title: 'Especiales Semanales',
      description: 'Delicias sufíes semanales que deleitan tu paladar.',
    },
    catering: {
      title: 'Servicio de Catering',
      description: 'Menús sufíes para eventos, bodas y celebraciones.',
    },
    rewards: {
      title: 'Recompensas de Lealtad',
      description: 'Gana puntos y accede a beneficios exclusivos con cada pedido.',
    },
    tracking: {
      title: 'Seguimiento en Tiempo Real',
      description: 'Mira tu pedido desde la cocina hasta tu puerta.',
    },
  },
};

const iconMap = {
  cuisine: <FaUtensils className="text-3xl text-amber-500" />,
  delivery: <FaClock className="text-3xl text-amber-500" />,
  specials: <FaStar className="text-3xl text-amber-500" />,
  catering: <FaConciergeBell className="text-3xl text-amber-500" />,
  rewards: <FaGift className="text-3xl text-amber-500" />,
  tracking: <FaMapMarkedAlt className="text-3xl text-amber-500" />
};

const Services: React.FC = () => {
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage as LanguageCode);
  const currentTranslations = translations[currentLanguage];

  return (
    <section className="py-16 bg-orange-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
          {currentTranslations.servicesTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(currentTranslations).map(([key, value]) => {
            if (key === 'servicesTitle') return null;
            
            return (
              <div
                key={key}
                className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-opacity-95 text-center"
              >
                <div className="mb-4 flex justify-center">{iconMap[key as keyof typeof iconMap]}</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{(value as ServiceTranslation).title}</h3>
                <p className="text-gray-500 text-sm">{(value as ServiceTranslation).description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;