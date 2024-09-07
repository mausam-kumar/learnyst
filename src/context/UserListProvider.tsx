import {
    createContext, Dispatch, ReactNode, useContext, useRef, useState,
} from "react";
import { TUser } from "../types";
import celebrities from "../celebrities.json";

type UserListState = {
    userList: TUser[];
    updateUserList: ({ id, payload }:{ id: number, payload: Omit<TUser, 'id'>}) => void;
    removeUserById: (id: number) => void,
    filteredUser: TUser[]
    setQuery: Dispatch<React.SetStateAction<string>>
}

const UserListContext = createContext<UserListState>(null!);

export const UserListProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const celebList = useRef<TUser[]>(celebrities as TUser[])
    const [query, setQuery] = useState("");
    const [userList, setUserList] = useState<TUser[]>(celebList.current);
    
    const updateUserList = ({ id, payload }:{ id: number, payload: Omit<TUser, 'id'>}) => {
        const newList = userList
        const index = newList.findIndex(user => user.id === id);
        newList[index] = { id, ...payload };
        setUserList(newList)
    };

    const removeUserById = (id: number) => {
        const newList = userList
        const updatedList = newList.filter(user => user.id !== id);
        setUserList(updatedList)
    }

    const filteredUser =
    query === ''
      ? userList
      : userList.filter((user) => {
          return (user.first + user.last).toLowerCase().includes(query.toLowerCase())
        })

    return (
        <UserListContext.Provider
            value={{
                userList,
                updateUserList,
                removeUserById,
                filteredUser,
                setQuery
            }}
        >
            {children}
        </UserListContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserListContext = () => {
    const context = useContext(UserListContext);
    if (!context) {
        throw new Error(
            "useUserListContext must be used within a UserListProvider",
        );
    }
    return context;
};