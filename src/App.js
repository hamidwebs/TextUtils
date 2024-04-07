import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextFrom from './Components/TextFrom';
// import About from './Components/About';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" aboutLink="/" mode={mode} toggleMode={toggleMode} />
      <div className="container my-4">
        <TextFrom heading="Enter Text to Analyze" mode={mode} toggleMode={toggleMode} />
        {/* <About mode={mode}/> */}
      </div>
    </>
  );
}

export default App;