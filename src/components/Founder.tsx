import { motion } from "motion/react";
import { GraduationCap, Award, Briefcase, Calendar, Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/card";

export default function Founder() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop"
                alt="Dr. Rajesh Kumar"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-600/10 rounded-full -z-10" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/10 rounded-full -z-10" />
            
            <div className="absolute bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 hidden lg:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-lg">Best Educator Award</p>
                  <p className="text-slate-500 text-sm">National Education Summit 2023</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Meet Our Founder</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 leading-tight">
                Dr. Rajesh Kumar
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-6 italic">Founder & Head Teacher</p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                "Education is not just about learning facts, but training the mind to think. 
                At Vidyapeeth, we strive to ignite curiosity and foster a lifelong passion for learning 
                in every student who walks through our doors."
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: GraduationCap, label: "Qualifications", value: "Ph.D. in Mathematics, M.Sc. Physics" },
                { icon: Briefcase, label: "Career Background", value: "Ex-Professor at Central University" },
                { icon: Calendar, label: "Experience", value: "20+ Years in Academic Coaching" },
                { icon: Award, label: "Expertise", value: "Advanced Calculus & Quantum Physics" },
              ].map((item) => (
                <Card key={item.label} className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-slate-900 font-semibold leading-snug">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-4">
                <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:bg-blue-600 hover:text-white transition-all text-slate-600">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:bg-blue-600 hover:text-white transition-all text-slate-600">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:bg-blue-600 hover:text-white transition-all text-slate-600">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="flex flex-col">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Contact Directly</p>
                <p className="text-slate-900 font-bold">rajesh.kumar@vidyapeeth.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
