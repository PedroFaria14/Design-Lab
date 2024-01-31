import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <nav className={style.navbar}>
      <NavLink to="/" className={style.brand}>
        Desing<span> Lab</span>
      </NavLink>
      <ul className={style.links_list}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? style.active : '')}>
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? style.active : '')}>
                Logar
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({ isActive }) => (isActive ? style.active : '')}>
                Registrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink to="/posts/create" className={({ isActive }) => (isActive ? style.active : '')}>
                Criar Post
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? style.active : '')}>
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? style.active : '')}>
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
