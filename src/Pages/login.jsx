import FormContainer from "components/PageWrapper/PageWrapper";
import LoginForm from "components/LoginForm/LoginForm";
import FormWrapper from "components/FormWrapper/FormWrapper";

const Login = ({setUser,toggleLogin}) => {

  return (
    <FormContainer>
      <FormWrapper>
        <LoginForm setUser={setUser} setLogin={toggleLogin } />
      </FormWrapper>
    
  </FormContainer>)



}

export default Login;