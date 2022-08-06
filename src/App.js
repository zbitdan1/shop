import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Gallary from "./components/Gallary"; 

function App(props) {
  return (
    <>
      <div className="site">
        <div className="container">
          <Header />
        </div>
        <div className="body">
          <Gallary />
        </div>
      </div>
      
    </>
  );
}

export default App;
