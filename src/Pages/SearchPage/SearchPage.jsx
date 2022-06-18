import SimilarProduct from '../../Components/SecondaryFunc/SimilarProduct/SimilarProduct'
import search from '../../DataBase/search'
import style from './SearchPage.module.scss'
import { useEffect } from 'react';
import Card from '../HomePage/Cards/Card/CardV1/Card';
import { Link } from 'react-router-dom';

const SearchPage = ({ value }) => {

    useEffect(() => {
        search.getSearch(value)
    }, [value])
    return (
        <div className='container'>
            {
                value ?
                    setTimeout(() => {
                        return <div className={style.search__true}>
                            <p className={style.search__result}>Результаты поиска по запросу: <span>{value}</span></p>
                            {value ? search.toJS__product.map(item =>
                                <div key={item.id} className={style.favorites__item}>
                                    <Link to={`/ProductsPage/${item.id}`}>
                                        <Card data={item} />
                                    </Link>
                                </div>) : null}
                        </div>
                    }, [1000])
                    :
                    <div className={style.search__false}>
                        <p className={style.search__result}>Результаты поиска по запросу: <span>{value}</span></p>
                        <p className={style.search__text}>По Вашему запросу ничего не найдено.</p>
                        <div className={style.search__random}>
                            <p className={style.search__random__text}>Возможно Вас заинтересует</p>
                            <SimilarProduct />
                        </div>
                    </div>
            }


        </div>
    )
}

export default SearchPage