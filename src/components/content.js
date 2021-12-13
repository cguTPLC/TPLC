import React from 'react'
import {Route} from 'react-router-dom'
import Home from './pages/Home.js';
import About from './pages/About.js';
import Users from './pages/Users.js';
import Footer from './footer.js'
import "./content.css"

export default function Content (){
    
    return (
        <div className="content">
            <Route path="/TPLC" exact component={Home} />
            <Route path="/TPLC/about" component={About} />
            <Route path="/TPLC/users" component={Users} />
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            
        </div>
    )
}
