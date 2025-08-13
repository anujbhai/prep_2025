import { type ReactNode, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [ImportComponent, setImportComponent] = useState<() => ReactNode>(
    () => () => null
  );

  useEffect(() => {
    import("./components/import-component").then((module) => {
      setImportComponent(() => module.default);
    });
  }, []);

  return <ImportComponent />
}

export default App
