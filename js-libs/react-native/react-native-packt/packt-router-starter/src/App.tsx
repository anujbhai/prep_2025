import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import UsersContainer from './components/user-module/users-container';
// import UserContainer from './components/user-module/user-container';
// import { fetchUser } from './api';
import Layout from './components/layout';
import First from './components/one/first';
import Second from './components/one/second';
import Echo from './components/echo';
// import routeOne from './components/one';
// import routeTwo from './components/two';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <UsersContainer />,
  //   errorElement: <p>Route not found</p>,
  // },
  // {
  //   path: "/users/:id",
  //   element: <UserContainer />,
  //   errorElement: <p>User not found</p>,
  //   loader: async ({params}) => {
  //     const user = await fetchUser(Number(params.id));
  //     return {user};
  //   },
  // }
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/first",
        element: <First />
      },
      {
        path: "/second",
        element: <Second />
      },
    ]
  },
  {
    path: "/echo",
    element: <Echo />,
  },
  {
    path: "/echo/:msg",
    element: <Echo />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
