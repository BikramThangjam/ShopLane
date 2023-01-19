import "./Signin.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const SigninSchema = Yup.object().shape({

    username: Yup.string('Enter valid username')
    .required('Username is required!')
    .min(3,'Name cannot be less than 3 chars')
    .max(30,'Name is too large.'),
  
    password: Yup.string()
    .required('Password is required')
    .min(6,'Password should be atleast 6 characters long')
    .max(12,'Password too long!')
    
  
  
  });

const Login = () => {

    const [initialFormvValues] = useState({
        firstname: "",
        lastname: "",
        useremail: "",
        userpassword: ""
      })
    
      const handleFormSubmit = async (elements) => {
        console.log(elements);
      }

    return (
        <div className="signin-form">
            <div className="align">
                <div className="grid">
                    <Formik validationSchema={SigninSchema}  initialValues={initialFormvValues} onSubmit={handleFormSubmit}>
                        {
                            ({errors, touched})=>{
                                <form action="#" method="#" className="form login">
                                    <div className="form__field">
                                        <label for="login__username">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                            </svg>
                                            <span className="hidden">Username</span>
                                        </label>
                                        <Field id="login__username" type="text" name="username" className="form__input field_username" placeholder="Username" required/>
                                    </div>
                                    <div className="form__field">
                                        <label for="login__password">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                            </svg>
                                            <span className="hidden">Password</span>
                                        </label>
                                        <Field id="login__password" type="password" name="password" className="form__input field_password" placeholder="Password" required/>
                                    </div>
                                    <div className="form__field">
                                        <input type="submit" value="Sign In"/>
                                    </div>
                                </form>
                            }
                        }
                    </Formik>
                    <p className="text--center">Don't have an account? <a href="#">Sign up now</a> <svg className="icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="assets/images/icons.svg#arrow-right"></use></svg></p>
                </div>     
            </div>
        </div >

    )
}

export default Login;