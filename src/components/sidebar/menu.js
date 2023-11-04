// import Link from 'next/link'
// import { FaHome, FaPlus, FaEye, FaUser, FaQuestion, FaArrowLeft } from 'react-icons/fa'
// import styles from './menu.module.css'

// export default function Sidebar () {
//   return (
//     <nav className={styles['sidebar']}>
//       <header>

//         <div className={styles['image-text']}>
//           <span className={styles['image']}>
//             <img className={styles['logo-sidebar']} src="/logo.png" alt="logo da página" />
//           </span>

//           <div className={styles['logo-text']}>
//             <h2 className={styles['h2-home']}>EAGLE'S SOFTWARE</h2> 
//           </div>
//         </div>


//       </header>

//       <div className={styles['menu-bar']}>
//         <div className={styles['menu']}>
//           <ul className={styles['menu-links']}>
//             <li className={styles['nav-link']}>
//               <Link href="/telaInicio">
//                   <span className={styles['icons']}><FaHome /></span>
//                   <span className={styles['nav-text']}>Home</span>
//               </Link>
//             </li>

//             <li className={styles['nav-link']}>
//               <Link href="/cadastroItem">
//                   <span className={styles['icons']}><FaPlus /></span>
//                   <span className={styles['nav-text']}>Cadastrar Item</span>
//               </Link>
//             </li>

//             <li className={styles['nav-link']}>
//               <Link href="/itensEncontrados">
//                   <span className={styles['icons']}><FaEye /></span>
//                   <span className={styles['nav-text']}>Itens Encontrados</span>
//               </Link>
//             </li>

//             <li className={styles['nav-link']}>
//               <Link href="/perfil">
//                   <span className={styles['icons']}><FaUser /></span>
//                   <span className={styles['nav-text']}>Perfil</span>
//               </Link>
//             </li>

//             <li className={styles['nav-link']}>
//               <Link href="/telaFaq">
//                   <span className={styles['icons']}><FaQuestion /></span>
//                   <span className={styles['nav-text']}>FAQ</span>
//               </Link>
//             </li>

//             <li className={styles['nav-link']}>
//               <Link href="/login">
//                   <span className={styles['icons']}><FaArrowLeft /></span>
//                   <span className={styles['nav-text']}>Sair</span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillEnvironment, AiFillHome } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri"
import { FaPlus, FaEye, FaUser, FaQuestion, FaArrowLeft } from 'react-icons/fa'
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
      <div className={`bg-dark-purple h-screen p-4 pt-8 ${open ? "w-80" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute top-9 border border-dark-purple cursor-pointer right-0 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />

        <div className='inline-flex'>
          <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
          <h1 className={`text-white origin-left font-small text-1xl duration-300 ${!open && "scale-0"}`}>
            Eagles Software
          </h1>
        </div>

        <ul className='pt-20 fixed'>
          {Menus.map((menu, index) => (
            <Link key={index} href={menu.href}>
              <span className={`text-gray-300 mb-5 text-sm flex items-center gap-x-4 cursor-pointer p-4  hover:bg-ligth-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                <span className='text-2xl block float-left'>
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "scale-0"}`}>{menu.title}</span>
              </span>
            </Link>
          ))}

        </ul>
      </div>

      <div className='p-7 p1-32'>
        <h1 className='text-2xl fontsemibold'>Home Page</h1>
      </div>
    </div >
  );
};