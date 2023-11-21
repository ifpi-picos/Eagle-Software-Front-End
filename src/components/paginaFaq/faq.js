import React, { useState } from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import styles from './faq.module.css'

const FaqPage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles['faq-Main']}>

      <div className={styles['container-faq']}>
        <h1 className={styles['title']}>Dúvidas Frequentes</h1>

        <main className={styles['principal']}>
          <div className={styles['faq-img']}>
            <img src="/FAQ.avif" alt="Imagem de Perguntas Frequentes" className={styles['principal-img']} />
          </div>

          <div className={styles['content-principal']}>
            <div className={`${styles['pergunta-resposta']} ${expanded ? styles['show-text'] : ''}`}>
              <div className={styles['question']}>
                <h3 className={styles['title-question']}>
                  Como funciona o sistema de achados e perdidos do IFPI - Campus Picos?
                </h3>
                <button className={styles['question-btn']} onClick={handleToggle}>
                  <span className={styles['up-icon']}>
                    <AiOutlineArrowUp />
                  </span>
                  <span className={styles['down-icon']}>
                    <AiOutlineArrowDown />
                  </span>
                </button>
              </div>
              <div className={styles['resposta']}>
                <p className={styles['p-faq']}>O sistema de achados e perdidos do IFPI - Campus Picos é uma ferramenta tecnológica online
                  oferecida para ajudar os membros da comunidade acadêmica a recuperar itens perdidos ou
                  devolver itens encontrados nas dependências do campus. Os itens encontrados são armazenados
                  em um local seguro e podem ser recuperados pelos proprietários mediante ida ao setor do
                  controle de disciplina.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FaqPage;
