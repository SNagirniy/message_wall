import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import s from './loginForm.module.scss';


const LoginForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
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

 
  const handleSubmit = (values) => {
    console.log(values);
    navigate('/mesagges')
  }

  return (
    <Formik
    initialValues={{email: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      handleSubmit(values);
        resetForm()
      }}>
      {({ errors, touched }) => (

        <Form className={s.form}>
 
         
        <Field className={`${s.field} + ${errors.email && touched.email? s.field_error : null}`} name="email" type="email" placeholder='Email' />
        <ErrorMessage name="email" render={renderError} />
      
      
        <Field className={`${s.field} + ${errors.password && touched.password? s.field_error : null}`} name="password" type="text" placeholder='Password' />
        <ErrorMessage name="password" render={renderError} />
 
          <button className={s.form_button} type="submit">Submit</button>
          <p>Still havn't an account?</p>
          <Link to="/register" className={s.form_button}>
                  Register
          </Link>
      </Form>)}
      
    </Formik>)
}

export default LoginForm;