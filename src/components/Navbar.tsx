import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const courses = [
  { title: "Class 10", href: "/#courses-10", description: "Comprehensive foundation for secondary board exams." },
  { title: "Class 12", href: "/#courses-12", description: "Advanced preparation for higher secondary boards." },
  { title: "Science Stream", href: "/#science", description: "Physics, Chemistry, Biology, and Mathematics." },
  { title: "Commerce Stream", href: "/#commerce", description: "Accountancy, Business Studies, and Economics." },
  { title: "Arts Stream", href: "/#arts", description: "History, Geography, Political Science, and more." },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("/#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            VIDYA<span className="text-blue-600">PEETH</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button onClick={() => scrollToSection("about")} className={navigationMenuTriggerStyle()}>
                  About
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {courses.map((course) => (
                      <li key={course.title}>
                        <NavigationMenuLink
                          onClick={() => scrollToSection(course.href)}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 text-left w-full"
                        >
                          <div className="text-sm font-medium leading-none">{course.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                            {course.description}
                          </p>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button onClick={() => scrollToSection("contact")} className={navigationMenuTriggerStyle()}>
                  Contact
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
          >
            Enroll Now
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link to="/" className="text-lg font-medium py-2 border-b border-slate-50">
                Home
              </Link>
              <button
                onClick={() => scrollToSection("about")}
                className="text-lg font-medium py-2 border-b border-slate-50 text-left"
              >
                About
              </button>
              <div className="py-2">
                <p className="text-lg font-medium mb-2">Courses</p>
                <div className="grid grid-cols-1 gap-2 pl-4">
                  {courses.map((course) => (
                    <button
                      key={course.title}
                      onClick={() => scrollToSection(course.href)}
                      className="text-slate-600 py-1 text-left"
                    >
                      {course.title}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-lg font-medium py-2 border-b border-slate-50 text-left"
              >
                Contact
              </button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4">
                Enroll Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
