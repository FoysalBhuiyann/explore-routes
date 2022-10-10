import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
{ path: '/home', element: <Home></Home>},
{ path: '/about', element: <About></About>},
{ path: '/', element: <div>This is Default Page</div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
