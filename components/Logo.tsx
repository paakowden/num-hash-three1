import logo from "../public/logo.jpeg";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={logo}
      width={30}
      height={40}
      alt="logo"
      // className="rounded-full h-[50px] w-[100]"
    />
  );
};

export default Logo;
