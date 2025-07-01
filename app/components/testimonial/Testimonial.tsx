"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib/Store';

// Dummy images (you can replace with actual customer images)
const customerImages = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/90.jpg",
  "https://randomuser.me/api/portraits/men/22.jpg",
];

// Type definitions
type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

interface Translations {
  en: {
    title: string;
    subtitle: string;
    testimonials: {
      feedback: string;
      name: string;
      location: string;
    }[];
  };
  ar: {
    title: string;
    subtitle: string;
    testimonials: {
      feedback: string;
      name: string;
      location: string;
    }[];
  };
  fr: {
    title: string;
    subtitle: string;
    testimonials: {
      feedback: string;
      name: string;
      location: string;
    }[];
  };
  es: {
    title: string;
    subtitle: string;
    testimonials: {
      feedback: string;
      name: string;
      location: string;
    }[];
  };
}

const translations: Translations = {
  en: {
    title: "What Our Customers Say",
    subtitle: "Real words from real food lovers around the world",
    testimonials: [
      {
        feedback: "Absolutely delicious! The Chicken Biryani reminded me of my grandma's cooking back in Lahore. Rich, aromatic, and perfectly spiced.",
        name: "Ayesha K.",
        location: "Toronto, Canada"
      },
      {
        feedback: "I've tried many South Asian restaurants, but Sufi Bites delivers the most authentic Desi flavors I've had in years.",
        name: "Omar S.",
        location: "London, UK"
      },
      {
        feedback: "From Halwa Puri to Seekh Kebabs – everything tasted fresh and made with love. Highly recommend!",
        name: "Fatima R.",
        location: "New York, USA"
      },
      {
        feedback: "The Nihari is to die for! Tastes just like the streets of Karachi. Will definitely be ordering again soon.",
        name: "Rahul P.",
        location: "Dubai, UAE"
      },
      {
        feedback: "The best Pakistani food I've had outside of Pakistan. The flavors are authentic and the portions are generous.",
        name: "Sarah M.",
        location: "Sydney, Australia"
      },
      {
        feedback: "Sufi Bites has become our family's go-to for weekend meals. The quality is consistently excellent.",
        name: "Imran T.",
        location: "Chicago, USA"
      }
    ]
  },
  ar: {
    title: "ما يقوله عملاؤنا",
    subtitle: "كلمات حقيقية من عشاق الطعام حول العالم",
    testimonials: [
      {
        feedback: "لذيذة للغاية! ذكرني برياني الدجاج بطهي جدتي في لاهور. غني، عطري، ومتبل بشكل مثالي.",
        name: "عائشة ك.",
        location: "تورونتو، كندا"
      },
      {
        feedback: "لقد جربت العديد من المطاعم الجنوب آسيوية، لكن Sufi Bites يقدم أكثر النكهات الأصيلة التي تناولتها منذ سنوات.",
        name: "عمر س.",
        location: "لندن، المملكة المتحدة"
      },
      {
        feedback: "من حلوة البوري إلى كباب السيك - كل شيء كان طازجًا ومصنوعًا بحب. أوصي به بشدة!",
        name: "فاطمة ر.",
        location: "نيويورك، الولايات المتحدة"
      },
      {
        feedback: "النهاري يستحق الموت من أجله! طعمه يشبه تمامًا ما في شوارع كراتشي. سأطلب بالتأكيد مرة أخرى قريبًا.",
        name: "راهول ب.",
        location: "دبي، الإمارات"
      },
      {
        feedback: "أفضل طعام باكستاني تناولته خارج باكستان. النكهات أصلية والكميات سخية.",
        name: "سارة م.",
        location: "سيدني، أستراليا"
      },
      {
        feedback: "أصبح Sufi Bites وجهتنا المفضلة لوجبات عطلة نهاية الأسبوع. الجودة ممتازة باستمرار.",
        name: "عمران ت.",
        location: "شيكاغو، الولايات المتحدة"
      }
    ]
  },
  fr: {
    title: "Ce que disent nos clients",
    subtitle: "Les témoignages de vrais amateurs de cuisine du monde entier",
    testimonials: [
      {
        feedback: "Absolument délicieux! Le Biryani au poulet m'a rappelé la cuisine de ma grand-mère à Lahore. Riche, aromatique et parfaitement épicé.",
        name: "Ayesha K.",
        location: "Toronto, Canada"
      },
      {
        feedback: "J'ai essayé de nombreux restaurants sud-asiatiques, mais Sufi Bites offre les saveurs Desi les plus authentiques que j'ai goûtées depuis des années.",
        name: "Omar S.",
        location: "Londres, Royaume-Uni"
      },
      {
        feedback: "Du Halwa Puri aux Seekh Kebabs - tout était frais et préparé avec amour. Je recommande vivement!",
        name: "Fatima R.",
        location: "New York, États-Unis"
      },
      {
        feedback: "Le Nihari est à mourir pour! Le goût est exactement comme dans les rues de Karachi. Je commanderai certainement à nouveau bientôt.",
        name: "Rahul P.",
        location: "Dubaï, Émirats Arabes Unis"
      },
      {
        feedback: "La meilleure cuisine pakistanaise que j'ai goûtée en dehors du Pakistan. Les saveurs sont authentiques et les portions généreuses.",
        name: "Sarah M.",
        location: "Sydney, Australie"
      },
      {
        feedback: "Sufi Bites est devenu notre adresse préférée pour les repas du week-end. La qualité est toujours excellente.",
        name: "Imran T.",
        location: "Chicago, États-Unis"
      }
    ]
  },
  es: {
    title: "Lo que dicen nuestros clientes",
    subtitle: "Palabras reales de amantes de la comida de todo el mundo",
    testimonials: [
      {
        feedback: "¡Absolutamente delicioso! El Biryani de pollo me recordó a la cocina de mi abuela en Lahore. Rico, aromático y perfectamente especiado.",
        name: "Ayesha K.",
        location: "Toronto, Canadá"
      },
      {
        feedback: "He probado muchos restaurantes del sur de Asia, pero Sufi Bites ofrece los sabores Desi más auténticos que he probado en años.",
        name: "Omar S.",
        location: "Londres, Reino Unido"
      },
      {
        feedback: "Desde el Halwa Puri hasta los Seekh Kebabs, todo sabía fresco y hecho con amor. ¡Altamente recomendado!",
        name: "Fatima R.",
        location: "Nueva York, EE.UU."
      },
      {
        feedback: "¡El Nihari es para morirse! Sabe exactamente como en las calles de Karachi. Definitivamente volveré a pedirlo pronto.",
        name: "Rahul P.",
        location: "Dubái, Emiratos Árabes Unidos"
      },
      {
        feedback: "La mejor comida paquistaní que he probado fuera de Pakistán. Los sabores son auténticos y las porciones generosas.",
        name: "Sarah M.",
        location: "Sídney, Australia"
      },
      {
        feedback: "Sufi Bites se ha convertido en nuestro lugar favorito para las comidas de fin de semana. La calidad es consistentemente excelente.",
        name: "Imran T.",
        location: "Chicago, EE.UU."
      }
    ]
  }
};

