import s from'./MainPageContainer.module.scss'

const MainPageContainer = ({ children }) => {
    return <div className={s.container}>{children}</div>
}

export default MainPageContainer;