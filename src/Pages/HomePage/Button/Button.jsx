
import style from "./Button.module.scss";

const Buttun =  ({onClick})=>{
    return <button onClick={onClick} className={style.btn}><span>Еще</span></button>
}
export default Buttun