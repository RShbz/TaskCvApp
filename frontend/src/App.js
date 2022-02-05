
import './App.css';
//import Admin from './components/Admin/Admin';
import Appbar from './components/Appbar/Appbar';
import UserSignUp from './components/User/UserSignUp';
import UserSignIn from './components/User/UserSignIn'
import { BrowserRouter as Router,  Route, Routes, } from 'react-router-dom';
import Home from './components/Home/Home';
import CvCreate from './components/Cv/CvCreate';
import UserPage from './components/User/UserPage';




function App() {
  return (
   

    <Home></Home> 
  //  <Home> <Home/>  <Appbar/> 


//     <Router>
    
//     <Appbar></Appbar>

//   <Routes>

  
//  <Route   exact  path="/"  element={<Home/>} />

// <Route   exact  path="/UserSignUp"  element={<Home sayfa="usersignup"/>} />
// <Route   exact  path="/UserSignIn"  element={<UserSignIn/>} />
// <Route   exact  path="/users/:userId"  element={<UserPage/>} />

// <Route   exact  path="/CvCreate"  element={<CvCreate/>} />
// <Route   exact  path="/UserPage"  element={<UserPage/>} />

// </Routes>


// </Router>
  );
}
//   <UserSignUp/>   <UserSignUp /><Home></Home> <Api/> <Link to="/">Home</Link><Link to="/">HOME </Link>

     // <Admin></Admin>
export default App;

