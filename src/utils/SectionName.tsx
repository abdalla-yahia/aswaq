import SubmitButton from "./Bottons/Submit-button";

export default function SectionName({text,btn,btnText}:{text:string,btn?:boolean,btnText:string}) {
  return (
    <div className="w-full shadow-accent flex justify-between items-center h-fit py-3  my-4 p main">
        <h2 className="w-fit text-forground text-fluid ">{text}</h2>
        <div className="">
        <SubmitButton text={btnText} bgcolor="transparent" textcolor="#fff"/>
        </div>
    </div>
  )
}
