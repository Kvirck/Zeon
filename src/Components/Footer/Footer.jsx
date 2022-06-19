import style from "./Footer.module.scss";
import { Link, } from 'react-router-dom';
import MoveUp from './../SecondaryFunc/ScrollTop/MoveUp';
import dataLinks from "../../DataBase/dataLinks";
import { observer } from 'mobx-react-lite';

const Footer = (props) => {
    const data = dataLinks.toJS_links
    return <div className={style.footer}>
        <div className="container">
            <div className={style.footer__item}>
                <div className={style.logo}>
                    <Link to='/' onClick={() => MoveUp()}>
                        <img src="/img/footerLogo.svg" alt="logo" />
                    </Link>
                </div>
                <div className={style.сompany}>
                    <p>Компания</p>
                    <Link to="/AboutAs" onClick={() => MoveUp()}>О нас</Link>
                    <Link to="/NewsPage" onClick={() => MoveUp()}>Новости</Link>
                    <Link to="/Help" onClick={() => MoveUp()}>Помощь </Link>
                    <div className={style.publicOffer}>
                        <Link to="/PublicOffer" onClick={() => MoveUp()}>Публичная оферта </Link>
                    </div>
                </div>
                <div className={style.contacts}>
                    <p>Контакты</p>
                    <div className={style.contacts__num} >
                        <img src="/img/telephoneIcon.svg" alt="Icon" />
                        <a href={data[0]?.phone2}>+996 500 123 456</a>
                    </div>
                    <div className={style.contacts__num}>
                        <img src="/img/telephoneIcon.svg" alt="Icon" />
                        <a href={data[0]?.phone2}>+996 500 123 456</a>
                    </div>
                    <div className={style.contacts__num}>
                        <img src="/img/gmailIcon.svg" alt="Icon" />
                        <a target='blank' href={data[0]?.email}>mail@gmail.com</a>
                    </div>
                </div>
                <div className={style.socialNetwork}>
                    <p>Мы в социальных сетях:</p>
                    <div>
                        <img src="/img/instagramIcon.svg" alt="Icon" />
                        <a target='blank' href={data[0]?.instagram}>Instagram</a>
                    </div>
                    <div>
                        <img src="/img/telegramIcon.svg" alt="Icon" />
                        <a target='blank' href={data[0]?.telegram}>Telegram</a>
                    </div>
                    <div>
                        <img src="/img/whatsappIcon.svg" alt="Icon" />
                        <a target='blank' href={data[0]?.whatsapp}>Whatsapp</a>
                    </div>
                </div>
            </div>
            <span className={style.developed}>Developed by Zeon 2022</span>
        </div>
    </div>
}

export default observer(Footer)