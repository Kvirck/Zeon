import style from "./Help.module.scss"
import Collaps from './Collaps/Collaps';
import dataLinks from "../../DataBase/dataLinks";
import { useState } from 'react';

const Help = () => {
    const [showBtn, setShowBtn] = useState(null)
    const toggle = i => {
        if (showBtn === i) {
            return setShowBtn(null)
        }
        setShowBtn(i)
    }
    return (
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
    )
}
export default Help