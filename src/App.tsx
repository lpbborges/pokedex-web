import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './hooks/auth';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App(): JSX.Element {
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
