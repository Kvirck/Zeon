import SimilarProduct from '../../Components/SecondaryFunc/SimilarProduct/SimilarProduct'
import search from '../../DataBase/search'
import style from './SearchPage.module.scss'
import { useEffect } from 'react';
import Card from '../HomePage/Cards/Card/CardV1/Card';
import { Link } from 'react-router-dom';
import RoutingsNum from '../../Components/SecondaryFunc/RoutingsNumV2/RoutingsNum';
import { useState } from 'react';

const SearchPage = ({ value }) => {
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            await search.getSearch(`http://localhost/products/search?limit=16&page=1&q=${value}`)
            await search.getSearchNew(search.url)
            setLoading(false)
        }
        load()
    }, [value])
    return (
        <div className='container'>
           { !isLoading ? <div className={style.search__true}>
                <p className={style.search__result}>Результаты поиска по запросу: <span>{value}</span></p>
                <div className={style.search__items}>
                    {search.toJS__product ? search.toJS__product.map(item =>
                        <div key={item.id} className={style.search__item}>
                            <Link to={`/ProductsPage/${item.id}`}>
                                <Card data={item} />
                            </Link>
                        </div>) : null}
                </div>
                <div className={style.search__routingsNum}>
                    <RoutingsNum currentPage={search.toJS__currentPage}
                        links={search.toJS__links} axiosFunc={(url) => 
                            search.getSearchNew(url)
                        } />
                </div>
            </div> : null}
            {/* {
                value ?
                    <div className={style.search__true}>
                        <p className={style.search__result}>Результаты поиска по запросу: <span>{value}</span></p>
                        {value ? search.toJS__product.map(item =>
                            <div key={item.id} className={style.favorites__item}>
                                <Link to={`/ProductsPage/${item.id}`}>
                                    <Card data={item} />
                                </Link>
                            </div>) : null}
                    </div>
                    :
                    <div className={style.search__false}>
                        <p className={style.search__result}>Результаты поиска по запросу: <span>{value}</span></p>
                        <p className={style.search__text}>По Вашему запросу ничего не найдено.</p>
                        <div className={style.search__random}>
                            <p className={style.search__random__text}>Возможно Вас заинтересует</p>
                            <SimilarProduct />
                        </div>
                    </div>
            } */}


        </div>
    )
}

export default SearchPage