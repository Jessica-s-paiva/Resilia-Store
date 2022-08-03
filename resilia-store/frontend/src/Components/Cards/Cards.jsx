import React from 'react'
import {Link} from 'react-router-dom'
import S from './Cards.module.css'
const Cards = ({nomeProduto, fotoProduto, textoLink}) => {
  return (
    <section>
        <picture>
            <img src={fotoProduto} alt={nomeProduto} />
        </picture>
        <p>{nomeProduto}</p>
        <Link to={textoLink} className={S.link}>{nomeProduto}</Link>
    </section>
  )
}

export default Cards