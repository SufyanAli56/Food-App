'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/lib/Store';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import GetInTouch from '../components/getIntouch/GetInTouch';

// Type definitions
type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

interface Translations {
  title: string;
  subtitle: string;
  highlightText: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  contactFormTitle: string;
  dialingMessage: string;
  contactFormMessage: string;
}

const ContactPage = () => {
  // Redux hooks
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  // Translations
  const translations: Record<LanguageCode, Translations> = {
    en: {
      title: "Get in Touch with {highlight} Us",
      subtitle: "We'd love to hear from you – reach out anytime",
      highlightText: "Sufi Bites",
      ctaPrimaryText: "Call Us",
      ctaSecondaryText: "Send Message",
      contactFormTitle: "Contact Form",
      dialingMessage: "Dialing...",
      contactFormMessage: "Opening contact form..."
    },
    ar: {
      title: "تواصل مع {highlight}",
      subtitle: "نود أن نسمع منك - تواصل معنا في أي وقت",
      highlightText: "سوفي بايتس",
      ctaPrimaryText: "اتصل بنا",
      ctaSecondaryText: "إرسال رسالة",
      contactFormTitle: "نموذج الاتصال",
      dialingMessage: "جارٍ الاتصال...",
      contactFormMessage: "جارٍ فتح نموذج الاتصال..."
    },
    fr: {
      title: "Contactez {highlight}",
      subtitle: "Nous serions ravis d'avoir de vos nouvelles - contactez-nous à tout moment",
      highlightText: "Sufi Bites",
      ctaPrimaryText: "Appelez-nous",
      ctaSecondaryText: "Envoyer un message",
      contactFormTitle: "Formulaire de contact",
      dialingMessage: "Composition...",
      contactFormMessage: "Ouverture du formulaire de contact..."
    },
    es: {
      title: "Ponte en contacto con {highlight}",
      subtitle: "Nos encantaría saber de ti - contáctanos en cualquier momento",
      highlightText: "Sufi Bites",
      ctaPrimaryText: "Llámanos",
      ctaSecondaryText: "Enviar mensaje",
      contactFormTitle: "Formulario de contacto",
      dialingMessage: "Marcando...",
      contactFormMessage: "Abriendo formulario de contacto..."
    }
  };

  const currentTranslations = translations[currentLanguage];

  return (
    <div>
      <HeroBanner
        title={currentTranslations.title.replace('{highlight}', currentTranslations.highlightText)}
        subtitle={currentTranslations.subtitle}
        highlightText={currentTranslations.highlightText}
        backgroundImage="/banner.jpg"
        ctaPrimary={{
          text: currentTranslations.ctaPrimaryText,
          onClick: () => alert(currentTranslations.dialingMessage),
        }}
        ctaSecondary={{
          text: currentTranslations.ctaSecondaryText,
          onClick: () => alert(currentTranslations.contactFormMessage),
        }}
        showScrollIndicator={false}
      />
      
      {/* Your contact form or section goes below */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">{currentTranslations.contactFormTitle}</h2>
        <GetInTouch/>
      </div>
    </div>
  );
};

export default ContactPage;