const Testimonial = () => {
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <motion.div
        className="absolute left-[-35px] top-1/2 transform -translate-y-1/2 cursor-pointer bg-orange-600 p-3 rounded-full shadow-md hover:bg-orange-700 z-10"
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaChevronLeft className="text-white" />
      </motion.div>
    );
  }

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <motion.div
        className="absolute right-[-35px] top-1/2 transform -translate-y-1/2 cursor-pointer bg-orange-600 p-3 rounded-full shadow-md hover:bg-orange-700 z-10"
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaChevronRight className="text-white" />
      </motion.div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 md:px-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          {translations[currentLanguage].title}
        </h2>
        <div className="flex justify-center mt-3">
          <motion.div 
            className="w-20 h-1 bg-orange-600 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
        <motion.p 
          className="text-gray-600 mt-4 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {translations[currentLanguage].subtitle}
        </motion.p>
      </motion.div>

      <div className="mt-14 max-w-6xl mx-auto relative">
        <Slider {...settings}>
          {translations[currentLanguage].testimonials.map((t, index) => (
            <div key={index} className="px-4 py-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="bg-white shadow-xl rounded-2xl p-6 md:p-8 text-left relative h-full border border-gray-200 hover:border-orange-200 transition-all"
              >
                <motion.div 
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.img
                    src={customerImages[index]}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ rotate: -5 }}
                  transition={{ type: "spring" }}
                  className="absolute top-4 left-4"
                >
                  <FaQuoteLeft className="text-orange-600 text-2xl" />
                </motion.div>
                <p className="text-gray-700 mt-6 italic mb-4">
                  &ldquo;{t.feedback}&rdquo;
                </p>
                <div className="text-sm font-semibold text-gray-900">
                  {t.name}
                </div>
                <div className="text-xs text-gray-500">{t.location}</div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;