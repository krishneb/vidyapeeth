import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Card, CardContent } from "@/src/components/ui/card";
import { MapPin, Phone, Mail, Send, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Message sent successfully!");
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Contact Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Get in <span className="text-blue-600">Touch With Us</span>
          </h2>
          <p className="text-lg text-slate-600">
            Have questions about our courses or admissions? Reach out to us 
            and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: MapPin, label: "Our Address", value: "123 Academic Plaza, Education Street, New Delhi, 110001" },
                { icon: Phone, label: "Phone Number", value: "+91 98765 43210 / +91 11 2345 6789" },
                { icon: Mail, label: "Email Address", value: "info@vidyapeeth.com / admissions@vidyapeeth.com" },
                { icon: Send, label: "Support Hours", value: "Mon - Sat: 9:00 AM - 7:00 PM" },
              ].map((item) => (
                <Card key={item.label} className="border-none shadow-sm bg-slate-50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-xl">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-slate-900 font-semibold leading-snug">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border-8 border-white h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.873441587347!2d77.22732107550085!3d28.63354407566418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd31a5555555%3A0x5555555555555555!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1711440000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vidyapeeth Location"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Send Us a Message</h3>
            
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12"
              >
                <div className="bg-emerald-100 p-6 rounded-full mb-6">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                <p className="text-slate-600">Thank you for reaching out. We will get back to you shortly.</p>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="mt-8 rounded-full px-8"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...register("name")}
                    className={errors.name ? "border-rose-500 focus-visible:ring-rose-500" : "border-slate-200 focus-visible:ring-blue-600"}
                  />
                  {errors.name && <p className="text-rose-500 text-xs font-medium">{errors.name.message}</p>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                  <Input
                    id="phone"
                    placeholder="+91 98765 43210"
                    {...register("phone")}
                    className={errors.phone ? "border-rose-500 focus-visible:ring-rose-500" : "border-slate-200 focus-visible:ring-blue-600"}
                  />
                  {errors.phone && <p className="text-rose-500 text-xs font-medium">{errors.phone.message}</p>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={5}
                    {...register("message")}
                    className={errors.message ? "border-rose-500 focus-visible:ring-rose-500" : "border-slate-200 focus-visible:ring-blue-600"}
                  />
                  {errors.message && <p className="text-rose-500 text-xs font-medium">{errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6 text-lg h-auto mt-4 group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
