import React from 'react';
import Navbar from './Navbar';
import {Switch,Route} from 'react-router-dom'
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Blogs from './Blogs';
import Contact from './Contact';

const Content = () => {
    return (
        <div className="p-4">
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <About />
                </Route>
                <Route path="/resume">
                    <Resume /> 
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/blogs">
                    <Blogs />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </div>
    );
};

export default Content;