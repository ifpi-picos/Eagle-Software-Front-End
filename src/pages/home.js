import React from "react"
import Sidebar from '../components/sidebar/menu'
import Busca from '../components/busca/search'

export default function Home (){
    return (
        <div className="body-home">
            <div className="listaItens">
                <Sidebar />
                <Busca />
            </div>

        </div>
    );
}