import { useState } from "react"
import { useUserListContext } from "./context/UserListProvider"
import UserCard from "./UserCard"
import { useGlobalStateContext } from "./context/GlobalStateProvider"
import { Confirmation } from "./Confirmation"

const UserList = () => {
    const { showDialog } = useGlobalStateContext()
    const { filteredUser, removeUserById } = useUserListContext()
    const [activeCard, setActiveCard] = useState<number | null>()
    const handleExpand = (id: number) => {
        setActiveCard(id)
    }

    const handleDelete = (id: number) => {
        console.log(id)
        showDialog(<div className="w-full"><Confirmation handleConfirm={() => removeUserById(id)} /></div>)
    };

    return <div className="space-y-10 w-full sm:max-w-xl">
        {
            filteredUser.map((user) => {
                const { first, last, description, picture, dob, country, gender, id } = user
                return <UserCard
                    name={`${first} ${last}`}
                    dob={dob}
                    gender={gender}
                    description={description}
                    key={id}
                    country={country}
                    imageURL={picture}
                    isActive={activeCard === id}
                    handleExpand={() => handleExpand(id)}
                    handleDelete={() => handleDelete(id)}
                />
            })
        }
    </div>

}

export default UserList