import './App.css';
import About from './cmponents/About';
import Navbar from './cmponents/Navbar';
import TextForm from './cmponents/TextForm';
import React, {useState} from 'react';
import Alert from './cmponents/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode= ()=> {
    if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor= '#424e58';
      showAlert("Dark mode has been enabled", "success");
    }
  }

  return (
   <>
    <Router>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Routes>
          <Route path = "/" element = {<TextForm heading="TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert}/>} />
          <Route path = "/about" element = {<About mode={mode}/> } /> 
        </Routes>
      </div>
    </Router>
   </>
  );
}

export default App;