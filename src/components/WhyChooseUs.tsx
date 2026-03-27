import { motion } from "motion/react";
import { CheckCircle2, Star, Users, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const reasons = [
  {
    title: "Expert Faculty",
    description: "Our teachers are highly qualified with years of experience in their respective subjects.",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Result-Oriented Approach",
    description: "We focus on conceptual clarity and regular practice to ensure top academic results.",
    icon: Star,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Personalized Attention",
    description: "Small batch sizes allow our teachers to focus on every student's individual needs.",
    icon: HeartHandshake,
    color: "bg-rose-50 text-rose-600",
  },
  {
    title: "Modern Infrastructure",
    description: "Our classrooms are equipped with modern teaching aids and a comfortable environment.",
    icon: ShieldCheck,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Digital Resources",
    description: "Students get access to our online portal for study materials, notes, and test series.",
    icon: Zap,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Regular Assessments",
    description: "Weekly tests and monthly progress reports help track and improve performance.",
    icon: CheckCircle2,
    color: "bg-indigo-50 text-indigo-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            The <span className="text-blue-600">Vidyapeeth Advantage</span> for Your Education
          </h2>
          <p className="text-lg text-slate-600">
            We are committed to providing the best learning experience and support system 
            to help our students excel in their academic journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-0" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Ready to Start Your <span className="text-blue-400">Success Story</span> With Us?
              </h3>
              <p className="text-slate-400 text-lg mb-8">
                Join Vidyapeeth today and take the first step towards a brighter future. 
                Our admissions are currently open for the upcoming academic session.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all"
                >
                  Enroll Now
                </button>
                <button 
                  onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all"
                >
                  View All Courses
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center">
                <p className="text-3xl font-bold text-white mb-1">98%</p>
                <p className="text-slate-400 text-sm">Success Rate</p>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center">
                <p className="text-3xl font-bold text-white mb-1">5000+</p>
                <p className="text-slate-400 text-sm">Students</p>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center">
                <p className="text-3xl font-bold text-white mb-1">15+</p>
                <p className="text-slate-400 text-sm">Years Exp</p>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center">
                <p className="text-3xl font-bold text-white mb-1">24/7</p>
                <p className="text-slate-400 text-sm">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
