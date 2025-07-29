'use client';
import InputButton from "@/utils/Bottons/Input-button";
import SubmitButton from "@/utils/Bottons/Submit-button";
import MainTitle from "@/utils/Main-Title";

export default function PayedMethod({totalPrice}:{totalPrice:number}) {
    
  return (
    <div className="w-full">
        <MainTitle title="تكملة الدفع" />
        {/**Discount Code */}
        <div className="w-full border-b mt-6 flex justify-between items-center gap-3">
            <label className="mx-2">الإجمالي </label>
            <span className="mx-2 text-2xl  p-5">{totalPrice.toFixed(2)} جنيه</span>
        </div>
        {/**Discount Code */}
        <div className="w-full border-b mt-6 flex justify-between items-center gap-3">
            <label className="code-discount w-1/3 mx-2">كود خصم </label>
            <InputButton type="text" placeholder="ادخل كود الخصم" name="discount-code"/>
            <SubmitButton text="تطبيق" />
        </div>
        {/** Net Price */}
        <div className="w-full border-b my-6 flex justify-between items-center gap-3">
            <label className="mx-2">السعر بعد الخصم </label>
            <span className="mx-2 text-2xl  p-5">2500 جنيه</span>
        </div>
        {/**Pay Method */}
        <SubmitButton text="الإنتقال للدفع" />
    </div>
  )
}
