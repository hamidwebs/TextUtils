import "./App.css";
import Navbar from "./Components/Navbar";
import TextFrom from './Components/TextFrom';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" aboutLink="/" />
      <div className="container my-4">
        <TextFrom heading="Enter Text to Analyze" />
      </div>
    </>
  );
}

export default App;