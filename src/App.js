import "./App.css";
import Navbar from "./Components/Navbar";
// import TextFrom from './Components/TextFrom';
import About from './Components/About';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" aboutLink="/" />
      <div className="container my-4">
        {/* <TextFrom heading="Enter Text to Analyze" /> */}
        <About />
      </div>
    </>
  );
}

export default App;