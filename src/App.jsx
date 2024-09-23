import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Estilismo from './components/Estilismo/Estilismo';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estilismo-para-videoclips" element={<Estilismo />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
