import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                VIDYA<span className="text-blue-400">PEETH</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Empowering students with quality education and expert mentorship since 2010. 
              Join us to unlock your full academic potential.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 transition-all text-slate-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 transition-all text-slate-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 transition-all text-slate-400 hover:text-white">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 transition-all text-slate-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full" />
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Home
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("courses")} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Our Courses
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("gallery")} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Our Courses
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full" />
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <button onClick={() => scrollToSection("courses-10")} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Class 10 Board Prep
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("courses-12")} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Class 12 Board Prep
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("science")} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Science Stream
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("commerce")} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Commerce Stream
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("arts")} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Arts & Humanities
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full" />
            </h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4 items-start">
                <div className="bg-blue-600/20 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-slate-400 text-sm">
                  123 Academic Plaza, Education Street, New Delhi, 110001
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-blue-600/20 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-slate-400 text-sm">
                  +91 98765 43210<br />+91 11 2345 6789
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-blue-600/20 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-slate-400 text-sm">
                  info@vidyapeeth.com<br />admissions@vidyapeeth.com
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Vidyapeeth. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/privacy-policy" className="text-slate-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
