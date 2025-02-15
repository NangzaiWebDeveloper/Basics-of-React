import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import Home from "./routeComponents/Home";
import Contact from "./routeComponents/Contact";
import About from "./routeComponents/About";

const Nine = () => {
    return (
        //Build a basic routing setup with React Router.
        <BrowserRouter>

            <nav>
                <ul>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/about"><li>About</li></NavLink>
                    <NavLink to="/contact"><li>Contact</li></NavLink>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/contact" element={<Contact></Contact>} /> 
                <Route path="/about" element={<About></About>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Nine;