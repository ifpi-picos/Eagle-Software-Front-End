"use client";
import React from 'react';
import Sidebar from "/src/app/components/sidebar.js";
import Busca from "/src/app/components/Busca.js";

const Home = () => {
    return (
        <div className="body-home">
            <div className="listaItens">
                <Sidebar />
                <Busca />
            </div>

        </div>
    );
}

export default Home;
