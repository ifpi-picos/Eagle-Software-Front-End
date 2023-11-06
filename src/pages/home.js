import React, { useEffect } from "react"
import Sidebar from '../components/sidebar/menu'
// import Busca from '../components/busca/search'
import styles from '../components/sidebar/menu.module.css'
import { getCookie } from 'cookies-next'

export default function Home() {
    return (
        <div className={styles['body-home']}>
            <div className={styles['listaItens']}>
                {/* <Busca /> */}
                <Sidebar />
            </div>
        </div>
    );
}

export const getServerSideProps = async ({ req, res }) => {
    try {
        const token = getCookie('authorization', { req, res })
        console.log(token)
        if (!token) throw new Error('Token Inválido')

        verifica(token)
        return {
            props: {}
        }
    } catch (err) {
        return {
            props: {}
        }
    }
}