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
                <div style={{display: 'flex', float: "left", backgroundColor: "white", width: "15vw", height: "8vh"}}>
                    <img src="../../placeholder_image.jpeg" height="50px" width="50px" style={{position: "relative", margin: "auto"}}/>
                    <NavLink to="/" style={{fontSize:24, margin: "auto"}}>Edward Ng</NavLink>
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