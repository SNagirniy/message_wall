import s from './layout.module.scss'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return <div className={s.layout}>
        <Outlet/>
    </div>
}

export default Layout;