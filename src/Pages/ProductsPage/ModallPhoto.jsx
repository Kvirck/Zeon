import style from './ModallPhoto.module.scss'

const ModallPhoto = ({ open, setOpen, data }) => {
    return (
        <div onClick={()=>setOpen(!open)}  className={open ? `${style.modal} ${style.active}`: style.modal}>
            <div onClick={e=>e.stopPropagation()} className={style.modal__content}>
            </div>
        </div>
    )
}

export default ModallPhoto