import style from "./CollectionsPage.module.scss"
import ScrollTop from './../../Components/SecondaryFunc/ScrollTop/ScrollTop';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import collectionsPage from "../../DataBase/collectionsPage";
import Card from './../HomePage/Cards/Card/CardV1/Card';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import RoutingsNum from "../../Components/SecondaryFunc/RoutingsNumV2/RoutingsNum";
import SimilarProduct from "../../Components/SecondaryFunc/SimilarProduct/SimilarProduct";

const CollectionsPage = () => {
    const { id } = useParams()
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            await collectionsPage.getCollectionsPage(`http://localhost/collections/${id}?limit=12&page=1`)
            await collectionsPage.getCollectionsPageNew(`${collectionsPage.collections_url}`)
            setLoading(false)
        }
        load()

    }, [id])
    return (
        < div className="container" >
            <div className={style.collectionsPage}>
                <p className={style.collectionsPage__title}>Коллекции {collectionsPage.toJS_getCollPage_products.name}</p>
                <div className={style.collectionsPage__items}>
                    {!isLoading ?
                        collectionsPage.toJS_getCollPage_products.products.map(item =>
                            <div key={item.id} className={style.collectionsPage__item}>
                                <Link to={`/ProductsPage/${item.id}`}>
                                    <Card data={item} />
                                </Link>
                            </div>
                        )
                        :
                        null
                    }
                </div>
                <div className={style.collectionsPage__routingsNum}>
                    <RoutingsNum currentPage={collectionsPage.toJS_getCollPage_currentPage}
                        links={collectionsPage.toJS_getCollPage_Links} axiosFunc={(url) => collectionsPage.getCollectionsPageNew(url)} />
                </div>
                <p className={style.new}>Новинки</p>
                <SimilarProduct/>
            </div>
            <ScrollTop />
        </div >
    )
}
export default observer(CollectionsPage)