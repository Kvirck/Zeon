import style from "./News.module.scss"
import { observer } from 'mobx-react-lite';

const News = ({ dataNews = {}, toggle, i, showBtn }) => {
    return (
        <div className={style.news}>
            <div className={style.news__img}>
                <img src={dataNews?.image} alt="img" />
            </div>
            <div className={style.news__text}>
                <p className={style.news__title} href="/">
                    {dataNews?.title}
                </p>
                <p className={showBtn === i ? style.news__descriprion__active : style.news__descriprion} >
                    {dataNews?.description}
                </p>
            </div>
            {showBtn === i ? <button className={style.news__btn} onClick={() => toggle(i)}>Скрыть</button> :
                <button className={style.news__btn} onClick={() => toggle(i)}>Читать полностью</button>}

        </div>
    )
}
export default observer(News)