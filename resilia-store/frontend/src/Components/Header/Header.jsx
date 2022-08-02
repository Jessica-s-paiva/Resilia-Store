import React from 'react'
import {Link} from 'react-router-dom'
import S from './Header.module.css'
const Header = () => {
  return (
    <header className={S.container}>
        <h1>Resilia Store</h1>
        <nav>
            <Link to='/' className={S.link}>Home</Link>
            <Link to='/produtos' className={S.link}>Produtos</Link>
            <Link to='/administrador' className={S.link}>Administrador</Link>
        </nav>
    </header>
  )
}

export default Header