import { ChangeEvent, useEffect, useState } from "react"
import { useUserListContext } from "./context/UserListProvider"

export const SearchBox = () => {
    const { setQuery } = useUserListContext()
    const [searchTerm, setSearchTerm] = useState("")


    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        const delay = 200
        const id = setTimeout(() => setQuery(searchTerm), delay)
    
        return () => clearTimeout(id)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [searchTerm])
    
    return (
        <div className="w-full">
            <label htmlFor="search" className="block text-lg font-medium leading-6 text-gray-900">
                Search User
            </label>
            <div className="mt-2 flex items-center">
                <input
                    id="search"
                    name="search"
                    placeholder="Search for user"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleValueChange(e)}
                    className="block px-4 w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    )
}