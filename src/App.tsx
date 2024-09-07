import './App.css'
import { UserListProvider } from './context/UserListProvider'
import { SearchBox } from './SearchBox'
import UserList from './UserList'

function App() {
  return (
    <div className='mx-auto w-full p-4'>
      <UserListProvider>
        <SearchBox />
        <div className='mt-10'>
           <UserList />
        </div>
      </UserListProvider>
    </div>
  )
}

export default App
