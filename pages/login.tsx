import React, { useState } from 'react'
import { signIn } from "next-auth/react"
import { useFormik } from 'formik'
import * as Yup from "yup"
import InputComponent from '@/components/form/input'
import ButtomForm from '@/components/form/buttom'
import LayoutComponent from '@/components/layout/Layout'
import FormComponent from '@/components/form/form'

interface user {
    email: string
    password: string
}


const Login = () => {

    const initialValues = {
        email: "",
        password: ""
    }

    const validateSchema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required(),
    })

    const formik = useFormik<user>({
        initialValues,
        validationSchema: validateSchema,
        onSubmit: (async (values) => {
            await signIn("credentials", {
                email: values.email,
                password: values.password,
            })
        })
    })


    const { handleChange, handleSubmit, values, touched, errors } = formik


    return (
        <LayoutComponent>
            <FormComponent handleSubmit={handleSubmit}>
                <InputComponent
                    type="text"
                    value={values.email}
                    handleChange={handleChange}
                    name="email"
                    errors={errors.email || ""}
                    touched={touched.email || false}
                />
                <InputComponent
                    type="text"
                    value={values.password}
                    handleChange={handleChange}
                    name="password"
                    errors={errors.password || ""}
                    touched={touched.password || false}
                />
                <ButtomForm name='login' />
            </FormComponent>
        </LayoutComponent >
    )
}

export default Login