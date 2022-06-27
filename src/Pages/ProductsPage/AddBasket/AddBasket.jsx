import React, { useContext, useState } from 'react';
import style from "./AddBasket.module.scss"
import { observer } from 'mobx-react-lite';
import { Context } from './../../../index';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const AddBasket = ({ post, indexColor }) => {
    const { Basket } = useContext(Context)
    const { id } = useParams();//this product id
    const [show, setShow] = useState(Boolean(Basket.toJS_products.find((prod) => prod.color.id === post.id)))

    const handleAddBasket = (prod, productId = id) => {
        let product = { id: productId, color: prod };
        Basket.addBasket(Basket.addBasketCount(product));
        setShow(Boolean(Basket.toJS_products.find((prod) => prod.color.id === post.id)))
    }

    useEffect(() => {
        console.log('before show', show)

        setShow(Boolean(Basket.toJS_products.find((prod) => prod.color.id === post.id)))
        console.log('after show', show)

    }, [post])

    const [showBtn, setShowBtn] = useState(null)
    const toggle = i => {
        if (show) {
            return setShowBtn(null)
        }
        setShowBtn(i)
    }
    return (
        <div>
            {
                show ?
                    <Link to='/Basket'>
                        <button className={style.productsPage__addToBasket}>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.7786 16.6945L17.7903 7.09785C17.7495 6.69992 17.4142 6.39746 17.0142 6.39746H4.01034C3.6114 6.39746 3.2764 6.69891 3.23452 7.09578L2.21968 16.6971C2.13593 17.535 2.41526 18.3772 2.98585 19.0078C3.55648 19.638 4.36585 19.9998 5.20667 19.9998H15.8181C16.655 19.9998 17.4569 19.6453 18.0171 19.0266C18.5851 18.4006 18.8626 17.5517 18.7786 16.6945ZM16.8616 17.9787C16.5921 18.2757 16.2215 18.4393 15.8181 18.4393H5.20694C4.80616 18.4393 4.41839 18.2648 4.14296 17.9605C3.86753 17.6562 3.73257 17.2523 3.7721 16.8568L4.71253 7.9582H16.3102L17.2262 16.8511C17.2678 17.2732 17.138 17.6737 16.8616 17.9787Z" fill="white" />
                                <path d="M10.6433 0C8.17672 0 6.16992 2.00676 6.16992 4.47336V7.17816H7.73039V4.47336C7.73039 2.86711 9.03704 1.56047 10.6433 1.56047C12.2495 1.56047 13.5564 2.86711 13.5564 4.47336V7.17816H15.1166V4.47336C15.1167 2.00676 13.1099 0 10.6433 0Z" fill="white" />
                            </svg>
                            <p>Перейти в корзину</p>
                        </button>
                    </Link>
                    :
                    <button onClick={() => {
                        handleAddBasket(post)
                        toggle(indexColor)
                    }} className={style.productsPage__addToBasket}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.7786 16.6945L17.7903 7.09785C17.7495 6.69992 17.4142 6.39746 17.0142 6.39746H4.01034C3.6114 6.39746 3.2764 6.69891 3.23452 7.09578L2.21968 16.6971C2.13593 17.535 2.41526 18.3772 2.98585 19.0078C3.55648 19.638 4.36585 19.9998 5.20667 19.9998H15.8181C16.655 19.9998 17.4569 19.6453 18.0171 19.0266C18.5851 18.4006 18.8626 17.5517 18.7786 16.6945ZM16.8616 17.9787C16.5921 18.2757 16.2215 18.4393 15.8181 18.4393H5.20694C4.80616 18.4393 4.41839 18.2648 4.14296 17.9605C3.86753 17.6562 3.73257 17.2523 3.7721 16.8568L4.71253 7.9582H16.3102L17.2262 16.8511C17.2678 17.2732 17.138 17.6737 16.8616 17.9787Z" fill="white" />
                            <path d="M10.6433 0C8.17672 0 6.16992 2.00676 6.16992 4.47336V7.17816H7.73039V4.47336C7.73039 2.86711 9.03704 1.56047 10.6433 1.56047C12.2495 1.56047 13.5564 2.86711 13.5564 4.47336V7.17816H15.1166V4.47336C15.1167 2.00676 13.1099 0 10.6433 0Z" fill="white" />
                        </svg>
                        <p>Добавить в корзину</p>
                    </button>


            }


        </div>
    )
}
export default observer(AddBasket)