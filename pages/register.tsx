import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import InputComponent from '@/components/form/input'
import axios from 'axios'
import ButtomForm from '@/components/form/buttom'
import LayoutComponent from '@/components/layout/Layout'
import FormComponent from '@/components/form/form'
import { useRouter } from 'next/navigation'

interface userRegister {
    name: string,
    password: string,
    username: string,
    email: string,
}


const Register = () => {

    const router = useRouter()
    const initialValues = {
        email: "",
        password: "",
        name: "",
        username: "",
    }

    const validateSchema = Yup.object().shape({
        name: Yup.string().required(),
        password: Yup.string().required(),
        username: Yup.string().required(),
        email: Yup.string().required(),
    })

    const formik = useFormik<userRegister>({
        initialValues,
        validationSchema: validateSchema,
        onSubmit: (async (values) => {
            try {
                await axios.post("http://localhost:3000/api/register", values)
                router.push("/login")
            } catch (error) {
                console.log(error)
            }
        })
    })

    const { handleChange, handleSubmit, values, touched, errors } = formik

    return (
        <LayoutComponent>
            <FormComponent handleSubmit={handleSubmit}>
                <InputComponent
                    type="text"
                    value={values.name}
                    handleChange={handleChange}
                    name="name"
                    errors={errors.name || ""}
                    touched={touched.name || false}
                />
                <InputComponent
                    type="text"
                    value={values.username}
                    handleChange={handleChange}
                    name="username"
                    errors={errors.username || ""}
                    touched={touched.username || false}
                />
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
                <ButtomForm name='register' />
            </FormComponent>
        </LayoutComponent>
    )
}

export default Register