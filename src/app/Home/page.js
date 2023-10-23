"use client";
import React from 'react';
import Sidebar from '../../components/sidebar';
import Busca from '../../components/Busca';

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
