import Link from "next/link";

import MenuItems from "./MenuItems";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavbarIcons from "./NavbarIcons";
import { ModeToggle } from "./ThemeToggler";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-32 relative ">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <Image src="/logo.jpeg" width={24} height={24} alt="logo" />
        </Link>
        <MenuItems />
      </div>
      {/* LARGE SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.jpeg" width={24} height={24} alt="logo" />
            <div className="text-xl tracking-wide uppercase text-rose-500">
              Whiskey
            </div>
          </Link>
          <div className="hidden xl:flex gap-4 dark:text-gray-200">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavbarIcons />
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
