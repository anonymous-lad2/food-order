import { Typography, TextField, Button } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../State/Authentication/Action";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
      dispatch(loginUser({userData:values, navigate}))
    };
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          <Field
            as={TextField}
            name="password"
            label="Password"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          
            <Button sx={{mt:2, padding: "1rem"}} fullWidth type="submit" variant="contained">Login</Button>
        </Form>

      </Formik> 

      <Typography variant="body2" align="center" sx={{mt:3}}>
        Don't have an account?
        <Button size="small" onClick={() => navigate("/account/register")}>
            Register
        </Button>
      </Typography>
    </div>
  );
};

export default LoginForm;
