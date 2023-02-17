import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import About from '../Pages/About/About';
import Login from '../Pages/Authentication/Login';
import Register from '../Pages/Authentication/Register';
import Sections from '../Pages/Dashboard/Sections';
import Posts from '../Pages/shared/Posts/Posts';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element: <Sections></Sections>
            },
            {
                path: '/media',
                element: <PrivateRoute><Posts></Posts></PrivateRoute>
            },
            {
                path: '/about',
                element: <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },


        ]
    }
])

export default routes;