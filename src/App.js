import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Welcome from './Pages/Welcome';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Blog from './Pages/Blog';
import Single from './Pages/Single';


function Layout() {
  
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/web-journal',
    element: <Layout />,
    children: [
      {
        path: '/web-journal',
        element: <Welcome />
      },
      {
        path: '/web-journal/register',
        element: <Register />
      },
      {
        path: '/web-journal/login',
        element: <Login />
      },
      {
        path: '/web-journal/user/:user',
        element: <Blog />
      },
      {
        path: '/web-journal/user/:user/:id',
        element: <Single />
      },
      {
        path: '/web-journal/test',
        element: <div>This is a test page.</div>
      }
    ]
  }
]);

function App() {
  
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
