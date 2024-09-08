import { GlobalStateProvider } from './context/GlobalStateProvider'
import { UserListProvider } from './context/UserListProvider'
import { ConfirmationDialog } from './Dialog'
import { SearchBox } from './SearchBox'
import UserList from './UserList'

function App() {
  return (
    <div className='w-full p-4 md:max-w-xl'>
      <UserListProvider>
        <GlobalStateProvider>
          <ConfirmationDialog />
          <SearchBox />
          <div className='mt-10'>
            <UserList />
          </div>
        </GlobalStateProvider>
      </UserListProvider>
    </div>
  )
}

export default App
