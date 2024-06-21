import { useState } from 'react';
import './App.css';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

const [mode, setMode] = useState("light");
const[alert,setAlert] = useState("null")

const showAlert = (message,type) => {
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert("null");
  }, 1500);

}

const toggleChange= ()=>{
  if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor="#2f3133"
    document.body.style.color="#c9cfd6"
    showAlert("success",": Converted To dark Mode")
  }
  else{
   setMode("light")
   document.body.style.backgroundColor="white"
   document.body.style.color="Black"
   showAlert("success",": Converted To light Mode")
  }
}

  return (
  <>
  <Router>
   <Alert alert={alert}/>
   <Navbar title = "TextUtils" mode={mode} Change={toggleChange}/>
  <Routes>
        <Route path="/" element={<Textarea heading = "Enter Your Text Below" mode={mode}/>} />
        <Route path="/about" element={<AboutUs mode={mode} />} />
  </Routes>
  </Router>
  </> 
  );
}

export default App;
