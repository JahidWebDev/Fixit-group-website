import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
import Jaguar from "./Components/Jaguar/Jaguar";
import JaguarDetails from "./Components/JaguarDetails/JaguarDetails";
import Careers from "./Components/Careers/Careers";
import Contactus from "./Components/Contactus/Contactus";
import Motul from "./Components/Motul/Motul";
import MotulDetails from "./Components/MotulDetails/MotulDetails";
import ScrollToTop from "./Components/ScrollToTop";

// ✅ Correct import path
import video from "./assets/LoadingpageAnimation2.mp4";
import Robinson from "./Components/Robinson/Robinson";

// ================= Preloader ==================
function Preloader() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ y: 30, opacity: 0.2, filter: "brightness(50%)" }}
        animate={{
          opacity: [0.8, 0.2, 0.8],
          filter: ["brightness(120%)", "brightness(50%)", "brightness(120%)"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="relative z-10 h-[280px] w-[200px]"
        />
      </motion.div>
    </motion.div>
  );
}

// ================= Home (Main Website) ==================
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

// ================= Main App ==================
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preloader duration
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="loader" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ourbusiness" element={<OurBusiness />} />
              <Route path="/drfixit" element={<Drfixit />} />
              <Route path="/productdetails/:id" element={<ProductDetails />} />
              <Route path="/admixture" element={<Admixture />} />
              <Route path="/importing" element={<Importing />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/jaguar" element={<Jaguar />} />
              <Route path="/jaguardetails/:id" element={<JaguarDetails />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contactus />} />
              <Route path="/motul" element={<Motul />} />
              <Route path="/motuldetails/:id" element={<MotulDetails />} />
              <Route path="/robinson" element={<Robinson/>} />
            </Routes>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
