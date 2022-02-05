import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./Components/main/header";
import login from "./Components/main/login"

function App() {
  return(
    <>
    <Router>
    <Route path ="/header" component = {Header} ></Route>
      <Route path="/login" component={login}></Route>
    </Router>
    </>
  )
}

export default App;
