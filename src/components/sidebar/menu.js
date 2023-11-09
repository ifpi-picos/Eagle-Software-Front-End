import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillEnvironment, AiFillHome } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri"
import { FaPlus, FaEye, FaUser, FaQuestion, FaArrowLeft, } from 'react-icons/fa'
import { BsSearch } from "react-icons/bs"
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", icon: <AiFillHome />, href: '/home' },
    { title: "Cadastrar Itens", icon: <FaPlus />, href: '/cadastroItem' },
    { title: "Itens Cadastrados", icon: <FaEye />, href: '/itensCadastrados' },
    { title: "Perfil", icon: <FaUser />, href: '/perfil' },
    { title: "FAQ", icon: <FaQuestion />, href: '/faq' },
    { title: "Sair", icon: <FaArrowLeft />, href: '/login' },
  ];

  return (
    <div className='flex'>
      <div className={`bg-dark-purple h-screen p-4 pt-8 mt[-75px] ${open ? "w-80" : "w-20"} duration-300 relative`} x  >
        <BsArrowLeftShort className={`bg-white text-dark-purple mt-12 text-3xl rounded-full absolute top-9 border border-dark-purple cursor-pointer right-0 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />

        <div className='inline-flex pt-12'>
          <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
          <h1 className={`text-white origin-left font-small text-1xl duration-300 ${!open && "scale-0"}`}>
            Eagles Software
          </h1>
        </div>

        <div className={`flex items-center rounded-md bg-ligth-white mt-6 ${!open ? 'px-2.5' : 'px-4'} py-2`}>
          <BsSearch className='text-white text-lg block float-left cursor-pointer mr-2' />

          <input type={'search'} placeholder='Search'
            className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && 'hidden'}`} />

        </div>

        <ul className='pt-12 w-17rem ml-2 fixed'>
          {Menus.map((menu, index) => (
            <Link key={index} href={menu.href}>
              <span className={`text-gray-300 mb-5 text-sm flex items-center gap-x-4 cursor-pointer p-4 hover:bg-ligth-white rounded-full transition-all ${open ? "duration-300 ease-in-out" : "duration-100 ease-out"} ${menu.spacing ? "mt-9" : "mt-2"} ${open ? "border-2" : "border-0"}`}>
                <span className='text-2xl block float-left'>
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "scale-0"}`}>{menu.title}</span>
              </span>

            </Link>
          ))}

        </ul>
      </div>
    </div >
  );
};