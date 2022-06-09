import { useEffect, useState } from "react"
import style from "./ModalCall.module.scss"
import ModalCallReceived from "./ModalCallReceived"


const ModalCall = ({ active, setActive }) => {
    const [message, setMessage] = useState("")
    const [number, setNumber] = useState("")
    const [messageDirty, setMessageDirty] = useState(false)
    const [numberDirty, setNumberDirty] = useState(false)
    const [messageErr, setMessageErr] = useState("Сообщение может быть пустым!")
    const [numberErr, setNumberErr] = useState("Номер не может быть пустым")
    const [formValid, setFormValit] = useState('false')
    useEffect(() => {
        if (messageErr || numberErr) {
            setFormValit(false)
        } else {
            setFormValit(true)
        }
    }, [messageErr, numberErr]
    )
    const messageHandle = (e) => {
        setMessage(e.target.value)

        const result = /^[а-яА-Я a-zA-Z ]+$/
        if (!result.test(String(e.target.value).toLowerCase())) {
            setMessageErr('Некорректное имя')
        }
        else {
            setMessageErr('')
        }
    }
    const numberHandle = (e) => {
        const re = /^[0-9]+$/
        re.test(String(e.target.value).toLowerCase()) ? setNumber(e.target.value) :
            +e.target.value === Number ? setNumber(e.target.value) :
                +e.target.value === 0 ? setNumber('') : setNumber(number);
        if (e.target.value.length < 10 || e.target.value.length > 10) {
            setNumberErr('Номер должен быть из 10 цифр')
            return;
        }
        if (!e.target.value) {
            setNumberErr('Номер не может быть пустым')
            return
        }
        if (e.target.value = 10) setNumberErr('')
    }
    const blurHandle = (e) => {
        switch (e.target.name) {
            case 'message':
                setMessageDirty(true)
                break
            case "number":
                setNumberDirty(true)
                break
        }
    }
    const [modalsactive, setModalsActive] = useState(false)
    const DoubleClick = () => {
        setActive(!active)
        setModalsActive(!modalsactive)
    }
    return <div>
        <div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(!active)}>
            <div className={style.modal__content} onClick={item => item.stopPropagation()}>
                <img onClick={() => setActive(!active)} className={style.modal__iconX} src="/img/xIconcall.svg" alt="xIconcall" />
                <div>
                    <h2 className={style.modal__text}>Если у Вас остались вопросы</h2>
                    <p className={style.modal__description}>Оставьте заявку и мы обязательно Вам перезвоним</p>
                    <div className={style.modal__user}>
                        <div className={style.modal__userIcon}></div>
                        {(messageDirty && messageErr) && <p style={{ color: "red" }}>{messageErr}</p>}
                        <input onChange={e => messageHandle(e)} value={message} onBlur={e => blurHandle(e)} name="message" placeholder="Как к Вам обращаться?" type="text" />
                    </div>
                    <div className={style.modal__call}>
                        {(numberDirty && numberErr) && <p style={{ color: "red" }}>{numberErr}</p>}
                        <input onChange={e => numberHandle(e)} value={number} onBlur={e => blurHandle(e)} name="number" placeholder="Номер телефона" type="text" />
                    </div>
                    <button onClick={DoubleClick} disabled={!formValid} className={formValid ? `${style.modal__btn} ${style.active}` : style.modal__btn} type='submit'>Заказать звонок</button>
                </div>
            </div>
        </div>
        <ModalCallReceived active={modalsactive} setActive={setModalsActive} />
    </div>

}
export default ModalCall 