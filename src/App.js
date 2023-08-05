import { Route, Routes } from "react-router-dom";
import Page from './pages/page.js';
import NavBar from "./components/navbar.js";
import './styles/app.css';

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Page/>} />
      </Routes>
    </>
  );
}

export default App;