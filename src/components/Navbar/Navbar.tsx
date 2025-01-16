import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

// Type for menu state
type MenuState = 'home' | 'about' | 'services' | 'work' | 'contact';

const Navbar: React.FC = () => {
  // State for tracking the current menu item
  const [menu, setMenu] = useState<MenuState>('home');
  
  // State for tracking whether the menu is open or closed
  const [, setIsMenuOpen] = useState<boolean>(false);
  
  // Reference for the menu (HTML 'ul' element)
  const menuref = useRef<HTMLUListElement>(null);

  // Function to open the menu
  const openMenu = () => {
    setIsMenuOpen(true);
    if (menuref.current) {
      menuref.current.style.right = '0';
    }
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    if (menuref.current) {
      menuref.current.style.right = '-350px';
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <img
        src={menu_open}
        onClick={openMenu}
        alt="Open menu"
        className="nav-mob-open"
      />
      <ul ref={menuref} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close menu"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu('home')}>Home</p>
            {menu === 'home' && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu('about')}>About Me</p>
            {menu === 'about' && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu('services')}>Services</p>
            {menu === 'services' && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu('work')}>Portfolio</p>
            {menu === 'work' && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu('contact')}>Contact</p>
            {menu === 'contact' && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;