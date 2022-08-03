import React from 'react'
import {Link} from 'react-router-dom'
import S from './Lista.module.css'

const Lista = ({nome, categoria, preco}) => {
  return (
    <section className={S.container}>
        <div>
            <small>Nome: </small>
            <p>{nome}</p>
        </div>
        <div>
            <small>Preço: </small>
            <p>{preco}</p>
        </div>
        <div>
            <small>Categoria: </small>
            <p>{categoria}</p>
            <Link to='/editarProduto'>Editar</Link>
        </div>
    </section>
  )
}

export default Lista