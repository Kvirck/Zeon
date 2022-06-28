import style from "./PublicOffer.module.scss"
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import dataLinks from "../../DataBase/dataLinks";
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useState } from 'react';

const PublicOffer = () => {
    console.log(dataLinks.toJS_publicOffer);
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        dataLinks.toJS_publicOffer ? setLoader(true) : setLoader(false)
    })
    return (
        <>
            <BreadCrumbs pathname={[
                { id: 1, page: 'Главная', path: '/' },
                { id: 2, page: 'Публичная оферта' }
            ]} />
            {loader ? <div className="container">
                <div className={style.publicOffer}>
                    <p className={style.publicOffer__title}>{dataLinks.toJS_publicOffer[0]?.title}</p>
                    <div className={style.publicOffer__description}>
                        <p className={style.publicOffer__text}>{dataLinks.toJS_publicOffer[0]?.description}</p>
                    </div>
                </div>
            </div> : null}
        </>

    )
}
export default observer(PublicOffer)