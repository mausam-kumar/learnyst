import { useState } from "react"
import { useUserListContext } from "./context/UserListProvider"
import UserCard from "./UserCard"

const UserList = () => {

    const { filteredUser } = useUserListContext()
    const [activeCard, setActiveCard] = useState<number | null>()
    const handleExpand = (id: number) => {
        setActiveCard(id)
    }

    return <div>
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
                />
            })
        }
    </div>

}

export default UserList