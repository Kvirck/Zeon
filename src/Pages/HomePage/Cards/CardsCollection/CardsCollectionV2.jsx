import CardCollection from "./CardCollection/CardCollection";
import style from "./CardsCollectionV2.module.scss";

const CardsCollection = ({ data = []}) => {

    return <div>
        <div className={style.cardsCollection}>
            {data.map(e =>
                <div key={e.id} className={style.cardsCollection__item}>
                    <CardCollection id={e.id} data={e} />
                </div>
            )}
        </div>

    </div>
}
export default CardsCollection