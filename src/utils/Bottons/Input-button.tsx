'use client'
export default function InputButton({type, placeholder,name,id,onchange,requird}: {type: string, placeholder: string,name?: string,id?:string,onchange?:(e:React.ChangeEvent<HTMLInputElement>)=>void,requird?:boolean}) {
  return (
    <div className="w-full relative h-fit">
    <input onChange={onchange} type={type} placeholder={placeholder} name={name} id={id} className="w-full relative p-2 my-3 border rounded" />
    {requird && <p className="text-red-500 text-3xl absolute top-[25%] left-1">*</p>}
    </div>
  )
}
