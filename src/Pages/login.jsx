import FormContainer from "components/FormContainer/FormContainer";
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