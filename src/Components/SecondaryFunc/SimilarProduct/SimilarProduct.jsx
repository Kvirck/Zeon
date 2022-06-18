import style from './SimilarProduct.module.scss'
import { Link } from "react-router-dom";
import Card from './../../../Pages/HomePage/Cards/Card/CardV1/Card';
import MoveUp from '../ScrollTop/MoveUp';
import collectionsPage from './../../../DataBase/collectionsPage';
import { useState, useEffect } from 'react';

const SimilarProduct = () => {
    const [load, setLoad] = useState(true)
    useEffect(() => {
        collectionsPage.getProductsSimilar(setLoad)
    }, [load])

    return (
        <div className={style.similarProduct} >
            {!load ? collectionsPage.toJS_getProductsSimilar.data.map(item =>
                <div className={style.similarProduct__item} key={item.id}>
                    <Link onClick={() => MoveUp()} to={`/ProductsPage/${item.colors[0].id}`}>
                        < Card data={item} />
                    </Link>
                </div>
            ) : null}
        </div>
    )
}

export default SimilarProduct