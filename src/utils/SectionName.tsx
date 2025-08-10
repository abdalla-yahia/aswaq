'use client'
import Link from "next/link";
import SubmitButton from "./Bottons/Submit-button";

export default function SectionName({ text, btn, btnText, href }: { text: string, btn?: boolean, btnText: string, href: string }) {
  return (
    <div className="w-full shadow-accent flex justify-between items-center h-fit py-3  my-4 p main">
      <h2 className="w-fit text-forground text-fluid ">{text}</h2>
      <div className="">
        <Link href={href} >
          <SubmitButton onclick={() => ''} text={btnText} bgcolor="transparent" textcolor="#fff" />
        </Link>
      </div>
    </div>
  )
}
