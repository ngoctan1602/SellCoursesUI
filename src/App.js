
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { adminRouter } from './router/router';
import AdminLayout from './components/Layout/AdminLayout';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'reactjs-popup/dist/index.css';

function App() {
  const notifySuccess = (message) => toast.success(message, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const notifyWarning = (message) => toast.warning(message, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const notifyError = (message) => toast.error(message, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const [loading, setLoading] = useState(false);
  const updateLoading = (isLoading) => {
    setLoading(isLoading)
  }
  return (
    <Router>
      <div className="font-Amiro bg-bg h-screen overflow-x-hidden relative">
        <Routes>
          {
            adminRouter.map((route, index) => {
              return <Route
                key={index}
                path={route.path}
                element={
                  <AdminLayout >
                    <route.component notifySuccess={notifySuccess} notifyError={notifyError} notifyWarning={notifyWarning}
                      loading={loading} updateLoading={updateLoading}
                    />
                  </AdminLayout>
                }
              />
            }
            )
          }
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </Router>
  );
}

export default App;
