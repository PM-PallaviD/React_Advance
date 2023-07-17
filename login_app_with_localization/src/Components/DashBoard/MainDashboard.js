import React, { useEffect, useState } from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { delete_data, fetch_data } from "../sagas/Actions";
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { ModalPopup } from "../ReusableModal/ModalPopup";
import { FaPlus } from "react-icons/fa";
import { EDIT_DATA, ADD_DATA } from "../sagas/Types";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EditForm from "../Forms/EditForm";
import { useTranslation } from "react-i18next"
//dashboard file to render todolist
export const MainDashboard = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.state); // get data from global state
  const [loader, setLoader] = useState(true); // state for showing spinner
  const [openModal, setOpenModal] = useState(false); // for open modal
  const [taskDetails, setTaskDetails] = useState(); // setting object to send through
  const [actionToDo, setActionToDo] = useState(); // seting action for detecting which actin has been done on submit button
  const navigate = useNavigate();
  const { t, i18n } = useTranslation()

  useEffect(() => {
    //dispatch for call api
    dispatch(fetch_data());
    setTimeout(() => {
      setLoader(false);
    }, 2000);
    i18n.changeLanguage(window.navigator.language)
  }, [dispatch]);

  //edit function open modal form and send data init
  const editTask = (details) => {
    setTaskDetails(details);
    setOpenModal(true);
    setActionToDo(EDIT_DATA);
  };

  //calling delete api and passing id
  const deleteTask = (id) => {
    if (window.confirm()) {
      dispatch(delete_data(id));
    }
  };

  // open modal form to add task
  const AddTask = () => {
    setOpenModal(true);
    setActionToDo(ADD_DATA);
  };
  return (
    <>
      <Grid className="float-end">
        <Button
          variant="outlined "
          className="border"
          onClick={() => navigate(-1)}
        >
          {" "}
          {t('logOut')}
        </Button>
      </Grid>
      <div className="d-flex justify-content-center align-items-center h-100 w-100">
        {loader ? (
          <CircularProgress disableShrink />
        ) : (
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h1>{t('taskForm')}</h1>
              <h1>
                {" "}
                {t('task')} <FaPlus onClick={() => AddTask()} />{" "}
              </h1>
            </div>
            <div className="card-body">
              <table className="table table-bordered table-stripe table-hover  ">
                <tbody>
                  <tr>
                    <th>{t("name")}</th>
                    <th>{t('task')}</th>
                    <th>{t('startDate')}</th>
                    <th>{t('endDate')}</th>
                    <th>{t('action')}</th>
                  </tr>
                  {userData?.data?.map((i) => {
                    return (
                      <tr>
                        <td> {i.name}</td>
                        <td> {i.task}</td>
                        <td> {i.startDate}</td>
                        <td> {i.endDate}</td>
                        <td>
                          <FiEdit2
                            className="cursor-pointer   m-1"
                            onClick={() => editTask(i)}
                          />{" "}
                          <FiTrash2
                            onClick={() => deleteTask(i.id)}
                            className="cursor-pointer m-1"
                          />{" "}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}{" "}
      </div>
      {/* opening modal form  */}
      <ModalPopup
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        {/* pasing  props for form  */}
        <EditForm
          action={actionToDo}
          taskDetails={taskDetails}
          onClose={() => {
            setOpenModal(false);
          }}
        />
      </ModalPopup>
    </>
  );
};
