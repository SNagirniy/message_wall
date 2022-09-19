import s from './formWrapper.module.scss'

const FormWrapper = ({ children }) => {
    return <div className={s.wrapper}>{children}</div>
}

export default FormWrapper;