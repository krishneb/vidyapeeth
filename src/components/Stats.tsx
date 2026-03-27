import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Users, Star, Clock, Heart } from "lucide-react";

const stats = [
  { label: "Students Enrolled", value: 5000, suffix: "+", icon: Users },
  { label: "Success Rate", value: 98, suffix: "%", icon: Star },
  { label: "Years of Experience", value: 15, suffix: "+", icon: Clock },
  { label: "Expert Support", value: 24, suffix: "/7", icon: Heart },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="bg-blue-600 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center text-white"
            >
              <div className="bg-white/10 p-4 rounded-2xl mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <p className="text-4xl md:text-5xl font-bold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
