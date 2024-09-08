import * as Yup from "yup";

const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

export const userFormSchema = Yup.object({
    name: Yup.string()
        .required("Please enter your name."),
    dob: Yup.string()
        .matches(dateRegex, "Invalid date format, should be year-month-date")
        .required("Required"),
    gender: Yup.string()
        .required("Required"),
    country: Yup.string().required("Required"),
    description: Yup.string().min(10, "Description is too short").required("Description is required"),
});
