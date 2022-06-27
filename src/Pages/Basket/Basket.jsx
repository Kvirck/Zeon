import style from "./Basket.module.scss"
import BasketProduct from "./BasketProduct"
import { useState, useContext } from 'react';
import ModalProduct from './../../Components/SecondaryFunc/ModalWindow/ModalProduct/ModalProduct';
import { Context } from './../../index';
import { observer } from 'mobx-react-lite';
import SimilarProduct from './../../Components/SecondaryFunc/SimilarProduct/SimilarProduct';
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";

const Basket = (props) => {

    const { Basket } = useContext(Context)

    const [modalActive, setModalActive] = useState(false)
    const [show, setShow] = useState(false)


    return (
        <>
            <BreadCrumbs pathname={[
                { id: 1, page: 'Главная', path: '/' },
                { id: 2, page: 'Корзина' }
            ]} />
            <div className='container'>
                {
                    Basket.products.length ?
                        <div>
                            <div className={style.basket}>
                                <div>
                                    {Basket.toJS_products.map(product => (
                                        <div key={product.id} className={style.basket__item}>
                                            <BasketProduct product={product} />
                                        </div>
                                    ))}
                                </div>
                                <div className={style.sticky}>
                                    <div className={style.basket__buy}>
                                        <div className={!show ? style.basket__buy__none : ''}>
                                            <p className={style.basket__buy__title}>Сумма заказа</p>
                                            <p className={`${style.basket__buy__item} ${style.basket__buy__notMini}`}>Количество линеек: <span>{Basket.numberOfLines} шт</span></p>
                                            <p className={`${style.basket__buy__item} ${style.basket__buy__notMini}`}>Количество товаров: <span>{Basket.numberOfGoods} шт</span></p>
                                            <p className={`${style.basket__buy__item} ${style.basket__buy__mini}`}>Общее количество: <span>{Basket.numberOfLines} линеек ({Basket.numberOfGoods} шт.) </span></p>
                                            <p className={style.basket__buy__item}>Стоимость: <span>{Basket.price} рублей </span></p>
                                            <p className={style.basket__buy__item}>Скидка: <span>{Basket.sale} рублей </span></p>
                                            <div className={style.basket__buy__innert} ></div>
                                        </div>
                                        <p className={style.basket__buy__item}>Итого к оплате: <span>{Basket.totalPayable} рублей</span></p>
                                        {show ? <button onClick={() => setShow(!show)} className={style.basket__buy__more}>Скрыть</button> :
                                            <button onClick={() => setShow(!show)} className={style.basket__buy__more}>Информация о заказе</button>}
                                        <button onClick={() => setModalActive(!modalActive)} className={style.basket__buy__btn}>Оформить заказ</button>
                                    </div>
                                </div>
                                <ModalProduct active={modalActive} setActive={setModalActive} />
                            </div>
                        </div>
                        : <div>
                            <p className={style.basket__result__title}>Корзина</p>
                            <p className={style.basket__result__text}>У Вас пока нет товаров в корзине</p>
                            <div>
                                <p className={style.basket__result__similarProduct}>Возможно Вас заинтересует</p>
                                <SimilarProduct />
                            </div>
                        </div>
                }
            </div>
        </>

    )
}
export default observer(Basket)