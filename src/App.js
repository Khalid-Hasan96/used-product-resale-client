import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router/Router';
import bg from './assets/login-bg.png';


function App() {
  return (
    <div style={
      {
        background: `url(${bg})`,
        backgroundSize: 'cover'
      }
    }>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
