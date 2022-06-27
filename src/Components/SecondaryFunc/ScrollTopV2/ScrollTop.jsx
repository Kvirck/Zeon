import { useState } from "react"
import style from "./ScrollTop.module.scss"
import "./CSSTransition.css"
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
                <div className={style.message}>
                    <div className={style.socialNetwork}>
                        <div className={show ? style.socialNetwork__telegramActive : style.socialNetwork__telegram} >
                            <a target="blank" href="https://t.me/Zeonitcommunity"><img src="/img/telegIcon.svg" alt="telegIcon" /></a>
                        </div>
                        <div className={show ? style.socialNetwork__whatsActive : style.socialNetwork__whats}>
                            <a target="blank" href="https://wa.me/996509529922"><img src="/img/whatsIcon.svg" alt="whatsIcon" /></a>
                        </div>
                        <div className={show ? style.socialNetwork__telephActive : style.socialNetwork__teleph}>
                            <img onClick={() => { setModalActive(!modalactive) }} src="/img/telephIcon.svg" alt="telephIcon" />
                        </div>
                    </div>
                    <div className={style.icons}>
                        <img className={style.arrow} src="/img/MoveUp.svg" alt="MoveUp" onClick={MoveUp} />
                        <div onClick={() => setShow(!show)} className={!show ? style.xIcon : style.xIconActive}>
                            <img src="/img/xIcon.svg" alt="xIcon" />
                        </div>
                        <div onClick={() => setShow(!show)} className={show ? style.messageIcon : style.messageIconActive}>
                            <img src="/img/messageIcon.svg" alt="messageIcon" />
                        </div>
                    </div>

                </div>
            </div>
            <ModalCall active={modalactive} setActive={setModalActive} />
        </div>
    )

}
export default ScrollTop