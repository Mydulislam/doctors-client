import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className='max-w-[1040px] mx-auto p-4 lg:p-0'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

