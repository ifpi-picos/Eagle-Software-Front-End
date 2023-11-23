import React from "react"
import Sidebar from '../components/sidebar/menu'
import ItemForm from "../components/CadastroItem/itemForm"
import styles from '../components/CadastroItem/itemForm.module.css'

export default function CadastrarItem() {
    return (
        <div className={styles['main-cadastro-item']}>
        <div className="flex">
            <Sidebar />
            <div className=" w-full p-4 self-center">
                <h1 className="text-2xl font-semibold"></h1>
                <ItemForm />
            </div>
        </div>
        </div>
    );
}