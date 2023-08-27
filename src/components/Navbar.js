import React from 'react'
import { ReactDOM } from 'react'
import { Routes, Route, NavLink} from 'react-router-dom'

// All imports from other pages
import Main from  '../views/Main.js'
import Projects from '../views/Projects.js'

// Note: Transitioning everything into Type-script would simply require us to define an interface which 
// describes the props for each component and defining every variable according to a type. Similar to Swift.
export default function Navbar () {
    return (
        <div>
            <div style={{backgroundColor: "lightgrey", height:"8vh", margin: "auto"}}>
                <div style={{display: 'flex', float: "left", backgroundColor: "red", width: "15vw", height: "8vh"}}>
                    <NavLink to="/" style={{fontSize:24, margin: "auto"}}>Edward Ng</NavLink>
                    <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{backgroundColor: "gray"}}>
                        <path d="M25.513 2H2V13.168M2 13.168H25.2154M2 13.168V23.6019H25.2154M2.35716 3.51797L23.9653 24.9447V3.51797M35.9302 7.69225C35.9302 5.53735 27.2082 3.51896 27.2082 11.8321C27.2082 20.6624 35.1032 17.7755 35.9302 10.2874M35.9302 7.69225C36.0264 8.60557 36.02 9.47367 35.9302 10.2874M35.9302 7.69225V10.2874M35.9302 10.2874V23.2897C35.7254 28.1876 32.8672 35.1905 23.0724 24.0186" stroke="black" stroke-width="3"/>
                    </svg>
                </div>
                <div style={{display: "flex", float: "right", backgroundColor: "grey", justifyContent:"center", width: "30vw", height: "8vh"}}>
                    <NavLink to="projects" style={{margin:"auto"}}>
                        Projects
                    </NavLink>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="projects" element={<Projects />}/>
            </Routes>
        </div>
    )
}