import * as Yup from "yup";
// login form errors validation
export const loginFormSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
});

// register form errors validation
export const registerFormSchema = Yup.object({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email_id: Yup.string().email().required("Email is required"),
    phone_num: Yup.number()
        .typeError()
        .positive()
        .integer()
        .min(8)
        .required("A phone number is required"),
    password: Yup.string().required('Password is required')
        .label("Password")
        .required()
        .min(8, "Seems a bit short...")
        .max(20, "Try a short password.")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain above 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character(! @ $ # % & *)"
        ),
    username: Yup.string().min(5).required("Username is required "),
});
// task edit and add form erros validation
export const taskForm = Yup.object({
    name: Yup.string().required("Name is required"),
    task: Yup.string().required("Task details required"),
    startDate: Yup.string().required("Start Date is required"),
    endDate: Yup.string().required("End Date is required"),
});
