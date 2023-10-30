import React from "react"
import Sidebar from '../components/sidebar/menu'
import Busca from '../components/busca/search'
import styles from '../components/sidebar/menu.module.css'

export default function Home (){
    return (
        <div className={styles['body-home']}>
            <div className={styles['listaItens']}>
                <Sidebar />
                <Busca />
            </div>
        </div>
    );
}