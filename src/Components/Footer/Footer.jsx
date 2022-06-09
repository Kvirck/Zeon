import style from "./Footer.module.scss";
import { Link, } from 'react-router-dom';

const Footer = (props) => {
    return <div className={style.footer}>
        <div className="container">
            <div className={style.footer__item}>
                <div className={style.logo}>
                    <Link to='/'>
                        <img src="/img/footerLogo.svg" alt="logo" />
                    </Link>
                    <span>Developed by Zeon 2022</span>
                </div>
                <div className={style.сompany}>
                    <p>Компания</p>
                    <Link to="/AboutAs">О нас</Link>
                    <Link to="/NewsPage">Новости</Link>
                    <Link to="/Help">Помощь </Link>
                </div>
                <div className={style.contacts}>
                    <p>Контакты</p>
                    <div >
                        <img src="/img/telephoneIcon.svg" alt="Icon" />
                        <span>+996 500 123 456</span>
                    </div>
                    <div>
                        <img src="/img/telephoneIcon.svg" alt="Icon" />
                        <span>+996 500 123 456</span>
                    </div>
                    <div>
                        <img src="/img/gmailIcon.svg" alt="Icon" />
                        <a href="https://mail.google.com/mail/">mail@gmail.com</a>
                    </div>
                </div>
                <div className={style.socialNetwork}>
                    <p>Мы в социальных сетях:</p>
                    <div>
                        <img src="/img/instagramIcon.svg" alt="Icon" />
                        <a href="https://www.instagram.com/">Instagram</a>
                    </div>
                    <div>
                        <img src="/img/telegramIcon.svg" alt="Icon" />
                        <a href="https://t.me/Kwirck">Telegram</a>
                    </div>
                    <div>
                        <img src="/img/whatsappIcon.svg" alt="Icon" />
                        <a href="https://wa.me/996509529922">Whatsapp</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer 