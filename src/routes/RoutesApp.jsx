// AQUI configuramos la navegación entre las páginas y
// lo hacemos con el react-router-dom
// además añadimos un menú con Link para cambiar de página

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import MyJob from "../pages/MyJob";

const RoutesApp = () => {
    return (
        <Router>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/myjob">My Job</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/myjob" element={<MyJob />} />
            </Routes>
        </Router>
    );
};

export default RoutesApp;
