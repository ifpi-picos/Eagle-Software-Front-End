import React from "react"
import Sidebar from '../components/sidebar/menu'
import Perfil from "../components/perfilUser/perfil"
import { authMiddleware } from "../middlewares/authMiddleware";

const PerfilUser = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex-grow flex justify-center items-center bg-aliceblue'>
                <Perfil />
            </div>
        </div>
    );
}

export default authMiddleware(PerfilUser)
