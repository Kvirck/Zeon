import CardCollection from "./CardCollection/CardCollection";
import style from "./CardsCollection.module.scss";
const CardsCollection = (({ data }) => {

    return <div>
        <div className={style.cardsCollection}>
            {data.map(e =>
                <div key={e.id} className={style.cardsCollection__item}>
                    <CardCollection  data={e} />
                </div>
            )}
        </div>
    </div>
})
export default CardsCollection