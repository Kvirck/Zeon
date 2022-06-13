import { useState } from 'react';
import style from './ModallPhoto.module.scss'

const ModallPhoto = ({ img }) => {

    const [open, setOpen] = useState(false)
    console.log(`img`,img);
    return (
        <>
            <img onClick={() => setOpen(!open)} width='500' src={`http://localhost${img}`} alt="img" />
            <div onClick={() => setOpen(!open)} className={open ? `${style.modal} ${style.active}` : style.modal}>
                <div onClick={e => e.stopPropagation()} className={style.modal__content}>
                    <img src={`http://localhost${img}`} alt="img" />
                </div>
            </div>
        </>

    )
}

export default ModallPhoto