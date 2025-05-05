
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Master from './components/Master'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Doctor from './components/Doctor'
import Contact from './components/Contact'
import Treatment from './components/Treatment'
import { Bounce, ToastContainer } from 'react-toastify'
import AdminMaster from './components/AdminMaster'
import Specialization from './components/Specialization'
// Bounce

function App() {

  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Master/>}>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/doctor' element={<Doctor/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/treatment' element={<Treatment/>}/>

      </Route>

      <Route path='/admin' element={<AdminMaster/>}>
      
      <Route path='/admin/specialization' element={<Specialization/>}/>
      </Route>

    </Routes>
    
    </BrowserRouter>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
</div>
  )
}

export default App
