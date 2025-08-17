import { HashRouter, Routes, Route } from "react-router-dom";

import { ShapesBackground } from "./components/ShapesBackground";
import { Home } from "./pages/Home";
import { Aboutme } from "./pages/About";
import { ProjectsPage } from "./pages/Projects";
import { Contactme } from "./pages/Contact";
import { NotFoundPage } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ShapesBackground />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contactme />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
    </HashRouter>
  );
}

export default App;

