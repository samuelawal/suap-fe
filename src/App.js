import './App.css';
import Home from './pages/Home';
import Join from './pages/Join';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Respond from './pages/Respond';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Home/>
  },
{
  path: '/join-us',
  element: <Join/>
},
{
path: '/respond',
element: <Respond/>
}])
  return (
    <>
   <RouterProvider router={router}/>
    </>
  );
}

export default App;
