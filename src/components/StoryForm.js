import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from 'styled-components';

const Division = styled.div`

`;

const Container = styled(Form)`
    display: flex;
    flex-direction: row;
`;

const StoryContainer = styled.div`
display: flex;
flex-direction: column;
width: 35%;


`;

const TextArea =styled(Field)`
    width: 600px;
	height: 120px;
  border: 2px solid #5A5D80;
  border-radius: 10px;
	padding: 15px;
	
	
  
`;

const InfoContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 40%;
height:20%;
margin-top: 53px;
`;

const Inputs = styled(Field)`
    border: 2px solid #5A5D80;
    border-radius: 10px;
    color: #E04F56;
    width: 40%;
    height: 20px;
    margin: 10px;
    padding: 10px;
`;

const Button = styled.button`
    background: #E04F56;
    width: 45%;
    height: 40px;
    margin: 10px;
    color: white; 
    border: 2px solid #5A5D80;
    border-radius: 15px;

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

      <Container>
        <StoryContainer>
          <Inputs type="text" name="title" placeholder="Title" />
          {touched.title && errors.title && (<p className="error">{errors.title}</p>)}

          <label>    
            <TextArea
              component="textarea"
              type="text"
              name="story"
              placeholder="Story"
              style={{height: '250px', width: '400px'}}
            />
          </label>
        </StoryContainer>

        <InfoContainer>
          <Inputs type="text" name="name" placeholder="Name" />
          {touched.name && errors.name && (<p className="error">{errors.name}</p>)}

          <Inputs type="text" name="email" placeholder="E-mail" />
          {touched.email && errors.email && <p className="error">{errors.email}</p>}

          <Inputs type="date" name="date" placeholder="Date" />
          {touched.date && errors.date && <p className="error">{errors.date}</p>}

          <Inputs component="select" className="country-select" name="country">
            <option>Please Choose an Country</option>
            <option value="country1">Country1</option>
            <option value="country2">Country2</option>
            <option value="country3">Country3</option>
          </Inputs>
          <Button>Submit!</Button>
        </InfoContainer>


      </Container>
      {stories.map(story => (
        <ul key={story.id}>
          <li>Title:{story.title}</li>
          <li>Name:{story.name}</li>
          <li>E-mail: {story.email}</li>
          <li>Date: {story.date}</li>
          <li>Country: {story.country}</li>          
          <li>Story: {story.story}</li>
        </ul>
      ))}
    </Division>
  );
};
const FormikStoryForm = withFormik({
  mapPropsToValues({ title, name, email, date, story }) {
    return {
      title: title || "",  
      name: name || "",
      email: email || "",
      date: date || "",
      story: story || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("You must put a name"),
    email: Yup.string().required()
  }),
  //You can use this to see the values
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.res));
  }
})(StoryForm);
console.log("This is the HOC", FormikStoryForm);
export default FormikStoryForm;
