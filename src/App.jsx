import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div> 
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  )
}

export default App
