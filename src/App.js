import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './store/store';


import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Watchpage from './components/Watchpage';
import Main from "./components/Main"
import ResultPage from './components/ResultPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
      {
        path: "results",
        element: <ResultPage />,
      },


    ],
  }
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App overflow-x-hidden">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
