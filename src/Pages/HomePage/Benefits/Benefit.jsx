import style from "./Benefits.module.scss"


const Benefit = (props) => {

    return (
        <div className={style.benefit}>
            <div className={style.benefit__content}>
                <div className={style.benefit__img}>
                    <img src={props.icon} alt="icon" />
                </div>
                <div className={style.benefit__text}>
                    <p className={style.benefit__title}>{props.title}</p>
                    <p className={style.benefit__description}>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
export default Benefit