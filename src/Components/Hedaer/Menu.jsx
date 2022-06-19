import './styleHeaderMini.css'
import { Link, } from 'react-router-dom';
import { useState } from "react"
import ModalCall from '../SecondaryFunc/ModalWindow/ModalCall/ModalCall';

const Menu = ({ active, setActive }) => {
    const [modalactive, setModalActive] = useState(false)

    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="menu__header" onClick={e => e.stopPropagation()}>
                <ul className='menu__items'>
                    <li className='menu__item menu__menu'>
                        <p>Меню</p> <div className='xIcon' onClick={() => setActive(false)}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.23814 7.00015L13.7435 1.49459C14.0855 1.15283 14.0855 0.598303 13.7435 0.256541C13.4014 -0.0855136 12.8475 -0.0855136 12.5055 0.256541L7.00015 5.7621L1.49453 0.256541C1.15249 -0.0855136 0.59857 -0.0855136 0.25653 0.256541C-0.08551 0.598303 -0.08551 1.15283 0.25653 1.49459L5.76215 7.00015L0.25653 12.5057C-0.08551 12.8475 -0.08551 13.402 0.25653 13.7438C0.42755 13.9145 0.651685 14 0.875529 14C1.09937 14 1.32351 13.9145 1.49453 13.7435L7.00015 8.2379L12.5055 13.7435C12.6765 13.9145 12.9006 14 13.1245 14C13.3483 14 13.5724 13.9145 13.7435 13.7435C14.0855 13.4017 14.0855 12.8472 13.7435 12.5054L8.23814 7.00015Z" fill="#333333" />
                            </svg>
                        </div>
                    </li>
                    <li className='menu__item' >
                        <Link to="/AboutAs">
                            <p className='menu__itemText' onClick={() => setActive(false)}>О нас</p>
                        </Link>
                    </li>
                    <li className='menu__item'>
                        <Link to="/NewsPage">
                            <p className='menu__itemText' onClick={() => setActive(false)}>Новости</p>
                        </Link>
                    </li>
                    <li className='menu__item'>
                        <Link to='/Collections'>
                            <p className='menu__itemText' onClick={() => setActive(false)}>Коллекции</p>
                        </Link>
                    </li>
                    <li className='inner'></li>
                    <li className='menu__item'>
                        <div className='menu__item__svg' onClick={() => setActive(false)}>
                            <img src="/img/heart-icon.svg" alt="heart-icon" />
                            <p>Избранное</p>
                        </div>
                    </li>
                    <li className='menu__item'>
                        <Link to='/Basket'>
                            <div className='menu__item__svg' onClick={() => setActive(false)}>
                                <img src="/img/basket-icon.svg" alt="basket-icon" />
                                <p>Корзина</p>
                            </div>
                        </Link>
                    </li>
                </ul>
                <div className='menu__contacts'>
                    <p className='menu__contacts-text'>Свяжитсь с нами:</p>
                    <p className='menu__contacts-number'>Тел:<a href='tel:+996 000 00 00 00"'>+996 000 00 00 00</a></p>
                </div>
                <div className='menu__icons'>
                    <a className='menu__icon' target="blank" href="https://t.me/Zeonitcommunity"><img src="/img/telegIcon.svg" alt="telegIcon" /></a>
                    <a className='menu__icon' target="blank" href="https://wa.me/996509529922"><img src="/img/whatsIcon.svg" alt="whatsIcon" /></a>
                    <img onClick={() => { setModalActive(!modalactive) }} className='menu__icon' src="/img/telephIcon.svg" alt="telephIcon" />
                </div>
                <ModalCall active={modalactive} setActive={setModalActive} />
            </div>
        </div >
    )
}

export default Menu