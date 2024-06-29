import { Routes, Route } from 'react-router-dom';
import './App.css'
import Basic from '../pages/basic';
import LoginForm from './Components/Login/LoginForm';
import SignupForm from './Components/Login/SignupForm';
import CitizenPage from './Components/Citizen/CitizenPage';


function App() {
  return(
    <Routes>
      <Route path='/' element={< Basic/>} />
      <Route path='/login' element={< LoginForm/>} />
      <Route path='/signup' element={<SignupForm/>} />
      <Route path='/citizen' element={<CitizenPage/>} />
    </Routes>
  )
}

export default App
