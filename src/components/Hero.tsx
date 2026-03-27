import { Button } from "@/src/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
          alt="Coaching Institute"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold border border-blue-100">
              <CheckCircle2 className="w-4 h-4" />
              <span>Admissions Open for 2026-27</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Empowering <span className="text-blue-600">Future Leaders</span> with Quality Education
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Vidyapeeth is a premier coaching institute dedicated to academic excellence. 
              We provide specialized coaching for Class 10, 12, and various streams including 
              Science, Commerce, and Arts.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Button 
                onClick={() => scrollToSection("courses")}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg h-auto group"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="rounded-full px-8 py-6 text-lg h-auto border-slate-200 hover:bg-slate-50"
              >
                Enroll Now
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 border-t border-slate-100 pt-8">
              <div>
                <p className="text-2xl font-bold text-slate-900">Class 10</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Secondary</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">Class 12</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Hr. Secondary</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">All Streams</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Sci / Com / Arts</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop"
                alt="Founder"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600/10 rounded-full -z-10" />
            
            <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px] border border-slate-100">
              <p className="text-blue-600 font-bold text-3xl">15+</p>
              <p className="text-slate-600 text-sm font-medium">Years of Academic Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
