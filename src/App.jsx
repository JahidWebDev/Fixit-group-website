import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Hero from "./Components/Navbar/Hero";
import Business from "./Components/Business/Business";
import Employees from "./Components/Employees/Employees";
import Admixture from "./Components/Admixture/Admixture";
import Importing from "./Components/Importing/Importing";
import OurBusiness from "./Components/OurBusiness/OurBusiness";
import Footer from "./Components/Footer/Footer";
import Drfixit from "./Components/Drfixit/Drfixit";
import ProductDetails from "./Components/ProductDetails/ProductDetails";




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
        <Route path="/ourbusiness" element={<OurBusiness />} />
        <Route path="/drfixit" element={<Drfixit />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/admixture" element={<Admixture />} />
        <Route path="/importing" element={<Importing />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
