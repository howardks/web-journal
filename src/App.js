import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Welcome from './Components/Welcome';
import Register from './Components/Register';
import Login from './Components/Login';


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
