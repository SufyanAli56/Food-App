'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/lib/Store';
import { FiClock, FiCheckCircle, FiTruck, FiShoppingBag } from 'react-icons/fi';

// Type definitions
type LanguageCode = 'en' | 'ar' | 'fr' | 'es';

interface Translations {
  pageTitle: string;
  tabs: {
    current: string;
    past: string;
    menu: string;
  };
  orderStatus: {
    preparing: string;
    delivered: string;
    onTheWay: string;
  };
  orderDetails: {
    orderNumber: string;
    estimatedDelivery: string;
    deliveredIn: string;
    total: string;
  };
  menu: {
    addToCart: string;
    preparationTime: string;
    mins: string;
  };
  cart: {
    yourOrder: string;
    remove: string;
    proceedToCheckout: string;
  };
}

const translations: Record<LanguageCode, Translations> = {
  en: {
    pageTitle: "Your Sufi Bites Orders",
    tabs: {
      current: "Current Orders",
      past: "Order History",
      menu: "Order Again"
    },
    orderStatus: {
      preparing: "Preparing",
      delivered: "Delivered",
      onTheWay: "On the way"
    },
    orderDetails: {
      orderNumber: "Order #",
      estimatedDelivery: "Estimated delivery",
      deliveredIn: "Delivered in",
      total: "Total"
    },
    menu: {
      addToCart: "Add to Order",
      preparationTime: "Preparation time",
      mins: "mins"
    },
    cart: {
      yourOrder: "Your Order",
      remove: "Remove",
      proceedToCheckout: "Proceed to Checkout"
    }
  },
  ar: {
    pageTitle: "طلبات سوفي بايتس",
    tabs: {
      current: "الطلبات الحالية",
      past: "سجل الطلبات",
      menu: "اطلب مرة أخرى"
    },
    orderStatus: {
      preparing: "قيد التحضير",
      delivered: "تم التوصيل",
      onTheWay: "في الطريق"
    },
    orderDetails: {
      orderNumber: "طلب رقم #",
      estimatedDelivery: "وقت التوصيل المتوقع",
      deliveredIn: "تم التوصيل خلال",
      total: "المجموع"
    },
    menu: {
      addToCart: "أضف إلى الطلب",
      preparationTime: "وقت التحضير",
      mins: "دقيقة"
    },
    cart: {
      yourOrder: "طلبك",
      remove: "إزالة",
      proceedToCheckout: "الانتقال للدفع"
    }
  },
  fr: {
    pageTitle: "Vos Commandes Sufi Bites",
    tabs: {
      current: "Commandes en cours",
      past: "Historique des commandes",
      menu: "Commander à nouveau"
    },
    orderStatus: {
      preparing: "En préparation",
      delivered: "Livré",
      onTheWay: "En chemin"
    },
    orderDetails: {
      orderNumber: "Commande #",
      estimatedDelivery: "Livraison estimée",
      deliveredIn: "Livré en",
      total: "Total"
    },
    menu: {
      addToCart: "Ajouter à la commande",
      preparationTime: "Temps de préparation",
      mins: "min"
    },
    cart: {
      yourOrder: "Votre Commande",
      remove: "Supprimer",
      proceedToCheckout: "Passer à la caisse"
    }
  },
  es: {
    pageTitle: "Tus Pedidos Sufi Bites",
    tabs: {
      current: "Pedidos Actuales",
      past: "Historial de Pedidos",
      menu: "Pedir Nuevamente"
    },
    orderStatus: {
      preparing: "En preparación",
      delivered: "Entregado",
      onTheWay: "En camino"
    },
    orderDetails: {
      orderNumber: "Pedido #",
      estimatedDelivery: "Tiempo estimado de entrega",
      deliveredIn: "Entregado en",
      total: "Total"
    },
    menu: {
      addToCart: "Añadir al Pedido",
      preparationTime: "Tiempo de preparación",
      mins: "min"
    },
    cart: {
      yourOrder: "Tu Pedido",
      remove: "Eliminar",
      proceedToCheckout: "Proceder al Pago"
    }
  }
};

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  spicyLevel: number;
  preparationTime: number;
  image: string;
}

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  status: 'preparing' | 'delivered' | 'on-the-way';
  total: number;
  estimatedDelivery?: string;
  deliveryTime?: string;
}

