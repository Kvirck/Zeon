import Slider from "./Slider/Slider";
import style from "./HomePage.module.scss";
import CardsCollection from "./Cards/CardsCollection/CardsCollection";
import CardsBestsellers from './Cards/CardBestseller/CardsBestsellers';
import Buttun from "./Button/Button";
import Benefits from "./Benefits/Benefits";
import ScrollTop from './../../Components/SecondaryFunc/ScrollTop/ScrollTop';
import collections from './../../DataBase/collections';
import { observer } from 'mobx-react-lite';
import cardsBesteller from "../../DataBase/cardsBesteller";
import novelties from "../../DataBase/novelties";
import CardsNovelties from "./Cards/Novelties/CardsNovelties";

const HomePage = () => {
    const adaptive = window.matchMedia("(max-width: 320px)").matches;
    return (
        <div className={style.homePage}>

            <div className="container">
                <div className={style.slider}>
                    <Slider />
                </div>
                <div className={style.cards}>
                    <h2>Хит продаж</h2>
                    <CardsBestsellers adaptive={adaptive} data={cardsBesteller.toJS_cardsBesteller} />
                    {cardsBesteller.get_Stop ? <Buttun onClick={() => cardsBesteller.getCardBesteller()} /> : ''}
                    <h2>Новинки</h2>
                    <CardsNovelties adaptive={adaptive} data={novelties.toJS_novelties} />
                    {novelties.get_Stop ? <Buttun onClick={() => novelties.getNovelties()} /> : ''}
                    <h2>Коллекция</h2>
                    <CardsCollection adaptive={adaptive} data={collections.get_Collections} />
                    {collections.get_Stop ? <Buttun onClick={() => collections.getCollections()} /> : ''}
                </div>
                <ScrollTop />
                <h2>Наши преимущества</h2>
                <Benefits />
            </div>
        </div>
    )
}
export default observer(HomePage)