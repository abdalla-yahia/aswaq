
export default function Comment_Content() {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-1 ">
            <div className="bg-accent rounded-lg shadow-md px-4 py-1 w-full h-fit">
                <div className="w-full flex items-start justify-start gap-2 mb-4">
                    <img src="https://i.pravatar.cc/60" alt="avatar" className="rounded-2xl" />
                    <div className="ml-3 w-full">
                        <h4 className="font-bold text-accent">John Doe</h4>
                        <small className="text-gray-600">تم التعليق في 2020-01-01</small>
                        <h5 className="font-bold ">منتج جميل جدا , وخدمة ممتازة</h5>
                        <div className="ml-3 w-full flex text-center gap-2">
                            <p className="text-lg">4.5</p>
                            <p className="text-2xl text-yellow-400">*****</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
