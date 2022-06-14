import style from "./RoutingsNum.module.scss"

const RoutingsNum = ({ links, currentPage, axiosFunc = () => console.log('ok') }) => {
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
                        axiosFunc(`http://localhost${item.url}`)
                        MoveUp()
                    }
                    return <button key={item.url[0] + i} onClick={doubleClick}
                        className={item.page === currentPage ? `${style.routingsNum__btn} ${style.active}` : style.routingsNum__btn}>
                        {item.page}
                    </button>
                })}
            </div>
        </div>
    )
}
export default RoutingsNum