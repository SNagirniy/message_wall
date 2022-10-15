import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './form.module.scss';
import { Link } from 'react-router-dom';
import operations from 'APIService/service';

const RegisterForm = ({setLogin, setUser}) => {


  const validationSchema = Yup.object({
   name: Yup.string()
      .min(3, 'Too short')
      .max(30, 'name should be of max 30 characters length')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email. Must contain "@" and "."')
      .min(3, 'Too short')
      .max(30, 'Too Long')
      .matches(/(.ua|.com|.net)/, 'email must have .com, .net or .ua domain')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 symbols ')
      .max(100, 'Too Long')
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/,
        'Must have at least 1 uppercase, 1 lowercase latin letter and 1 number'
      )
      .required('Required'),
  });

  const renderError = message => <p className={s.error}>{message}</p>;

 
  const handleSubmit = async (values) => {
    const data = await operations.registerUser(values);
    if (data) {
      localStorage.setItem('user', JSON.stringify(data))
    setUser(data)
   setLogin(true)}
   
  }

  return (
    <Formik
    initialValues={{ name: '', email: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      handleSubmit(values);
        resetForm()
      }}>
      {({ errors, touched }) => (

        <Form className={s.form}>
         
        <Field className={`${s.field} + ${errors.name && touched.name? s.field_error : null}`} name="name" type="text" placeholder='Name' />
        <ErrorMessage name="firstname" render={renderError} />
 
         
        <Field className={`${s.field} + ${errors.email && touched.email? s.field_error : null}`} name="email" type="email" placeholder='Email' />
        <ErrorMessage name="email" render={renderError} />
      
      
        <Field className={`${s.field} + ${errors.password && touched.password? s.field_error : null}`} name="password" type="text" placeholder='Password' />
        <ErrorMessage name="password" render={renderError} />
 
          <button className={s.form_button} type="submit">Submit</button>
          <p>Already has an account?</p>
          <Link to="/login" className={s.form_button}>
                  Login
          </Link>
      </Form>)}
      
    </Formik>)
}

export default RegisterForm;