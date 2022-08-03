import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getProdutosPorCategoria } from '../../Service/Api'
import Cards from '../../Components/Cards/Cards'

const Produtos = () => {
  const params = useParams()
  const [produtos, setProdutos] = useState('');
  
  async function handleRequisicao(){
    const response = await getProdutosPorCategoria(params.categoria)
    setProdutos(response);
  }
  useEffect(()=>{
    handleRequisicao();
  }, [params.categoria])
  return (
    <div>
      <h2>{params.categoria}</h2>
      <section>
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