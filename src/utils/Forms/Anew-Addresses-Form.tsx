'use client'
import InputButton from "../Bottons/Input-button";
import SubmitButton from "../Bottons/Submit-button";

export default function Anew_Addresses_Form() {
  return (
    <>
      {/**Section Title*/}
      <h1 className="flex w-full p-3 justify-center items-center text-sm md:text-xl lg:text-4xl">أضف عنوان جديد</h1>
      {/**Form Content*/}
      <div className="flex flex-col justify-start items-start gap-2 w-full md:w-1/2">
        {/*Address Name*/}
        <div className="flex justify-between items-center w-full gap-2">
          <h2>اسم العنون : </h2>
          <div className="w-3/4">
            <InputButton onchange={() => ''} type="text" placeholder="أضف اسم العنوان جديد" />
          </div>
        </div>
        {/*Address */}
        <div className="flex justify-between items-center w-full gap-2">
          <h2>العنون : </h2>
          <div className="w-3/4">
            <InputButton onchange={() => ''} type="text" placeholder="أضف العنوان الجديد" />
          </div>
        </div>
        {/*Phone */}
        <div className="flex justify-between items-center w-full gap-2">
          <h2>رقم الهاتف : </h2>
          <div className="w-3/4">
            <InputButton onchange={() => ''} type="text" placeholder="أضف رقم الهاتف للعنوان " />
          </div>
        </div>
        <SubmitButton onclick={() => ''} text="حفظ" bgcolor="bg-accent" textcolor="" />
      </div>
    </>
  )
}
