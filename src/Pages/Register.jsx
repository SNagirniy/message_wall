import FormContainer from "components/PageWrapper/PageWrapper";
import RegisterForm from "components/RegisterForm/RegisterForm";
import FormWrapper from "components/FormWrapper/FormWrapper";

const Register = ({setUser,toggleLogin}) => {

  return (
    <FormContainer>
      <FormWrapper>
        <RegisterForm setUser={setUser} setLogin={toggleLogin} />
      </FormWrapper>
    
  </FormContainer>)



}

export default Register;