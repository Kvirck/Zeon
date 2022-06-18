import SimilarProduct from '../../Components/SecondaryFunc/SimilarProduct/SimilarProduct'
import style from './SearchPage.module.scss'

const SearchPage = () => {
    return (
        <div className='container'>
            <div className={style.search__false}>
                <p className={style.search__result}>Результаты поиска по запросу: <span>Платье</span></p>
                <p className={style.search__text}>По Вашему запросу ничего не найдено.</p>
            </div>
            <div className={style.search__random}>
                <p className={style.search__random__text}>Возможно Вас заинтересует</p>
                <SimilarProduct />
            </div>
        </div>
    )
}

export default SearchPage