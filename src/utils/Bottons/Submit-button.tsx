
export default function SubmitButton({text}: {text: string}) {
  return (
    <button type="submit" className="w-full bg-primary cursor-pointer hover:bg-blue-500 translate-0.5 text-white text-3xl p-1 rounded">{text}</button>
  )
}
