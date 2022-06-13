import style from "./ProductsPage.module.scss"
import 'react-medium-image-zoom/dist/styles.css'
import { useState } from 'react';
import ModallPhoto from "./ModallPhoto";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';


const ProductsPage = () => {
    const { id } = useParams()
    console.log(id);
    const [post, setPost] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:80/products/${id}`)
            .then(res => res.json())
            .then(data => setPost(data.data))
    }, [id])
    return (
        <div className="container">
            {id}
            {post && (
                <div className={style.productsPage}>
                    <div className={style.productsPage__img}>
                        <div className={style.productsPage__imgFour} >
                            {post.colors[0].images
                            .filter((img, index) => index < 4)
                            .map((img, i) => (
                                <div key={img[0] + i}>
                                    <ModallPhoto img={img}/>
                                </div>
                            ))}
                        </div>
                        <div className={style.productsPage__imgEight}>
                            {post.colors[0].images
                            .filter((img, index) => index >= 4)
                            .map((img, i) => (
                                <div key={img[0] + i}>
                                    <ModallPhoto img={img}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={style.productsPage__text}>
                        <p className={style.productsPage__title}>{post.colors[0].name}</p>
                        <p className={style.productsPage__identification}>Артикул: <span>{post.colors[0].articul}</span></p>
                        <div className={style.productsPage__color}>
                            <p >Цвет: </p>
                            {post.colors_name.map((color, i) =>
                                <div key={color[0] + i}>
                                    <div style={{ backgroundColor: color }}
                                        className={style.productsPage__color__colorBrown}>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={style.productsPage__price}>
                            <p className={style.productsPage__priceNew}>
                                {post.colors[0].current_price} {post.colors[0].current_price ? ' р ' : ''}
                                <span className={post.colors[0].current_price ? style.productsPage__priceOld : style.productsPage__priceNew}>{post.colors[0].price} р</span>
                            </p>
                        </div>
                        <p className={style.productsPage__info}>О товаре:</p>
                        <p className={style.productsPage__description}>{post.colors[0].description}</p>
                        <div className={style.productsPage__characteristics}>
                            <div className={style.productsPage__characteristicsLeft}>
                                <p className={style.productsPage__characteristics__data}>Размерный ряд:<span>{post.colors[0].size}</span></p>
                                <p className={style.productsPage__characteristics__data}>Количество в линейке :<span>5</span></p>
                            </div>
                            <div className={style.productsPage__characteristicsRight}>
                                <p className={style.productsPage__characteristics__data}>Состав ткани:<span>{post.colors[0].material} </span></p>
                                <p className={style.productsPage__characteristics__data}>Материал:<span>{post.colors[0].property} </span></p>
                            </div>
                        </div>
                        <div className={style.productsPage__btn}>
                            <button className={style.productsPage__addToBasket}>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.7786 16.6945L17.7903 7.09785C17.7495 6.69992 17.4142 6.39746 17.0142 6.39746H4.01034C3.6114 6.39746 3.2764 6.69891 3.23452 7.09578L2.21968 16.6971C2.13593 17.535 2.41526 18.3772 2.98585 19.0078C3.55648 19.638 4.36585 19.9998 5.20667 19.9998H15.8181C16.655 19.9998 17.4569 19.6453 18.0171 19.0266C18.5851 18.4006 18.8626 17.5517 18.7786 16.6945ZM16.8616 17.9787C16.5921 18.2757 16.2215 18.4393 15.8181 18.4393H5.20694C4.80616 18.4393 4.41839 18.2648 4.14296 17.9605C3.86753 17.6562 3.73257 17.2523 3.7721 16.8568L4.71253 7.9582H16.3102L17.2262 16.8511C17.2678 17.2732 17.138 17.6737 16.8616 17.9787Z" fill="white" />
                                    <path d="M10.6433 0C8.17672 0 6.16992 2.00676 6.16992 4.47336V7.17816H7.73039V4.47336C7.73039 2.86711 9.03704 1.56047 10.6433 1.56047C12.2495 1.56047 13.5564 2.86711 13.5564 4.47336V7.17816H15.1166V4.47336C15.1167 2.00676 13.1099 0 10.6433 0Z" fill="white" />
                                </svg>
                                <p>Добавить в корзину</p></button>
                            <button className={style.productsPage__addToFavorites}>
                                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4662 21.276C11.6072 21.42 11.7992 21.5 12.0002 21.5C12.2012 21.5 12.3932 21.42 12.5342 21.276L22.1282 11.555C24.6192 9.032 24.6192 4.925 22.1282 2.401C20.9182 1.175 19.3092 0.5 17.5962 0.5C15.8832 0.5 14.2752 1.175 13.0652 2.4L12.0002 3.48L10.9352 2.401C9.72516 1.175 8.11616 0.5 6.40416 0.5C4.69116 0.5 3.08216 1.175 1.87216 2.401C-0.618844 4.925 -0.618844 9.032 1.87216 11.554L11.4662 21.276ZM2.93916 3.454C3.86516 2.517 5.09616 2 6.40316 2C7.71116 2 8.94116 2.517 9.86616 3.455L11.4652 5.075C11.7462 5.36 12.2512 5.36 12.5322 5.075L14.1312 3.454C15.0592 2.517 16.2892 2 17.5962 2C18.9042 2 20.1342 2.517 21.0602 3.454C22.9772 5.397 22.9772 8.558 21.0602 10.502L12.0002 19.683L2.93916 10.501C1.02216 8.559 1.02216 5.397 2.93916 3.454Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <p>Похожие товары</p>
        </div >
    )
}

export default ProductsPage