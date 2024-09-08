import { FC, useEffect, useState } from "react"
import { ChevronDown } from "./icons"
import { yupResolver } from "@hookform/resolvers/yup"
import { userFormSchema } from "./resolver"
import { FormProvider, useForm } from "react-hook-form"
import InputForm from "./forms/InputForm"
import { SelectMenu } from "./forms/SelectMenu"
import { availableGender } from "./constant"
import TextArea from "./forms/TextArea"

type UserCardProps = {
    name: string
    dob: string
    gender: string
    country: string
    description: string
    imageURL: string
    isActive: boolean
    handleExpand: () => void
    handleDelete: () => void
    handleEdit: () => void
    mode: "VIEW" | "EDIT"
}

type FormData = {
    name: string
    dob: string
    gender: string
    country: string
    description: string
}

const UserCard: FC<UserCardProps> = ({ imageURL, mode, name, dob, description, gender, country, handleEdit, handleDelete, isActive, handleExpand }) => {
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

    const [height, setHeight] = useState(0);

    const handleFormSubmit = (data: FormData) => {
        console.log(data)
    }

    useEffect(() => {
        if (isActive) {
            setHeight(280);
        } else {
            setHeight(0);
        }
    }, [isActive]);

    return <FormProvider {...methods} >
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col w-full">
            <div className="border p-2 rounded shadow-sm">
                <div id="card-header" className="flex justify-between font-lexend w-full">
                    <div className="flex gap-x-4 items-center justify-center">
                        <img src={imageURL} alt="User image" className="h-16 w-16 object-contain rounded-full" />
                        {
                            mode === "EDIT" ? <div>
                                <InputForm name="name" placeholder="Name" />
                            </div> : <p>{name}</p>
                        }
                    </div>
                    <button onClick={handleExpand} className={`h-6 w-6 flex justify-center items-center rounded-full border mt-4 ${isActive ? "transform rotate-180" : ""}`}>
                        <ChevronDown />
                    </button>
                </div>
                <div style={{ height }} className="overflow-hidden transform transition-all duration-300">
                    <div className="mt-4 space-y-4">
                        <div className="flex justify-between space-x-1">
                            <div className="flex flex-col">
                                <p>Age</p>
                                {
                                    mode === "EDIT" ? <div>
                                        <InputForm name="dob" placeholder="Dob" />
                                    </div> : <p>{dob}</p>
                                }
                            </div>
                            <div className="flex flex-col">
                                <p>Gender</p>
                                {
                                    mode === "EDIT" ? <SelectMenu options={availableGender.map((_) => _.name)}
                                        name="gender" /> : <p>{gender}</p>
                                }
                            </div>
                            <div className="flex flex-col">
                                <p>Country</p>
                                {
                                    mode === "EDIT" ? <InputForm name="country" placeholder="Country" /> : <p>{country}</p>
                                }
                            </div>
                        </div>
                        {
                            mode === "EDIT" ? <TextArea name="description" placeholder="Description" /> : <p className="line-clamp-6">
                                {description}
                            </p>
                        }
                        <div className="flex justify-end gap-x-4">
                            <button
                                type="button"
                                onClick={handleDelete}
                                className="rounded-md bg-red-100 px-2.5 py-1.5 text-sm font-semibold text-red-700 shadow-sm hover:bg-red-200"
                            >
                                Delete
                            </button>
                            <button
                                onClick={handleEdit}
                                type="button"
                                className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </FormProvider>
};

export default UserCard