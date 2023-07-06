import ReactDOM from 'react-dom/client'
import ChatProvider from './Context/ChatProvider'
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <BrowserRouter>
     <ChatProvider>
      <App />
     </ChatProvider>
   </BrowserRouter>
  </ChakraProvider>
  
  ,
);
