import React, { useState, useEffect } from "react";
import Sidebar from '../components/sidebar/menu';
import styles from '../components/sidebar/menu.module.css';


export default function Home () {
  return (
    <div className={styles['body-home']}>
      <div className={styles['listaItens']}>
        <Sidebar />
      </div>
   </div>
  );
};
