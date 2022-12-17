import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound.js'

import Project1 from './pages/Projects/Project-One'
import Project2 from './pages/Projects/Project-Two'
import Project3 from './pages/Projects/Project-Three'
import Project4 from './pages/Projects/Project-Four'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"             element={<Home />}              />
                <Route path="/404"          element={<NotFound/>}           />
                <Route path="*"             element={<Navigate to="/404"/>} />
                <Route path="/Projects/1"   element={<Project1/>}           />
                <Route path="/Projects/2"   element={<Project2/>}           />
                <Route path="/Projects/3"   element={<Project3/>}           />
                <Route path="/Projects/4"   element={<Project4/>}           />
            </Routes>
        </BrowserRouter>
    );
}