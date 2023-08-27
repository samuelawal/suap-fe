import './App.css';
import Home from './pages/Home';
import Join from './pages/Join';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Home/>
  },
{
  path: '/join-us',
  element: <Join/>
}])
  return (
    <>
   <RouterProvider router={router}/>
    </>
  );
}

export default App;
