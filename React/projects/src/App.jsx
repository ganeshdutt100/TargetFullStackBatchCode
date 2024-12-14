import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";
// import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Nav />
      <Home />
      {/* <Navbar /> */}
    </>
  );
}

export default App;
