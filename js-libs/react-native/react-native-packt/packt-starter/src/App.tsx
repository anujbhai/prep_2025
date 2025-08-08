// import MyComponent from './components/my-component';
import './App.css'
import Monolithic from './components/monolithic';
import Layout from './layout';
// import MyButton from './components/my-button';
// import DynamicText from './components/dynamic-text';
// import MappedData from './components/mapped-data';
// import ContainerPropElement from './containers/prop-elements';
// import BasicState from './hooks/builtin/basic-state';
// import ApiDataFetching from './hooks/builtin/api-data-fetching';
// import CleanupTimerEffect from './hooks/builtin/cleanup-effects';
// import ToggleCpmponent from './hooks/builtin/toggle-component';
// import CounterDisplay from './hooks/custom/counter-display';
// import CounterConsumer from './hooks/custom/counter-consumer';
// import MyProvider from './hooks/builtin/contexts/my-context';

function App() {
  // const appState = {
  //   btnText: 'Click',
  //   items: ['First item', 'Second item', 'Third item'],
  // };

  return (
    <>
      <section>
        <header>
          <h1>App header</h1>
        </header>

        <nav>
          <a href="#">Nav item</a>
        </nav>

        <main>
          <p>The main content...</p>

          <Layout>
            <>
              <Monolithic />
              {/*<MyComponent />
              <MyButton>My button text</MyButton>
              <DynamicText />
              <MappedData />
              <ContainerPropElement
                btnText={appState.btnText}
                items={appState.items}
              />
              <BasicState />
              <ApiDataFetching />
              <CleanupTimerEffect />
              <ToggleCpmponent />

              <MyProvider>
                <CounterDisplay />
                <CounterConsumer />
              </MyProvider>*/}
            </>
          </Layout>
        </main>

        <footer>
          <small>&copy; 2025</small>
        </footer>
      </section>
    </>
  )
}

export default App
