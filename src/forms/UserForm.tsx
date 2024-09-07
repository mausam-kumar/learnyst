import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputForm from "./InputForm";
import { userFormSchema } from "../resolver";
import TextArea from "./TextArea";
import { SelectMenu } from "./SelectMenu";
import { availableGender } from "../constant";

type FormData = {
    name: string
    dob: string
    gender: string
    country: string
    description: string
}
type UserFormProps = {
    mode: "VIEW" | "EDIT"
    image: string
} & FormData
const UserForm: FC<UserFormProps> = ({ mode = "VIEW", image, name, dob, description, country, gender }) => {
    const methods = useForm({
        defaultValues: {
            name,
            country,
            dob,
            description,
            gender
        },
        resolver: yupResolver(userFormSchema),
        mode: "onSubmit",
    });
    const { handleSubmit } = methods;

    const handleFormSubmit = (data: FormData) => {
        console.log(data, mode)
    }

    return <div className="w-full sm:min-w-96 p-4 border rounded-lg shadow-lg">
        <FormProvider {...methods} >
            <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col w-full">
                <div>
                    <div id="avatar">
                        <img src={image} className="h-10 w-10 rounded-full p-1 object-contain" />
                    </div>
                    <div>
                        <InputForm name="name" placeholder="Name" />
                    </div>
                </div>
                <div>
                    <div>
                        <InputForm name="dob" placeholder="Name" />
                    </div>
                    <div>
                        <SelectMenu options={availableGender} name="gender" />
                    </div>
                    <div>
                        <InputForm name="country" placeholder="Name" />
                    </div>
                </div>
                <div>
                    <TextArea name="description" placeholder="Description" />
                </div>
            </form>
        </FormProvider>
    </div>
};

export default UserForm