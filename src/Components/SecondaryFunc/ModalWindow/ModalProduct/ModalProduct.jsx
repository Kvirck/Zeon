import style from "./ModalProduct.module.scss"
import * as yup from 'yup';
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { useState, useContext } from 'react';
import { Context } from './../../../../index';
import { toJS } from 'mobx';
import Flags from './../../Flags/Flags';

const ModalProduct = ({ active, setActive }) => {
    const [publicOffer, setPublicOffer] = useState(false)
    const { Basket } = useContext(Context)
    const initialValues = {
        name: '',
        secondName: '',
        email: '',
        number: '',
        nation: '',
        city: '',
        publicOffer: false
    }
    const validationSchema = yup.object({
        name: yup.string().required(),
        secondName: yup.string().required(),
        email: yup.string().email().required(),
        number: yup.number().required(),
        nation: yup.string().required(),
        city: yup.string().required(),
        publicOffer: yup.bool().oneOf([true]).required(),
    })

    const onSubmit = (values) => {
        console.log('Оформление заказа на эти данные', values)
        console.log("Корзина с покупками", toJS(Basket.products));
        Basket.delBasketAll()
    }

    return (
        <div className={active ? `${style.modalProduct} ${style.active}` : style.modalProduct} onClick={() => setActive(!active)}>
            <div className={style.modalProduct__content} onClick={e => e.stopPropagation()}>
                <div className={style.modalProduct__content__title}>
                    <p>Оформление заказа</p>
                    < svg onClick={() => setActive(!active)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.23814 7.00015L13.7435 1.49459C14.0855 1.15283 14.0855 0.598303 13.7435 0.256541C13.4014 -0.0855136 12.8475 -0.0855136 12.5055 0.256541L7.00015 5.7621L1.49453 0.256541C1.15249 -0.0855136 0.59857 -0.0855136 0.25653 0.256541C-0.08551 0.598303 -0.08551 1.15283 0.25653 1.49459L5.76215 7.00015L0.25653 12.5057C-0.08551 12.8475 -0.08551 13.402 0.25653 13.7438C0.42755 13.9145 0.651685 14 0.875529 14C1.09937 14 1.32351 13.9145 1.49453 13.7435L7.00015 8.2379L12.5055 13.7435C12.6765 13.9145 12.9006 14 13.1245 14C13.3483 14 13.5724 13.9145 13.7435 13.7435C14.0855 13.4017 14.0855 12.8472 13.7435 12.5054L8.23814 7.00015Z" fill="#1D1D1B" />
                    </svg>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {formik => (
                        <div>
                            <form className={style.modalProduct__content}>
                                <label htmlFor="name" className={formik.touched.name && formik.errors.name ?
                                    `${style.modalProduct__content__text} ${style.modalProduct__content__text__error}` : style.modalProduct__content__text}>Ваше имя</label>
                                <input className={formik.touched.name && formik.errors.name ?
                                    `${style.modalProduct__content__input} ${style.modalProduct__content__active}` : style.modalProduct__content__input}
                                    placeholder="Например Иван" type="text" id="name"  {...formik.getFieldProps('name')} />


                                <label htmlFor="secondName" className={formik.touched.secondName && formik.errors.secondName ?
                                    `${style.modalProduct__content__text} ${style.modalProduct__content__text__error}` : style.modalProduct__content__text} >Ваше фамилия</label>
                                <input className={formik.touched.secondName && formik.errors.secondName ?
                                    `${style.modalProduct__content__input} ${style.modalProduct__content__active}` : style.modalProduct__content__input}
                                    placeholder="Например Иванов" type="text" id="secondName" {...formik.getFieldProps('secondName')} />


                                <label htmlFor="email" className={formik.touched.email && formik.errors.email ?
                                    `${style.modalProduct__content__text} ${style.modalProduct__content__text__error}` : style.modalProduct__content__text}>Электронная почта</label>
                                <input className={formik.touched.email && formik.errors.email ?
                                    `${style.modalProduct__content__input} ${style.modalProduct__content__active}` : style.modalProduct__content__input}
                                    placeholder="example@mail.com" type="email" id="email" {...formik.getFieldProps('email')} />
                                <div className={style.modalProduct__content__number} >
                                    <div className={style.modalProduct__content__number__input}>
                                        <label htmlFor="number" className={formik.touched.number && formik.errors.number ?
                                            `${style.modalProduct__content__text} ${style.modalProduct__content__text__error}` : style.modalProduct__content__text}>Ваш номер телефона</label>
                                        <div className={formik.touched.number && formik.errors.number ?
                                            `${style.modalProduct__content__number__flags} ${style.modalProduct__content__active}` : style.modalProduct__content__number__flags}>
                                            <Flags type="number" id="number" />
                                            <input className={
                                               style.modalProduct__content__input}
                                                placeholder="Введите номер телефона" type="number" id="number" {...formik.getFieldProps('number')} />
                                        </div>
                                    </div>

                                </div>

                                <label htmlFor="nation" className={formik.touched.nation && formik.errors.nation ?
                                    `${style.modalProduct__content__text} ${style.modalProduct__content__text__error}` : style.modalProduct__content__text}>Страна</label>
                                <input className={formik.touched.nation && formik.errors.nation ?
                                    `${style.modalProduct__content__input} ${style.modalProduct__content__active}` : style.modalProduct__content__input}
                                    placeholder="Введите страну" type="text" id="nation" {...formik.getFieldProps('nation')} />


                                <label htmlFor="city" className={formik.touched.city && formik.errors.city ?
                                    `${style.modalProduct__content__text} ${style.modalProduct__content__text__error}` : style.modalProduct__content__text}>Город</label>
                                <input className={formik.touched.city && formik.errors.city ?
                                    `${style.modalProduct__content__input} ${style.modalProduct__content__active}` : style.modalProduct__content__input}
                                    placeholder="Введите город" type="text" id="city" {...formik.getFieldProps('city')} />


                                <div className={formik.touched.publicOffer && formik.errors.publicOffer ?
                                    `${style.modalProduct__content__checkbox} ${style.modalProduct__content__checkActive}` : style.modalProduct__content__checkbox}>
                                    <input type="checkbox" id="publicOffer" onClick={() => setPublicOffer(true)} {...formik.getFieldProps('publicOffer')} />
                                    <label htmlFor="publicOffer">Согласен с условиями <Link to={'/PublicOffer'}><span>публичной оферты</span></Link> </label>
                                </div>
                                <button className={formik.isValid && publicOffer ? `${style.modalProduct__content__btn} ${style.modalProduct__content__btnActive}`
                                    : style.modalProduct__content__btn} type="button" onClick={formik.handleSubmit} >Заказать</button>
                            </form>
                        </div>
                    )}
                </Formik>






            </div >
        </div >
    )
}
export default ModalProduct