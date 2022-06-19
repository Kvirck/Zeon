import style from './Favorites.module.scss'
import ScrollTop from './../../Components/SecondaryFunc/ScrollTop/ScrollTop';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import favorites from "../../DataBase/favorites";
import Card from './../HomePage/Cards/Card/CardV1/Card';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import SimilarProduct from '../../Components/SecondaryFunc/SimilarProduct/SimilarProduct';

const Favorites = () => {
    const id = JSON.parse(localStorage.getItem('favorites'))
    const [isLoading, setLoading] = useState(true)
    function getFavorites(id) {
        favorites.getFavorites(`http://localhost/products/${id}?limit=1`)
        setLoading(false)
    }
    useEffect(() => {
        for (let i of id) {
            getFavorites(i)
        }
    }, [])
    return (
        < div className="container" >
            < div className={style.favorites}>
                <p className={style.favorites__title}>Избранные</p>
                {id.length !== 0 ?
                    <div className={style.favorites__products}>
                        <div className={style.favorites__length}>Товаров в избранном: <span>{id.length}</span></div>
                        <div className={style.favorites__items}>
                            {!isLoading ?
                                favorites.toJS_data.map(item =>
                                    <div key={item.id} className={style.favorites__item}>
                                        <Link to={`/ProductsPage/${item.id}`}>
                                            <Card data={item} />
                                        </Link>
                                    </div>
                                )
                                :
                                null
                            }
                        </div>
                    </div>
                    :
                    <div>
                        <p>У Вас пока нет товаров в избранном</p>
                        <p className={style.similarProduct}>Возможно Вас заинтересует</p>
                        <SimilarProduct />
                    </div>
                }

            </div>


            <ScrollTop />
        </div >
    )
}

export default observer(Favorites)