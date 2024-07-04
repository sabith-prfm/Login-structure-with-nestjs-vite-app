import React from "react";
import styles from "./LoginPage.module.css";
import Textbox from "../../components/Textbox/Textbox";
import Button from "../../components/Button/Button";
import { useFormik } from "formik";
import { LoginValidationSchema } from "../../util/ValidationSchema";
import { post } from "../../util/Api";
import { useNavigate } from 'react-router-dom';
import { setStorageItem } from "../../util/Storage";
import { StorageEnums } from "../../Types/enum/StorageEnum";
import { Toaster } from "../../util/Toaster";

const LoginPage: React.FC = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginValidationSchema,
        onSubmit: (values, { setSubmitting }) => {
            post('/auth/login', values).then((res) => {
                console.log(">>>Res", res)
                console.log(">>>Res", res.data.data.token)

                setStorageItem(StorageEnums.TOKEN, res.data.data.token)
                setStorageItem(StorageEnums.USER_INFO, res.data.data.user)
                setSubmitting(false)
                Toaster('success',res.data.message)
                navigate('/')
            }).catch(err => {
                setSubmitting(false)
                Toaster('error',err?.response?.data?.message)
            })
        },
    });

    return (
        <div className={styles.loginPage}>
            <h1>Login</h1>
            <form>
                <div className={styles.elementContainer}>
                    <label htmlFor="email">Email</label>
                    <Textbox
                        type={"email"}
                        placeholder="email"
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
                        placeholder="password"
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

export default LoginPage;
