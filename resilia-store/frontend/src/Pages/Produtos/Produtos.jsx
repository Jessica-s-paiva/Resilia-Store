import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getProdutosPorCategoria } from '../../Service/api.js'
import Cards from '../../Components/Cards/Cards'
import S from './Produtos.module.css'

const Produtos = () => {
  const params = useParams()
  const [produtos, setProdutos] = useState('');

  useEffect(()=>{
    handleRequisicao();
  }, [params.categoria]);

  async function handleRequisicao(){
    const response = await getProdutosPorCategoria(params.categoria)
    setProdutos(response);
  }

  return (
    <div className={S.container}>
      <h2>{params.categoria}</h2>
      <section className={S.produtos}>
        {
          !!produtos && produtos.map((product, index)=>{
            return (<Cards nomeProduto={product.nome_abreviado} textoLink={`./produto/${product.id}`} fotoProduto={product.url} key={index}/>)
          })
        }
      </section>
    </div>
  )
}

export default Produtos