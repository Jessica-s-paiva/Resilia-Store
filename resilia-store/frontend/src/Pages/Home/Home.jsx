import React from 'react'
import Cards from '../../Components/Cards/Cards'
import banner from '../../Images/banner.png'
import Notebook from '../../Images/notebook.png'
import Monitores from '../../Images/monitor.png'
import Acessorios from '../../Images/acessorio.png'
import S from './Home.module.css'
const Home = () => {
  return (
    <section className={S.home}>
      <section>
        <div className={S.banner}>
          <h1>TECNOLOGIA E INFORMAÇÃO</h1>
          <h2>TUDO NA PALMA DA SUA MÃO</h2>
        </div>
        <div className={S.cards}>
          <Cards nomeProduto= 'Notebooks' fotoProduto={Notebook} textoLink={'/produtoIndividual'}/>
          <Cards nomeProduto= 'Acessórios' fotoProduto={Acessorios} textoLink={'/produtoIndividual'}/>
          <Cards nomeProduto= 'Monitores' fotoProduto={Monitores} textoLink={'/produtoIndividual'}/>
        </div>
      </section>
      <picture>
        <img src={banner} className={S.image} alt="banner principal" />
      </picture>
    </section>
  )
}

export default Home