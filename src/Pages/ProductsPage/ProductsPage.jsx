import style from "./ProductsPage.module.scss"
import 'react-medium-image-zoom/dist/styles.css'
import { useState, useContext } from 'react';
import ModallPhoto from "./ModallPhoto";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import SimilarProduct from "../../Components/SecondaryFunc/SimilarProduct/SimilarProduct";
import AddBasket from "./AddBasket/AddBasket";
import { observer } from 'mobx-react-lite';
import { Context } from './../../index';
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ClockLoader from "react-spinners/ClipLoader";

const ProductsPage = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [index, setIndex] = useState(0);
    const [color, setColor] = useState(null)
    const { Favorites } = useContext(Context)

    let imgLinks = []
    let imgNubers = 0
    let imgS
    let example

    const handleColorIndex = (id) => {
        let i = post.colors.findIndex((color) => color.id === id)
        setIndex(i);
        setColor(post.colors[i]);
    }
    useEffect(() => {
        fetch(`http://localhost:80/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setPost(data.data)
                setColor(data.data.colors[0])
                example = Boolean(Favorites.products.find((prod) => prod.id === post.id))
                setLove(example)
            })
    }, [id])

    const [love, setLove] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])
    return (
        <>
            {post ? <BreadCrumbs pathname={[
                { id: 1, page: 'Главная', path: '/' },
                { id: 2, page: 'Коллекции', path: '/Collections' },
                { id: 3, page: `${post.category.name}`, path: `/Collections/${post.category.id}` },
                { id: 4, page: `${post.name}` }
            ]} /> : null}
            {loading ?
                <div className="loader-content">
                    <div className="loader-All">
                        <ClockLoader color={"#36D7B7"} loading={loading} size={150} />
                    </div>
                </div>
                :
                <div className="container">
                {color ? (
                    <div className={style.productsPage}>
                        <div className={style.productsPage__img__mini}>
                            {post.colors.map((img, index) => {
                                img.images.map((e) => {
                                    imgNubers = imgNubers + 1
                                    imgLinks[imgNubers] = e
                                    imgS = imgLinks.filter((img, i) => i <= 8)
                                }
                                )
                            }
                            )}  {/* Очень тяжалая вычислительная сеть для картинок */}
                            <Swiper
                                slidesPerView={1.2}
                                spaceBetween={8}
                                grabCursor={true}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <div className={style.productsPage__img__mini__items} >
                                    {imgS.map((img, i) => (
                                        <SwiperSlide key={img[index] + i}>
                                            <div className={style.productsPage__img__mini__item}>
                                                <img src={`http://localhost${img}`} alt="" />
                                            </div>
                                        </SwiperSlide>

                                    ))}
                                </div>
                            </Swiper>
                        </div>
                        <div className={style.productsPage__img}>
                            {post.colors.map((img, index) => {
                                img.images.map((e) => {
                                    imgNubers = imgNubers + 1
                                    imgLinks[imgNubers] = e
                                    imgS = imgLinks.filter((img, i) => i <= 8)
                                }
                                )
                            }
                            )}  {/* Очень тяжалая вычислительная сеть для картинок */}
                            <div className={style.productsPage__imgFour} >
                                {imgS.filter((img, index) => index < 4)
                                    .map((img, i) => (
                                        <div key={img[index] + i}>
                                            <ModallPhoto img={img} />
                                        </div>
                                    ))}
                            </div>
                            <div className={style.productsPage__imgEight}>
                                {imgS.filter((img, index) => index >= 4)
                                    .map((img, i) => (
                                        <div key={img[0] + i}>
                                            <ModallPhoto img={img} />
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className={style.productsPage__text}>
                            <p className={style.productsPage__title}>{color.name}</p>
                            <p className={style.productsPage__identification}>Артикул: <span>{color.articul}</span></p>
                            <div className={style.productsPage__color}>
                                <p >Цвет: </p>
                                {post.colors.map((color, i) =>
                                    <div className={i === index ? `${style.productsPage__color__notActive} ${style.productsPage__color__active}` : style.productsPage__color__notActive}
                                        key={color.id}>
                                        <div style={{ backgroundColor: color.color }}
                                            className={style.productsPage__color__colorBrown}
                                            onClick={() => handleColorIndex(color.id)}
                                        >
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={style.productsPage__price}>
                                <p className={style.productsPage__priceNew}>
                                    {post.colors[0].current_price} {post.colors[0].current_price ? ' р ' : ''}
                                    <span className={post.colors[0].current_price ? style.productsPage__priceOld : style.productsPage__priceNew}>{post.colors[0].price.toLocaleString('ru-RU')} р</span>
                                </p>
                            </div>
                            <p className={style.productsPage__info}>О товаре:</p>
                            <p className={style.productsPage__description}>{color.description}</p>
                            <div className={style.productsPage__characteristics}>
                                <div className={style.productsPage__characteristicsLeft}>
                                    <p className={style.productsPage__characteristics__data}>Размерный ряд:<span>{color.size}</span></p>
                                    <p className={style.productsPage__characteristics__data}>Количество в линейке :<span>5</span></p>
                                </div>
                                <div className={style.productsPage__characteristicsRight}>
                                    <p className={style.productsPage__characteristics__data}>Состав ткани:<span>{color.material} </span></p>
                                    <p className={style.productsPage__characteristics__data}>Материал:<span>{color.property} </span></p>
                                </div>
                            </div>
                            <div className={style.productsPage__btn}>
                                <AddBasket indexColor={index} post={color} />
                                {love ? <button className={style.productsPage__addToFavorites} onClick={() => {
                                    Favorites.delFavorites(post)
                                    setLove(!love)
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.467 22.276C11.608 22.42 11.8 22.5 12.001 22.5C12.202 22.5 12.394 22.42 12.535 22.276L22.129 12.555C26.13 8.502 23.287 1.5 17.597 1.5C14.18 1.5 12.612 4.011 12.001 4.48C11.387 4.009 9.82901 1.5 6.40501 1.5C0.733013 1.5 -2.14499 8.484 1.87401 12.555L11.467 22.276Z" fill="white" />
                                    </svg>
                                </button>
                                    :
                                    <button className={style.productsPage__addToFavorites} onClick={() => {
                                        Favorites.addFavorites(post)
                                        setLove(!love)
                                    }}>
                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4662 21.276C11.6072 21.42 11.7992 21.5 12.0002 21.5C12.2012 21.5 12.3932 21.42 12.5342 21.276L22.1282 11.555C24.6192 9.032 24.6192 4.925 22.1282 2.401C20.9182 1.175 19.3092 0.5 17.5962 0.5C15.8832 0.5 14.2752 1.175 13.0652 2.4L12.0002 3.48L10.9352 2.401C9.72516 1.175 8.11616 0.5 6.40416 0.5C4.69116 0.5 3.08216 1.175 1.87216 2.401C-0.618844 4.925 -0.618844 9.032 1.87216 11.554L11.4662 21.276ZM2.93916 3.454C3.86516 2.517 5.09616 2 6.40316 2C7.71116 2 8.94116 2.517 9.86616 3.455L11.4652 5.075C11.7462 5.36 12.2512 5.36 12.5322 5.075L14.1312 3.454C15.0592 2.517 16.2892 2 17.5962 2C18.9042 2 20.1342 2.517 21.0602 3.454C22.9772 5.397 22.9772 8.558 21.0602 10.502L12.0002 19.683L2.93916 10.501C1.02216 8.559 1.02216 5.397 2.93916 3.454Z" fill="white" />
                                        </svg>
                                    </button>}
                            </div>
                        </div>
                    </div>
                ) : null}
                <div className={style.similarProducts}>
                    <p className={style.similarProducts__title}>Похожие товары</p>
                    <SimilarProduct />
                </div>
            </div >
            }
        </>
    )
}

export default observer(ProductsPage)