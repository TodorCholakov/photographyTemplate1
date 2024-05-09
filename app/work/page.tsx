import Link from "next/link";

export default function Home() {

  return (
    <main className="flex w-full  justify-center">
      <div className="w-[1024px] flex flex-wrap justify-center s p-6">
        
      <div>
        <Link href="/work/portrait"><div className="w-[400px] h-[300px] bg-slate-400 m-2"></div></Link>
        <p className="m-2">Portrait</p>
      </div>
      <div>
        <div className="w-[400px] h-[300px] bg-slate-400 m-2"></div>
        <p className="m-2">Fashion</p>
      </div>
      <div>
        <div className="w-[400px] h-[300px] bg-slate-400 m-2"></div>
        <p className="m-2">Individual</p>
      </div>
      <div>
        <div className="w-[400px] h-[300px] bg-slate-400 m-2"></div>
        <p className="m-2">Events</p>
      </div>
      <div>
        <div className="w-[400px] h-[300px] bg-slate-400 m-2"></div>
        <p className="m-2">Urban</p>
      </div>
      <div>
        <div className="w-[400px] h-[300px] bg-slate-400 m-2"></div>
        <p className="m-2">Studio</p>
      </div>
      </div>
      
    </main>
  );
}
