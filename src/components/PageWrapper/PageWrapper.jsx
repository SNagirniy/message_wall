import s from './pageWrapper.module.scss'

const FormContainer = ({ children }) => {
    return <div className={s.form_container}>
        {children}
    </div>

}

export default FormContainer;