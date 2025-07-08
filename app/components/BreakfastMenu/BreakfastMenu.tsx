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
      title: "Sufi Bites Breakfast Menu",
      cartTitle: "Your Order",
      total: "Total",
      checkout: "Proceed to Checkout",
      emptyCart: "Your cart is empty",
      addToCart: "Add to Cart",
      remove: "Remove",
    },
    ar: {
      title: "قائمة فطور صوفي بايتس",
      cartTitle: "طلبك",
      total: "المجموع",
      checkout: "المتابعة للدفع",
      emptyCart: "سلة التسوق فارغة",
      addToCart: "أضف إلى السلة",
      remove: "إزالة",
    },
    fr: {
      title: "Menu Petit-déjeuner Sufi Bites",
      cartTitle: "Votre commande",
      total: "Total",
      checkout: "Passer à la caisse",
      emptyCart: "Votre panier est vide",
      addToCart: "Ajouter au panier",
      remove: "Retirer",
    },
    es: {
      title: "Menú de desayuno Sufi Bites",
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
        name: "Sufi Morning Delight",
        description: "Freshly baked naan with organic honey, walnuts, and seasonal fruits",
        price: 250,
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Peshawari Chai Combo",
        description: "Traditional kahwa with saffron, served with almond biscuits",
        price: 180,
        image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Kashmiri Bagh Breakfast",
        description: "Girda bread with homemade apricot jam and walnut chutney",
        price: 220,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Haleem Sunrise Bowl",
        description: "Slow-cooked wheat with chicken, served with fresh mint yogurt",
        price: 280,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Sindhi Poha",
        description: "Flattened rice with nuts, raisins, and aromatic spices",
        price: 190,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
    ar: [
      {
        name: "متعة صباح صوفي",
        description: "خبز نان طازج مع عسل عضوي، جوز وفواكه موسمية",
        price: 250,
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "كومبو شاي بيشاور",
        description: "كرك الزعفران التقليدي مع بسكويت اللوز",
        price: 180,
        image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "فطور كشميري باغ",
        description: "خبز جيردا مع مربى المشمش وصلصة الجوز",
        price: 220,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "وعاء صباح حليم",
        description: "قمح مطبوخ ببطء مع دجاج، يقدم مع زبادي النعناع",
        price: 280,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "سندي بوهة",
        description: "أرز مسطح مع مكسرات وزبيب وتوابل عطرية",
        price: 190,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
    fr: [
      {
        name: "Délice du matin soufi",
        description: "Naan fraîchement cuit avec du miel bio, noix et fruits de saison",
        price: 250,
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Combo thé Peshawari",
        description: "Kahwa traditionnel au safran, servi avec biscuits aux amandes",
        price: 180,
        image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Petit-déjeuner Kashmiri Bagh",
        description: "Pain Girda avec confiture d'abricots maison et chutney aux noix",
        price: 220,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Bol lever de soleil Haleem",
        description: "Blé mijoté avec du poulet, servi avec yaourt à la menthe",
        price: 280,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Sindhi Poha",
        description: "Riz aplati avec noix, raisins secs et épices",
        price: 190,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
    es: [
      {
        name: "Delicia matutina sufí",
        description: "Naan recién horneado con miel orgánica, nueces y frutas de temporada",
        price: 250,
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Combo de té Peshawari",
        description: "Kahwa tradicional con azafrán y galletas de almendra",
        price: 180,
        image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Desayuno Kashmiri Bagh",
        description: "Pan girda con mermelada de albaricoque y chutney de nuez",
        price: 220,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Bowl Amanecer de Haleem",
        description: "Trigo cocido a fuego lento con pollo y yogur de menta",
        price: 280,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Poha Sindhi",
        description: "Arroz plano con nueces, pasas y especias aromáticas",
        price: 190,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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

const BreakfastMenu: React.FC = () => {
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

export default BreakfastMenu;
