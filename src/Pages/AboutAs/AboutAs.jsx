import style from "./AboutAs.module.scss"
import BreadCrumbs from './../../Components/BreadCrumbs/BreadCrumbs';

const AboutAs = () => {
    return (
        <div className={style.aboutAs} >
            <div className={style.breadCrumbs}>
            <BreadCrumbs pathname={[
                { id: 1, page: 'Главная', path: '/' },
                { id: 2,  page: 'О нас' }
            ]} />
            </div>
            <div className="container">
                <div className={style.aboutAs__content}>
                    <div className={style.aboutAs__img}>
                        <div>
                            <img src="/img/abautUs1.png" alt="img" />
                            <img src="/img/abautUs3.png" alt="img" />
                        </div>
                        <div className={style.aboutAs__img2}>
                            <img src="/img/abautUs2.png" alt="img" />
                        </div>
                    </div>
                    <div className={style.aboutAs__item}>
                        <div className={style.aboutAs__text}>
                            <p className={style.aboutAs__title}>О нас</p>
                            <p className={style.aboutAs__description}>У нас Вы найдёте всё, что Вам так нужно. Ассортимент магазина постоянно расширяется и дополняется в зависимости от пожеланий клиентов. Женская одежда из наших коллекций – это комфортная, стильная и качественная одежда не только на каждый день, но и для любых ситуаций по доступным ценам.Натуральные материалы, продуманные силуэты, современный дизайн и возможность легкого сочетания моделей помогут Вам всегда оставаться в центре внимания и чувствовать себя уместно в любой ситуации.Если Вы любите одеваться ярко, модно и оригинально, у нас Вы найдете все необходимое, чтобы всегда быть в центре внимания. У нас большая коллекция для любого торжества и праздника, которая сможет удовлетворить вкус самой взыскательной модницы! А для деловых ситуаций, в которых Вам непременно нужно выглядеть элегантно и стильно, мы предлагаем Вам одежду из коллекции "деловой стиль и офис". Мода постоянно диктует нам свои требования и для современной девушки, желающей идти в ногу со временем, важно иметь возможность постоянно пополнять свой гардероб стильной одеждой.</p>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div></div>
    )
}
export default AboutAs