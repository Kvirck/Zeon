import { useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import style from './BreadCrumbs.module.scss'

const BreadCrumbs = ({ pathname }) => {
    const navigate = useNavigate()
    return (
        <div>
            {pathname ?
                <div className={style.breadCrumbs}>
                    <div className={style.breadCrumbs__inner}></div>
                    <div className='container'>
                        <div className={style.breadCrumbs__content}>
                            {pathname.map((item) =>
                                <div className={style.breadCrumbs__content__nav} key={item.id}>
                                    <p className={style.breadCrumbs__content__nav__item} onClick={() => navigate(item.path)}>{item.page}</p>
                                    <span className={style.breadCrumbs__content__nav__slash} >/</span>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}
export default observer(BreadCrumbs)