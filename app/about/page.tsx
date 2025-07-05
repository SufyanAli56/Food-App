"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/lib/Store';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import MyDishes from '../components/mydishes/MyDishes';
import Services from '../components/Services/Services';

// Type definitions
type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

interface Translations {
  title: string;
  subtitle: string;
  highlightText: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
}

const page = () => {
  // Redux hooks
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  // Translations
  const translations: Record<LanguageCode, Translations> = {
    en: {
      title: "Discover the {highlight} Story",
      subtitle: "Rooted in Sufi tradition, crafted with passion",
      highlightText: "Sufi Bites",
      ctaPrimaryText: "Order Now",
      ctaSecondaryText: "Back to Home"
    },
    ar: {
      title: "اكتشف قصة {highlight}",
      subtitle: "متجذرة في التقاليد الصوفية، مصنوعة بشغف",
      highlightText: "سوفي بايتس",
      ctaPrimaryText: "اطلب الآن",
      ctaSecondaryText: "العودة إلى الصفحة الرئيسية"
    },
    fr: {
      title: "Découvrez l'histoire {highlight}",
      subtitle: "Enracinée dans la tradition soufie, fabriquée avec passion",
      highlightText: "Sufi Bites",
      ctaPrimaryText: "Commander maintenant",
      ctaSecondaryText: "Retour à l'accueil"
    },
    es: {
      title: "Descubre la historia de {highlight}",
      subtitle: "Enraizada en la tradición sufí, elaborada con pasión",
      highlightText: "Sufi Bites",
      ctaPrimaryText: "Ordenar ahora",
      ctaSecondaryText: "Volver al inicio"
    }
  };

  const currentTranslations = translations[currentLanguage];

  return (
    <div>
      <HeroBanner
        title={currentTranslations.title.replace('{highlight}', currentTranslations.highlightText)}
        subtitle={currentTranslations.subtitle}
        highlightText={currentTranslations.highlightText}
        backgroundImage="/about-banner.jpg"
        ctaPrimary={{
          text: currentTranslations.ctaPrimaryText,
          onClick: () => alert(currentLanguage === 'en' ? 'Ordering...' : 
                             currentLanguage === 'ar' ? 'جارٍ الطلب...' :
                             currentLanguage === 'fr' ? 'Commande en cours...' : 'Ordenando...'),
        }}
        ctaSecondary={{
          text: currentTranslations.ctaSecondaryText,
          onClick: () => alert(currentLanguage === 'en' ? 'Navigating...' : 
                             currentLanguage === 'ar' ? 'جارٍ الانتقال...' :
                             currentLanguage === 'fr' ? 'Navigation en cours...' : 'Navegando...'),
        }}
        showScrollIndicator={false}
      />
      <MyDishes/>
      <Services/>
    </div>
  )
}

export default page;