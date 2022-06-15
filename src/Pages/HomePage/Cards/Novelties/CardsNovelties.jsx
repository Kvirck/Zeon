import style from "./CardsNovelties.module.scss";
import Novelties from "./Novelties";
import { Link } from 'react-router-dom';
import MoveUp from './../../../../Components/SecondaryFunc/ScrollTop/MoveUp';

const CardsNovelties = ({ data = [] }) => {
    return <div>
        <div className={style.cards} >
            
            {data.map(e =>
                <div key={e.id} className={style.card}>
                    <Link onClick={()=>MoveUp()} to={`/ProductsPage/${e.id}`}>
                        <Novelties data={e} />
                    </Link>
                </div>
            )}
        </div>

    </div>
}
export default CardsNovelties