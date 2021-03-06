import Slider from "./Slider/Slider";
import style from "./HomePage.module.scss";
import CardsCollection from "./Cards/CardsCollection/CardsCollection";
import CardsBestsellers from './Cards/CardBestseller/CardsBestsellers';
import Buttun from "./Button/Button";
import Benefits from "./Benefits/Benefits";
import ScrollTop from './../../Components/SecondaryFunc/ScrollTopV2/ScrollTop';
import collections from './../../DataBase/collections';
import { observer } from 'mobx-react-lite';
import cardsBesteller from "../../DataBase/cardsBesteller";
import novelties from "../../DataBase/novelties";
import CardsNovelties from "./Cards/Novelties/CardsNovelties";
import { useState } from 'react';
import { useEffect } from 'react';
import ClockLoader from "react-spinners/ClipLoader";

const HomePage = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    return (
        <>
            {loading ?
                <div className="loader-content">
                    <div className="loader-All">
                        <ClockLoader color={"#36D7B7"} loading={loading} size={150} />
                    </div>
                </div>
                :
                <div className={style.homePage}>
                    <div className="container">
                        <div className={style.slider}>
                            <Slider />
                        </div>
                        <div className={style.cards}>
                            <h2>Хит продаж</h2>
                            <CardsBestsellers data={cardsBesteller.toJS_cardsBesteller} />
                            {cardsBesteller.get_Stop ? <Buttun onClick={() => cardsBesteller.getCardBesteller()} /> : ''}
                            <h2>Новинки</h2>
                            <CardsNovelties data={novelties.toJS_novelties} />
                            {novelties.get_Stop ? <Buttun onClick={() => novelties.getNovelties()} /> : ''}
                            <h2>Коллекция</h2>
                            <CardsCollection data={collections.get_Collections} />
                            {collections.get_Stop ? <Buttun onClick={() => collections.getCollections()} /> : ''}
                        </div>
                        <ScrollTop />
                        <h2>Наши преимущества</h2>
                        <Benefits />
                    </div>
                </div>
            }

        </>
    )
}
export default observer(HomePage)