import React from 'react'
import Cards from '../../Components/Cards/Cards'
import Notebook from '../../Images/notebook.png'
const Home = () => {
  return (
    <div>
      <h1>teste</h1>
      <Cards nomeProduto= 'Notebook' fotoProduto={Notebook} textoLink={'/produtoIndividual'}/>
    </div>
  )
}

export default Home