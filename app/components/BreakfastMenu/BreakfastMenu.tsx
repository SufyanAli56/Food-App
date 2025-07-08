'use client';

import React from 'react';
import { FaLeaf, FaFire, FaStar, FaPepperHot } from 'react-icons/fa';

interface BreakfastItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tags: {
    label: string;
    icon: React.ReactNode;
    color: string;
    textColor: string;
  }[];
}

interface BreakfastMenuProps {
  items: BreakfastItem[];
  addToOrderText: string;
}

const BreakfastMenu: React.FC<BreakfastMenuProps> = ({ items, addToOrderText }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border border-gray-100">
          <div className="relative">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              {item.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className={`${tag.color} ${tag.textColor} text-xs px-2 py-1 rounded-full flex items-center`}
                >
                  {tag.icon} <span className="ml-1">{tag.label}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-red-600 font-bold">{item.price}</span>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                {addToOrderText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BreakfastMenu;