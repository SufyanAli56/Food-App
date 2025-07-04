"use client";

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib/Store';

// Type definitions
type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

type TranslationKey = 'title' | 'tagline' | 'searchPlaceholder' | 'cartTitle' | 
                     'clearCart' | 'emptyCartTitle' | 'emptyCartSubtitle' | 
                     'checkoutButton' | 'ingredientsLabel' | 'spicyLevels' | 
                     'prepTime' | 'addToCart' | 'noDishesTitle' | 'noDishesSubtitle' | 
                     'clearFilters' | 'footerRights' | 'footerTagline' | 
                     'categories' | 'spicyLabels' | 'notificationAdded' | 
                     'notificationRemoved' | 'notificationReduced' | 'notificationCleared';

interface Translations {
  en: Record<TranslationKey, string | string[]>;
  ar: Record<TranslationKey, string | string[]>;
  fr: Record<TranslationKey, string | string[]>;
  es: Record<TranslationKey, string | string[]>;
}

interface MenuItem {
  id: number;
  emoji: string;
  name: string;
  category: string;
  photo: string;
  ingredients: string[];
  price: number;
  spicyLevel?: number;
  preparationTime?: number;
  rating?: number;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const Categories: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Redux hooks
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  // Translations
  const translations: Translations = {
    en: {
      title: "Sufi Cuisine",
      tagline: "Where every bite takes you on a spiritual journey",
      searchPlaceholder: "Search dishes or ingredients...",
      cartTitle: "Your Order",
      clearCart: "Clear All",
      emptyCartTitle: "Your cart is empty",
      emptyCartSubtitle: "Add some delicious Sufi dishes to get started!",
      checkoutButton: "Proceed to Checkout",
      ingredientsLabel: "Ingredients:",
      spicyLevels: JSON.stringify(["Mild", "Medium", "Hot"]),
      prepTime: "mins",
      addToCart: "Add to Cart",
      noDishesTitle: "No dishes found",
      noDishesSubtitle: "Try adjusting your search or filter criteria",
      clearFilters: "Clear filters",
      footerRights: "© {year} Sufi Cuisine. All rights reserved.",
      footerTagline: "Experience the taste of spiritual tradition",
      categories: JSON.stringify([
        "All Dishes",
        "Traditional Sufi Dishes",
        "Vegetarian Delights",
        "Grill & BBQ",
        "Healthy Bowls",
        "Sufi Sweets",
        "Spiritual Sips"
      ]),
      spicyLabels: JSON.stringify(["Not Spicy", "Mild", "Medium", "Hot", "Very Hot"]),
      notificationAdded: "{item} added to cart!",
      notificationRemoved: "{item} removed from cart!",
      notificationReduced: "{item} quantity reduced from cart!",
      notificationCleared: "Cart cleared!"
    },
    ar: {
      title: "المطبخ الصوفي",
      tagline: "حيث تأخذك كل قضمة في رحلة روحية",
      searchPlaceholder: "ابحث عن الأطباق أو المكونات...",
      cartTitle: "طلبك",
      clearCart: "مسح الكل",
      emptyCartTitle: "سلة التسوق فارغة",
      emptyCartSubtitle: "أضف بعض الأطباق الصوفية اللذيذة للبدء!",
      checkoutButton: "الانتقال إلى الدفع",
      ingredientsLabel: "المكونات:",
      spicyLevels: JSON.stringify(["خفيف", "متوسط", "حار"]),
      prepTime: "دقيقة",
      addToCart: "أضف إلى السلة",
      noDishesTitle: "لا توجد أطباق",
      noDishesSubtitle: "حاول تعديل معايير البحث أو التصفية",
      clearFilters: "مسح الفلاتر",
      footerRights: "© {year} المطبخ الصوفي. جميع الحقوق محفوظة.",
      footerTagline: "جرب طعم التقاليد الروحية",
      categories: JSON.stringify([
        "جميع الأطباق",
        "أطباق صوفية تقليدية",
        "أطباق نباتية",
        "مشويات",
        "أطباق صحية",
        "حلويات صوفية",
        "مشروبات روحية"
      ]),
      spicyLabels: JSON.stringify(["غير حار", "خفيف", "متوسط", "حار", "حار جدًا"]),
      notificationAdded: "تم إضافة {item} إلى السلة!",
      notificationRemoved: "تم إزالة {item} من السلة!",
      notificationReduced: "تم تقليل كمية {item} من السلة!",
      notificationCleared: "تم تفريغ السلة!"
    },
    fr: {
      title: "Cuisine Soufie",
      tagline: "Où chaque bouchée vous emmène dans un voyage spirituel",
      searchPlaceholder: "Rechercher des plats ou ingrédients...",
      cartTitle: "Votre Commande",
      clearCart: "Tout effacer",
      emptyCartTitle: "Votre panier est vide",
      emptyCartSubtitle: "Ajoutez de délicieux plats soufis pour commencer!",
      checkoutButton: "Passer à la caisse",
      ingredientsLabel: "Ingrédients:",
      spicyLevels: JSON.stringify(["Doux", "Moyen", "Épicé"]),
      prepTime: "min",
      addToCart: "Ajouter au panier",
      noDishesTitle: "Aucun plat trouvé",
      noDishesSubtitle: "Essayez d'ajuster vos critères de recherche ou de filtrage",
      clearFilters: "Effacer les filtres",
      footerRights: "© {year} Cuisine Soufie. Tous droits réservés.",
      footerTagline: "Découvrez le goût de la tradition spirituelle",
      categories: JSON.stringify([
        "Tous les plats",
        "Plats soufis traditionnels",
        "Délices végétariens",
        "Grillades",
        "Bol sains",
        "Desserts soufis",
        "Boissons spirituelles"
      ]),
      spicyLabels: JSON.stringify(["Non épicé", "Doux", "Moyen", "Épicé", "Très épicé"]),
      notificationAdded: "{item} ajouté au panier!",
      notificationRemoved: "{item} retiré du panier!",
      notificationReduced: "Quantité de {item} réduite du panier!",
      notificationCleared: "Panier vidé!"
    },
    es: {
      title: "Cocina Sufí",
      tagline: "Donde cada bocado te lleva en un viaje espiritual",
      searchPlaceholder: "Buscar platos o ingredientes...",
      cartTitle: "Tu Pedido",
      clearCart: "Limpiar Todo",
      emptyCartTitle: "Tu carrito está vacío",
      emptyCartSubtitle: "¡Añade algunos deliciosos platos sufíes para comenzar!",
      checkoutButton: "Proceder al Pago",
      ingredientsLabel: "Ingredientes:",
      spicyLevels: JSON.stringify(["Suave", "Medio", "Picante"]),
      prepTime: "min",
      addToCart: "Añadir al Carrito",
      noDishesTitle: "No se encontraron platos",
      noDishesSubtitle: "Intenta ajustar tus criterios de búsqueda o filtrado",
      clearFilters: "Limpiar filtros",
      footerRights: "© {year} Cocina Sufí. Todos los derechos reservados.",
      footerTagline: "Experimenta el sabor de la tradición espiritual",
      categories: JSON.stringify([
        "Todos los Platos",
        "Platos Sufíes Tradicionales",
        "Delicias Vegetarianas",
        "Parrilla y BBQ",
        "Platos Saludables",
        "Dulces Sufíes",
        "Bebidas Espirituales"
      ]),
      spicyLabels: JSON.stringify(["No picante", "Suave", "Medio", "Picante", "Muy picante"]),
      notificationAdded: "¡{item} añadido al carrito!",
      notificationRemoved: "¡{item} eliminado del carrito!",
      notificationReduced: "¡Cantidad de {item} reducida del carrito!",
      notificationCleared: "¡Carrito vaciado!"
    }
  };

