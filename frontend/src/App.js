import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Main from './Component/main';
import Home from './Component/main/home';
import Signup from './Component/main/signup';
import Login from './Component/main/login';
import UserDashboard from './Component/user/userDashboard';
import User from './Component/user';
import Admin from './Component/admin';
import AdminDashboard from './Component/admin/adminDashboard';
function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
      
      <Route element={<Admin/>} path="admin">
        <Route element={<AdminDashboard/>} path="adminDashboard"></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </>
 
    
  );
}

export default App;