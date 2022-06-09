import style from "./ModalCallReceived.module.scss"


const ModalCallReceived = ({ active, setActive }) => {
    return <div onClick={() => { setActive(!active) }} className={active ? `${style.modals} ${style.active}` : style.modals}>
        <div onClick={item => item.stopPropagation()} className={style.modals__content}>
            <img src="/img/chekaut.svg" alt="chekautIcon" />
            <h2 className={style.modals__text}>Спасибо!</h2>
            <p className={style.modals__description}>Ваша заявка была принята ожидайте, скоро Вам перезвонят</p>
            <button onClick={() => { setActive(!active) }} className={style.modals__btn}>Продолжить покупки</button>
        </div>
    </div>

}
export default ModalCallReceived 