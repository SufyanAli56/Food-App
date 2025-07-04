"use client";

import React from 'react';
import HeroBanner from '../components/heroBanner/HeroBanner';
import Categories from '../components/Categories/Categories';
import { useSelector } from 'react-redux';
import type { RootState } from '../lib/Store';

// Type definitions
type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

type TranslationKey = 'title' | 'subtitle' | 'highlightText' | 
                     'ctaPrimaryText' | 'ctaSecondaryText' |
                     'ctaPrimaryAlert' | 'ctaSecondaryAlert';

interface Translations {
  en: Record<TranslationKey, string>;
  ar: Record<TranslationKey, string>;
  fr: Record<TranslationKey, string>;
  es: Record<TranslationKey, string>;
}

const HomePage = () => {
  // Redux hooks
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  // Translations
  const translations: Translations = {
    en: {
      title: "Welcome to {highlight} Sufi Bites",
      subtitle: "Soulful flavors rooted in tradition and love",
      highlightText: "Sufi Bites",
      ctaPrimaryText: "Order Now",
      ctaSecondaryText: "Explore Menu",
      ctaPrimaryAlert: "Redirecting to menu...",
      ctaSecondaryAlert: "Scrolling to menu section..."
    },
    ar: {
      title: "مرحبًا بكم في {highlight} سوفي بايتس",
      subtitle: "نكهات روحانية متجذرة في التقاليد والحب",
      highlightText: "سوفي بايتس",
      ctaPrimaryText: "اطلب الآن",
      ctaSecondaryText: "استكشف القائمة",
      ctaPrimaryAlert: "جاري التوجيه إلى القائمة...",
      ctaSecondaryAlert: "جاري التمرير إلى قسم القائمة..."
    },
    fr: {
      title: "Bienvenue à {highlight} Sufi Bites",
      subtitle: "Saveurs profondes enracinées dans la tradition et l'amour",
      highlightText: "Sufi Bites",
      ctaPrimaryText: "Commander maintenant",
      ctaSecondaryText: "Explorer le menu",
      ctaPrimaryAlert: "Redirection vers le menu...",
      ctaSecondaryAlert: "Défilement vers la section du menu..."
    },
    es: {
      title: "Bienvenido a {highlight} Sufi Bites",
      subtitle: "Sabores profundos arraigados en la tradición y el amor",
      highlightText: "Sufi Bites",
      ctaPrimaryText: "Ordenar ahora",
      ctaSecondaryText: "Explorar menú",
      ctaPrimaryAlert: "Redirigiendo al menú...",
      ctaSecondaryAlert: "Desplazándose a la sección del menú..."
    }
  };

  return (
    <div>
      <HeroBanner
        title={translations[currentLanguage].title}
        subtitle={translations[currentLanguage].subtitle}
        highlightText={translations[currentLanguage].highlightText}
        backgroundImage="/banner.jpg"
        ctaPrimary={{
          text: translations[currentLanguage].ctaPrimaryText,
          onClick: () => alert(translations[currentLanguage].ctaPrimaryAlert),
        }}
        ctaSecondary={{
          text: translations[currentLanguage].ctaSecondaryText,
          onClick: () => alert(translations[currentLanguage].ctaSecondaryAlert),
        }}
        showScrollIndicator={true}
      />
      <Categories />
    </div>
  );
};

export default HomePage;