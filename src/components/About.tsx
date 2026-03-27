import { motion } from "motion/react";
import { CheckCircle2, Target, Eye, History } from "lucide-react";

const features = [
  {
    title: "Our History",
    description: "Founded in 2010, Vidyapeeth has grown from a small tutoring center to a leading coaching institute.",
    icon: History,
  },
  {
    title: "Our Mission",
    description: "To provide high-quality education and mentorship that empowers students to achieve their academic goals.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description: "To be the most trusted name in academic coaching, recognized for excellence and innovation.",
    icon: Eye,
  },
];

export default function About() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                alt="About Vidyapeeth"
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-3xl shadow-xl max-w-[240px]">
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-blue-100 text-sm font-medium">Commitment to Student Success and Growth</p>
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
              <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">About Our Institute</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Dedicated to <span className="text-blue-600">Academic Excellence</span> Since 2010
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Vidyapeeth is more than just a coaching center; it's a community of learners and mentors. 
                We believe in a holistic approach to education that goes beyond textbooks, focusing on 
                conceptual clarity and critical thinking.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <p className="font-bold text-slate-900 text-lg">Our Teaching Methodology:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Conceptual Clarity First",
                  "Regular Assessment Tests",
                  "Personalized Mentorship",
                  "Doubt Clearing Sessions",
                  "Digital Study Materials",
                  "Performance Tracking",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
