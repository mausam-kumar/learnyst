import './App.css'
import { UserListProvider } from './context/UserListProvider'
import { SearchBox } from './SearchBox'

function App() {
  return (
    <div className='mx-auto w-full flex justify-center p-4'>
      <UserListProvider>
        <SearchBox />
      </UserListProvider>
    </div>
  )
}

export default App
