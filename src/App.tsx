import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/src/pages/Home";
import PrivacyPolicy from "@/src/pages/PrivacyPolicy";
import Terms from "@/src/pages/Terms";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Toaster } from "@/src/components/ui/sonner";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
