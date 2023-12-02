import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function telaInicial() {
  return (
    <div className={styles['body-inicial']}>
      <div className={styles.wrapper}>
        <header className={styles.headerTitle}>

          <div className={styles['logo-inicial']}>
            <Image className={styles['image-logo']} src="/logotipo-fotor.png" alt="" width={80} height={100} />
            <h2 className={styles['h2-header']}>EAGLE'S SOFTWARE</h2>
          </div>

        </header>

        <section className={styles['home-common']}>
          <div className={styles.shape}>
            <img className={styles.shape1} src="/shape1.svg" alt="" />
            <img className={styles.shape2} src="/shape1.svg" alt="" />
            <img className={styles.shape3} src="/shape1.svg" alt="" />
            <img className={styles.shape4} src="/shape1.svg" alt="" />
            <img className={styles.shape5} src="/shape1.svg" alt="" />
          </div>

          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                Bem-vindo(a) ao <span>EAGLE'S SOFTWARE</span>, encontre seus pertences perdidos em um piscar de olhos.
              </p>

              <a href="/login" className={styles.btn}>Continuar</a>

            </div>
            <div className={styles.imgPage}>

              <img className={styles['img-page']} src="/imagePage.png" alt="Logo da Página" />
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
