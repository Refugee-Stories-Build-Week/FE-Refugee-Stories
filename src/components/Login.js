import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const Header = styled.h1`
    color: #FFEEDB;
    margin-left: 30px;
`;
const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 50px auto;
    padding: 32px;
    font-weight: bold;
    background-color: #3C3C54;
    box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.1);
`;

const StyledField = styled(Field)`
border: 2px solid #5A5D80;
border-radius: 5px;
color: #E04F56;
width: 80%;
height: 20px;
margin: 10px auto;
padding: 10px;

`;

const Btn = styled.button`
    background: #E04F56;
    color: #FFEEDB;
    font-size: 0.8rem;
    width: 60%;
    height: 30px;
    border-radius: 5px;
    margin: 10px auto;

    &:hover {
      background: #5A5D80;
      border: 2px solid #E04F56;
    }
`;

const LoginForm = ({ errors, touched }) => {
  

  return (
   
      <StyledForm>
         <Header>Admin Login</Header> 
        <StyledField type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>)}
​
        <StyledField type="text" name="password" placeholder="Password" />
        {touched.password && errors.password && <p className="error">{errors.password}</p>}
        
         <Btn>Login</Btn>
      </StyledForm>
      
    
  );
};
const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("You must put a username"),
    password: Yup.string().required("You must put a password")
  }),
  //You can use this to see the values
  handleSubmit(values, { props, setStatus }) {
    axios
      .post("https://refugee--stories.herokuapp.com/users/login", values)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token);
        props.history.push('/Dashboard');
        setStatus();
      })
      .catch(err => console.log(err.res));
  }
})(LoginForm);
// console.log("This is the HOC", FormikLoginForm);

export default FormikLoginForm