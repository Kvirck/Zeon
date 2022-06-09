import style from "./Benefits.module.scss"
import Benefit from "./Benefit"
import Img1 from '../../../img/benefitsMoney.svg'
import Img2 from '../../../img/benefitsBus.svg'
import Img3 from '../../../img/benefitsHeadphones.svg'
import Img4 from '../../../img/benefitsStore.svg'
const Benefits = (props) => {
    return (
        <div className={style.benefits}>
            <Benefit icon={Img1} title="Удобные способы оплаты"
                description="Мы предлагаем возможность безналичной оплаты" />
            <Benefit icon={Img2} title="Cвоевремнная доставка"
                description="100% гарантия возврата товара - 14 дней на возврат, без скандалов и истерик." />
            <Benefit icon={Img3} title="Профессиональная консультация"
                description="Мы проконсультируем и индивидуально подойдем к Вашему заказу " />
            <Benefit icon={Img4} title="Акции и бонусы для покупателей"
                description="Промокоды со скидками для постоянных клиентов, акции на новые позиции" />
        </div>
    )
}
export default Benefits