import React, { useEffect, useState } from "react";
import {
    InputLabel,
    Grid,
    Button,
    Typography,
    TextField,
} from "@material-ui/core";
import { InputGroup } from "react-bootstrap";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { registerFormSchema } from "../Constants/ValidationConstant";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";

const RegisterForm = ({ onClose }) => {

    const [data, setData] = useState([]);
    const onSubmit = (values) => {
        setData((pre) => {
            return [...pre, values];
        });
        localStorage.setItem("userData", JSON.stringify(data));
    };
    const { i18n, t } = useTranslation()
    useEffect(() => {
        i18n.changeLanguage(window.navigator.language)
    }, [i18n])
    //initial state
    const initialValues = {
        first_name: "",
        last_name: "",
        email_id: "",
        phone_num: "",
        password: "",
        username: "",
    };
 
    return (
        <div style={{ height: "449px", padding: "10px 30px" }}>
            <Formik
                onSubmit={(v, { resetForm }) => {
                    onSubmit(v);
                    resetForm();
                }}
                initialValues={initialValues}
                validationSchema={registerFormSchema}
            >
                {(formik) => (
                    <Form>
                        <Field
                            label={`${t('first')} ${t('name')}`}
                            as={TextField}
                            placeholder={`${t('first')} ${t('name')}`}
                            name="first_name"
                        />
                        <Typography className="text-danger">
                            <ErrorMessage name="first_name" />
                        </Typography>

                        <Field
                            as={TextField}
                            label={`${t('last')} ${t('name')}`}
                            placeholder={`${t('last')} ${t('name')}`}

                            name="last_name"
                        />

                        <Typography className="text-danger">
                            <ErrorMessage name="last_name" />
                        </Typography>

                        <Field
                            as={TextField}
                            label={`${t('phoneNumber')}`}
                            name="phone_num"
                            placeholder={`${t('phoneNumber')}`}
                        />

                        <Typography className="text-danger">
                            <ErrorMessage name="phone_num" />
                        </Typography>

                        <Field
                            as={TextField}
                            label={t('email')}
                            placeholder={t('email')}
                            name="email_id"
                        />

                        <Typography className="text-danger">
                            <ErrorMessage name="email_id" />
                        </Typography>

                        <Grid>
                            <Field
                                as={TextField}
                                label={t('username')}
                                placeholder={t('username')}
                                name="username"
                            />

                            <Typography className="text-danger">
                                <ErrorMessage name="username" />
                            </Typography>
                        </Grid>

                        <Grid>
                            <Field
                                as={TextField}
                                label={t('password')}
                                placeholder={t('password')}
                                name="password"
                            />
                            <Typography className="text-danger">
                                <ErrorMessage name="password" />
                            </Typography>
                        </Grid>

                        <InputGroup className="mt-2 d-flex justify-content-between py-3">
                            <Button onClick={onClose}>{t('cancel')}</Button>

                            <Button variant="outlined" color="success" type="submit">
                                {t('save')}
                            </Button>
                        </InputGroup>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;
