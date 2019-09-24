import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const StoryForm = ({ errors, touched, status }) => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    if (status) {
      setStories([...stories, status]);
    }
  }, [status]);

  return (
    <div className="story-form">
      <Form>
        <Field type="text" name="title" placeholder="Title" />
        {touched.title && errors.title && (<p className="error">{errors.title}</p>)}

        <Field type="text" name="name" placeholder="Name" />
        {touched.name && errors.name && (<p className="error">{errors.name}</p>)}

        <Field type="text" name="email" placeholder="E-mail" />
        {touched.email && errors.email && <p className="error">{errors.email}</p>}

        <Field type="date" name="date" placeholder="Date" />
        {touched.date && errors.date && <p className="error">{errors.date}</p>}

        <Field component="select" className="country-select" name="country">
          <option>Please Choose an Country</option>
          <option value="country1">Country1</option>
          <option value="country2">Country2</option>
          <option value="country3">Country3</option>
        </Field>
        <label>
          
          <Field
            component="textarea"
            type="text"
            name="story"
            placeholder="Story"
            style={{height: '250px', width: '400px'}}
          />
        </label>
        <button>Submit!</button>
      </Form>
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
    </div>
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
