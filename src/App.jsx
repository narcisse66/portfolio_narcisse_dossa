import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Stack from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProjectDetail from "./pages/Projects/components/ProjectDetail";
import Skills from "./pages/Skills/Skills";
import Web from "./pages/Web/Web";
import WebDetail from "./pages/Web/components/WebDetail"; 
import { i } from "framer-motion/client";

import Gallery from "./pages/Gallery/Gallery";
import GalleryDetail from "./pages/Gallery/components/GalleryDetail";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="web" element={<Web />} />
          <Route path="/web/:id" element={<WebDetail />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="skill" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
