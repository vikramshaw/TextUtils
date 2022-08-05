import './App.css';
// import About from './cmponents/About';
import Navbar from './cmponents/Navbar';
import TextForm from './cmponents/TextForm';
import React, {useState} from 'react';

function App() {
  
  const [mode, setMode] = useState('light')

  const toggleMode= ()=> {
    if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor= 'white';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor= '#424e58';
    }
  }

  return (
   <>
    <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
    </div>
   </>
  );
}

export default App;
