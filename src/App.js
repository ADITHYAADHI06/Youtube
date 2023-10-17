import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './store/store';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Watchpage from './components/Watchpage';
import Main from "./components/Main"

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
    ],
  }
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App overflow-x-hidden">
        <Head />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
