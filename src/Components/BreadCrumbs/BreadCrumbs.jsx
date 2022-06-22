import { Route, Routes, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { useLocation} from "react-router-dom";


const BreadCrumbs = () => {
  const { pathname } = useLocation();
    console.log(pathname);
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="/">Application Center</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="/Basket">Application List</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}
export default BreadCrumbs