import React from "react"
import Sidebar from '../components/sidebar/menu'
import Busca from '../components/busca/search'
import styles from '../components/sidebar/menu.module.css'
import Perfil from "../components/perfilUser/perfil"

export default function CadastrarItem() {
    return (
        <div className={styles['body-home']}>
            <div className={styles['bodyItem']}>
                <Sidebar />
                <Busca />
                <Perfil/>
            </div>
        </div>
    );
}