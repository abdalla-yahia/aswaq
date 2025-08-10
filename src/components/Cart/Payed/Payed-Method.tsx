'use client';
import InputButton from "@/utils/Bottons/Input-button";
import SubmitButton from "@/utils/Bottons/Submit-button";

export default function PayedMethod({ totalPrice }: { totalPrice: number }) {

  return (
    <div className="w-full">
      {/* <MainTitle title="تكملة الدفع" /> */}
      {/**Discount Code */}
      <div className="w-full border-b mt-6 flex justify-between items-center gap-3">
        <label className="mx-2">الإجمالي </label>
        <span className="mx-2 text-2xl  p-5">{totalPrice.toFixed(2)} جنيه</span>
      </div>
      {/**Discount Code */}
      <div className="w-full border-b mt-6 flex justify-between items-center gap-3">
        <label className="code-discount w-1/3 mx-2">كود خصم </label>
        <InputButton onchange={() => ''} type="text" placeholder="ادخل كود الخصم" name="discount-code" />
        <SubmitButton onclick={() => ''} text="تطبيق" bgcolor="bg-accent" textcolor="text-white" />
      </div>
      {/** Net Price */}
      <div className="w-full border-b my-6 flex justify-between items-center gap-3">
        <label className="mx-2">السعر بعد الخصم </label>
        <span className="mx-2 text-2xl  p-5">{totalPrice.toFixed(2)} جنيه</span>
      </div>
      {/**Pay Method */}
      <div className="flex justify-evenly gap-2">
        <SubmitButton onclick={() => ''} text="تكملة التسوق" bgcolor="bg-muted" textcolor="text-white" />
        <SubmitButton onclick={() => ''} text="الإنتقال للدفع" bgcolor="bg-accent" textcolor="text-white" />
      </div>
    </div>
  )
}
