
export default function MainTitle({title}:{title:string}) {
  return (
    <div className="shadow-indigo-300 w-full flex justify-center items-center shadow py-2 rounded-2xl">
        <h1 className="text-lg md:text-4xl">{title}</h1>
    </div>
  )
}
