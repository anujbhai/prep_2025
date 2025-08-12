import { Link, Outlet } from "react-router-dom";

const param = "From Param";
const query = new URLSearchParams({msg: "From Query"});

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Main</Link>
        <span> | </span>
        <Link to="/first">One</Link>
        <span> | </span>
        <Link to="/second">Two</Link>
        <span> | </span>
        <Link to={`echo/${param}`}>Echo Param</Link>
        <span> | </span>
        <Link to={`echo?${query.toString()}`}>Echo Query</Link>
        <span> | </span>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

