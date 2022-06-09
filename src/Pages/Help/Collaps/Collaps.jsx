import style from "./Collaps.module.scss"
import { useState } from 'react';

const Collaps = (props) => {

    const [showBtn, setShowBtn]= useState(false)
    return (
        <div className={style.collaps}>
            <div className={style.collaps__text}>
                <p className={style.collaps__title}>{props.question}</p>
                <button className={showBtn ?  style.rotate : style.noRotate} onClick={()=>setShowBtn(!showBtn) }>
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.57302 9.75168L17.5128 1.44666C17.8291 1.11557 17.8291 0.579412 17.5128 0.24832C17.1963 -0.0827732 16.6832 -0.0827732 16.3669 0.24832L8.99999 7.95417L1.63299 0.248319C1.31674 -0.0827739 0.803637 -0.0827739 0.487391 0.248319C0.329132 0.413865 0.25 0.630533 0.25 0.847489C0.25 1.06444 0.329132 1.28111 0.48739 1.44666L8.42715 9.75168C8.74367 10.0828 9.25681 10.0828 9.57302 9.75168Z" fill="#393939" />
                    </svg>
                </button>
            </div>
            <p  className={showBtn ?  `${style.collaps__description } ${style.active}`: style.collaps__description}> { props.text} </p>
        </div>
    )
}
export default Collaps