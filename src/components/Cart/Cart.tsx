'use client'
import MainTitle from "@/utils/Main-Title";
import ItemsCart from "./Details/Items-Cart";
import PayedMethod from "./Payed/Payed-Method";
import { useEffect, useState } from "react";

const initialData = [
  { name: "تي شيرت رجالي", describtion: 'تي شيرت رجالي خامه قطن عالية الجودة', img: "/images/product-01.jpg", price: 19.99, count: 1, lastprice: 34.99 },
  { name: "تي شيرت نسائي", describtion: 'تي شيرت نسائي حرير صناعي', img: "/images/product-02.jpg", price: 24.99, count: 2, lastprice: 50.50 },
  { name: "بنطال جينز", describtion: 'بنطال جينز ليكرا', img: "/images/product-04.jpg", price: 39.99, count: 1, lastprice: 34.99 },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialData);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const handleCountChange = (index: number, newCount: number) => {
    setCartItems(prev =>
      prev.map((item, i) => (i === index ? { ...item, count: newCount } : item))
    );
  };
  //Handle Deleted Item
  const handleDeleteItem = (indexToDelete: number) => {
    const filteredItems = cartItems.filter((_, index) => index !== indexToDelete);
    setCartItems(filteredItems);
  };
  return (
    <section className="flex justify-between items-start flex-wrap gap-5">
      {/* Shopping Cart Items */}
      <div className="w-2/5 p-3 flex flex-col flex-wrap gap-4 justify-center items-start">
        <MainTitle title="عربة التسوق" />
        {cartItems.map((item, index) => (
          <ItemsCart
            key={index}
            name={item.name}
            describtion={item.describtion}
            img={item.img}
            price={item.price}
            count={item.count}
            lastprice={item.lastprice}
            onCountChange={(newCount) => handleCountChange(index, newCount)}
            handleDeleteItem={() => handleDeleteItem(index)}
          />
        ))}
      </div>
      {/* Payed Method */}
      <div className="w-2/5 p-3 flex flex-col gap-4 justify-start items-start">
        <PayedMethod totalPrice={totalPrice} />
      </div>
    </section>
  );
}
