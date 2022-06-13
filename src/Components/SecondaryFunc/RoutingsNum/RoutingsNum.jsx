import style from "./RoutingsNum.module.scss"
import collectionsPage from './../../../DataBase/collectionsPage';

const RoutingsNum = ({ links }) => {
    return (
        <div>
            <div className={style.routingsNum}>

                {links.map((item, i) => {
                    return <button key={item.url[0] + i} onClick={() => collectionsPage.getCollections(`http://localhost${item.url}`)}
                        className={item.page === collectionsPage.get_currentPage ? `${style.routingsNum__btn} ${style.active}` : style.routingsNum__btn}>
                        {item.page}
                        {/* {console.log('item.page', item.page)}                        {console.log('collectionsPage.currentPage', collectionsPage.get_currentPage)} */}

                    </button>
                })}
            </div>
        </div>
    )
}
export default RoutingsNum