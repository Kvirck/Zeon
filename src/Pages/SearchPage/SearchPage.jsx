import search from '../../DataBase/search'
import style from './SearchPage.module.scss'
import { useEffect } from 'react';
import Card from '../HomePage/Cards/Card/CardV1/Card';
import { Link } from 'react-router-dom';
import RoutingsNum from '../../Components/SecondaryFunc/RoutingsNumV2/RoutingsNum';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import SimilarProduct from '../../Components/SecondaryFunc/SimilarProduct/SimilarProduct';
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import ClockLoader from "react-spinners/ClipLoader";

const SearchPage = ({ value }) => {
    const { name } = useParams()
    const [isLoading, setLoading] = useState(true)

    const [loading, setISLoading] = useState(false)
    useEffect(() => {
        setISLoading(true)
        setTimeout(() => {
            setISLoading(false)
        }, 1500)
    }, [])

    useEffect(() => {
        async function load() {
            await search.getSearch(`http://localhost/products/search?limit=16&page=1&q=${name}`)
            await search.getSearchNew(search.url)
            setLoading(false)
        }
        load()
    }, [value])
    return (
        <>
            <BreadCrumbs pathname={[
                { id: 1, page: 'Главная', path: '/' },
                { id: 2, page: 'Результаты поиска' }
            ]} />
            {loading ?
                <div className="loader-content">
                    <div className="loader-All">
                        <ClockLoader color={"#36D7B7"} loading={loading} size={150} />
                    </div>
                </div>
                :
                <div className='container'>
                    {search.toJS__product == '' ?
                        <div className={style.search__false}>
                            <p className={style.search__result}>Результаты поиска по запросу: <span>{name}</span></p>
                            <p className={style.search__text}>По Вашему запросу ничего не найдено.</p>
                            <div className={style.search__random}>
                                <p className={style.search__random__text}>Возможно Вас заинтересует</p>
                                <SimilarProduct />
                            </div>
                        </div> :
                        !isLoading ? <div className={style.search__true}>
                            <p className={style.search__result}>Результаты поиска по запросу: <span>{name}</span></p>
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

                </div>
            }
        </>

    )
}

export default observer(SearchPage)