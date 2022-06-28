import style from "./Help.module.scss"
import Collaps from './Collaps/Collaps';
import dataLinks from "../../DataBase/dataLinks";
import { useState,useEffect } from 'react';
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import { observer } from 'mobx-react-lite';
import ClockLoader from "react-spinners/ClipLoader";

const Help = () => {
    const [showBtn, setShowBtn] = useState(null)
    const toggle = i => {
        if (showBtn === i) {
            return setShowBtn(null)
        }
        setShowBtn(i)
    }
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    return (
        <>
            <BreadCrumbs pathname={[
                { id: 1, page: 'Главная', path: '/' },
                { id: 2, page: 'Помощь' }
            ]} />
            {loading ?
                <div className="loader-content">
                    <div className="loader-All">
                        <ClockLoader color={"#36D7B7"} loading={loading} size={150} />
                    </div>
                </div>
                :
                <div className="container">
                    <div className={style.help}>
                        <div className={style.help__img}>
                            <img src="/img/Rectangle684.png" alt="img" />
                        </div>
                        <div className={style.help__text}>
                            <p className={style.help__text__title}>Помощь</p>
                            {dataLinks.toJS_help.map((item, i) => {
                                return <div key={item.id}>
                                    <Collaps showBtn={showBtn} i={i}
                                        toggle={toggle} question={item.title}
                                        text={item.description} />
                                </div>
                            })
                            }
                        </div>
                    </div>

                </div>
            }
        </>

    )
}
export default observer(Help)