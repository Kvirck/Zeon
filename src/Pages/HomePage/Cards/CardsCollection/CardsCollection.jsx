import CardCollection from "./CardCollection/CardCollection";
import style from "./CardsCollection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Pagination } from "swiper";
const CardsCollection = ({ data = [], adaptive }) => {

    return <div>
        {adaptive ?
            <div className={style.cardsCollection}>
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={8}
                    grabCursor={true}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {data.map(e =>
                        <div key={e.id} className={style.cardsCollection__item}>
                            <SwiperSlide>
                                <CardCollection id={e.id} data={e} />
                            </SwiperSlide>
                        </div>

                    )}
                </Swiper>
            </div>
            :
            <div className={style.cardsCollection}>
                {data.map(e =>
                    <div key={e.id} className={style.cardsCollection__item}>
                        <CardCollection id={e.id} data={e} />
                    </div>

                )}
            </div>
        }

    </div>
}
export default CardsCollection