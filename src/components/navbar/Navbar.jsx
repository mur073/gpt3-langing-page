import { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar-links_container">
          <Menu />
        </div>

        <div className="navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>

        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          ) : (
            <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          )}

          {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
              <div className="navbar-menu_container-links">
                <Menu />
              </div>
              <div className="navbar-menu_container-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
