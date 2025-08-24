import Drivers_Dashboard from '@/components/Drivers/Drivers_Dashboard';
import MainTitle from '@/utils/Main-Title';

export default function DriversLayout({ children }: { children: React.ReactNode }) {
  const name ="Ali"
  return (
        <div className="mt-[180px] mx-5 flex flex-col justify-start items-start">
            {/**Title Page */}
            <MainTitle title={`لوحة تحكم الدليفري  ${name}`}/>
            <div className='w-full flex justify-start items-start gap-1'>
                    {/**Aside Menu */}
                    <div className="w-[10%] md:w-1/7 lg:w-1/8 flex justify-start items-start gap-3 my-3">
                      <Drivers_Dashboard />
                    </div>
                    {/**Page Content */}
                    <main className="w-[90%] md:w-6/7 lg:w-7/8 flex justify-start items-start my-3 p-3">
                      {children}
                    </main>
                  </div>
        </div>
  );
}
