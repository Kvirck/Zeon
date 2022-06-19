import style from './SimilarProduct.module.scss'
import { Link } from "react-router-dom";
import Card from './../../../Pages/HomePage/Cards/Card/CardV1/Card';
import MoveUp from '../ScrollTop/MoveUp';
import collectionsPage from './../../../DataBase/collectionsPage';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Pagination } from "swiper";

const SimilarProduct = () => {
    const [load, setLoad] = useState(true)
    useEffect(() => {
        collectionsPage.getProductsSimilar(setLoad)
    }, [load])

    return (
        <>
            <div className={style.mini}>
                <div className={style.similarProduct} >
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={8}
                        grabCursor={true}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {!load ? collectionsPage.toJS_getProductsSimilar.data.map(item =>
                            <div className={style.similarProduct__item} key={item.id}>
                                <SwiperSlide>
                                    <Link onClick={() => MoveUp()} to={`/ProductsPage/${item.colors[0].id}`}>
                                        < Card data={item} />
                                    </Link>
                                </SwiperSlide>
                            </div>
                        ) : null}
                    </Swiper>
                </div>
            </div>

            <div className={style.not__mini}>
                <div className={style.similarProduct} >
                    {!load ? collectionsPage.toJS_getProductsSimilar.data.map(item =>
                        <div className={style.similarProduct__item} key={item.id}>
                            <Link onClick={() => MoveUp()} to={`/ProductsPage/${item.colors[0].id}`}>
                                < Card data={item} />
                            </Link>
                        </div>
                    ) : null}
                </div>

            </div>
        </>

    )
}

export default SimilarProduct