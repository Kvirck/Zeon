import style from "./BasketProduct.module.scss"
import { Context } from './../../index';
import { useContext } from 'react';

const BasketProduct = ({ product }) => {
    const { Basket } = useContext(Context)

    console.log(`product ${product}`);
    return (
        <div className={style.basket__product}>
            <div className={style.basket__product__img}>
                <img src={`http://localhost${product.color.images[0]}`} alt="imgProduct" />
            </div>
            <div className={style.basket__product__info}>
                <div className={style.basket__product__name}>
                    <p>{product.color.name}</p>
                    <button onClick={() => Basket.delBasket(product)}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.23814 7.00015L13.7435 1.49459C14.0855 1.15283 14.0855 0.598303 13.7435 0.256541C13.4014 -0.0855136 12.8475 -0.0855136 12.5055 0.256541L7.00015 5.7621L1.49453 0.256541C1.15249 -0.0855136 0.59857 -0.0855136 0.25653 0.256541C-0.08551 0.598303 -0.08551 1.15283 0.25653 1.49459L5.76215 7.00015L0.25653 12.5057C-0.08551 12.8475 -0.08551 13.402 0.25653 13.7438C0.42755 13.9145 0.651685 14 0.875529 14C1.09937 14 1.32351 13.9145 1.49453 13.7435L7.00015 8.2379L12.5055 13.7435C12.6765 13.9145 12.9006 14 13.1245 14C13.3483 14 13.5724 13.9145 13.7435 13.7435C14.0855 13.4017 14.0855 12.8472 13.7435 12.5054L8.23814 7.00015Z" fill="#333333" />
                        </svg>
                    </button>
                </div>
                <p className={style.basket__product__size}>Размер: <span>{product.color.size}</span></p>
                <p className={style.basket__product__color}>Цвет:
                    <div >
                        <div style={{ backgroundColor: product.color.color }}
                            className={style.basket__product__color__colorBrown}
                        >
                        </div>
                    </div>
                </p>
                <div className={style.basket__product__price}>
                    <p className={style.basket__product__priceNew}>
                        {product.color.current_price} {product.color.current_price ? ' р ' : ''}
                        <span className={product.current_price ? style.basket__product__priceOld : style.basket__product__priceNew}>
                            {product.color.price} р</span>
                    </p>
                </div>
                <div className={style.basket__product__btn}>
                    <button className={style.basket__product__btn__item}>
                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1.97599V0.987993V0H6.90569H0.000768052C0 1 3.33357e-05 0.439108 3.33357e-05 0.987993C3.33357e-05 1.53688 0.000958221 1.5 0.000768052 1.97599H4.86796H12Z" fill="#979797" />
                        </svg>
                    </button>
                    <div className={style.basket__product__btn__item}>1</div>
                    <button className={style.basket__product__btn__item}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0009 6.11326C12.0009 6.6793 12.0009 6.50005 12.0009 7.13213H6.90656V12C6 12 6.45373 12 5.8877 12C5.32166 12 5.5 12 4.86883 12V7.13213L0 7.13214C0.000614911 6.5 0.000903845 6.6793 0.000903845 6.11326C0.000903845 5.54722 0 5.5 0 5.0944L4.86883 5.09439V0C5.5009 3.91849e-05 5.32166 4.99189e-05 5.8877 4.99189e-05C6.45373 4.99189e-05 6.5009 0 6.90656 0V5.09439H12.0009C12.0009 6.00005 12.0009 5.54722 12.0009 6.11326Z" fill="#1A1E3D" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default BasketProduct