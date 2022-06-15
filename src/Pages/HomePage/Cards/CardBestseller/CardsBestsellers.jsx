import style from "./CardsBestsellers.module.scss";
import CardBestseller from "./CardBestseller";
import { Link } from "react-router-dom";
import MoveUp from './../../../../Components/SecondaryFunc/ScrollTop/MoveUp';

const CardsBestsellers = ({ data=[] }) => {
    return <div>
        <div className={style.cards}>
            {data.map(e =>
                <div key={e.id} className={style.card}>
                    <Link  onClick={()=>MoveUp()} to={`/ProductsPage/${e.id}`}>
                    <CardBestseller data={e} />
                    </Link>
                </div>
            )}
        </div>

    </div>
}
export default CardsBestsellers