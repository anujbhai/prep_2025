// import { type ReactNode, useEffect, useState } from 'react'
import {
  lazy,
  Suspense,
  // useState,
  // type ChangeEventHandler
} from 'react'
import './App.css'
// import FeaturePage from './page/feature-page'
import { PulseLoader } from 'react-spinners';
import { Link, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// const LazyComponent = lazy(() => import("./components/lazy-component"));

// type ShowComponentPropsType = {
//   name: string;
// };

const Loader = () => {
  return (
    <div
      style={{
        height: 'calc(100vh)',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PulseLoader color="lightblue" />
    </div>
  );
};

const First = lazy(() => import("./components/other-feature-component/first"));
const Second = lazy(() => import("./components/other-feature-component/second"));

// function ShowComponent(props: ShowComponentPropsType) {
//   const {name} = props;
//
//   switch (name) {
//     case "first":
//       return <First />
//
//     case "second":
//       return <Second />
//
//     default:
//       return null;
//   }
// }

function Layout() {
  return (
    <section>
      <nav>
        <span>
          <Link to="first">First</Link>
        </span>
        <span> | </span>
        <span>
          <Link to="second">Second</Link>
        </span>
      </nav>

      <section>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
    </section>
  );
}

function App() {
  // const [ImportComponent, setImportComponent] = useState<() => ReactNode>(
  //   () => () => null
  // );
  //
  // useEffect(() => {
  //   import("./components/import-component").then((module) => {
  //     setImportComponent(() => module.default);
  //   });
  // }, []);

  // return <ImportComponent />

  // return <LazyComponent />;

  // const [component, setComponent] = useState("");

  return (
    <>
      {/*Suspense fallback={<Loader />}>
        <FeaturePage />
      </Suspense>*/}

      {/*<label>
        Load Component: {""}
        <select
          value={component}
          onChange={(e) => setComponent(e.target.value)}
        >
          <option value="">None</option>
          <option value="first">First</option>
          <option value="second">Second</option>
        </select>
      </label>*/}

      {/*<Suspense fallback={<Loader />}>
        <ShowComponent name={component} />
      </Suspense>*/}
      
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/first" element={<First />} />
            <Route path="/second" element={<Second />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
