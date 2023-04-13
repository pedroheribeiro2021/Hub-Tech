import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactModal from 'react-modal';
import { Providers } from './components/providers/providers';
import { AppRoutes } from './Routes';


ReactModal.setAppElement('#root')

function App() {

  return (
    <main>
      <ToastContainer/>
      <Providers>
        <AppRoutes/>
      </Providers>
    </main>
  )
}

export default App;
