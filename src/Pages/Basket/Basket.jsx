import style from "./Basket.module.scss"
import BasketProduct from "./BasketProduct"
import { useState, useContext } from 'react';
import ModalProduct from './../../Components/SecondaryFunc/ModalWindow/ModalProduct/ModalProduct';
import { Context } from './../../index';
import { observer } from 'mobx-react-lite';
const Basket = (props) => {
    const { Basket } = useContext(Context)
    console.log(Basket.toJS_products);

    const [modalActive, setModalActive] = useState(false)
    return (
        <div className='container'>
            <div className={style.basket}>
                <div>
                    {Basket.toJS_products.map(product => (
                        <div key={product.id} className={style.basket__item}>
                            <BasketProduct product={product} />
                        </div>
                    ))}

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
export default observer(Basket)