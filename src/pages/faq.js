import Sidebar from '../components/sidebar/menu'
import styles from '../components/sidebar/menu.module.css'
import FaqPage from '../components/paginaFaq/faq'

export default function telaFaq() {
    return (
    <div className={styles['body-faq']}>
        <div className="flex bg-aliceblue">
            <Sidebar />
            <div className="w-3/4 ml-4 p-4 self-center flex justify-center">
                <FaqPage />
            </div>
        </div>
    </div>

    );
}