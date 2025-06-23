// app/components/homeBanner/HomeBanner.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib/Store';

// Type definitions
type TranslationKey = 'heading' | 'tagline' | 'menuButton' | 'reservationButton';

interface Translations {
  en: Record<TranslationKey, string>;
  ar: Record<TranslationKey, string>;
  fr: Record<TranslationKey, string>;
  es: Record<TranslationKey, string>;
}

const HomeBanner = () => {
  // State management
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Redux hooks
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  // Translation data
  const translations: Translations = {
    en: {
      heading: "Welcome to Sufi Bites",
      tagline: "Where Ancient Recipes Meet Modern Tastes",
      menuButton: "Explore Our Menu",
      reservationButton: "Reserve Your Table"
    },
    ar: {
      heading: "مرحبًا بكم في سوفي بايتس",
      tagline: "حيث تلتقي الوصفات القديمة بالأذواق الحديثة",
      menuButton: "استكشف قائمتنا",
      reservationButton: "احجز طاولتك"
    },
    fr: {
      heading: "Bienvenue à Sufi Bites",
      tagline: "Où les recettes anciennes rencontrent les goûts modernes",
      menuButton: "Découvrez notre menu",
      reservationButton: "Réservez votre table"
    },
    es: {
      heading: "Bienvenido a Sufi Bites",
      tagline: "Donde las recetas antiguas se encuentran con los sabores modernos",
      menuButton: "Explora nuestro menú",
      reservationButton: "Reserva tu mesa"
    }
  };

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize video playback
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Try to play the video programmatically
      const playVideo = async () => {
        try {
          await video.play();
          setVideoLoaded(true);
        } catch (err) {
          console.error('Video playback failed:', err);
          setVideoError(true);
        }
      };
      
      // Set up event listeners
      video.addEventListener('loadeddata', () => {
        playVideo().catch(console.error);
      });
      
      video.addEventListener('error', () => {
        setVideoError(true);
      });
      
      // Cleanup
      return () => {
        video.removeEventListener('loadeddata', () => {});
        video.removeEventListener('error', () => {});
      };
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Fallback if video fails to load */}
        {videoError ? (
          <div className="absolute inset-0 w-full h-full bg-gray-900 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <p className="text-lg mb-2">Video failed to load</p>
              <p className="text-sm opacity-75">Please check your internet connection</p>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source 
              src="/Video.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start text-white px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
          {translations[currentLanguage].heading}
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          {translations[currentLanguage].tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/menu">
            <button className="bg-amber-600 hover:bg-amber-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-amber-500/30 transform hover:scale-105 duration-300">
              {translations[currentLanguage].menuButton}
            </button>
          </Link>
          
          <Link href="/reservation">
            <button className="border-2 border-white text-white text-lg font-medium px-8 py-3 rounded-full hover:bg-white/10 transition-colors transform hover:scale-105 duration-300">
              {translations[currentLanguage].reservationButton}
            </button>
          </Link>
        </div>
      </div>
      
      {/* Mute Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <FiVolumeX size={24} /> : <FiVolume2 size={24} />}
      </button>
      
      {/* Mobile Notice */}
      {isMobile && (
        <div className="absolute bottom-4 left-4 z-20 bg-black/70 text-white text-sm px-3 py-1 rounded">
          Tap to unmute
        </div>
      )}
    </div>
  );
};

export default HomeBanner;