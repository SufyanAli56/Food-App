"use client";
import React from 'react';
import { motion } from 'framer-motion';

type HeroBannerProps = {
  title: string;
  subtitle?: string;
  highlightText?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: 'light' | 'dark';
  highlightColor?: 'primary' | 'secondary' | 'accent' | 'danger' | 'success';
  ctaPrimary?: {
    text: string;
    onClick: () => void;
  };
  ctaSecondary?: {
    text: string;
    onClick: () => void;
  };
  showScrollIndicator?: boolean;
  overlayIntensity?: number;
  fullHeight?: boolean;
  contentPosition?: 'left' | 'center' | 'right';
  pattern?: 'none' | 'dots' | 'grid' | 'waves';
};

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle = '',
  highlightText = '',
  backgroundImage,
  backgroundColor = 'bg-gray-900',
  textColor = 'light',
  highlightColor = 'primary',
  ctaPrimary,
  ctaSecondary,
  showScrollIndicator = false,
  overlayIntensity = 70,
  fullHeight = false,
  contentPosition = 'center',
  pattern = 'none'
}) => {
  // Color mappings
  const textColorMap = {
    light: 'text-white',
    dark: 'text-red-900'
  };

  const highlightColorMap = {
    primary: 'text-red-400',
    secondary: 'text-purple-400',
    accent: 'text-amber-400',
    danger: 'text-red-400',
    success: 'text-emerald-400'
  };

  const highlightBgColorMap = {
    primary: 'bg-red-500',
    secondary: 'bg-red-500',
    accent: 'bg-red-500',
    danger: 'bg-red-600',
    success: 'bg-emerald-600'
  };

  const buttonColorMap = {
    primary: 'bg-red-500 hover:bg-red-800',
    secondary: 'bg-purple-600 hover:bg-purple-700',
    accent: 'bg-amber-600 hover:bg-amber-700',
    danger: 'bg-red-600 hover:bg-red-700',
    success: 'bg-emerald-600 hover:bg-emerald-700'
  };

  const borderColorMap = {
    light: 'border-white',
    dark: 'border-gray-900'
  };

  // Position classes
  const positionClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right'
  };

  // Pattern backgrounds
  const patternBackgrounds = {
    none: '',
    dots: `before:absolute before:inset-0 before:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] before:bg-[length:16px_16px] before:opacity-10`,
    grid: `before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#e5caca12_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] before:bg-[size:24px_24px]`,
    waves: `before:absolute before:inset-0 before:bg-[url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")]`
  };

  return (
    <section className={`relative w-full ${fullHeight ? 'min-h-screen' : 'h-[60vh] min-h-[400px] max-h-[800px]'} overflow-hidden ${backgroundColor}`}>
      {/* Background image with conditional overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div 
            className={`absolute inset-0 bg-white z-10`}
          />
          <img
            src={backgroundImage}
            alt="Banner background"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      )}

      {/* Pattern overlay */}
      {pattern !== 'none' && (
        <div className={`absolute inset-0 ${patternBackgrounds[pattern]}`} />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-0" />

      {/* Centered Content */}
      <div className={`absolute inset-0 flex ${positionClasses[contentPosition]} justify-center`}>
        <div className="container px-4 sm:px-6 lg:px-8 py-20 z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${positionClasses[contentPosition]} justify-center ${textColorMap[textColor]} max-w-4xl mx-auto`}
          >
            {highlightText && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`inline-block px-4 py-2 ${highlightBgColorMap[highlightColor]} rounded-full text-sm font-medium mb-4 text-white tracking-wider`}
              >
                {highlightText}
              </motion.span>
            )}

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              {title.split('{highlight}').map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i < title.split('{highlight}').length - 1 && highlightText && (
                    <span className={highlightColorMap[highlightColor]}>{highlightText}</span>
                  )}
                </React.Fragment>
              ))}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className={`text-lg md:text-xl opacity-90 mb-8 ${contentPosition === 'center' ? 'mx-auto' : ''}`}
              >
                {subtitle}
              </motion.p>
            )}

            {(ctaPrimary || ctaSecondary) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className={`flex flex-wrap gap-4 ${contentPosition === 'center' ? 'justify-center' : 'justify-start'}`}
              >
                {ctaPrimary && (
                  <motion.button 
                    onClick={ctaPrimary.onClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 ${buttonColorMap[highlightColor]} text-white font-medium rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl flex items-center gap-2`}
                  >
                    {ctaPrimary.text}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                )}
                {ctaSecondary && (
                  <motion.button 
                    onClick={ctaSecondary.onClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 bg-transparent border-2 ${borderColorMap[textColor]} hover:bg-white/10 font-medium rounded-lg transition-all duration-300 text-lg flex items-center gap-2`}
                  >
                    {ctaSecondary.text}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Optional scrolling indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="animate-bounce w-10 h-16 flex flex-col items-center">
            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center mb-1">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <span className="text-xs text-white opacity-70">Scroll</span>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroBanner;