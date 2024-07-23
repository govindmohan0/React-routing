import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbarr from "./Components/Navbar";
import Notfound from "./Components/Notfound";

const Home = () => (
  <div>
    <h1>Home page</h1>
    <Link to="/AboutUs">Go to user page</Link>
  </div>
);
const AboutUs = () => <h1>About Us page</h1>;

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navbarr />}>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/AboutUS" element={<AboutUs />}></Route>
        </Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
