import style from './FavoritesIconV2.module.scss'
import { useState, useContext } from 'react';
import { Context } from './../../../index';
const FavoritesIconV2 = ({ data }) => {
    const { Favorites } = useContext(Context)
    const example = Boolean(Favorites.products.find((prod) => prod.id === data.id))
    const [love, setLove] = useState(example)
    const handlerIcon = (e) => {
        e.stopPropagation()
        e.preventDefault()
    }
    return (
        <div>
            <div className={style.card__img__loveIcons}>
                <div
                    onClick={handlerIcon}
                    className={style.card__img__loveIcon}
                >
                    {love ?
                        <img onClick={() => {
                            Favorites.delFavorites(data)
                            setLove(!love)
                        }} className={style.card__img__loveIcon__love} src="./img/LoveIs.svg" alt="" />
                        :
                        < svg onClick={() => {
                            Favorites.addFavorites(data)
                            setLove(!love)
                        }} className={style.card__img__loveIcon__hover} width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4662 21.276C11.6072 21.42 11.7992 21.5 12.0002 21.5C12.2012 21.5 12.3932 21.42 12.5342 21.276L22.1282 11.555C24.6192 9.032 24.6192 4.925 22.1282 2.401C20.9182 1.175 19.3092 0.5 17.5962 0.5C15.8832 0.5 14.2752 1.175 13.0652 2.4L12.0002 3.48L10.9352 2.401C9.72516 1.175 8.11616 0.5 6.40416 0.5C4.69116 0.5 3.08216 1.175 1.87216 2.401C-0.618844 4.925 -0.618844 9.032 1.87216 11.554L11.4662 21.276ZM2.93916 3.454C3.86516 2.517 5.09616 2 6.40316 2C7.71116 2 8.94116 2.517 9.86616 3.455L11.4652 5.075C11.7462 5.36 12.2512 5.36 12.5322 5.075L14.1312 3.454C15.0592 2.517 16.2892 2 17.5962 2C18.9042 2 20.1342 2.517 21.0602 3.454C22.9772 5.397 22.9772 8.558 21.0602 10.502L12.0002 19.683L2.93916 10.501C1.02216 8.559 1.02216 5.397 2.93916 3.454Z"
                                fill="none" />
                        </svg>
                    }
                </div>
            </div>
        </div>
    )
}
export default FavoritesIconV2