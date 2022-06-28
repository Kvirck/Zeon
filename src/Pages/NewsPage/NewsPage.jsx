import dataLinks from "../../DataBase/dataLinks"
import News from "./News/News"
import style from "./NewsPage.module.scss"
import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import ClockLoader from "react-spinners/ClipLoader";

const NewsPage = () => {
    const [data, setData] = useState(null)

    const [showBtn, setShowBtn] = useState(null)
    const toggle = i => {
        if (showBtn === i) {
            return setShowBtn(null)
        }
        setShowBtn(i)
    }
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        setData(dataLinks.toJS_news)
    }, [])
    return (
        <>
            <BreadCrumbs pathname={[
                { id: 1, page: 'Главная', path: '/' },
                { id: 2, page: 'Новости' }
            ]} />
            {loading ?
                <div className="loader-content">
                    <div className="loader-All">
                        <ClockLoader color={"#36D7B7"} loading={loading} size={150} />
                    </div>
                </div>
                : <div className="container">
                    <div className={style.newsPage}>
                        <p className={style.newsPage__title}>Новости </p>
                        <div className={style.newsPage__content}>
                            {data ? dataLinks.toJS_news?.map((news, i) =>
                                <div key={news.id} className={style.content__item}>
                                    <News showBtn={showBtn} i={i}
                                        toggle={toggle} dataNews={news} />
                                </div>
                            ) : null}

                        </div>
                    </div>
                </div>}
        </>

    )
}
export default observer(NewsPage)