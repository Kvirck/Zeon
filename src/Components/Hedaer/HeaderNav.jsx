import style from "./HeaderNav.module.scss";
const HeaderNav = () => {
    return (
        <div className={style.headerNav}>
            <div className="container">
                <div className={style.headerNav__item}>
                <p>Главная </p><p>/</p> <p>О нас </p>
                </div>
            </div>
        </div>
    )
}
export default HeaderNav