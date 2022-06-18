import style from './FavoritesIcon.module.scss'
import { useState } from 'react';
const FavoritesIcon = ({ id, isInFavorite }) => {
    const STORAGE_NAME = 'favorites'

    const [isFavorite, setIsFavorite] = useState(isInFavorite)

    const favAdd = () => {
        let storage = JSON.parse(localStorage.getItem(STORAGE_NAME))
        const favorites = [...storage, id]
        localStorage.setItem(STORAGE_NAME, JSON.stringify(favorites))
        setIsFavorite(true)
    }

    const favDell = () => {
        let storage = JSON.parse(localStorage.getItem(STORAGE_NAME))
        const favorites = storage.filter(itemId => itemId !== id)
        localStorage.setItem(STORAGE_NAME, JSON.stringify(favorites))
        setIsFavorite(false)
    }

    const handlerIcon = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if (isFavorite) {
            favDell()
        } else {
            favAdd()
        }
    }

    return (
        <div>
            <div className={style.card__img__loveIcons}>
                <div 
                    onClick={handlerIcon} 
                    className={style.card__img__loveIcon}
                >
                    {isFavorite ? 
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.467 21.276C11.608 21.42 11.8 21.5 12.001 21.5C12.202 21.5 12.394 21.42 12.535 21.276L22.129 11.555C26.13 7.502 23.287 0.5 17.597 0.5C14.18 0.5 12.612 3.011 12.001 3.48C11.387 3.009 9.82901 0.5 6.40501 0.5C0.733013 0.5 -2.14499 7.484 1.87401 11.555L11.467 21.276Z" fill="#E5271B" />
                        </svg>
                        :
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4662 21.276C11.6072 21.42 11.7992 21.5 12.0002 21.5C12.2012 21.5 12.3932 21.42 12.5342 21.276L22.1282 11.555C24.6192 9.032 24.6192 4.925 22.1282 2.401C20.9182 1.175 19.3092 0.5 17.5962 0.5C15.8832 0.5 14.2752 1.175 13.0652 2.4L12.0002 3.48L10.9352 2.401C9.72516 1.175 8.11616 0.5 6.40416 0.5C4.69116 0.5 3.08216 1.175 1.87216 2.401C-0.618844 4.925 -0.618844 9.032 1.87216 11.554L11.4662 21.276ZM2.93916 3.454C3.86516 2.517 5.09616 2 6.40316 2C7.71116 2 8.94116 2.517 9.86616 3.455L11.4652 5.075C11.7462 5.36 12.2512 5.36 12.5322 5.075L14.1312 3.454C15.0592 2.517 16.2892 2 17.5962 2C18.9042 2 20.1342 2.517 21.0602 3.454C22.9772 5.397 22.9772 8.558 21.0602 10.502L12.0002 19.683L2.93916 10.501C1.02216 8.559 1.02216 5.397 2.93916 3.454Z" fill="white" />
                        </svg>
                    }
                </div>
            </div>
        </div>
    )
}
export default FavoritesIcon