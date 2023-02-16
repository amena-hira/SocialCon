import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import About from '../Pages/About/About';
import Sections from '../Pages/Dashboard/Sections';
import Posts from '../Pages/shared/Posts/Posts';

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
                element: <Posts></Posts>
            },
            {
                path: '/about',
                element: <About></About>
            },

        ]
    }
])

export default routes;