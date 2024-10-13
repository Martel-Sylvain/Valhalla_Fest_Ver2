import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Infos from './Pages/Infos';
import LineUp from './Pages/LineUp';
import RunningOrder from './Pages/RunningOrder';
import Tickets from './Pages/Tickets';
import MainLayout from './Components/MainLayout/MainLayout';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/Infos" element={<MainLayout><Infos /></MainLayout>} />
        <Route path="/LineUp" element={<MainLayout><LineUp /></MainLayout>} />
        <Route path="/RunningOrder" element={<MainLayout><RunningOrder /></MainLayout>} />
        <Route path="/Tickets" element={<MainLayout><Tickets /></MainLayout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

