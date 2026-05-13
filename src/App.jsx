import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Conversor from "./pages/conversor";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Você pode adicionar outras rotas aqui no futuro */}
        <Route path="/conversor" element={<Conversor />} />
      </Routes>
    </BrowserRouter>
  );
}