  // Helper function to parse stringified arrays
  const getTranslatedArray = (key: TranslationKey): string[] => {
    const value = translations[currentLanguage][key];
    return typeof value === 'string' ? JSON.parse(value) : value;
  };

  const menuItems: MenuItem[] = [
    {
      id: 1,
      emoji: '🥘',
      name: currentLanguage === 'en' ? 'Nihari' : 
            currentLanguage === 'ar' ? 'نهاري' :
            currentLanguage === 'fr' ? 'Nihari' : 'Nihari',
      category: getTranslatedArray('categories')[1],
      photo: '/Nahiri-img.jpeg',
      ingredients: currentLanguage === 'en' ? ['Beef shank', 'Nihari masala', 'Ginger', 'Wheat flour', 'Ghee'] :
               currentLanguage === 'ar' ? ['لحم بقري', 'بهارات النهاري', 'زنجبيل', 'طحين القمح', 'سمن'] :
               currentLanguage === 'fr' ? ['Jarret de bœuf', 'Masala Nihari', 'Gingembre', 'Farine de blé', 'Ghee'] :
               ['Falda de res', 'Masala Nihari', 'Jengibre', 'Harina de trigo', 'Ghee'],
      price: 12.99,
      spicyLevel: 3,
      preparationTime: 240,
      rating: 4.8
    },
    {
      id: 2,
      emoji: '🥘',
      name: currentLanguage === 'en' ? 'Haleem' : 
            currentLanguage === 'ar' ? 'حليم' :
            currentLanguage === 'fr' ? 'Haleem' : 'Haleem',
      category: getTranslatedArray('categories')[1],
      photo: '/haleem.jpeg',
      ingredients: currentLanguage === 'en' ? ['Wheat', 'Barley', 'Lentils', 'Beef', 'Spices'] :
               currentLanguage === 'ar' ? ['قمح', 'شعير', 'عدس', 'لحم بقري', 'بهارات'] :
               currentLanguage === 'fr' ? ['Blé', 'Orge', 'Lentilles', 'Bœuf', 'Épices'] :
               ['Trigo', 'Cebada', 'Lentejas', 'Carne de res', 'Especias'],
      price: 10.99,
      spicyLevel: 2,
      preparationTime: 180,
      rating: 4.6
    },
    {
      id: 3,
      emoji: '🍲',
      name: currentLanguage === 'en' ? 'Vegetable Biryani' : 
            currentLanguage === 'ar' ? 'برياني الخضار' :
            currentLanguage === 'fr' ? 'Biryani aux légumes' : 'Biryani de verduras',
      category: getTranslatedArray('categories')[2],
      photo: '/brayniii.jpeg',
      ingredients: currentLanguage === 'en' ? ['Basmati rice', 'Mixed vegetables', 'Yogurt', 'Biryani masala', 'Saffron'] :
               currentLanguage === 'ar' ? ['أرز بسمتي', 'خضار مشكلة', 'زبادي', 'بهارات البرياني', 'زعفران'] :
               currentLanguage === 'fr' ? ['Riz basmati', 'Légumes mélangés', 'Yaourt', 'Masala biryani', 'Safran'] :
               ['Arroz basmati', 'Verduras mixtas', 'Yogur', 'Masala biryani', 'Azafrán'],
      price: 9.99,
      spicyLevel: 2,
      preparationTime: 60,
      rating: 4.5
    },
    {
      id: 4,
      emoji: '🍢',
      name: currentLanguage === 'en' ? 'Chicken Seekh Kebab' : 
            currentLanguage === 'ar' ? 'سيخ كباب دجاج' :
            currentLanguage === 'fr' ? 'Seekh kebab au poulet' : 'Seekh kebab de pollo',
      category: getTranslatedArray('categories')[3],
      photo: '/kabab.jpeg',
      ingredients: currentLanguage === 'en' ? ['Minced chicken', 'Onions', 'Garlic', 'Coriander', 'Garam masala'] :
               currentLanguage === 'ar' ? ['دجاج مفروم', 'بصل', 'ثوم', 'كزبرة', 'بهارات غارام ماسالا'] :
               currentLanguage === 'fr' ? ['Poulet haché', 'Oignons', 'Ail', 'Coriandre', 'Garam masala'] :
               ['Pollo picado', 'Cebollas', 'Ajo', 'Cilantro', 'Garam masala'],
      price: 8.99,
      spicyLevel: 3,
      preparationTime: 30,
      rating: 4.7
    },
    {
      id: 5,
      emoji: '🥗',
      name: currentLanguage === 'en' ? 'Quinoa Bowl' : 
            currentLanguage === 'ar' ? 'طبق الكينوا' :
            currentLanguage === 'fr' ? 'Bol de quinoa' : 'Tazón de quinoa',
      category: getTranslatedArray('categories')[4],
      photo: '/Bowel.jpeg',
      ingredients: currentLanguage === 'en' ? ['Quinoa', 'Avocado', 'Cherry tomatoes', 'Kale', 'Lemon dressing'] :
               currentLanguage === 'ar' ? ['كينوا', 'أفوكادو', 'طماطم كرزية', 'كرنب', 'صوص ليمون'] :
               currentLanguage === 'fr' ? ['Quinoa', 'Avocat', 'Tomates cerises', 'Kale', 'Vinaigrette au citron'] :
               ['Quinoa', 'Aguacate', 'Tomates cherry', 'Col rizada', 'Aderezo de limón'],
      price: 11.99,
      spicyLevel: 1,
      preparationTime: 20,
      rating: 4.3
    },
    {
      id: 6,
      emoji: '🍰',
      name: currentLanguage === 'en' ? 'Gajar Halwa' : 
            currentLanguage === 'ar' ? 'حلوى الجزر' :
            currentLanguage === 'fr' ? 'Gajar halwa' : 'Gajar halwa',
      category: getTranslatedArray('categories')[5],
      photo: '/Gajar Halwa.jpeg',
      ingredients: currentLanguage === 'en' ? ['Carrots', 'Milk', 'Sugar', 'Ghee', 'Nuts'] :
               currentLanguage === 'ar' ? ['جزر', 'حليب', 'سكر', 'سمن', 'مكسرات'] :
               currentLanguage === 'fr' ? ['Carottes', 'Lait', 'Sucre', 'Ghee', 'Noix'] :
               ['Zanahorias', 'Leche', 'Azúcar', 'Ghee', 'Frutos secos'],
      price: 6.99,
      spicyLevel: 0,
      preparationTime: 90,
      rating: 4.9
    },
    {
      id: 7,
      emoji: '🫖',
      name: currentLanguage === 'en' ? 'Sufi Kahwa' : 
            currentLanguage === 'ar' ? 'قهوة صوفية' :
            currentLanguage === 'fr' ? 'Kahwa soufie' : 'Kahwa sufí',
      category: getTranslatedArray('categories')[6],
      photo: '/Sufi Kahwa.jpeg',
      ingredients: currentLanguage === 'en' ? ['Green tea', 'Saffron', 'Cardamom', 'Cinnamon', 'Almonds'] :
               currentLanguage === 'ar' ? ['شاي أخضر', 'زعفران', 'هيل', 'قرفة', 'لوز'] :
               currentLanguage === 'fr' ? ['Thé vert', 'Safran', 'Cardamome', 'Cannelle', 'Amandes'] :
               ['Té verde', 'Azafrán', 'Cardamomo', 'Canela', 'Almendras'],
      price: 4.99,
      spicyLevel: 1,
      preparationTime: 15,
      rating: 4.7
    }
  ];

