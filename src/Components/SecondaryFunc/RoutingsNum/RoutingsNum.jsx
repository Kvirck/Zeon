import style from "./RoutingsNum.module.scss"
import collectionsPage from './../../../DataBase/collectionsPage';

const RoutingsNum = ({ links }) => {
    const MoveUp = () => {
        window.scrollTo(({
            top: 0,
            behavior: "smooth"
        }))
    }
    return (
        <div>
            <div className={style.routingsNum}>

                {links.map((item, i) => {
                    const doubleClick= ()=>{
                        collectionsPage.getCollections(`http://localhost${item.url}`)
                        MoveUp()
                    }
                    return <button key={item.url[0] + i} onClick={doubleClick}
                        className={item.page === collectionsPage.get_currentPage ? `${style.routingsNum__btn} ${style.active}` : style.routingsNum__btn}>
                        {item.page}
                    </button>
                })}
            </div>
        </div>
    )
}
export default RoutingsNum