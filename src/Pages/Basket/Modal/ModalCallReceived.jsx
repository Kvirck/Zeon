import style from "./ModalCallReceived.module.scss"
import { Context } from './../../../index';
import { useContext } from 'react';


const ModalCallReceived = ({ active, setActive }) => {
    const { Basket } = useContext(Context)

    return <div onClick={() => {
        setActive(!active)
        Basket.delBasketAll()
    }} className={active ? `${style.modals} ${style.active}` : style.modals}>
        <div className={style.modals__content}>
            <img src="/img/chekaut.svg" alt="chekautIcon" />
            <h2 className={style.modals__text}>Спасибо!</h2>
            <p className={style.modals__description}>Ваша заявка была принята ожидайте, скоро Вам перезвонят</p>
            <button onClick={() => {
                setActive(!active)
                Basket.delBasketAll()
            }} className={style.modals__btn}>Продолжить покупки</button>
        </div>
    </div>

}
export default ModalCallReceived 