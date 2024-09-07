import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { FC } from "react"

type UserCardProps = {
    name: string
    dob: string
    gender: string
    country: string
    description: string
    imageURL: string
    isActive: boolean
    handleExpand: () => void
}
const UserCard: FC<UserCardProps> = ({ imageURL, name, dob, handleExpand, description }) => {

    return <div>
        <div id="card-header" className="flex justify-between">
            <div>
                <img src={imageURL} alt="User image" />
                <p>{name}</p>
            </div>
            <button onClick={handleExpand}>
                <ChevronDownIcon />
            </button>
        </div>
        <div className="flex">
            <div className="flex flex-col">
                <p>Age</p>
                <p>{dob}</p>
            </div>
            <div className="flex flex-col">
                <p>Gender</p>
                <p>{dob}</p>
            </div>
            <div className="flex flex-col">
                <p>Country</p>
                <p>{dob}</p>
            </div>
        </div>
        <div>
            {description}
        </div>
    </div>
};

export default UserCard