
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
import ViewSpecialist from './components/ViewSpecialist'
import UpdateSpecialization from './components/UpdateSpecialization'
import AddDoctor from './components/AddDoctor'
import ViewDoctor from './components/ViewDoctor'
import DoctorMaster from './components/DoctorMaster'
import Schedule from './components/Schedule'
import ViewSchedule from './components/ViewSchedule'
import UserViewSchedule from './components/UserViewSchedule'
import PatientMaster from './components/PatientMaster'
import Booking from './components/Booking'
import ViewBook from './components/ViewBook'
import UserViewBook from './components/UserViewBook'
import UserViewSpecialist from './components/UserViewSpecialist'
// Bounce/

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
      <Route path='/admin/addspecialization' element={<Specialization/>}/>
      <Route path='/admin/viewspecialization' element={<ViewSpecialist/>}/>
      <Route path='/admin/updatespecialization/:id' element={<UpdateSpecialization/>}/>
      <Route path='/admin/doctor' element={<AddDoctor/>}/>
      <Route path='/admin/viewdoctor' element={<ViewDoctor/>}/>
      </Route>

      
      <Route path='/doctor' element={<DoctorMaster/>}>
      <Route path='/doctor/schedule' element={<Schedule/>}/>
      <Route path='/doctor/viewschedule' element={<ViewSchedule/>}/>
      <Route path='/doctor/viewbook' element={<ViewBook/>}/>


      
      </Route>

            
      <Route path='/user' element={<PatientMaster/>}>
      <Route path='/user/viewschedule' element={<UserViewSchedule/>}/>
      <Route path='/user/book/:id' element={<Booking/>}/>
      <Route path='/user/viewbook' element={<UserViewBook/>}/>
      <Route path='/user/viewspecialist' element={<UserViewSpecialist/>}/>




      
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
