'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaHeartBroken, FaShoppingCart, FaTrash } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  oldPrice?: number;
}

const initialWishlist: Product[] = [
  {
    id: 1,
    name: 'ساعة يد ذكية',
    price: 550,
    oldPrice: 750,
  image: "https://static.vecteezy.com/system/resources/previews/009/379/846/large_2x/smartwatch-clipart-design-illustration-free-png.png",

  },
  {
    id: 2,
    name: 'سماعة بلوتوث',
    price: 250,
    image: "https://static.vecteezy.com/system/resources/previews/065/848/628/non_2x/studio-image-of-wireless-headset-free-png.png",
  },
];

export default function Wishlist_Deatails() {
  const [wishlist, setWishlist] = useState<Product[]>(initialWishlist);

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const addToCart = (id: number) => {
    alert(`تمت إضافة المنتج ${id} إلى السلة ✅`);
  };

  return (
    <div className="space-y-6 text-black">
      <h2 className="text-2xl font-bold text-foreground">💖 المفضلة</h2>

      {wishlist.length === 0 ? (
        <div className="text-center text-gray-600 mt-10">
          <FaHeartBroken className="mx-auto text-4xl text-red-400 mb-2" />
          <p>لا توجد منتجات في المفضلة بعد.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map(product => (
            <div
              key={product.id}
              className="border rounded-lg shadow-sm bg-white p-4 flex flex-col"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="h-40 object-cover mb-4 rounded"  
                width={150}
                height={50}
              />
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <div className="mb-3 text-sm">
                <span className="text-blue-600 font-bold">{product.price} ج.م</span>
                {product.oldPrice && (
                  <span className="line-through text-gray-400 ml-2">{product.oldPrice} ج.م</span>
                )}
              </div>

              <div className="mt-auto flex justify-between items-center gap-2">
                <button
                  onClick={() => addToCart(product.id)}
                  className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 flex items-center gap-1"
                >
                  <FaShoppingCart /> للسلة
                </button>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
                >
                  <FaTrash /> إزالة
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
