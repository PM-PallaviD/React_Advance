import React from "react";
import {
    InputLabel,
    Grid,
    Button,
    Typography,
    TextField,
} from "@material-ui/core";
import { InputGroup } from "react-bootstrap";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { taskForm } from "../Constants/ValidationConstant";
import { useDispatch } from "react-redux";
import { add_data, edit_data } from "../sagas/Actions";
import { ADD_DATA, EDIT_DATA } from "../sagas/Types";
import { useTranslation } from "react-i18next"

const EditForm = ({ onClose, taskDetails, action }) => {
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        if (action === ADD_DATA) {
            dispatch(add_data(values));
            onClose();
        } else if (action === EDIT_DATA) {
            dispatch(edit_data(values));
            onClose();
        }
    };
    const { t } = useTranslation()
    //initial state object
    const initialValues = {
        name: taskDetails ? taskDetails.name : "",
        task: taskDetails ? taskDetails.task : "",
        startDate: taskDetails ? taskDetails.startDate : "",
        endDate: taskDetails ? taskDetails.endDate : "",
        id: taskDetails ? taskDetails.id : "",
    };

    return (
        <div style={{ height: "449px" }}>
            {/* formik wrapper for form handling */}
            <Formik
                onSubmit={(v, resetForm) => {
                    onSubmit(v);
                    resetForm();
                }}
                initialValues={initialValues}
                validationSchema={taskForm}
            >
                <Form>
                    <InputGroup className="mt-2 ">
                        <InputLabel className="text-dark mb-3">{t('name')}</InputLabel>
                        <Field
                            as={TextField}
                            hiddenLabel
                            variant="outlined"
                            placeholder={t('name')}
                            size="small"
                            fullWidth
                            name="name"
                        />
                        <Typography className="text-danger">
                            <ErrorMessage name="name" />
                        </Typography>
                    </InputGroup>

                    <InputGroup className="mt-2 ">
                        <InputLabel className="text-dark mb-3">{t('task')}</InputLabel>
                        <Field
                            as={TextField}
                            hiddenLabel
                            variant="outlined"
                            placeholder={t('task')}
                            size="small"
                            fullWidth
                            name="task"
                        />
                        <Typography className="text-danger">
                            <ErrorMessage name="task" />
                        </Typography>
                    </InputGroup>

                    <InputGroup className="mt-2 ">
                        <InputLabel className="text-dark mb-3">{t('startDate')}</InputLabel>
                        <Field
                            as={TextField}
                            hiddenLabel
                            variant="outlined"
                            placeholder={t('startDate')}
                            size="small"
                            type="date"
                            fullWidth
                            name="startDate"
                        />

                        <Typography className="text-danger">
                            <ErrorMessage name="startDate" />
                        </Typography>
                    </InputGroup>

                    <InputGroup className="mt-2 ">
                        <InputLabel className="text-dark mb-3">{t('endDate')}</InputLabel>
                        <Field
                            as={TextField}
                            hiddenLabel
                            variant="outlined"
                            type="date"
                            placeholder={t('endDate')}
                            size="small"
                            fullWidth
                            name="endDate"
                        />
                        <Typography className="text-danger">
                            <ErrorMessage name="endDate" />
                        </Typography>
                    </InputGroup>

                    <InputGroup className="mt-2 ">
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                            <Button className="mx-2" onClick={onClose}>
                                {t('cancel')}
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                className="mx-2"
                                variant="outlined"
                                color="success"
                                type="submit"
                            >
                                {t('save')}
                            </Button>
                        </Grid>
                    </InputGroup>
                </Form>
            </Formik>
        </div>
    );
};

export default EditForm;
