
export default function SubmitButton({text,bgcolor,textcolor}: {text: string,bgcolor:string, textcolor:string}) {
  return (
    <button type="submit" className={`w-full ${bgcolor} ${textcolor || 'text-foreground'} cursor-pointer hover:opacity-75 translate-0.5 font-bold text-xl p-2 rounded-xl`}>{text}</button>
  )
}
