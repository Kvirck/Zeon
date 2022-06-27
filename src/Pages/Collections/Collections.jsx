import style from "./Collections.module.scss"
import ScrollTop from './../../Components/SecondaryFunc/ScrollTop/ScrollTop';
import CardsCollectionV2 from './../HomePage/Cards/CardsCollection/CardsCollectionV2';
import RoutingsNum from './../../Components/SecondaryFunc/RoutingsNum/RoutingsNum';
import collectionsPage from './../../DataBase/collectionsPage';
import { observer } from 'mobx-react-lite';
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";

const Collections = () => {
    return (
        <>
            <BreadCrumbs pathname={[
                { id: 1, page: 'Главная', path: '/' },
                { id: 2, page: 'Коллекции' }
            ]}
            />
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
            </div>
        </>

    )
}
export default observer(Collections)