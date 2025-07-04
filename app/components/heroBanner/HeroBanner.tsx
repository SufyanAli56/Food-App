import React from 'react';
import { motion } from 'framer-motion';

type HeroBannerProps = {
  title: string;
  subtitle?: string;
  highlightText?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  highlightColor?: string;
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
};

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle = '',
  highlightText = '',
  backgroundImage,
  backgroundColor = 'bg-rose-200',
  textColor = 'text-white',
  highlightColor = 'text-rose-400',
  ctaPrimary,
  ctaSecondary,
  showScrollIndicator = false,
  overlayIntensity = 70
}) => {
  return (
    <section className={`relative w-full h-[60vh] min-h-[400px] max-h-[800px] overflow-hidden ${backgroundColor}`}>
      {/* Background image with conditional overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div 
            className={`absolute inset-0 bg-gradient-to-r from-black/${overlayIntensity} to-black/${overlayIntensity/2} z-10`}
          />
          <img
            src={backgroundImage}
            alt="Banner background"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      )}

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col items-center justify-center ${textColor}`}
          >
            {highlightText && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`inline-block px-4 py-2 ${highlightColor.replace('text', 'bg')}/90 rounded-full text-sm font-medium mb-4`}
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
                    <span className={highlightColor}>{highlightText}</span>
                  )}
                </React.Fragment>
              ))}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8"
              >
                {subtitle}
              </motion.p>
            )}

            {(ctaPrimary || ctaSecondary) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                {ctaPrimary && (
                  <button 
                    onClick={ctaPrimary.onClick}
                    className={`px-8 py-3 ${highlightColor.replace('text', 'bg')} hover:${highlightColor.replace('text', 'bg')}/90 ${textColor} font-medium rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl`}
                  >
                    {ctaPrimary.text}
                  </button>
                )}
                {ctaSecondary && (
                  <button 
                    onClick={ctaSecondary.onClick}
                    className={`px-8 py-3 bg-transparent border-2 ${textColor.replace('text', 'border')} hover:bg-white/10 ${textColor} font-medium rounded-lg transition-all duration-300 text-lg`}
                  >
                    {ctaSecondary.text}
                  </button>
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
          <div className="animate-bounce w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroBanner;