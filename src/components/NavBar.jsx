import { useEffect, useRef, useState } from "react";
import { navItems } from "../constants";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const dropdownRef = useRef(null);
  const { i18n } = useTranslation();

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);
  };

  // Bắt sự kiện click ngoài dropdown để đóng menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLangMenu(false);
      }
    };

    if (showLangMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLangMenu]);

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
        {/* Logo bên trái */}
        <div className="flex flex-row flex-center gap-5">
          <img
            src="/images/logo_nam.png"
            alt="logo"
            className="md:size-12 size-10 object-cover object-center"
          />
          <span className="relative text-3xl font-semibold">Portfolio</span>
        </div>

        {/* Nav items + nút chọn ngôn ngữ */}
        <div className="flex items-center gap-7">
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px]
               after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
              >
                <a className="gradient-title text-lg" href={item.href}>
                {t(`nav.${item.name.toLowerCase()}`)}
                </a>
              </div>
            ))}
          </div>

          {/* Nút chọn ngôn ngữ + dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowLangMenu((prev) => !prev)}
              className="text-white bg-gray-800 px-3 py-1 rounded-md hover:bg-gray-700 transition"
            >
              {i18n.language?.toUpperCase() || "EN"}
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md overflow-hidden">
                <button
                  onClick={() => changeLanguage("en")}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("fr")}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  Français
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
