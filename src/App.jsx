import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Hero from "./Components/Navbar/Hero";
import Business from "./Components/Business/Business";
import Employees from "./Components/Employees/Employees";
import Admixture from "./Components/Admixture/Admixture";
import Importing from "./Components/Importing/Importing";
import Footer from "./Components/Footer/Footer";
import OurBusiness from "./Components/Our-Business/OurBusiness";
import DrFixit from "./Components/Dr-Fixit/drfixit";

function Home() {
  return (
    <>
      <Hero />
      <Business />
      <Employees />
      <Admixture />
      <Importing />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-business" element={<OurBusiness />} />
        <Route path="/dr-fixit" element={<DrFixit />} />
        <Route path="/admixture" element={<Admixture />} />
        <Route path="/importing" element={<Importing />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
