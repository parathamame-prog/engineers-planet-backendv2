import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Cpu, Mic2, CheckCircle, Linkedin } from 'lucide-react';

const founders = [
  {
    name: "Technical Director",
    role: "Electronic Engineer & Co-Founder",
    icon: Cpu,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966c55e33fec98be46cc89e/2811d52d6_ChatGPTImageJan27202610_23_32PM.png",
    description: "With over 15 years in electronic engineering and semiconductor design, our Technical Director brings unparalleled expertise in vetting engineering talent.",
    focus: "Technical Vetting & Skill Verification",
    highlights: [
      "Expert in technical assessments",
      "Deep industry connections",
      "Engineering-first approach"
    ]
  },
  {
    name: "Maria Letizia Somma",
    role: "Head of Communications & Co-Founder",
    icon: Mic2,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6966c55e33fec98be46cc89e/d82e0790f_maria-letizia-sito-719x1024.jpg",
    description: "Doctor Maria Letizia Somma is a multilingual HR Manager and Engineering Head Hunter with a top-honors degree in Foreign Languages. Combining extensive international experience (particularly in Paris) with technical expertise, she offers specialized recruitment, business coaching, and language training for professionals. Her diverse skill set also encompasses interpreting, university-level teaching, and public relations for the interior design sector.",
    focus: "Cultural Integration & Communications",
    highlights: [
      "Media & PR expertise",
      "Soft skills coaching",
      "Cultural liaison services"
    ]
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Your Partner for <span className="text-blue-600">Working in Italy</span>
          </h2>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-xl">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
                <p>
                  We are a professional service company dedicated to supporting engineers who wish to work and build their careers in Italy.
                </p>
                <p>
                  Our core focus is providing complete documentation and administrative support, helping engineers navigate the complex processes required for employment in Italy. From initial applications to final approvals, we simplify every step so our clients can focus on their professional goals.
                </p>
                <p>
                  We work with engineers from different disciplines, connecting them with opportunities and ensuring that all required documents meet Italian regulations and standards. Our services are designed to be clear, reliable, and efficient, tailored to the real needs of international engineers.
                </p>
                <p>
                  With a strong understanding of both technical professions and Italian administrative procedures, we act as a trusted partner throughout the relocation and employment process.
                </p>
                <p className="font-semibold text-slate-900">
                  Our mission is to make working in Italy accessible, structured, and stress-free for engineers worldwide.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Value proposition */}
        <motion.div 
          className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Why Engineers Planet is Different
          </h3>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            We're not just recruiters—we're engineers who understand your challenges, and communicators 
            who ensure smooth cultural transitions. This unique combination allows us to match not just 
            skills, but people who will thrive in their new environment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}