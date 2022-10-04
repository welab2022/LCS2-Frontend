import { Routes ,Route,BrowserRouter } from 'react-router-dom';
import LoginPage  from './components/pages/LoginPage';
import MainPage  from './components/Layout/MainPage';
import PrivateRoute from './components/Common/PrivateRoute';
import NotFound  from './components/Common/NotFound';
import Locations from './components/locations/Locations';
import {LocationForm} from './components/locations/LocationForm';
import Users from './components/users/Users';
import ResetPassword from './components/pages/ResetPassword';
import ForgotPassword from './components/pages/ForgotPassword';
import Register from './components/pages/Register';
import MyAccount from './components/myAccount/MyAccount';
import Students from './components/students/Students';
import StudentForm from './components/students/StudentForm';
import Classes from './components/classes/Classes';
import ClassForm from './components/classes/ClassForm';
import LocationImport from './components/locations/LocationImport';
import ImportUsers from './components/users/ImportUsers';
function App() {
  
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/resetpassword/:id' element={<ResetPassword/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/register' element={<Register/>}/>
            
       
        <Route path='/' element={<PrivateRoute><Locations/></PrivateRoute>}/>
          
        <Route path='/locations' element={<PrivateRoute><Locations/></PrivateRoute>}/>
        <Route path='/locations/:id' element={<PrivateRoute><LocationForm/></PrivateRoute>}/>
        <Route path='/locations/import' element={<PrivateRoute><LocationImport/></PrivateRoute>}/>
          
        <Route path='/users' element={<PrivateRoute><Users/></PrivateRoute>}/>
        <Route path='/users/import' element={<PrivateRoute><ImportUsers></ImportUsers></PrivateRoute>}/>
        <Route path='/students' element={<PrivateRoute><Students/></PrivateRoute>}/>
        <Route path='/students/:id' element={<PrivateRoute><StudentForm/></PrivateRoute>}/>
        <Route path='/classes' element={<PrivateRoute><Classes/></PrivateRoute>}/>
        <Route path='/classes/:id' element={<PrivateRoute><ClassForm/></PrivateRoute>}/>
        <Route path='/myaccount' element={<PrivateRoute><MyAccount/></PrivateRoute>}/>
          
       
        <Route path='*' element={<NotFound/>}>
            
        </Route>
      </Routes>
 
      </BrowserRouter>
  );
}

export default App;
