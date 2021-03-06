import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/imagens/Logo_roxo.png';
import './Menu.css';
// import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} className="Logo" alt="Rodriflix logo"/>
      </a>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>

    </nav>
  );
}


export default Menu;