import './styleHeaderMini.css'


const Menu = ({active, setActive})=>{
    return (
        <div className={active ? 'menu active': 'menu'} onClick={()=>setActive(false)}>
            <div className="menu__header" onClick={e=>e.stopPropagation()}>
                Zeon
            </div>
            <ul>
                <li>Блабла</li>
                <li>Блабла</li>
                <li>Блабла</li>
                <li>Блабла</li>
                <li>Блабла</li>
            </ul>
        </div>
    )
}

export default Menu