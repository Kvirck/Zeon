// import style from "./../Header.module.scss";
import style from "./input.module.scss";
import { observer } from 'mobx-react-lite';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import search from "../../../DataBase/search";
import { useState } from 'react';
const Input = ({ onChange, value, setValue }) => {
    const [isLoading, setLoading] = useState()
    const navi = useNavigate()
    useEffect(() => {
        async function load() {
            await search.getSearchSelect(`http://localhost/products/search?limit=16&page=1&q=${value}`)
            const name = Boolean(search.toJS__name.data)
            if (name) {
                return setLoading(true)
            } return setLoading(false)
        }
        load()
    }, [value])
    const searchGo = () => navigate(`/SearchPage/${value}`)
    const navigate = useNavigate();
    const handlerValue = (event) => {
        onChange(event.target.value)
    }
    return (
        <form className={style.search}>
            <div className={style.search__input}>
                <input
                    type="text"
                    placeholder="Поиск"
                    onChange={handlerValue}
                    onKeyPress={e => {
                        if (e.key === 'Enter' && value === '') {
                            e.preventDefault()
                        }
                        if (e.key === 'Enter' && value !== '') {
                            searchGo()
                        } else;
                    }}
                />
                <svg
                    onClick={() => {
                        if (value !== '') {
                            searchGo()
                            setValue("")
                        } return
                    }}
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_14771_11138)">
                        <path d="M14.8132 16.1103C13.3422 17.2536 11.491 17.793 9.63649 17.6186C7.78198 17.4442 6.06363 16.5691 4.83132 15.1717C3.59901 13.7742 2.9454 11.9593 3.00358 10.0966C3.06175 8.23384 3.82734 6.46334 5.14446 5.14555C6.46157 3.82776 8.23118 3.06178 10.093 3.00358C11.9547 2.94537 13.7687 3.59931 15.1655 4.83225C16.5622 6.06519 17.4368 7.78442 17.6111 9.63987C17.7854 11.4953 17.2464 13.3475 16.1037 14.8192L21 19.6997L19.7004 21L14.8224 16.1103H14.8132ZM10.3287 15.8173C11.0498 15.8173 11.7639 15.6752 12.4301 15.3991C13.0964 15.123 13.7017 14.7183 14.2116 14.2082C14.7215 13.698 15.126 13.0923 15.402 12.4258C15.6779 11.7592 15.8199 11.0448 15.8199 10.3233C15.8199 9.60181 15.6779 8.88739 15.402 8.22083C15.126 7.55426 14.7215 6.94861 14.2116 6.43844C13.7017 5.92828 13.0964 5.52359 12.4301 5.24749C11.7639 4.97139 11.0498 4.82928 10.3287 4.82928C8.87236 4.82928 7.47565 5.40811 6.44585 6.43844C5.41604 7.46877 4.8375 8.86619 4.8375 10.3233C4.8375 11.7804 5.41604 13.1778 6.44585 14.2082C7.47565 15.2385 8.87236 15.8173 10.3287 15.8173Z" fill="#333333" />
                    </g>
                </svg>
            </div>
            {isLoading ?
                <div className={style.result}>
                    <div className={style.result__searchs}>
                        {search.toJS__name.data?.map(e => (
                            <div key={e.id} className={style.result__search}
                                onClick={() => {
                                    navi(`/ProductsPage/${e.id}`)
                                    setValue('')
                                }} >
                                <p > {e.name} </p>
                            </div>
                        ))}

                    </div>
                </div>
                : null
            }
        </form>)
}
export default observer(Input)