import style from "./ModalProduct.module.scss"

const ModalProduct = ({ active, setActive }) => {

    return (
        <div className={active ? `${style.modalProduct} ${style.active}` : style.modalProduct} onClick={() => setActive(!active)}>
            <div className={style.modalProduct__content} onClick={e => e.stopPropagation()}>
                <div className={style.modalProduct__content__title}>
                    <p>Оформление заказа</p>
                    < svg onClick={() => setActive(!active)}  width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.23814 7.00015L13.7435 1.49459C14.0855 1.15283 14.0855 0.598303 13.7435 0.256541C13.4014 -0.0855136 12.8475 -0.0855136 12.5055 0.256541L7.00015 5.7621L1.49453 0.256541C1.15249 -0.0855136 0.59857 -0.0855136 0.25653 0.256541C-0.08551 0.598303 -0.08551 1.15283 0.25653 1.49459L5.76215 7.00015L0.25653 12.5057C-0.08551 12.8475 -0.08551 13.402 0.25653 13.7438C0.42755 13.9145 0.651685 14 0.875529 14C1.09937 14 1.32351 13.9145 1.49453 13.7435L7.00015 8.2379L12.5055 13.7435C12.6765 13.9145 12.9006 14 13.1245 14C13.3483 14 13.5724 13.9145 13.7435 13.7435C14.0855 13.4017 14.0855 12.8472 13.7435 12.5054L8.23814 7.00015Z" fill="#1D1D1B" />
                    </svg>
                </div>
                <div className={style.modalProduct__content__input}>
                    <p className={style.modalProduct__content__text}>Ваше имя</p>
                    <input type="text" placeholder="Например Иван" />
                </div>
                <div className={style.modalProduct__content__input}>
                    <p className={style.modalProduct__content__text}>Ваше фамилия</p>
                    <input type="text" placeholder="Например Иванов" />
                </div>
                <div className={style.modalProduct__content__input}>
                    <p className={style.modalProduct__content__text}>Электронная почта</p>
                    <input type="text" placeholder="example@mail.com" />
                </div>
                <div className={style.modalProduct__content__input}>
                    <p className={style.modalProduct__content__text}>Ваш номер телефона</p>
                    <input type="text" placeholder="Введите номер телефона" />
                </div>
                <div className={style.modalProduct__content__input}>
                    <p className={style.modalProduct__content__text}>Страна</p>
                    <input type="text" placeholder="Введите страну" />
                </div>
                <div className={style.modalProduct__content__input}>
                    <p className={style.modalProduct__content__text}>Город</p>
                    <input type="text" placeholder="Введите город" />
                </div>
                <div className={style.modalProduct__content__checkbox}>
                    <input type="checkbox" />
                   <p> Согласен с условиями <span>публичной оферты</span></p>
                </div>
                <button className={style.modalProduct__content__btn}>Заказать</button>
            </div>
        </div>
    )
}
export default ModalProduct