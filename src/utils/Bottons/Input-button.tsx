
export default function InputButton({type, placeholder,name,id}: {type: string, placeholder: string,name?: string,id?:string}) {
  return (
    <input type={type} placeholder={placeholder} name={name} id={id} className="w-full p-2 my-3 border rounded" />
  )
}
