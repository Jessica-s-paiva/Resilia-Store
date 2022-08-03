import React from 'react'
import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Administrador from '../Pages/Administrador/Administrador'
import Produtos from '../Pages/Produtos/Produtos'
import ProdutoIndividual from '../Pages/ProdutoIndividual/ProdutoIndividual'
import Header from '../Components/Header/Header'
import EditarProduto from '../Pages/EditarProduto/EditarProduto'

const Routes = () => {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path='/' element={<Home />}/>
            <Route path='/administrador' element={<Administrador />}/>
            <Route path='/editarProduto' element={<EditarProduto />}/>
            <Route path='/produtos/:categoria' element={<Produtos />}/>
            <Route path='/produtoIndividual' element={<ProdutoIndividual />}/>

        </Switch>
    </BrowserRouter>
  )
}

export default Routes