import style from "./Basket.module.scss"
import BasketProduct from "./BasketProduct"
import { useState } from 'react';
import ModalProduct from './../../Components/SecondaryFunc/ModalWindow/ModalProduct/ModalProduct';

const Basket = (props) => {

    const [modalActive, setModalActive] = useState(false)
    return (
        <div className='container'>
            <div className={style.basket}>
                <div>
                    <div className={style.basket__item}>
                        <BasketProduct productName="Вечернее платье" sizeProduct="42-50" priceOld="1 765 р" priceNew="1 365 р" />
                    </div>
                    <div className={style.basket__item}>
                        <BasketProduct productName="Платье" sizeProduct="42-50" priceOld="1 365 р" priceNew="1 065 р" />
                    </div>
                </div>
                <div>
                    <div className={style.basket__buy}>
                        <p className={style.basket__buy__title}>Сумма заказа</p>
                        <p className={style.basket__buy__item}>Количество линеек: <span>7 шт</span></p>
                        <p className={style.basket__buy__item}>Количество товаров: <span>35 шт</span></p>
                        <p className={style.basket__buy__item}>Стоимость: <span>13 595 рублей</span></p>
                        <p className={style.basket__buy__item}>Скидка: <span>1 270 рублей</span></p>
                        <div className={style.basket__buy__innert} ></div>
                        <p className={style.basket__buy__item}>Итого к оплате: <span>12 325 рублей</span></p>
                        <button onClick={() => setModalActive(!modalActive)} className={style.basket__buy__btn}>Оформить заказ</button>
                    </div>

                </div>
                <ModalProduct active={modalActive} setActive={setModalActive} />

            </div>
        </div>
    )
}
export default Basket