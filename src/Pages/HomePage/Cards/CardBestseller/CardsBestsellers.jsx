import style from "./CardsBestsellers.module.scss";
import CardBestseller from "./CardBestseller";


const CardsBestsellers = ({ data=[] }) => {
    return <div>
        <div className={style.cards}>
            {data.map(e =>
                <div key={e.id} className={style.card}>
                    <CardBestseller data={e} />
                </div>
            )}
        </div>

    </div>
}
export default CardsBestsellers