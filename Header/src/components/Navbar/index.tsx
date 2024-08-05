
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './navbarElements';

const Navbar = () => {
    return (
        <>
            <Nav className="rounded">
                <Bars />

                <NavMenu>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    <NavLink to="/events" >
                        Events
                    </NavLink>
                    <NavLink to="/annual" >
                        Annual Report
                    </NavLink>
                    <NavLink to="/users" >
                        Users
                    </NavLink>
                    <NavLink to="/blogs" >
                        Blogs
                    </NavLink>
                    <NavLink to="/sign-up" >
                        Sign Up
                    </NavLink>
            
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;