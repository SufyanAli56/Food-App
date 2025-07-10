'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/app/lib/Store';


import HeroBanner from '@/app/components/heroBanner/HeroBanner';
import DinnerMenu from '@/app/components/dinnerMenu/DinnerMenu';

type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

interface Translations {
  title: string;
  subtitle: string;
  highlightText: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  dialingMessage: string;
  menuMessage: string;
}

const translations: Record<LanguageCode, Translations> = {
  en: {
    title: "End Your Day with {highlight} Dinner",
    subtitle: "Exquisite evening meals crafted with passion",
    highlightText: "Sufi Bites",
    ctaPrimaryText: "Call to Order",
    ctaSecondaryText: "View Menu",
    dialingMessage: "Dialing...",
    menuMessage: "Opening dinner menu..."
  },
  ar: {
    title: "اختتم يومك مع {highlight} عشاء",
    subtitle: "وجبات مسائية رائعة مصنوعة بشغف",
    highlightText: "سوفي بايتس",
    ctaPrimaryText: "اتصل للطلب",
    ctaSecondaryText: "عرض القائمة",
    dialingMessage: "جارٍ الاتصال...",
    menuMessage: "جارٍ فتح قائمة العشاء..."
  },
  fr: {
    title: "Terminez votre journée avec le dîner {highlight}",
    subtitle: "Repas du soir exquis préparés avec passion",
    highlightText: "Sufi Bites",
    ctaPrimaryText: "Appeler pour commander",
    ctaSecondaryText: "Voir le menu",
    dialingMessage: "Composition...",
    menuMessage: "Ouverture du menu dîner..."
  },
  es: {
    title: "Termina tu día con la cena {highlight}",
    subtitle: "Exquisitas comidas nocturnas elaboradas con pasión",
    highlightText: "Sufi Bites",
    ctaPrimaryText: "Llamar para pedir",
    ctaSecondaryText: "Ver menú",
    dialingMessage: "Marcando...",
    menuMessage: "Abriendo menú de cena..."
  }
};

export default function DinnerPage() {
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);
  const currentTranslations = translations[currentLanguage];

  return (
    <>
      <div className='bg-white'>
        <HeroBanner
          title={currentTranslations.title.replace('{highlight}', currentTranslations.highlightText)}
          subtitle={currentTranslations.subtitle}
          highlightText={currentTranslations.highlightText}
          backgroundImage="/dinner-banner.jpg"
          ctaPrimary={{
            text: currentTranslations.ctaPrimaryText,
            onClick: () => alert(currentTranslations.dialingMessage),
          }}
          ctaSecondary={{
            text: currentTranslations.ctaSecondaryText,
            onClick: () => alert(currentTranslations.menuMessage),
          }}
          showScrollIndicator={false}
        />
       <DinnerMenu/>
      </div>
    </>
  );
}