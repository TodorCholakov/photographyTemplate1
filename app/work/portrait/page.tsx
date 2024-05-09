import { GrNext } from "react-icons/gr";
import Link from "next/link";

const Portrait = () => {
  return (
    <main className="flex w-full  justify-center">
      <div className="w-[1024px] flex flex-wrap justify-center p-6">
        <div className="max-w-[472px] h-[600px] bg-slate-400 m-2">
          <div className="w-full h-[600px]">
            asdfaadf adf adsf asdf asdf asd fasd fadf fdasdfasdf a fasdf asdf
            asf asfd{" "}
          </div>
        </div>
        <div className="max-w-[472px] h-[600px] bg-slate-400 m-2">
          <div className="w-full h-[600px]">
            asdfaadf adf adsf asdf asdf asd fasd fadf fdasdfasdf a fasdf asdf
            asf asfd{" "}
          </div>
        </div>
        <div className="max-w-[472px] h-[600px] bg-slate-400 m-2">
          <div className="w-full h-[600px]">
            asdfaadf adf adsf asdf asdf asd fasd fadf fdasdfasdf a fasdf asdf
            asf asfd{" "}
          </div>
        </div>
        <div className="max-w-[472px] h-[600px] bg-slate-400 m-2">
          <div className="w-full h-[600px]">
            asdfaadf adf adsf asdf asdf asd fasd fadf fdasdfasdf a fasdf asdf
            asf asfd{" "}
          </div>
        </div>
        <div className="max-w-[472px] h-[600px] bg-slate-400 m-2">
          <div className="w-full h-[600px]">
            asdfaadf adf adsf asdf asdf asd fasd fadf fdasdfasdf a fasdf asdf
            asf asfd{" "}
          </div>
        </div>
        <div className="max-w-[472px] h-[600px] bg-slate-400 m-2">
          <div className="w-full h-[600px]">
            asdfaadf adf adsf asdf asdf asd fasd fadf fdasdfasdf a fasdf asdf
            asf asfd{" "}
          </div>
        </div>
        <div className="w-full m-2">
          <p className="max-w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut Labore et dolore magna aliqua. Id leo
            in vitae turpis. Arcu cursus vitae congue mauris. Risus at ultrices
            mi tempus imperdiet. Scelerisque felis imperdiet proin fermentum leo
            vel orci. Velit euismod in pellentesque massa placerat duis. Enim
            nunc faucibus a pellentesque sit amet porttitor eget. Volutpat
            blandit aliquam etiam erat velit scelerisque in. 
          </p>
          <p className="text-xs mt-2">
            <i>Lorem ipsum dolor</i>
          </p>
        </div>
        <div className="w-full flex justify-end m-2">
          <div className="">
            <Link href="#"><div className="flex items-center hoverOpacity">
              <span className="font-bold text-sm ">Dishes</span>
              <span className="text-2xl ml-2">
                <GrNext />
              </span>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portrait;
