import Stockkeepers_Dashboard from '@/components/Stockkeepers/Stockkeepers_Dashboard';
import MainTitle from '@/utils/Main-Title';

export default function StockkeepersLayout({ children }: { children: React.ReactNode }) {
  const name ="Ali"
  return (
        <div className="mt-[180px] mx-5 flex flex-col justify-start items-start">
            {/**Title Page */}
            <MainTitle title={`لوحة تحكم أمين المخزن  ${name}`}/>
            <div className='w-full flex justify-start items-start gap-1'>
              {/**Aside Menu */}
              <div className="w-1/8 md:w-1/6 lg:w-1/6 flex justify-start items-start gap-3 my-3">
                <Stockkeepers_Dashboard />
              </div>
              {/**Page Content */}
              <main className="w-7/8 md:w-5/6 flex justify-start items-start my-3 p-3">
                {children}
              </main>
            </div>
        </div>
  );
}
