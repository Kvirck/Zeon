import style from "./News.module.scss"

const News = () => {
    return (
        <div className={style.news}>
            <div className={style.news__img}>
                <img src="/img/Rectangle.png" alt="img" />
            </div>
            <div className={style.news__text}>
                <a className={style.news__title} href="/">
                    Lorem ipsum dolor sit amet
                </a>
                <p className={style.news__descriprion}>
                    Sit ullamcorper at gravida quis feugiat. Laoreet leo dolor, dui eget sit viverra justo, malesuada. Viverra pharetra, augue neque felis enim dui id cum. At pellentesque diam nulla ac amet quisque quis. Est consectetur ullamcorper curabitur quis viverra hac molestie. Elit pulvinar congue ut amet adipiscing felis tincidunt. Amet quis varius aliquam hendrerit tempus. Sed sit diam quis scelerisque congu econgu econgu econguecongu econguecon guecon guecon guecong ueconguecong uec ongue.
                    Sit ullamcorper at gravida quis feugiat. Laoreet leo dolor, dui eget sit viverra justo, malesuada. Viverra pharetra, augue neque  Sit ullamcorper at gravida quis feugiat. Laoreet leo dolor, dui eget sit viverra justo, malesuada. Viverra pharetra, augue neque felis enim dui id cum. At pellentesque diam nulla ac amet quisque quis. Est consectetur ullamcorper curabitur quis viverra hac molestie. Elit pulvinar congue ut amet adipiscing felis tincidunt. Amet quis varius aliquam hendrerit tempus. Sed sit diam quis
                </p>
            </div>
        </div>
    )
}
export default News