const OrderPage = () => {
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);
  const t = translations[currentLanguage];
  
  const [activeTab, setActiveTab] = useState<'current' | 'past' | 'menu'>('current');
  const [cart, setCart] = useState<MenuItem[]>([]);
  
  // Sample menu data
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: currentLanguage === 'en' ? 'Nihari Special' : 
            currentLanguage === 'ar' ? 'نهاري خاص' :
            currentLanguage === 'fr' ? 'Nihari Spécial' : 'Nihari Especial',
      description: currentLanguage === 'en' ? 'Slow-cooked beef shank with traditional spices' :
               currentLanguage === 'ar' ? 'لحم بقري مطهو ببطء مع بهارات تقليدية' :
               currentLanguage === 'fr' ? 'Tendon de bœuf mijoté avec des épices traditionnelles' : 
               'Falda de res cocinada lentamente con especias tradicionales',
      price: 12.99,
      category: 'main',
      spicyLevel: 3,
      preparationTime: 25,
      image: '/nihari.jpg'
    },
    // ... other menu items with translations
  ];

  // Sample order data
  const orders: Record<'current' | 'past', Order[]> = {
    current: [
      {
        id: 'ORD-12345',
        date: '2023-06-15',
        items: [
          { 
            name: currentLanguage === 'en' ? 'Nihari Special' : 
                  currentLanguage === 'ar' ? 'نهاري خاص' :
                  currentLanguage === 'fr' ? 'Nihari Spécial' : 'Nihari Especial', 
            quantity: 1, 
            price: 12.99 
          },
          // ... other order items
        ],
        status: 'preparing',
        total: 20.97,
        estimatedDelivery: currentLanguage === 'en' ? '30 min' :
                         currentLanguage === 'ar' ? '٣٠ دقيقة' :
                         currentLanguage === 'fr' ? '30 min' : '30 min'
      }
    ],
    past: [
      // ... past orders with translations
    ]
  };

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const getStatusIcon = (status: Order['status']) => {
    switch(status) {
      case 'preparing':
        return <FiClock className="text-amber-500" />;
      case 'delivered':
        return <FiCheckCircle className="text-green-500" />;
      case 'on-the-way':
        return <FiTruck className="text-blue-500" />;
      default:
        return <FiShoppingBag className="text-gray-500" />;
    }
  };

  const getTranslatedStatus = (status: Order['status']) => {
    switch(status) {
      case 'preparing': return t.orderStatus.preparing;
      case 'delivered': return t.orderStatus.delivered;
      case 'on-the-way': return t.orderStatus.onTheWay;
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-800 mb-8">{t.pageTitle}</h1>
        
        {/* Order Tabs */}
        <div className="flex border-b border-amber-200 mb-8">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'current' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('current')}
          >
            {t.tabs.current}
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'past' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('past')}
          >
            {t.tabs.past}
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'menu' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('menu')}
          >
            {t.tabs.menu}
          </button>
        </div>

        {/* Current/Past Orders */}
        {(activeTab === 'current' || activeTab === 'past') && (
          <div className="space-y-6">
            {orders[activeTab].map(order => (
              <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{t.orderDetails.orderNumber}{order.id}</h3>
                    <p className="text-gray-500 text-sm">{order.date}</p>
                  </div>
                  <div className="flex items-center">
                    {getStatusIcon(order.status)}
                    <span className="ml-2">{getTranslatedStatus(order.status)}</span>
                  </div>
                </div>

                <div className="border-t border-b border-gray-100 py-4 my-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between mb-2">
                      <div>
                        <span className="font-medium">{item.quantity}x </span>
                        <span>{item.name}</span>
                      </div>
                      <span>${(item.quantity * item.price).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    {order.estimatedDelivery && (
                      <p className="text-sm text-gray-600">
                        {t.orderDetails.estimatedDelivery}: {order.estimatedDelivery}
                      </p>
                    )}
                    {order.deliveryTime && (
                      <p className="text-sm text-gray-600">
                        {t.orderDetails.deliveredIn}: {order.deliveryTime}
                      </p>
                    )}
                  </div>
                  <div className="text-lg font-semibold">
                    {t.orderDetails.total}: ${order.total.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Menu for Ordering */}
        {activeTab === 'menu' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/300x200?text=Food+Image';
                    }}
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <span className="text-amber-600 font-bold">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-sm ${i < item.spicyLevel ? 'text-red-500' : 'text-gray-300'}`}
                        >
                          •
                        </span>
                      ))}
                      <span className="text-xs text-gray-500 ml-1">
                        {item.preparationTime} {t.menu.mins}
                      </span>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded text-sm font-medium"
                    >
                      {t.menu.addToCart}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Shopping Cart Sidebar */}
        {cart.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
            <h3 className="font-bold text-lg mb-3 flex items-center">
              <FiShoppingBag className="mr-2" />
              {t.cart.yourOrder} ({cart.length})
            </h3>
            <div className="space-y-3">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-600"
                  >
                    {t.cart.remove}
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-2 border-t border-gray-200">
              <div className="flex justify-between font-bold">
                <span>{t.orderDetails.total}:</span>
                <span>
                  ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
                </span>
              </div>
              <button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white py-2 rounded font-medium">
                {t.cart.proceedToCheckout}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;