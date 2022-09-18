import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './register.module.css'

const Register = () => {

  return <Formik
    initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
  onSubmit={(values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(true);
    }}>
     <Form className={s.form}>
         
         <Field name="firstName" type="text" placeholder='First Name'/>
         <ErrorMessage name="firstName" />
 
         
         <Field name="lastName" type="text" placeholder='Last Name'/>
         <ErrorMessage name="lastName" />
 
         
         <Field name="email" type="email" placeholder='Email' />
      <ErrorMessage name="email" />
      
      
         <Field name="password" type="text" placeholder='Password'/>
         <ErrorMessage name="password" />
 
         <button type="submit">Submit</button>
       </Form>
      
    </Formik>
}

export default Register;