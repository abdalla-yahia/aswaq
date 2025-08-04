
export default function MainTitle({title}:{title:string}) {
  return (
    <div className="shadow-accent/50 shadow w-full flex justify-center items-center  py-2 rounded-2xl">
        <h1 className="text-lg md:text-4xl">{title}</h1>
    </div>
  )
}
