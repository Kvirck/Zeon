import style from "./SectionPage.module.scss"
import { observer } from 'mobx-react-lite';

const SectionPage = () => {
    return (
        <div className="container">
            <div className={style.collections}>
                <p className={style.collections__title}>Коллекции</p>
                <div className={style.collections__items}>
                    {/* <CardsCollection data={collectionsPage.get_Collections} /> */}
                </div>
                <div className={style.collections__routingsNum}>
                    {/* <RoutingsNum   links = {collectionsPage.get_Links} /> */}
                </div>
            </div>
            {/* <ScrollTop /> */}
        </div>
    )
}
export default observer(SectionPage)