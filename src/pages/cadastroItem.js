import React from "react"
import Sidebar from '../components/sidebar/menu'
// import Busca from '../components/busca/search'
import styles from '../components/sidebar/menu.module.css'
import ItemForm from "../components/CadastroItem/itemForm"

export default function CadastrarItem() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-3/4 ml-4 p-4 self-center">
                <h1 className="text-2xl font-semibold"></h1>
                <ItemForm />
            </div>
        </div>
    );
}