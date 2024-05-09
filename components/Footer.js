import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-full justify-center text-sm p-2 border-t-1">
      <div className="w-[1024px] flex md:flex-row flex-wrap justify-between items-center flex-col">
        <div className="md:text-left text-center p-1">
          email@example.com <br />
          (555) 555-5555
        </div>
        <div className="text-sm p-1">Copyright © 2024 - All right reserved</div>
        <div>
          <Link className="p-1" href="https://www.petitstudioart.com/">
            <Image className="" width={20} height={20} src="/petit.svg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;