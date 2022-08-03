import React from 'react'
import {Link} from 'react-router-dom'
import S from './Header.module.css'
const Header = () => {
  return (
    <header className={S.container}>
        <h1>Resilia Store</h1>
        <nav>
            <Link to='/' className={S.link}>Home</Link>
            <Link to='/produtos/notebooks' className={S.link}>Notebooks</Link>
            <Link to='/produtos/acessorios' className={S.link}>Acessórios</Link>
            <Link to='/produtos/monitores' className={S.link}>Monitores</Link>
            <Link to='/administrador' className={S.link}>Administrador</Link>
        </nav>
    </header>
  )
}

export default Header