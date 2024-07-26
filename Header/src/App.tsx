import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import DynamicContent from "./pages/DynamicContent";
import Users from "./pages/users";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/about" element={<DynamicContent content = "This is About Component"/>} />
                <Route
                    path="/events"
                    element={<DynamicContent content = "Welcome to Events Component"/>}
                />

                <Route path="/users" element={<Users />} />
                <Route path="/blogs" element={<DynamicContent content = "Welcome to Blogs Component"/>} />
                <Route
                    path="/sign-up"
                    element={<DynamicContent content = "Sign Up"/>}
                />
            </Routes>
        </Router>
    );
}

export default App;