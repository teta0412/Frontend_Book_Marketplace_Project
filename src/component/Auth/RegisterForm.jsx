import React from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

const initialValues={
    fullName:"",
    email:"",
    password:"",
    role:""
}

export const RegisterForm = () => {
    const navigate = useNavigate()
    const handleSubmit=(values)=>{
        console.log("form values",values)
    }
  return (
    <div>
        <Typography variant='h5' className='text-center'>
            Register
        </Typography>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
                <Field 
                as={TextField}
                name="fullName"
                label="full name"
                fullWidth
                variant="outlined"
                margin="normal"
                />
                <Field 
                as={TextField}
                name="email"
                label="email"
                fullWidth
                variant="outlined"
                margin="normal"
                />
                <Field 
                as={TextField}
                name="password"
                label="password"
                fullWidth
                variant="outlined"
                margin="normal"
                type="password"
                />
                <Field
                fullWidth
                margin="normal"
                as={Select}
                    labelId="role-simple-select-label"
                    id="demo-simple-select"
                    name="role"
                    // onChange={handleChange}
                >
                    <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                    <MenuItem value={"ROLE_STORE_OWNER"}>Store Owner</MenuItem>
                </Field>
                <Button sx={{mt:2, padding:"1rem"}} fullWidth type="submit" variant='contained'>Login</Button>
            </Form>
        </Formik>
        <Typography variant='body2' align="center" sx={{mt:3}}>
            Already have an account?
            <Button size="small" onClick={()=>navigate("/account/login")}>login</Button>
        </Typography>
    </div>
  )
}
