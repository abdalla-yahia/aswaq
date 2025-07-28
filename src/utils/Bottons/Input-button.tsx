
export default function InputButton({type, placeholder,name}: {type: string, placeholder: string,name?: string}) {
  return (
    <input type={type} placeholder={placeholder} name={name} className="w-full p-2 my-3 border rounded" />
  )
}
