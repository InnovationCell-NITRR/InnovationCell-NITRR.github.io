import logo from "./logo.svg";
import "./App.css";
import Allroutes from "./Allroutes";
import { BrowserRouter as Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainerSuccess, ToastContainerError } from "./ReactToast";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      {/* <h1>Welcome</h1> */}

      {/* <h4 onClick={() => navigate("")}>EntryPage</h4> */}
      {/* <h4 onClick={() => navigate("Portfolios")}>Portfolio</h4>

      <h4 onClick={() => navigate("Admin")}>Admin</h4> */}
      {/* <Navbar /> */}
      {ToastContainerSuccess}
      {ToastContainerError}
    </div>
  );
}

export default App;
