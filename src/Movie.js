import {useState,useEffect} from 'react';
import MovieComp from './components/MovieComp'
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    } from "react-router-dom";
function Movie(){
    return(
        <Router>
            <Routes>
                <Route path="/hello"element={<h1>Hello</h1>}/>
                <Route path="/movie"  element={<Detail/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    )
    
}
export default Movie;