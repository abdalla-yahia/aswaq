'use client';
import Image from "next/image";
import * as icon from "@/utils/Icons/Icons";
import { useState } from "react";
import ItemsDetails from "./ItemsDetails";

export default function ItemsCart({
  name,
  describtion,
  img,
  price,
  count,
  lastprice,
  onCountChange,
  handleDeleteItem,
}: {
  name: string;
  describtion: string;
  img?: string;
  price: number;
  count: number;
  lastprice?: number;
  onCountChange: (newCount: number) => void;
  handleDeleteItem: () => void
}) {
  const [Count, setCount] = useState(count || 1);

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 1000) {
      setCount(value);
      onCountChange(value); // نحدث القيمة للأب
    }
  };

  return (
    <div className="w-full flex  flex-wrap items-center md:items-start text-muted justify-center md:justify-between h-fit rounded bg-transparent border-t-2 gap-4 py-3">
      {/* Item Image */}
      <Image loading="lazy" src={img as string} alt="Item Image" width={100} height={50} className="rounded-lg flex justify-center items-center w-full md:w-fit" />

      {/* Item Details */}
      <ItemsDetails
        handleCountChange={handleCountChange}
        name={name}
        describtion={describtion}
        price={price}
        count={count}
        lastprice={lastprice}
      />

      {/* Item Actions */}
      <icon.CiTrash onClick={handleDeleteItem} title="حذف" className="cursor-pointer text-red-500 hover:text-red-700 transition-colors" />
    </div>
  );
}
