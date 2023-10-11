import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App overflow-x-hidden">
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
