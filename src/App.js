import "./App.css";
import Navbar from "./Components/Navbar";
import EnterText from "./Components/EnterText";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" aboutLink="/" />
      <EnterText />
    </>
  );
}

export default App;