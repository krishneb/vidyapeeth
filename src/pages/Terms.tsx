import { motion } from "motion/react";

export default function Terms() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-32"
    >
      <div className="max-w-4xl mx-auto bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
        <div className="prose prose-slate max-w-none flex flex-col gap-6 text-slate-600 leading-relaxed">
          <p>Last updated: March 26, 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Vidyapeeth website, you agree to be bound by these Terms and Conditions. 
              If you do not agree with any part of these terms, you must not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use of the Website</h2>
            <p>
              The content of the pages of this website is for your general information and use only. It is subject to change without notice. 
              Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, 
              completeness or suitability of the information and materials found or offered on this website for any particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Intellectual Property</h2>
            <p>
              This website contains material which is owned by or licensed to us. This material includes, but is not limited to, 
              the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the 
              copyright notice, which forms part of these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Student Conduct</h2>
            <p>
              Students enrolled in Vidyapeeth are expected to maintain a high standard of conduct. 
              Any form of academic dishonesty, harassment, or disruption of the learning environment 
              may result in immediate termination of enrollment without refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
            <p>
              Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. 
              It shall be your own responsibility to ensure that any products, services or information available through this 
              website meet your specific requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Governing Law</h2>
            <p>
              Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
              <br />
              Email: legal@vidyapeeth.com
              <br />
              Address: 123 Academic Plaza, Education Street, New Delhi, 110001
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
