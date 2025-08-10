'use client'
export default function InputButton({type, placeholder,name,id,onchange}: {type: string, placeholder: string,name?: string,id?:string,onchange?:(e:React.ChangeEvent<HTMLInputElement>)=>void}) {
  return (
    <input onChange={onchange} type={type} placeholder={placeholder} name={name} id={id} className="w-full p-2 my-3 border rounded" />
  )
}
