import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contato from './pages/Contato';
import Conversor from './pages/conversor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contato" element={<Contato />} />
          <Route path="conversor" element={<Conversor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;