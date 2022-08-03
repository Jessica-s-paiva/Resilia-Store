import React from 'react'
import {Link} from 'react-router-dom'
import S from './Cards.module.css'
const Cards = ({nomeProduto, fotoProduto, textoLink}) => {
  return (
    <section className={S.card}>
        <picture>
            <img className={S.imagem} src={fotoProduto} alt={nomeProduto} />
        </picture>
        <p className={S.paragrafo}>{nomeProduto}</p>
        <Link to={textoLink} className={S.link}>COMPRAR</Link>
    </section>
  )
}

export default Cards