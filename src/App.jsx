
import './App.css'
import { Provider } from 'react-redux'
import store from './feature/store'
import CakeContainer from './Components/CakeContainer'
import MilkContainer from './Components/MilkContainer'
import UserList from './Components/UserList'
function App() {

  return (
    <Provider store={store}>
      <>
        <div>redux demo </div>
        <CakeContainer />
        <MilkContainer />
        <hr />
        <UserList />
        {/* //store : cake,=> 1.store 2.action   3.reducer */}
      </>
    </Provider>
  )
}

export default App
