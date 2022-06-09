import style from "./CardBestseller.module.scss";
import SliderCrards from '../SliderCards/SliderCrards';

const CardBestseller = ({ data = [] }) => {
    return <div className={style.card}>
        <div style={style.card__img}>
        {/* <img src={`http://localhost/${data.images[0]}`} alt="img" /> */}
        <img src={data.images[0]} alt="img" />
            <div className={style.card__img__sale}>
                <span>{data.colors.current_price}50%</span>
            </div>
        </div>
        <div className={style.card__description}>
            <p className={style.card__name}>{data.small_name}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className={style.card__price}>{data.colors[0].current_price ? data.colors[0].current_price + "р" : ''}
                    <span className={data.colors[0].current_price ? style.card__priceOld : ''} >{data.colors[0].price}р</span>
                </p>
            </div>
            <p className={style.card__size}>Размер:{data.colors[0].size}</p>
            <div className={style.card__color}>
                {data.colors_name.map((e, i) => <div key={i} style={{ backgroundColor: e }} className={style.card__colorDiv}></div>)}
            </div>
        </div >
    </div>

}
export default CardBestseller