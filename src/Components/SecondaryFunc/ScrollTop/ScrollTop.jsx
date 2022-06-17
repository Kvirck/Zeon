import { useState } from "react"
import style from "./ScrollTop.module.scss"
import "./CSSTransition.css"
import { CSSTransition } from "react-transition-group"
import ModalCall from './../ModalWindow/ModalCall/ModalCall';
const ScrollTop = () => {
    const MoveUp = () => {
        window.scrollTo(({
            top: 0,
            behavior: "smooth"
        }))
    }
    const [show, setShow] = useState(false)
    const [modalactive, setModalActive] = useState(false)

    return (
        <div>
            <div className={style.scrollTop}>
                <img className={style.arrow} src="/img/MoveUp.svg" alt="MoveUp" onClick={MoveUp} />
                <div className={style.message}>
                    <CSSTransition in={show} classNames='alert' timeout={300} unmountOnExit >
                        <div className={style.socialNetwork}>
                            <a className={style.socialNetwork__item} target="blank" href="https://t.me/Zeonitcommunity"><img src="/img/telegIcon.svg" alt="telegIcon" /></a>
                            <a className={style.socialNetwork__item} target="blank" href="https://wa.me/996509529922"><img src="/img/whatsIcon.svg" alt="whatsIcon" /></a>
                            <img onClick={() => { setModalActive(!modalactive) }} className={style.socialNetwork__item} src="/img/telephIcon.svg" alt="telephIcon" />
                        </div>
                    </CSSTransition>
                    <div onClick={() => setShow(!show)} >
                        {show ? <img className={style.xIcon} src="/img/xIcon.svg" alt="xIcon" /> :
                            <img className={style.messageIcon} src="/img/messageIcon.svg" alt="messageIcon" />}
                    </div>

                </div>
            </div>
            <ModalCall active={modalactive} setActive={setModalActive} />
        </div>
    )

}
export default ScrollTop