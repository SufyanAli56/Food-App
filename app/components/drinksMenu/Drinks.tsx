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
      title: "Sufi Sips Drinks Menu",
      cartTitle: "Your Order",
      total: "Total",
      checkout: "Proceed to Checkout",
      emptyCart: "Your cart is empty",
      addToCart: "Add to Cart",
      remove: "Remove",
    },
    ar: {
      title: "قائمة مشروبات سوفي سيبس",
      cartTitle: "طلبك",
      total: "المجموع",
      checkout: "المتابعة للدفع",
      emptyCart: "سلة التسوق فارغة",
      addToCart: "أضف إلى السلة",
      remove: "إزالة",
    },
    fr: {
      title: "Menu des Boissons Sufi Sips",
      cartTitle: "Votre commande",
      total: "Total",
      checkout: "Passer à la caisse",
      emptyCart: "Votre panier est vide",
      addToCart: "Ajouter au panier",
      remove: "Retirer",
    },
    es: {
      title: "Menú de Bebidas Sufi Sips",
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
        name: "Sufi Special Tea",
        description: "Traditional spiced tea with cardamom and saffron",
        price: 120,
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Peshawari Kahwa",
        description: "Green tea infused with saffron, almonds and spices",
        price: 150,
        image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Kashmiri Noon Chai",
        description: "Pink salted tea with pistachios and almonds",
        price: 180,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd5bba49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Mint Lemonade",
        description: "Fresh lemonade with mint leaves and honey",
        price: 130,
        image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Mango Lassi",
        description: "Creamy yogurt drink with fresh mango pulp",
        price: 160,
        image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
    ar: [
      {
        name: "شاي صوفي الخاص",
        description: "شاي تقليدي بالهيل والزعفران",
        price: 120,
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "قهوة بيشاوري",
        description: "شاي أخضر مع الزعفران واللوز والبهارات",
        price: 150,
        image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "شاي نوون كشميري",
        description: "شاي وردي مملح مع الفستق واللوز",
        price: 180,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd5bba49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "ليمون بالنعناع",
        description: "ليموناضة طازجة مع أوراق النعناع والعسل",
        price: 130,
        image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "مانجو لاسي",
        description: "مشروب زبادي كريمي مع لب المانجو الطازج",
        price: 160,
        image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
    fr: [
      {
        name: "Thé Spécial Soufi",
        description: "Thé traditionnel épicé à la cardamome et au safran",
        price: 120,
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Kahwa Peshawari",
        description: "Thé vert infusé au safran, amandes et épices",
        price: 150,
        image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Noon Chai Kashmiri",
        description: "Thé rose salé aux pistaches et amandes",
        price: 180,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd5bba49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Limonade à la Menthe",
        description: "Limonade fraîche avec feuilles de menthe et miel",
        price: 130,
        image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Lassi Mangue",
        description: "Boisson crémeuse au yaourt et pulpe de mangue fraîche",
        price: 160,
        image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
    es: [
      {
        name: "Té Especial Sufi",
        description: "Té tradicional especiado con cardamomo y azafrán",
        price: 120,
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Kahwa Peshawari",
        description: "Té verde infusionado con azafrán, almendras y especias",
        price: 150,
        image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Noon Chai de Cachemira",
        description: "Té rosado salado con pistachos y almendras",
        price: 180,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd5bba49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Limonada de Menta",
        description: "Limonada fresca con hojas de menta y miel",
        price: 130,
        image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Lassi de Mango",
        description: "Bebida cremosa de yogur con pulpa de mango fresco",
        price: 160,
        image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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

const DrinksMenu: React.FC = () => {
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
        <div className="flex-1 bg-red-50 p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-red-900 text-center mb-8 pb-2 border-b-2 border-red-300">
            {t.title}
          </h1>
          <div className="space-y-6">
            {menuItems.map((item) => (
              <div key={item.name} className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-red-800">{item.name}</h3>
                  <p className="text-red-700 mt-1">{item.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-red-600 font-bold text-lg">₹{item.price}</span>
                    {isInCart(item.name) ? (
                      <button onClick={() => removeFromCart(item.name)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                        {t.remove}
                      </button>
                    ) : (
                      <button onClick={() => addToCart(item)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition">
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
          <h2 className="text-2xl font-bold text-red-900 mb-4 pb-2 border-b-2 border-red-300">{t.cartTitle}</h2>
          {cart.length === 0 ? (
            <p className="text-red-500">{t.emptyCart}</p>
          ) : (
            <>
              <div className="space-y-4 mb-4">
                {cart.map((item) => (
                  <div key={item.name} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <h4 className="font-medium text-red-800">{item.name}</h4>
                      <p className="text-sm text-red-600">₹{item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.name)} className="text-red-500 hover:text-red-700 text-xl">×</button>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span className="text-red-800">{t.total}:</span>
                  <span className="text-red-600">₹{total}</span>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition">
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

export default DrinksMenu;