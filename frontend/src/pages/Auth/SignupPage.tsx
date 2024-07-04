import React from 'react';
import styles from './SignupPage.module.css';
import Textbox from '../../components/Textbox/Textbox';
import Button from '../../components/Button/Button';
import { useFormik } from 'formik';
import { SignupValidationSchema } from '../../util/ValidationSchema';
import { post } from '../../util/Api';
import { Toaster } from '../../util/Toaster';
import { useNavigate } from 'react-router-dom';

const SignupPage: React.FC = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: SignupValidationSchema,
        onSubmit: (values, { setSubmitting }) => {
            post('/auth/signup',values).then((res) => {
                setSubmitting(false)
                Toaster('success',res.data.message)
                navigate('/login')
            }).catch(err => {
                setSubmitting(false)
                Toaster('error',err?.response?.data?.message)
            })
        },
    });

    return (
        <div className={styles.signupPage}>
            <h1>Sign Up</h1>
            <form>
                <div className={styles.elementContainer}>
                    <label htmlFor="Name">Name</label>
                    <Textbox
                        type={"text"}
                        placeholder="Name"
                        value={formik.values.name}
                        onChange={(e) => formik.setFieldValue("name", e.target.value)}
                        showError={formik.touched.name && Boolean(formik.errors.name)}
                        errorMessage={formik.errors.name}
                    />
                </div>

                <div className={styles.elementContainer}>
                    <label htmlFor="email">Email</label>
                    <Textbox
                        type={"email"}
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={(e) => formik.setFieldValue("email", e.target.value)}
                        showError={formik.touched.email && Boolean(formik.errors.email)}
                        errorMessage={formik.errors.email}
                    />
                </div>

                <div className={styles.elementContainer}>
                    <label htmlFor="password">Password</label>
                    <Textbox
                        type={"password"}
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={(e) => formik.setFieldValue("password", e.target.value)}
                        showError={formik.touched.password && Boolean(formik.errors.password)}
                        errorMessage={formik.errors.password}
                    />
                </div>

                <Button
                    type={"button"}
                    buttonLabel="Login"
                    onClick={(e) => {
                        e.preventDefault();
                        formik.handleSubmit();
                    }}
                    loading={formik.isSubmitting}
                />
            </form>
        </div>
    );
};

export default SignupPage;