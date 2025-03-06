import Sidebar from '../components/sidebar/menu';
import styles from '../components/sidebar/menu.module.css';
import FaqPage from '../components/paginaFaq/faq';
 
const telaFaq = () => {
  return (
    <div className={styles['body-faq']}>
      <div className="flex bg-aliceblue h-screen">
        <Sidebar />
        <div className="w-full h-full items-center p-4 self-center flex justify-center">
          <FaqPage />
        </div>
      </div>
    </div>
  );
}

export default telaFaq;