
import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./navbarElements";

const Navbar = () => {
    return (
        <>
            <Nav className="rounded">
                <Bars />

                <NavMenu>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    <NavLink to="/events" activeStyle>
                        Events
                    </NavLink>
                    <NavLink to="/annual" activeStyle>
                        Annual Report
                    </NavLink>
                    <NavLink to="/users" activeStyle>
                        Users
                    </NavLink>
                    <NavLink to="/blogs" activeStyle>
                        Blogs
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
            
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;