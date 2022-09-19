import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import s from './form.module.scss';
import { Link } from 'react-router-dom';

const RegisterForm = () => {

   const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstname: Yup.string()
      .min(3, 'Too short')
      .max(30, 'name should be of max 30 characters length')
      .required('Required'),
     lastname: Yup.string()
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

 
  const handleSubmit = (values) => {
    console.log(values);
    navigate('/mesagges')
  }

  return (
    <Formik
    initialValues={{ firstname: '', lastname: '', email: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      handleSubmit(values);
        resetForm()
      }}>
      {({ errors, touched }) => (

        <Form className={s.form}>
         
        <Field className={`${s.field} + ${errors.firstname && touched.firstname? s.field_error : null}`} name="firstname" type="text" placeholder='First Name' />
        <ErrorMessage name="firstname" render={renderError} />
 
         
        <Field className={`${s.field} + ${errors.lastname && touched.lastname? s.field_error : null}`} name="lastname" type="text" placeholder='Last Name' />
        <ErrorMessage name="lastname" render={renderError} />
 
         
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