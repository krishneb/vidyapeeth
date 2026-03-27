import { motion } from "motion/react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { BookOpen, Clock, CheckCircle2, ArrowRight } from "lucide-react";

const courseData = [
  {
    id: "courses-10",
    title: "Class 10 Board Prep",
    category: "Secondary",
    subjects: ["Mathematics", "Science", "Social Science", "English", "Languages"],
    duration: "1 Year",
    benefits: ["Comprehensive Syllabus Coverage", "Weekly Mock Tests", "Previous Year Paper Analysis"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "courses-12",
    title: "Class 12 Board Prep",
    category: "Higher Secondary",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
    duration: "1 Year",
    benefits: ["Deep Conceptual Learning", "JEE/NEET Foundation", "Regular Performance Reports"],
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "science",
    title: "Science Stream",
    category: "Specialized",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"],
    duration: "2 Years",
    benefits: ["Expert Faculty", "Lab Practical Support", "Competitive Exam Coaching"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "commerce",
    title: "Commerce Stream",
    category: "Specialized",
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "Informatics"],
    duration: "2 Years",
    benefits: ["Real-world Case Studies", "CA/CS Foundation", "Financial Literacy"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "arts",
    title: "Arts & Humanities",
    category: "Specialized",
    subjects: ["History", "Geography", "Political Science", "Sociology", "Psychology"],
    duration: "2 Years",
    benefits: ["Critical Thinking", "Writing Skills Workshop", "Civil Services Foundation"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
  },
];

export default function Courses() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Our Courses</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Choose Your <span className="text-blue-600">Path to Success</span>
          </h2>
          <p className="text-lg text-slate-600">
            We offer a wide range of courses tailored to meet the academic needs of students 
            from secondary to higher secondary levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map((course, index) => (
            <motion.div
              key={course.id}
              id={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white border-none px-3 py-1">
                      {course.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">{course.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Duration: {course.duration}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      Subjects Covered
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject) => (
                        <Badge key={subject} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-none">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Key Benefits</p>
                    <ul className="space-y-2">
                      {course.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-slate-900 hover:bg-blue-600 text-white group"
                  >
                    Enroll Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
