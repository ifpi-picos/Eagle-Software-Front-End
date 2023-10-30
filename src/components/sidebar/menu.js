import Link from 'next/link'
import { FaHome, FaPlus, FaEye, FaUser, FaQuestion, FaArrowLeft } from 'react-icons/fa'
import styles from './menu.module.css'

export default function Sidebar () {
  return (
    <nav className={styles['sidebar']}>
      <header>
        
        <div className={styles['image-text']}>
          <span className={styles['image']}>
            <img className={styles['logo-sidebar']} src="/logo.png" alt="logo da página" />
          </span>

          <div className={styles['logo-text']}>
            <h2 className={styles['h2-home']}>EAGLE'S SOFTWARE</h2> 
          </div>
        </div>


      </header>

      <div className={styles['menu-bar']}>
        <div className={styles['menu']}>
          <ul className={styles['menu-links']}>
            <li className={styles['nav-link']}>
              <Link href="/telaInicio">
                  <span className={styles['icons']}><FaHome /></span>
                  <span className={styles['nav-text']}>Home</span>
              </Link>
            </li>

            <li className={styles['nav-link']}>
              <Link href="/cadastroItem">
                  <span className={styles['icons']}><FaPlus /></span>
                  <span className={styles['nav-text']}>Cadastrar Item</span>
              </Link>
            </li>

            <li className={styles['nav-link']}>
              <Link href="/itensEncontrados">
                  <span className={styles['icons']}><FaEye /></span>
                  <span className={styles['nav-text']}>Itens Encontrados</span>
              </Link>
            </li>

            <li className={styles['nav-link']}>
              <Link href="/perfil">
                  <span className={styles['icons']}><FaUser /></span>
                  <span className={styles['nav-text']}>Perfil</span>
              </Link>
            </li>

            <li className={styles['nav-link']}>
              <Link href="/telaFaq">
                  <span className={styles['icons']}><FaQuestion /></span>
                  <span className={styles['nav-text']}>FAQ</span>
              </Link>
            </li>

            <li className={styles['nav-link']}>
              <Link href="/login">
                  <span className={styles['icons']}><FaArrowLeft /></span>
                  <span className={styles['nav-text']}>Sair</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
