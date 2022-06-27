import style from './Favorites.module.scss'
import ScrollTop from './../../Components/SecondaryFunc/ScrollTop/ScrollTop';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Card from './../HomePage/Cards/Card/CardV1/Card';
import { observer } from 'mobx-react-lite';
import SimilarProduct from '../../Components/SecondaryFunc/SimilarProduct/SimilarProduct';
import { Context } from './../../index';
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";

const Favorites = () => {
    const { Favorites } = useContext(Context)

    return (
        <>
            <BreadCrumbs pathname={[
                { id: 1, page: 'Главная', path: '/' },
                { id: 2, page: 'Избранное' }
            ]} />
            < div className="container" >
                < div className={style.favorites}>
                    <p className={style.favorites__title}>Избранное</p>
                    {Favorites.products.length !== 0 ?
                        <div className={style.favorites__products}>
                            <div className={style.favorites__length}>Товаров в избранном: <span>{Favorites.products.length}</span></div>
                            <div className={style.favorites__items}>
                                {Favorites.products.map(item =>
                                    <div key={item.id} className={style.favorites__item}>
                                        <Link to={`/ProductsPage/${item.id}`}>
                                            <Card data={item} />
                                        </Link>
                                    </div>)
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
        </>

    )
}

export default observer(Favorites)