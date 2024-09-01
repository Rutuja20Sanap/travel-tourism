import ReactDOM from 'react-dom/client';
import Home from "./View/home/Home";
import About from './View/about/About';
import Contact from "./View/contact/Contact";
import Services from "./View/services/Services";
import "./index.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router= createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
     path:"/About",
    element:<About/>,
  },
  {
    path:"/Services",
   element:<Services/>,
 },
  {
     path:"/Contact",
    element:<Contact/>,
  }
  
])

root.render(<RouterProvider router={router}/>)
