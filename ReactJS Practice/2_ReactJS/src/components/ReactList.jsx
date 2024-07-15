import React from 'react'
import ReactHome from './ReactHome'
import ReactComponents from './ReactComponents'
import ReactProps from './ReactProps'
import ReactEvents from './ReactEvents'
import ReactImages from './ReactImages'
import ReactConditionalRendering from './ReactConditionalRendering'
import ReactListExplain from './ReactListExplain'
import ReactForms from './ReactForms'
import Navbar from './Navbar'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import { createBrowserRouter, RouterProvider, Route, Router } from 'react-router-dom'
import About from '../pages/About'
import ReactStyling from './ReactStyling'
import ReactHooks from './ReactHooks'
import ReactuseState from './ReactuseState'
import ReactuseEffect from './ReactuseEffect'
import ReactuseContext from './ReactuseContext'
import ReactuseRef from './ReactuseRef'
import ReactuseReducer from './ReactuseReducer'
import ReactuseMemo from './ReactuseMemo'
import ReactcustomHook from './ReactcustomHook'


export const ReactList = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navbar/>,
            children: [
                {
                    path: "/about",
                    element : <About/>
                },
                {
                    path: "/contact",
                    element : <Contact/>
                },
                {
                    path: "/login",
                    element : <Login/>
                },
                {
                    path: "/home",
                    element : <Home/>
                },
            ]
        }
    ])


    return (
        <ul>
            <li><h2>What is react?</h2></li>
            <ReactHome/>
            <br /> <hr />

            <li><h2>React Component</h2></li>
            <ReactComponents/>
            <br /> <hr />

            <li><h2>React Props</h2></li>
            <ReactProps name="Hey, I am Prop"/>
            <br /> <hr />

            <li><h2>React Events</h2></li>
            <ReactEvents/>
            <br /> <hr />

            <li><h2>React Adding Images</h2></li>
            <ReactImages/>
            <br /> <hr />

            <li><h2>React Conditional Rendering</h2></li>
            <ReactConditionalRendering/>
            <br /> <hr />

            <li><h2>React Lists</h2></li>
            <ReactListExplain/>
            <br /> <hr />

            <li><h2>React Forms</h2></li>
            <ReactForms/>
            <br /> <hr />

            <li><h2>React Router</h2></li>
            <RouterProvider router={router} />
            <br /> <hr />

            <li><h2>React Memo</h2></li>

            <br /> <hr />

            <li><h2>Styling React Using CSS</h2></li>
            <ReactStyling/>
            <br /> <hr />

            <li><h2>React Hooks</h2>
            <ReactHooks/>
            <br /> <hr />

                <ol>

                    <li><h3>React useState Hook</h3></li>
                    <ReactuseState/>
                    <br /> <hr />

                    <li><h3>React useEffect Hooks</h3></li>
                    <ReactuseEffect/>
                    <br /> <hr />

                    <li><h3>React useContext Hook</h3></li>
                    <ReactuseContext/>
                    <br /> <hr />

                    <li><h3>React useRef Hook</h3></li>
                    <ReactuseRef/>
                    <br /> <hr />

                    <li><h3>React useReducer Hook</h3></li>
                    <ReactuseReducer/>
                    <br /> <hr />

                    <li><h3>React useCallback Hook</h3></li>

                    <br /> <hr />

                    <li><h3>React useMemo Hook</h3></li>
                    <ReactuseMemo/>
                    <br /> <hr />

                    <li><h3>React Custom Hooks</h3></li>
                    <ReactcustomHook/>
                    <br /> <hr />

                </ol>
            </li>
        </ul>
    )
}

