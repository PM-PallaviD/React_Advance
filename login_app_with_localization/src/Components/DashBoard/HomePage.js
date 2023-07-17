import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { LoginForm } from "../Forms/LoginForm";
import RegisterForm from "../Forms/RegisterForm";
import { ModalPopup } from "../ReusableModal/ModalPopup";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";


// main page for login and registeration
export const HomePage = () => {
    // to open modal for register user
    const [openModal, setOpenModal] = useState(false);
    const { i18n } = useTranslation()
    useEffect(() => {
        i18n.changeLanguage(window.navigator.language)

    })

    return (
        <Grid container className="container ">
            <Grid
                xs={12}
                className="d-flex mt-5 justify-content-center  align-items-center"
            >
                <LoginForm setOpenModal={setOpenModal} />
                {
                    // modal popup for register form
                    <ModalPopup
                        open={openModal}
                        onClose={() => {
                            setOpenModal(false);
                        }}
                    >
                        <RegisterForm onClose={() => setOpenModal(false)} />
                    </ModalPopup>
                }
            </Grid>
        </Grid>
    );
};
