import dataLinks from "../../DataBase/dataLinks"
import News from "./News/News"
import style from "./NewsPage.module.scss"
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";

const NewsPage = () => {
    const data = dataLinks.toJS_news
    const [showBtn, setShowBtn] = useState(null)
    const toggle = i => {
        if (showBtn === i) {
            return setShowBtn(null)
        }
        setShowBtn(i)
    }
    return (
        <>
            <BreadCrumbs pathname={[
                { id: 1, page: 'Главная', path: '/' },
                { id: 2, page: 'Новости' }
            ]} />
            <div className="container">
                <div className={style.newsPage}>
                    <p className={style.newsPage__title}>Новости </p>
                    <div className={style.newsPage__content}>
                        {data && data.map((news, i) =>
                            <div key={news?.id} className={style.content__item}>
                                <News showBtn={showBtn} i={i}
                                    toggle={toggle} dataNews={news} />
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>

    )
}
export default observer(NewsPage)