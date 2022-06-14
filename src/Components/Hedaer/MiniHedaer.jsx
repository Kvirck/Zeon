import style from "./MiniHedaer.module.scss";
import { Link, } from 'react-router-dom';
import './styleHeaderMini.css'
import Menu from "./Menu";
import { useState } from 'react';

const MiniHedaer = () => {
  const [menuActive, setMenuActive]= useState(false)
  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.header__content}>
          <div className="navbar">
            <div className='burger-btn' onClick={()=>setMenuActive(!menuActive)}>
              <span></span>
              <Menu active={menuActive} setActive={setMenuActive} />
              {/* <div className={style.header__menu}>
              <ul className={style.header__list}>
                <Link to="/AboutAs">
                  <li className={style.header__link}>О нас</li>
                </Link>
                <Link to='/Collections'>
                  <li className={style.header__link}>Коллекции</li>
                </Link>
                <Link to="/NewsPage">
                  <li className={style.header__link}>Новости</li>
                </Link>
              </ul>
              <div className={style.navbar__phone}>
                <span className={style.navbarPhone}>Тел:</span>
                <span className={style.navbarPhone__num}>+996 000 00 00 00</span>
              </div>
              <div className={style.bottom__favorites}>
                <img src="/img/heart-icon.svg" alt="heart-icon" />
                <span>Избранное</span>
              </div>
              <Link to='/Basket'>
                <div className={style.bottom__basket}>
                  <img src="/img/basket-icon.svg" alt="basket-icon" />
                  <span>Корзина</span>
                </div>
              </Link>
            </div> */}
            </div>
          </div>
          <div className={style.logo}>
            <Link to='/'>
              <img src="/img/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className={style.searchBox}>
            <div className="search-box">
              <input className="search-txt" type="text" name="" placeholder="Поиск" />
              <button className="search-btn" href="#">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};
export default MiniHedaer;
