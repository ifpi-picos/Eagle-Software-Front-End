import React, { useState, useEffect } from "react"
import { HiMenuAlt3 } from "react-icons/hi"
import { AiFillHome } from "react-icons/ai"
import { FaPlus, FaEye, FaUser, FaQuestion, FaArrowLeft, } from 'react-icons/fa'
import Link from 'next/link'
import SearchBar from "../busca/search"
import { isMobile } from 'react-device-detect'


const Sidebar = () => {
  const menus = [
    { name: "Home", link: "/home", icon: AiFillHome },
    { name: "Itens Encontrados", link: "/itensEncontrado", icon: FaEye },
    { name: "Cadastrar Itens", link: "/cadastroItem", icon: FaPlus },
    { name: "Perfil", link: "/perfil", icon: FaUser },
    { name: "FAQ", link: "/faq", icon: FaQuestion },
    { name: "Sair", link: "/login", icon: FaArrowLeft }
  ];

  const [open, setOpen] = useState(() => {
    if (typeof window !== "undefined" && !isMobile) {
      const storedState = localStorage.getItem("menuOpen");
      return storedState ? JSON.parse(storedState) : true;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined" && !isMobile) {
      localStorage.setItem("menuOpen", JSON.stringify(open));
    }
  }, [open]);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-dark-purple min-h-screen fixed ${open ? "w-72" : "w-16"
          } duration-500 text-gray-100 pl-2 z-10`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          <div className="flex items-center gap-3.5 font-medium p-2">
            <div className='fixed mr-2'>
              <img src="/logotipo-fotor.png" alt="Logo" className="w-10 h-10" />
            </div>
            <div className={`whitespace-pre transition-all duration-500 ${!open ? "opacity-0 translate-x-[-1rem] overflow-hidden" : ""}`}>
              <h2 className='ml-16'>Eagles Software</h2>
            </div>
          </div>

          <SearchBar open={open} />

          {menus?.map((menu, i) => (
            <Link href={menu?.link}
              key={i}
              className={` ${menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-4 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
