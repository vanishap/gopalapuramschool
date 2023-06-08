import './App.css';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Error from './Components/Error';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Outlet />
      <Footer />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
  path:"/",
  element: <App />,
  errorElement:<Error /> ,
  children:[
    {
      path:"/",
      element:<HomePage />
    },
    {
    path:"/login",
    element:<Login />
    },
    {
    path:"/register",
    element:<Register />
    } 
  ]
  }  
]);

export default App;
