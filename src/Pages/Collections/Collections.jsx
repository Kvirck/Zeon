import style from "./Collections.module.scss"
import ScrollTop from './../../Components/SecondaryFunc/ScrollTopV2/ScrollTop';
import CardsCollectionV2 from './../HomePage/Cards/CardsCollection/CardsCollectionV2';
import RoutingsNum from './../../Components/SecondaryFunc/RoutingsNum/RoutingsNum';
import collectionsPage from './../../DataBase/collectionsPage';
import { observer } from 'mobx-react-lite';
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import { useState, useEffect } from 'react';
import ClockLoader from "react-spinners/ClipLoader";
const Collections = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    return (
        <>
            <BreadCrumbs pathname={[
                { id: 1, page: 'Главная', path: '/' },
                { id: 2, page: 'Коллекции' }
            ]}
            />
            {loading ?
                <div className="loader-content">
                    <div className="loader-All">
                        <ClockLoader color={"#36D7B7"} loading={loading} size={150} />
                    </div>
                </div>
                :
                <div className="container">
                    <div className={style.collections}>
                        <p className={style.collections__title}>Коллекции</p>
                        <div className={style.collections__items}>
                            <CardsCollectionV2 data={collectionsPage.get_Collections} />
                        </div>
                        <div className={style.collections__routingsNum}>
                            <RoutingsNum links={collectionsPage.get_Links} />
                        </div>
                    </div>
                    <ScrollTop />
                </div>}
        </>

    )
}
export default observer(Collections)