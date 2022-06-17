import style from "./News.module.scss"

const News = ({ dataNews = {} }) => {
    return (
        <div className={style.news}>
            <div className={style.news__img}>
                <img src={dataNews.image} alt="img" />
            </div>
            <div className={style.news__text}>
                <p className={style.news__title} href="/">
                    {dataNews.title}
                </p>
                <p className={style.news__descriprion}>
                    {dataNews.description}
                </p>
            </div>
        </div>
    )
}
export default News