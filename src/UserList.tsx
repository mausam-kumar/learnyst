import { useState } from "react"
import { useUserListContext } from "./context/UserListProvider"
import UserCard from "./UserCard"
import { useGlobalStateContext } from "./context/GlobalStateProvider"
import { Confirmation } from "./Confirmation"

const UserList = () => {
    const { showDialog } = useGlobalStateContext()
    const { filteredUser, removeUserById } = useUserListContext()

    const [activeCard, setActiveCard] = useState<number | null>()
    const [editCardId, setEditCardId] = useState<number | null>(null)

    const handleDelete = (id: number) => {
        showDialog(<div className="w-full"><Confirmation handleConfirm={() => removeUserById(id)} /></div>)
    };

    const handleEdit = (id: number) => {
        if (editCardId === id) {
            setEditCardId(null)
        } else {
            setEditCardId(id)
        }
    }

    return <div className="space-y-10 w-full">
        {
            filteredUser.map((user) => {
                const { first, last, email, description, picture, dob, country, gender, id } = user
                return <UserCard
                    name={`${first} ${last}`}
                    dob={dob}
                    gender={gender}
                    description={description}
                    key={id}
                    id={id}
                    email={email}
                    country={country}
                    editCardId={editCardId}
                    imageURL={picture}
                    isActive={activeCard === id}
                    handleExpand={() => setActiveCard((val) => val === id ? null : id)}
                    handleDelete={() => handleDelete(id)}
                    handleEdit={() => handleEdit(id)}
                    mode={editCardId === id ? "EDIT" : "VIEW"}
                />
            })
        }
    </div>

}

export default UserList