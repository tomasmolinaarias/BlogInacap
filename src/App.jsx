import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Horario } from "./components/Horario";
import { Navbar } from "./components/Navbar";
import { Semestres } from "./components/Semestres";
import { Home } from "./pages/Home";
import { FormacionCiudadana } from "./pages/PrimerSemtre/FormacionCiudadana";
import { FundamentoDateBase } from "./pages/PrimerSemtre/FundamentoDateBase";
import { FundamentosDeHyS } from "./pages/PrimerSemtre/FundamentosDeHyS";
import { IntroducionProgramacion } from "./pages/PrimerSemtre/IntroducionProgramacion";
import { ResolucionProblemasA } from "./pages/PrimerSemtre/ResolucionProblemasA";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/semetres" element={<Semestres />} />
        <Route path="/FormacionCiudadana" element={<FormacionCiudadana />} />
        <Route
          path="/ResolucionDeProblemasAlgebraico"
          element={<ResolucionProblemasA />}
        />
        <Route
          path="/FundamentosDeBaseDeDatos"
          element={<FundamentoDateBase />}
        />
        <Route
          path="/IntroducionProgramacion"
          element={<IntroducionProgramacion />}
        />
        <Route
          path="/FundamentosDeHardwareySofware"
          element={<FundamentosDeHyS />}
        />
        <Route path="/Horario" element={<Horario />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
