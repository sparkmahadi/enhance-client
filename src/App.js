import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import router from './routes/router';

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router}>
      <ToastContainer position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
      </RouterProvider>
    </div>
  );
}

export default App;
