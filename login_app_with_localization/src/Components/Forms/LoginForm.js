import React, { useEffect, useState } from "react";
import { TextField, Grid, Button, Typography } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { InputGroup } from "reactstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { loginFormSchema } from "../Constants/ValidationConstant";
import { useNavigate } from "react-router-dom";
import "../../Style/index.css";
import { useTranslation } from "react-i18next"
export const LoginForm = ({ setOpenModal }) => {
  const history = useNavigate();
  const [credential, setCredential] = useState([]);
  const [showError, setShowError] = useState(false);
  const { t } = useTranslation()
  useEffect(() => {
    const data = localStorage.getItem("userData");
    const maiin = JSON.parse(data);
    const userval = maiin?.map((i) => {
      return { username: i.username, password: i.password };
    });

    setCredential(userval);
  }, []);

  const onSubmit = (values) => {
    // checking for validate user
    console.log(credential);
    setShowError(true);
    if (
      credential[0].username === values.username &&
      credential[0].password === values.password
    ) {
      history("/mainDashboard");
      setShowError(false);
    }
  };
  return (
    <React.Fragment>
      <Grid style={{ padding: "20px, 30px" }}>
        <Formik
          // initial state
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={loginFormSchema}
          onSubmit={(v) => onSubmit(v)}
        >
          {(formik) => (
            <Form>
              <Grid className="w-100 text-center h-auto">
                {" "}
                <BsFillPersonFill
                  color={formik.isValid ? "green" : "#e37171"}
                  fontSize={55}
                />
              </Grid>

              <Grid className="px-4 py-3 shadow-lg">
                <Field
                  as={TextField}
                  placeholder={t('username')}
                  label={t('username')}
                  name="username"
                />
                <p className="text-danger">
                  <ErrorMessage name="username" />
                  {showError && "Please check username"}
                </p>

                <Field
                  as={TextField}
                  label={t('password')}
                  type="password"
                  placeholder={t('password')}
                  name="password"
                />
                <p className="text-danger">
                  {" "}
                  <ErrorMessage name="password" />
                  {showError && "Please check password"}
                </p>

                <Grid className="text-center w-100">
                  <Button type="submit" color="green" variant="contained">
                    {t('login')}
                  </Button>

                  <Typography
                    className="pointer mt-2 text-primary"
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    {" "}
                    {t('signUp')}
                  </Typography>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </React.Fragment>
  );
};
