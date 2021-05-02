import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex space-x-2 text-xl mb-5 dark:text-white overflow-x-auto">
            <NavLink className="px-1" exact to="/" activeClassName="selected">About</NavLink>
            <NavLink className="px-1" to="/resume" activeClassName="selected">Resume</NavLink>
            <NavLink className="px-1" to="/projects" activeClassName="selected">Projects</NavLink>
            <NavLink className="px-1" to="/blogs" activeClassName="selected">Blogs</NavLink>
            <NavLink className="px-1" to="/contact" activeClassName="selected">Contact</NavLink>
        </nav>
    );
};

export default Navbar;