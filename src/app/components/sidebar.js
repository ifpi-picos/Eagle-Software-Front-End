import Link from 'next/link';
import { FaHome, FaPlus, FaEye, FaUser, FaQuestion, FaArrowLeft } from 'react-icons/fa';
import "../styles/css/menu.css";

const Sidebar = () => {
  return (
    <nav className="sidebar close">
      <header>
        <div className="image-text">
          <span className="image">
            <img className="logo-sidebar" src="/logo.png" alt="logo da página" />
          </span>

          <div className="text logo-text">
            <h2 className="h2-home">EAGLE'S SOFTWARE</h2>
          </div>
        </div>

        <i className="bi bi-chevron-right toggle"></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <Link href="/telaInicio">
                  <span className="icons"><FaHome /></span>
                  <span className="nav-text">Home</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link href="/cadastroItem">
                  <span className="icons"><FaPlus /></span>
                  <span className="nav-text">Cadastrar Item</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link href="/itensEncontrados">
                  <span className="icons"><FaEye /></span>
                  <span className="nav-text">Itens Encontrados</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link href="/perfil">
                  <span className="icons"><FaUser /></span>
                  <span className="nav-text">Perfil</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link href="/telaFaq">
                  <span className="icons"><FaQuestion /></span>
                  <span className="nav-text">FAQ</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link href="/login">
                  <span className="icons"><FaArrowLeft /></span>
                  <span className="nav-text">Sair</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;

