import { useEffect, useState } from "react";
import { navItems } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full flex-center fixed z-50 top-0 left-0 md:p-0 px-5 transition-all duration-300 ${
        scrolled ? "bg-black-100 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container md:my-10 my-5 flex items-center justify-between">
        <div className="flex flex-row flex-center gap-5">
            <img
            src="/images/logo.png"
            alt="logo"
            className="md:size-12 size-10 object-cover object-center"
            />
            <span className="relative text-3xl font-semibold">Portfolio</span>
        </div>
        <div className="md:flex items-center gap-7 hidden">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px]
               after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            >
              <a className="gradient-title text-lg" href={item.href}>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
