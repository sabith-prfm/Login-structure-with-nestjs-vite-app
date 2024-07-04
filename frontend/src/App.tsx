import { ToastContainer } from 'react-toastify';
import Routes from './routes/routes'
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './pages/ErrorBoundary/ErrorBoundary';
import NotFoundPage from './pages/ErrorBoundary/NoFoundPage';

function App() {
  return (
    <div className="App">
      <ErrorBoundary
        fallbackUI={
          <NotFoundPage />
        }
      >
        <Routes />
        <ToastContainer />
      </ErrorBoundary>
    </div>
  )
}

export default App