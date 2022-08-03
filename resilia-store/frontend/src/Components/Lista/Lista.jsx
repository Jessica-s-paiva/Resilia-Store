import React from 'react'

const Lista = ({nome, categoria, preco}) => {
  return (
    <section>
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
        </div>
    </section>
  )
}

export default Lista