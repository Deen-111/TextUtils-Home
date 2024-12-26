// import logo from './logo.svg';

import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';



function App() {

  
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#052c5b';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';                                                                                         this can be used when we want to display some specific mode with title of the page .....ex-- when we enable dark mode then this will be show with title
      // setInterval(() => {                                                                                                               this can be used when we want user to be attention on some specific task to be completed (like --- for eye catching)....like we see on page like install this app and all
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    <Navbar title="TextUtils" aboutText="About"   mode={mode} toggleMode={toggleMode}/>      
    {/* <Navbar title="TextUtils"/>      here we dont pass "aboutText" as props but in above line we pass for understanding */}

    <Alert alert={alert}/>

    <div className="container my-3">
            <TextForm  showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
