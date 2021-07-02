import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal';

import { GlobalStyle } from './styles/global'
import { Routes } from './routes';

import { AuthProvider } from './hooks/auth';

Modal.setAppElement('#root');

export function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <Routes />
        <ToastContainer autoClose={3000} />
      </AuthProvider>
    </BrowserRouter>
  );
}

