import s from './NavContainer.module.scss'


const NavContainer = ({ children }) => {
    return <div className={s.container}>{children}</div>
}

export default NavContainer;