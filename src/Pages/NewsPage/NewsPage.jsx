import dataLinks from "../../DataBase/dataLinks"
import News from "./News/News"
import style from "./NewsPage.module.scss"
import { observer } from 'mobx-react-lite';

const NewsPage = () => {
    const data = dataLinks.toJS_news
    return (
        <div className="container">
            <div className={style.newsPage}>
                <p className={style.newsPage__title}>Новости </p>
                <div className={style.newsPage__content}>
                    {data && data.map(news =>
                        <div key={news?.id} className={style.content__item}>
                            <News dataNews={news} />
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}
export default observer(NewsPage)