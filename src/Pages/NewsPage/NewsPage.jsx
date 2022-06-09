import News from "./News/News"
import style from "./NewsPage.module.scss"

const NewsPage = () => {
    return (
        <div className="container">
            <div className={style.newsPage}>
                <p className={style.newsPage__title}>Новости </p>
                <div className={style.newsPage__content}>
                    <div className={style.content__item}>
                        <News />
                    </div>
                    <div className={style.content__item}>
                        <News />
                    </div>
                    <div className={style.content__item}>
                        <News />
                    </div>
                    <div className={style.content__item}>
                        <News />
                    </div>
                    <div className={style.content__item}>
                        <News />
                    </div>
                    <div className={style.content__item}>
                        <News />
                    </div>
                    <div className={style.content__item}>
                        <News />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default NewsPage