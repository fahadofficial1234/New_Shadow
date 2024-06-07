import logo from './logo.svg';
import './App.css';
import Main from './Views/Pages/Main';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import DownloadPage from './Views/Pages/DownloadPage';
import SellerPage from './Views/Pages/Seller_Page';

function App() { 
  const router  = createBrowserRouter([   
    { 
      path : "/", 
      element  : 
        <Main />
    },  
    { 
      path : "/download", 
      element  : <DownloadPage />
    },  
    { 
      path : "/whitelabel",  
      element : <SellerPage />
    }
  ]); 

  return (
    <Main />
  );
}

export default App;
