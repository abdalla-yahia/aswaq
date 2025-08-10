'use client'
import InputButton from "@/utils/Bottons/Input-button";
import SubmitButton from "@/utils/Bottons/Submit-button";
import * as icon from '@/utils/Icons/Icons';

export default function Add_Comment() {
  return (
    <div className="w-full flex flex-col justify-start items-start py-5">
      <h1 className="mb-5 text-3xl">أضف تعليق </h1>
      {/************ @To-Do Stars Rate **************/}
      <div className="flex justify-center items-center gap-1 w-fit">
        <icon.FaStarHalf className="text-yellow-500" />
        <icon.FaStar className="text-yellow-500" />
        <icon.FaStar className="text-yellow-500" />
        <icon.FaStar className="text-yellow-500" />
        <icon.FaStar className="text-yellow-500" />
      </div>
      <div className="w-full">
        <InputButton onchange={() => ''} type="text" placeholder="أضف تعليقك هنا..." name="add-comment" />
        <div className="w-1/4 self-start">
          <SubmitButton onclick={() => ''} text="أضف التعليق" bgcolor="bg-accent" textcolor="text-gray-500" />
        </div>
      </div>
    </div>
  )
}
