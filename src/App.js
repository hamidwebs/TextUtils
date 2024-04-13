import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextFrom from './Components/TextFrom';
import Alert from "./Components/Alert";
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [alert, setAlert] = useState('');
  const [mode, setMode] = useState('light');
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typeOfAlert: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'success')
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark Mode has been Enabled', 'success');
    }
  }
  // title
  document.title = 'TextUtils - Home';
  return (
    <>
      <Router basename="/TextUtils">
        <Navbar title="TextUtils" aboutText="About TextUtils" aboutLink="/" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} mode={mode} />
        <Switch>
          <Route exact path="/">
            <div className="container my-4">
              <TextFrom heading="Enter Text to Analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
            </div>
          </Route>
          <Route exact path="/about">
            <div className="container my-4">
              <About mode={mode} />
            </div>
          </Route>
        </Switch>
      </Router>,
    </>
  );
}

export default App;