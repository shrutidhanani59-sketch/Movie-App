
import './App.css'
import Login from './component/Login'
import MainPage from './component/MainPage'
import Form from './component/Form'
import { Route , Routes } from 'react-router-dom'
import { ProtectedRoute } from './page/vaildation'


function App() {
  

  return (
    <>

    <Routes>

      <Route path='/' element={<Login/>} />
      <Route path='/main' element={ 
        <ProtectedRoute>
          <MainPage/>
        </ProtectedRoute>
      } />
      <Route path='/form' element={
            <Form />
          }/>
    </Routes>
    
   
    </>
  )
}

export default App
