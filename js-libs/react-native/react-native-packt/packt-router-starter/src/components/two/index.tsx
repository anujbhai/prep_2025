import { Outlet, type RouteObject } from "react-router-dom";
import First from "./first";
import Second from "./second";
import Redirect from "../../Redirect";

const routes: RouteObject = {
  path: "/two",
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <Redirect path="/one/1" />
    },
    {
      path: "1",
      element: <First />
    },
    {
      path: "2",
      element: <Second />
    }
  ]
}

export default routes;

