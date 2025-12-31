import { Routes, Route } from "react-router-dom";
 
import Home from "./pages/Home";
import About from "./pages/About";
 
import NotFound from "./pages/NotFound";
import MainLayout from "./pages/MainLayout";
import Contact from "./pages/Contactus";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
