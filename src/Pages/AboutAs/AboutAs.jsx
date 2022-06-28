import style from "./AboutAs.module.scss"
import BreadCrumbs from './../../Components/BreadCrumbs/BreadCrumbs';
import { useState, useEffect } from 'react';
import ClockLoader from "react-spinners/ClipLoader";
import { observer } from 'mobx-react-lite';
import dataLinks from "../../DataBase/dataLinks";

const AboutAs = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    console.log()

    return (
        <>
            {loading ?
                <div className="loader-content">
                    <div className="loader-All">
                        <ClockLoader color={"#36D7B7"} loading={loading} size={150} />
                    </div>
                </div>
                :
                <div className={style.aboutAs} >
                    <div className={style.breadCrumbs}>
                        <BreadCrumbs pathname={[
                            { id: 1, page: 'Главная', path: '/' },
                            { id: 2, page: 'О нас' }
                        ]} />
                    </div>
                    <div className="container">
                        <div className={style.aboutAs__content}>
                            <div className={style.aboutAs__img}>
                                <div>
                                    <img src={dataLinks.toJS_aboutAs[0]?.img[0]} alt="img" />
                                    <img src={dataLinks.toJS_aboutAs[0]?.img[2]} alt="img" />
                                </div>
                                <div className={style.aboutAs__img2}>
                                    <img src={dataLinks.toJS_aboutAs[0]?.img[1]} alt="img" />
                                </div>
                            </div>
                            <div className={style.aboutAs__item}>
                                <div className={style.aboutAs__text}>
                                    <p className={style.aboutAs__title}>{dataLinks.toJS_aboutAs[0]?.title}</p>
                                    <p className={style.aboutAs__description}>{dataLinks.toJS_aboutAs[0]?.description}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default observer(AboutAs)