  useEffect(() => {
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('sufiCuisineCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('sufiCuisineCart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    setNotification(
      translations[currentLanguage].notificationAdded.toString().replace('{item}', item.name)
    );
    setTimeout(() => setNotification(null), 3000);
  };

  const handleRemoveFromCart = (itemId: number, removeAll = false) => {
    setCart(prevCart => {
      if (removeAll) {
        return prevCart.filter(item => item.id !== itemId);
      }
      
      const existingItem = prevCart.find(item => item.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter(item => item.id !== itemId);
      }
    });

    const removedItem = menuItems.find(item => item.id === itemId);
    if (removedItem) {
      const notificationKey = removeAll ? 'notificationRemoved' : 'notificationReduced';
      setNotification(
        translations[currentLanguage][notificationKey].toString().replace('{item}', removedItem.name)
      );
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const handleClearCart = () => {
    setCart([]);
    setNotification(translations[currentLanguage].notificationCleared.toString());
    setTimeout(() => setNotification(null), 3000);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://via.placeholder.com/300x200?text=Food+Image';
  };

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = !activeCategory || activeCategory === getTranslatedArray('categories')[0] || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const renderSpicyLevel = (level: number = 0) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-lg ${i < level ? 'text-red-500' : 'text-gray-300'}`}>•</span>
        ))}
      </div>
    );
  };

  const renderRatingStars = (rating: number = 0) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-amber-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ))}
        <span className="text-xs text-gray-500 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Notification */}
        {notification && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in">
            {notification}
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-2 font-serif">
            {translations[currentLanguage].title.toString()}
          </h1>
          <p className="text-lg text-gray-600 italic">
            {translations[currentLanguage].tagline.toString()}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-4 sticky top-4 z-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder={translations[currentLanguage].searchPlaceholder.toString()}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2">
              {getTranslatedArray('categories').map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category === activeCategory ? null : category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === activeCategory
                      ? 'bg-amber-600 text-white'
                      : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8 sticky top-32 z-10">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-gray-800">
              {translations[currentLanguage].cartTitle.toString()} ({cart.reduce((total, item) => total + item.quantity, 0)} items)
            </h3>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-amber-600">
                ${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
              </span>
              {cart.length > 0 && (
                <button
                  onClick={handleClearCart}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  {translations[currentLanguage].clearCart.toString()}
                </button>
              )}
            </div>
          </div>
          
          {/* Cart Items */}
          {cart.length > 0 ? (
            <div className="mt-4 border-t pt-3 space-y-3">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center group">
                  <div className="flex items-center flex-grow">
                    <img 
                      src={item.photo} 
                      alt={item.name}
                      className="w-12 h-12 rounded-md object-cover mr-3"
                      onError={handleImageError}
                    />
                    <div className="flex-grow">
                      <div className="font-medium text-gray-800">{item.name}</div>
                      <div className="text-sm text-gray-500">
                        ${item.price.toFixed(2)} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleRemoveFromCart(item.id, false)}
                      className="text-amber-600 hover:text-amber-800 p-1 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className="text-amber-600 hover:text-amber-800 p-1 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => handleRemoveFromCart(item.id, true)}
                      className="text-red-400 opacity-0 group-hover:opacity-100 p-1 transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
              <button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-md">
                {translations[currentLanguage].checkoutButton.toString()}
              </button>
            </div>
          ) : (
            <div className="text-center py-6 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="mt-2">{translations[currentLanguage].emptyCartTitle.toString()}</p>
              <p className="text-sm">{translations[currentLanguage].emptyCartSubtitle.toString()}</p>
            </div>
          )}
        </div>

        {/* Menu Items */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={item.photo} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={handleImageError}
                    />
                    <span className="absolute top-3 right-3 text-3xl bg-white bg-opacity-80 rounded-full w-12 h-12 flex items-center justify-center shadow-sm">
                      {item.emoji}
                    </span>
                    {item.spicyLevel && item.spicyLevel > 0 && (
                      <div className="absolute bottom-3 left-3 bg-white bg-opacity-80 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                        {getTranslatedArray('spicyLabels')[item.spicyLevel]}
                      </div>
                    )}
                    {item.preparationTime && (
                      <div className="absolute bottom-3 right-3 bg-white bg-opacity-80 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item.preparationTime} {translations[currentLanguage].prepTime.toString()}
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                      <span className="text-lg font-bold text-amber-600">${item.price.toFixed(2)}</span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        {item.rating && renderRatingStars(item.rating)}
                        {item.spicyLevel && renderSpicyLevel(item.spicyLevel)}
                      </div>
                      <h4 className="text-sm font-medium text-gray-600 mb-1">
                        {translations[currentLanguage].ingredientsLabel.toString()}
                      </h4>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {item.ingredients.join(', ')}
                      </p>
                    </div>

                    <button
                      onClick={() => handleAddToCart(item)}
                      className="mt-auto w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {translations[currentLanguage].addToCart.toString()}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-medium text-gray-600 mt-4">
                  {translations[currentLanguage].noDishesTitle.toString()}
                </h3>
                <p className="text-gray-500 mt-2">
                  {translations[currentLanguage].noDishesSubtitle.toString()}
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory(null);
                  }}
                  className="mt-4 text-amber-600 hover:text-amber-800 font-medium"
                >
                  {translations[currentLanguage].clearFilters.toString()}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm py-8 border-t">
          <p>
            {translations[currentLanguage].footerRights.toString().replace('{year}', new Date().getFullYear().toString())}
          </p>
          <p className="mt-1">
            {translations[currentLanguage].footerTagline.toString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;