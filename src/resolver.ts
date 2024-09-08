import * as Yup from "yup";

export const userFormSchema = Yup.object({
    name: Yup.string()
        .required("Please enter your name."),
    dob: Yup.string()
        .required("Required"),
    gender: Yup.string()
        .required("Required"),
    country: Yup.string().required("Required"),
    description: Yup.string().min(10, "Description is too short").required("Description is required"),
});
