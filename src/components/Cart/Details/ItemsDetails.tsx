
export default function ItemsDetails({handleCountChange,name,describtion,price, count=1,lastprice}: {handleCountChange: (e: React.ChangeEvent<HTMLInputElement>) => void,name:string,describtion:string, count: number, price: number,lastprice?:number}) {
    const totalPrice = (count * price).toFixed(2)

  
    return (
     <div className="ml-4">
            <h2 className="text-xl text-accent font-semibold">{name}</h2>
            <p className="text-muted">{describtion}.</p>
            <div className="flex justify-center items-center">
                <p className="text-lg font-bold mt-2">${price}</p>
                <span className="opacity-50 line-through mx-4">{lastprice}$</span>
            </div>
            <div className="w-full flex items-center justify-between mt-2">
                <input onChange={(e)=>handleCountChange(e)} value={count} type="number" min={0} max={1000} step={1} className="text-lg border-1 font-bold m-2 rounded pr-2 py-1.5" />
                <span className="text-lg font-bold ml-2 text-foreground">المجموع: {totalPrice}$</span>
            </div>
        </div>
  )
}
