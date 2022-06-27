import { useState } from 'react';
import style from './ModallPhoto.module.scss'

const ModallPhoto = ({ img }) => {

    const [open, setOpen] = useState(false)
    return (
        <>
            <img onClick={() => setOpen(!open)} width='900' src={`http://localhost${img}`} alt="img" />
            <div onClick={() => setOpen(!open)} className={open ? `${style.modal} ${style.active}` : style.modal}>
                <div onClick={e => e.stopPropagation()} className={style.modal__content}>
                    <img src={`http://localhost${img}`} alt="img" />
                </div>
            </div>

        </>

    )
}

export default ModallPhoto