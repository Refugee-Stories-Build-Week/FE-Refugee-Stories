import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled(Form)`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Inputs = styled(Field)`
    border: 2px solid #5A5D80;
    border-radius: 5px;
    color: #E04F56;
    width: 29%;
    height: 20px;
    margin: 10px 0;
    padding: 10px;
`;

const StyledSelect = styled.select`
    border: 2px solid #5A5D80;
    color: #E04F56;
    width: 29%;
    height: 44px;
    margin: auto 0;
    padding: 10px;
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
    color: #FFEEDB;
    font-size: 0.8rem;
    width: 25%;
    height: 40px;
    margin: 10px auto 20px auto;
    color: white; 
    border: 2px solid #5A5D80;
    border-radius: 5px;

    &:hover {
      background: #5A5D80;
      border: 2px solid #E04F56;
    }
  `;

const validationSchema = Yup.object().shape({
    author: Yup.string().required("You must put a name"),
    title: Yup.string().required(),
    country: Yup.string().required(),
    body: Yup.string().required()
})

export default function FormikForm(){

  const [stories, setStories] = useState([]);
  useEffect(() => {
    setStories([...stories])
  }, []);

  return (
    <Formik initialValues={{ author: "", title: "", country: "", body: "" }} 
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting, resetForm, setStatus}) => {
              setSubmitting(true);
              axios
              .post("https://refugee--stories.herokuapp.com/stories/submit", values)
              .then(res => {
                setStatus(res.data);
              })
              .catch(err => console.log(err.res));
              resetForm()
              setSubmitting(false);
            }}
            >
    {({values, errors, touched, handleChange, handleBlur, isSubmitting, handleSubmit }) => (
      <Container onSubmit={handleSubmit}>

        {JSON.stringify(values)}
          <InputContainer>
            <Inputs 
              type='text' 
              name='author' 
              id="name" 
              placeholder="Name here"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.author}
              className={touched.author && errors.author && (<p className="error">{errors.author}</p>)}
              /> 

            <Inputs 
              type='text' 
              name='title' 
              id="title" 
              placeholder="Title here"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              className={touched.author && errors.author && (<p className="error">{errors.author}</p>)}
              />

            <StyledSelect 
              component="select" 
              name="country" 
              id="country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.country} 
              >
                <option>Please Choose an Country</option>
                <option value="country1">Country1</option>
                <option value="country2">Country2</option>
                <option value="country3">Country3</option>
            </StyledSelect>

          </InputContainer>
        <TextArea
            component="textarea"
            type="text"
            name="body"
            placeholder="Story"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.body}
              />

          <Button type="submit" disabled={isSubmitting} >Submit</Button> 
             

      </Container>
  )}
    </Formik>
  );
}
