'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/app/lib/Store';

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
      title: "Sufi Bites Lunch Menu",
      cartTitle: "Your Order",
      total: "Total",
      checkout: "Proceed to Checkout",
      emptyCart: "Your cart is empty",
      addToCart: "Add to Cart",
      remove: "Remove",
    },
    ar: {
      title: "قائمة غداء صوفي بايتس",
      cartTitle: "طلبك",
      total: "المجموع",
      checkout: "المتابعة للدفع",
      emptyCart: "سلة التسوق فارغة",
      addToCart: "أضف إلى السلة",
      remove: "إزالة",
    },
    fr: {
      title: "Menu Déjeuner Sufi Bites",
      cartTitle: "Votre commande",
      total: "Total",
      checkout: "Passer à la caisse",
      emptyCart: "Votre panier est vide",
      addToCart: "Ajouter au panier",
      remove: "Retirer",
    },
    es: {
      title: "Menú de almuerzo Sufi Bites",
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
        name: "Sufi Special Platter",
        description: "Grilled chicken, lamb kebabs, saffron rice with nuts and raisins",
        price: 350,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Peshawari Chapli Kebab",
        description: "Traditional spiced beef patties served with naan and chutney",
        price: 280,
        image: "https://images.unsplash.com/photo-1601050690647-89b2af7a1e56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Kashmiri Dum Aloo",
        description: "Potatoes cooked in aromatic yogurt gravy with traditional spices",
        price: 220,
        image: "https://images.unsplash.com/photo-1630910392192-67d8a2e0464f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Sindhi Biryani",
        description: "Fragrant rice with tender meat, potatoes and special Sindhi spices",
        price: 320,
        image: "https://images.unsplash.com/photo-1633945274410-a9f4e6f5c123?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Balochi Sajji",
        description: "Whole roasted lamb marinated in traditional Balochi spices",
        price: 450,
        image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
    ar: [
      {
        name: "طبق صوفي الخاص",
        description: "دجاج مشوي، كباب لحم، أرز زعفران مع مكسرات وزبيب",
        price: 350,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "كباب چپلي بيشاوري",
        description: "كباب لحم تقليدي مع خبز نان وصلصة",
        price: 280,
        image: "https://images.unsplash.com/photo-1601050690647-89b2af7a1e56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "دم ألو كشميري",
        description: "بطاطس مطهوة بصلصة لبن وتوابل تقليدية",
        price: 220,
        image: "https://images.unsplash.com/photo-1630910392192-67d8a2e0464f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "برياني سندي",
        description: "أرز معطر مع لحم طري، بطاطس وتوابل سندية خاصة",
        price: 320,
        image: "https://images.unsplash.com/photo-1633945274410-a9f4e6f5c123?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "سجّي بلوشي",
        description: "خروف مشوي كامل متبل بتوابل بلوشية تقليدية",
        price: 450,
        image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
    fr: [
      {
        name: "Plateau spécial Soufi",
        description: "Poulet grillé, brochettes d'agneau, riz au safran avec noix et raisins secs",
        price: 350,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Kebab Chapli Peshawari",
        description: "Galettes de bœuf épicées traditionnelles servies avec naan et chutney",
        price: 280,
        image: "https://images.unsplash.com/photo-1601050690647-89b2af7a1e56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Dum Aloo Cachemiri",
        description: "Pommes de terre cuites dans une sauce au yaourt aromatique avec des épices traditionnelles",
        price: 220,
        image: "https://images.unsplash.com/photo-1630910392192-67d8a2e0464f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Biryani Sindhi",
        description: "Riz parfumé avec viande tendre, pommes de terre et épices spéciales Sindhi",
        price: 320,
        image: "https://images.unsplash.com/photo-1633945274410-a9f4e6f5c123?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Sajji Baloutchi",
        description: "Agneau entier rôti mariné dans des épices baloutches traditionnelles",
        price: 450,
        image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
    es: [
      {
        name: "Plato especial Sufi",
        description: "Pollo a la parrilla, kebabs de cordero, arroz con azafrán y frutos secos",
        price: 350,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Kebab Chapli Peshawari",
        description: "Hamburguesas de carne picante tradicionales servidas con naan y chutney",
        price: 280,
        image: "https://images.unsplash.com/photo-1601050690647-89b2af7a1e56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Dum Aloo de Cachemira",
        description: "Patatas cocinadas en salsa de yogur aromático con especias tradicionales",
        price: 220,
        image: "https://images.unsplash.com/photo-1630910392192-67d8a2e0464f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Biryani Sindhi",
        description: "Arroz fragante con carne tierna, patatas y especias especiales Sindhi",
        price: 320,
        image: "https://images.unsplash.com/photo-1633945274410-a9f4e6f5c123?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Sajji Balochi",
        description: "Cordero entero asado marinado en especias tradicionales balochi",
        price: 450,
        image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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

const LunchMenu = () => {
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

export default LunchMenu;