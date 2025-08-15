// import { type ReactNode, useEffect, useState } from 'react'
import { Suspense } from 'react'
import './App.css'
import FeaturePage from './page/feature-page'

// const LazyComponent = lazy(() => import("./components/lazy-component"));

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

  return (
    <Suspense fallback={"loading ..."}>
      <FeaturePage />
    </Suspense>
  );
}

export default App
