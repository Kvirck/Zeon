import style from "./CardsBestsellers.module.scss";
import { Link } from "react-router-dom";
import MoveUp from './../../../../Components/SecondaryFunc/ScrollTop/MoveUp';
import Card from './../Card/CardV1/Card';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Pagination } from "swiper";

const CardsBestsellers = ({ data = [] }) => {

    console.log(data)
    return <div>

        <div className={style.mini}>
            <div className={style.cards}>
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={8}
                    grabCursor={true}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {data.map((e, i) =>
                        <SwiperSlide key={e.id}>
                            <Link onClick={() => MoveUp()} to={`/ProductsPage/${e.id}`}>
                                <Card data={e} />
                            </Link>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div >
        </div>
        <div className={style.not__mini}>
            <div className={style.cards}>
                {data.map((e, i) =>
                    <div key={e.id + e.name} className={style.card}>
                        <Link onClick={() => MoveUp()} to={`/ProductsPage/${e.id}`}>

                            <Card data={e} />
                        </Link>
                    </div>
                )}

            </div >
        </div>
    </div >
}
export default CardsBestsellers