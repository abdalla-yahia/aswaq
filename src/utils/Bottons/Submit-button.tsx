
export default function SubmitButton({text,bgcolor,textcolor}: {text: string,bgcolor:string, textcolor:string}) {
  return (
    <button type="submit" className={`w-full ${bgcolor} ${textcolor} cursor-pointer hover:${bgcolor+'red'} translate-0.5  text-3xl p-1 rounded-xl`}>{text}</button>
  )
}
