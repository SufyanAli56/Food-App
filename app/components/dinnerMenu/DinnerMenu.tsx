'use client';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib/Store';

type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

interface BaseTranslation {
  title: string;
  total: string;
  checkout: string;
  emptyCart: string;
  addToCart: string;
  remove: string;
  cartTitle: string;
}

interface MenuTranslation {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface Translations {
  ui: Record<LanguageCode, BaseTranslation>;
  menu: Record<LanguageCode, MenuTranslation[]>;
}

const translations: Translations = {
  ui: {
    en: {
      title: "Sufi Bites Dinner Menu",
      cartTitle: "Your Order",
      total: "Total",
      checkout: "Proceed to Checkout",
      emptyCart: "Your cart is empty",
      addToCart: "Add to Cart",
      remove: "Remove",
    },
    ar: {
      title: "قائمة عشاء صوفي بايتس",
      cartTitle: "طلبك",
      total: "المجموع",
      checkout: "المتابعة للدفع",
      emptyCart: "سلة التسوق فارغة",
      addToCart: "أضف إلى السلة",
      remove: "إزالة",
    },
    fr: {
      title: "Menu Dîner Sufi Bites",
      cartTitle: "Votre commande",
      total: "Total",
      checkout: "Passer à la caisse",
      emptyCart: "Votre panier est vide",
      addToCart: "Ajouter au panier",
      remove: "Retirer",
    },
    es: {
      title: "Menú de cena Sufi Bites",
      cartTitle: "Tu pedido",
      total: "Total",
      checkout: "Proceder al pago",
      emptyCart: "Tu carrito está vacío",
      addToCart: "Agregar al carrito",
      remove: "Eliminar",
    }
  },
  menu: {
    en: [
      {
        name: "Sufi Royal Platter",
        description: "Mixed grill with lamb chops, chicken tikka, and seekh kebab",
        price: 650,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Peshawari Karahi",
        description: "Traditional lamb karahi cooked with ginger, garlic, and tomatoes",
        price: 550,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Kashmiri Dum Biryani",
        description: "Fragrant basmati rice with tender chicken and saffron",
        price: 480,
        image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Balochi Sajji",
        description: "Whole lamb marinated in traditional spices and slow-roasted",
        price: 850,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Sindhi Curry",
        description: "Rich curry with vegetables, chickpeas, and aromatic spices",
        price: 380,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
    ar: [
      {
        name: "طبق صوفي الملكي",
        description: "مشاوي مشكلة مع قطع لحم الضأن، تيكا دجاج، وكباب سيخ",
        price: 650,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "كرهي بيشاوري",
        description: "كرهي لحم ضأن تقليدي مطبوخ مع الزنجبيل والثوم والطماطم",
        price: 550,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "برياني كشميري دم",
        description: "أرز بسمتي عطري مع دجاج طري والزعفران",
        price: 480,
        image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "سجّي بلوشي",
        description: "خروف كامل متبل بالبهارات التقليدية ومشوي ببطء",
        price: 850,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "كاري سندي",
        description: "كاري غني بالخضار والحمص والبهارات العطرية",
        price: 380,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
    fr: [
      {
        name: "Plateau Royal Soufi",
        description: "Grillade mixte avec côtelettes d'agneau, tikka de poulet et seekh kebab",
        price: 650,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Karahi Peshawari",
        description: "Karahi d'agneau traditionnel cuit avec gingembre, ail et tomates",
        price: 550,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Biryani Kashmiri Dum",
        description: "Riz basmati parfumé avec poulet tendre et safran",
        price: 480,
        image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Sajji Balochi",
        description: "Agneau entier mariné dans des épices traditionnelles et rôti lentement",
        price: 850,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Curry Sindhi",
        description: "Curry riche avec légumes, pois chiches et épices aromatiques",
        price: 380,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
    es: [
      {
        name: "Plato Real Sufi",
        description: "Parrillada mixta con chuletas de cordero, tikka de pollo y seekh kebab",
        price: 650,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Karahi Peshawari",
        description: "Cordero karahi tradicional cocinado con jengibre, ajo y tomates",
        price: 550,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Biryani Kashmiri Dum",
        description: "Arroz basmati fragante con pollo tierno y azafrán",
        price: 480,
        image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Sajji Balochi",
        description: "Cordero entero marinado en especias tradicionales y asado lentamente",
        price: 850,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Curry Sindhi",
        description: "Curry rico con verduras, garbanzos y especias aromáticas",
        price: 380,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },
};

interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

const DinnerMenu: React.FC = () => {
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage) as LanguageCode;
  const t = translations.ui[currentLanguage] || translations.ui.en;
  const menuItems = translations.menu[currentLanguage] || translations.menu.en;

  const [cart, setCart] = useState<MenuItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  const isInCart = (name: string) => {
    return cart.some((item) => item.name === name);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="font-sans max-w-6xl mx-auto my-8 p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Menu */}
        <div className="flex-1 bg-amber-50 p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 text-center mb-8 pb-2 border-b-2 border-amber-300">
            {t.title}
          </h1>
          <div className="space-y-6">
            {menuItems.map((item) => (
              <div key={item.name} className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-amber-800">{item.name}</h3>
                  <p className="text-amber-700 mt-1">{item.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-amber-600 font-bold text-lg">₹{item.price}</span>
                    {isInCart(item.name) ? (
                      <button onClick={() => removeFromCart(item.name)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                        {t.remove}
                      </button>
                    ) : (
                      <button onClick={() => addToCart(item)} className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition">
                        {t.addToCart}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div className="lg:w-80 bg-white p-6 rounded-xl shadow-lg h-fit sticky top-4">
          <h2 className="text-2xl font-bold text-amber-900 mb-4 pb-2 border-b-2 border-amber-300">{t.cartTitle}</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">{t.emptyCart}</p>
          ) : (
            <>
              <div className="space-y-4 mb-4">
                {cart.map((item) => (
                  <div key={item.name} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-600">₹{item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.name)} className="text-red-500 hover:text-red-700 text-xl">×</button>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span>{t.total}:</span>
                  <span>₹{total}</span>
                </div>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition">
                  {t.checkout}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DinnerMenu;