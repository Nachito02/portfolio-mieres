import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [overlayShow, setOverlayShow] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setOverlayShow(!overlayShow);
  };

  return (
    <>
      {/* Overlay para cuando el menú está abierto */}
      <div id="overlay" className={overlayShow ? styles.overlay_show : ''}></div>

      <div className={styles.site_header}>
        <nav className={styles.nav}>
          <a href="">Trabajos</a>
          <a href="">Contacto</a>
        </nav>

        {/* Menú móvil */}
        <div id="mobile-menu" className={`${styles.mobile_main_menu} ${menuOpen ? styles.show_menu : ''}`}>
          <ul>
            <li><a href="#">Trabajos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        <div className={styles.logo_wrap}>
          <div className={`${styles.logo_text} ${styles.logo}`}>
            <a href="">PORTFOLIO  </a>
            <a href="">ADRIANA MIERES</a>
          </div>
        </div>

        <div className={styles.social_media}>
         
        </div>
        <button
            onClick={toggleMenu}
            id="menu-btn"
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            type="button"
          >
            <span className={`${styles.hamburger_top} ${menuOpen ? styles.open_menu : ''}`}></span>
            <span className={`${styles.hamburger_middle} ${menuOpen ? styles.open_menu : ''}`}></span>
            <span className={`${styles.hamburger_bottom} ${menuOpen ? styles.open_menu : ''}`}></span>
          </button>
      </div>
    </>
  );
};

export default Header;
