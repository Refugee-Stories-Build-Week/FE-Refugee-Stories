import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from 'styled-components';

const Division = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderTitle = styled.h2`
    margin: 10px auto;
    color: #3C3C54;
`;

const Container = styled(Form)`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
`;

const Inputs = styled(Field)`
    border: 2px solid #5A5D80;
    border-radius: 5px;
    color: #E04F56;
    width: 29%;
    height: 20px;
    margin: 10px auto;
    padding: 10px;
`;

const StyledSelect = styled.select`
    border: 2px solid #5A5D80;
    color: #E04F56;
    width: 29%;
    height: 44px;
    margin: 10px auto;
    padding: 10px;
`;

const TextAreaContainer = styled.label`
     margin: 10px auto;
     width: 97%;
`;

const TextArea =styled(Field)`
  border: 2px solid #5A5D80;
  border-radius: 5px;
  padding: 15px;
  width: 96.5%;
  height: 200px;
`;

const Button = styled.button`
    background: #E04F56;
    width: 25%;
    height: 40px;
    margin: 0 auto 20px auto;
    color: white; 
    border: 2px solid #5A5D80;
    border-radius: 5px;

`;

const StoryForm = ({ errors, touched, status }) => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    if (status) {
      setStories([...stories, status]);
    }
  }, [status]);

  return (
    <Division>
      <HeaderTitle>Tell Us Your Story!</HeaderTitle>
      <Container>
          <Inputs type="text" name="author" placeholder="Author" />
          {touched.author && errors.author && (<p className="error">{errors.author}</p>)}

          <Inputs type="text" name="title" placeholder="Title" />
          {touched.title && errors.title && (<p className="error">{errors.title}</p>)}

          <StyledSelect component="select" name="country" >
            <option>Please Choose an Country</option>
            <option value="country1">Country1</option>
            <option value="country2">Country2</option>
            <option value="country3">Country3</option>
          </StyledSelect>

          <TextAreaContainer>    
            <TextArea
              component="textarea"
              type="text"
              name="body"
              placeholder="Story"
            />
          </TextAreaContainer>
      </Container>

      <Button type="submit">Submit!</Button>
        
      {stories.map(props => (
        <ul key={props.id}>
          <li>Author:{props.author}</li>
          <li>Title:{props.title}</li>
          <li>Country: {props.country}</li>          
          <li>Body: {props.body}</li>
          
        </ul>
      ))}
    </Division>
  );
};
const FormikStoryForm = withFormik({
  mapPropsToValues({ author, title, body }) {
    return {
      author: author || "",
      title: title || "",  
      body: body || ""
    };
  },
  validationSchema: Yup.object().shape({
    author: Yup.string().required("You must put a name"),
    title: Yup.string().required(),
  }),
  //You can use this to see the values
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://refugee--stories.herokuapp.com/stories/submit", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.res));
  }
})(StoryForm);
console.log("This is the HOC", FormikStoryForm);
export default FormikStoryForm;
