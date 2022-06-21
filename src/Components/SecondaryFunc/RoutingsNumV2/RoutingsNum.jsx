import style from "./RoutingsNum.module.scss"

const RoutingsNum = ({ links, currentPage, axiosFunc = () => console.log('ok') }) => {
    const MoveUp = () => {
        window.scrollTo(({
            top: 0,
            behavior: "smooth"
        }))
    }
    let stop = true;

    return (

        <div>
            <div className={style.routingsNum}>
                {links.map((item, i) => {
                    if (links.length === 3) {
                        return ''
                    } 
                    if (i > 3 && i < links.length - 2) {
                        if (stop) {
                            stop = false;
                            return <button className={style.routingsNum__btn}>...</button>;
                        }
                    } else {
                        const doubleClick = () => {
                            axiosFunc(`http://localhost${item.url}`)
                            MoveUp()
                        }
                        return <button key={item.url[0] + i} onClick={doubleClick}
                            className={item.page === currentPage ? `${style.routingsNum__btn} ${style.active}` : style.routingsNum__btn}>
                            {item.page}
                        </button>
                    }
                })}
            </div>
        </div>
    )
}
export default RoutingsNum