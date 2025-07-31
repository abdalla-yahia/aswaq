import InputButton from "@/utils/Bottons/Input-button";
import SubmitButton from "@/utils/Bottons/Submit-button";

export default function Add_Comment() {
  return (
    <div className="w-full p-main">
        <h1 className="mb-5 text-3xl">أضف تعليق </h1>
        <div className="w-full">
            <InputButton type="text" placeholder="أضف تعليقك هنا..." name="add-comment"/>
            <div className="w-1/4 self-start">
            <SubmitButton text="أضف التعليق" bgcolor="bg-accent" textcolor=""/>
            </div>
        </div>
    </div>
  )
}
