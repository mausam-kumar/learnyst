import { FC } from "react"
import Accordion from "./Accordian"
import { ChevronDown } from "./icons"

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
}

const CardHeader = ({ imageURL, name, handleExpand, isActive }: Partial<UserCardProps>) => {
    return <div id="card-header" className="flex justify-between font-lexend w-full">
        <div className="flex gap-x-4 items-center justify-center">
            <img src={imageURL} alt="User image" className="h-16 w-16 object-contain rounded-full" />
            <p>{name}</p>
        </div>
        <button onClick={handleExpand} className={`h-6 w-6 flex justify-center items-center rounded-full border mt-4 ${isActive ? "transform rotate-180" : ""}`}>
            <ChevronDown />
        </button>
    </div>
}

const CardBody = ({ dob, description, gender, country, handleDelete }: Partial<UserCardProps>) => {
    return <div>
        <div className="flex justify-between">
            <div className="flex flex-col">
                <p>Age</p>
                <p>{dob}</p>
            </div>
            <div className="flex flex-col">
                <p>Gender</p>
                <p>{gender}</p>
            </div>
            <div className="flex flex-col">
                <p>Country</p>
                <p>{country}</p>
            </div>
        </div>
        <p className="line-clamp-6">
            {description}
        </p>
        <div className="flex justify-end gap-x-4">
            <button
                type="button"
                onClick={handleDelete}
                className="rounded-md bg-red-100 px-2.5 py-1.5 text-sm font-semibold text-red-700 shadow-sm hover:bg-red-200"
            >
                Delete
            </button>
            <button
                type="button"
                className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
            >
                Edit
            </button>
        </div>
    </div>
};

const UserCard: FC<UserCardProps> = ({ imageURL, name, dob, description, gender, country, handleDelete, isActive, handleExpand }) => {

    return <Accordion
        title={<CardHeader
            imageURL={imageURL} name={name}
            isActive={isActive} handleExpand={handleExpand} />}
        child={<CardBody description={description} dob={dob} gender={gender} country={country} handleDelete={handleDelete} />}
    />
};

export default UserCard