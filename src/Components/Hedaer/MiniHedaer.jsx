import style from "./MiniHedaer.module.scss";
import { Link, } from 'react-router-dom';
import './styleHeaderMini.css'
import Menu from "./Menu";
import { useState } from 'react';

const MiniHedaer = () => {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <div className={style.miniHedaer} >
      <div className="container">
        <div className={menuActive ? style.activeMenu : style.header}>
          <div className={style.header__content}>
            <div className="navbar">
              <div className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
                <span></span>
              </div>
            </div>
            <div className={style.logo}>
              <Link to='/'>
                <img src="/img/MiniLogo.svg" alt="logo" />
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
      
      <div>
        <Menu active={menuActive} setActive={setMenuActive} />
      </div>
    </div>
  )
};
export default MiniHedaer;
