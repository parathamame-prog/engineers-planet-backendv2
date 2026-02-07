import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { base44 } from '@/api/base44Client';
import { toast } from "sonner";
import { 
  Search, 
  FileCheck, 
  UserCheck, 
  Handshake, 
  Shield, 
  Clock, 
  ArrowRight,
  Send,
  Loader2,
  CheckCircle2
} from 'lucide-react';

const vettingSteps = [
  {
    icon: Search,
    title: "Technical Screening",
    description: "Rigorous assessment of technical skills by our engineering team, including practical problem-solving tests."
  },
  {
    icon: FileCheck,
    title: "Credential Verification",
    description: "Complete verification of educational background, certifications, and professional experience."
  },
  {
    icon: UserCheck,
    title: "Soft Skills Assessment",
    description: "Evaluation of communication abilities, cultural adaptability, and team collaboration potential."
  },
  {
    icon: Handshake,
    title: "Perfect Match",
    description: "Strategic matching based on technical requirements, company culture, and long-term fit."
  }
];

const disciplines = ["Electronic", "Mechanical", "Civil", "Software", "Automation", "Robotics"];

export default function CompaniesSection() {
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
    engineering_discipline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await base44.entities.CompanyInquiry.create(formData);
    
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success("Thank you! We'll be in touch within 24 hours.");
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ company_name: '', email: '', engineering_discipline: '', message: '' });
    }, 3000);
  };

  return (
    <section id="companies" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            For Companies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Find Your Next <span className="text-blue-600">Star Engineer</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our rigorous vetting process ensures you only meet candidates who are 
            technically qualified and culturally prepared for success.
          </p>
        </motion.div>

        {/* Vetting Process */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-slate-900 text-center mb-10">
            Our Technical Vetting Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {vettingSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-bold text-blue-500 mb-2 block">STEP {index + 1}</span>
                    <h4 className="font-semibold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow connector */}
                {index < vettingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits + Form Row */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Why Partner with TechPonte?
            </h3>
            
            <div className="space-y-6">
              {[
                { icon: Shield, title: "Pre-Vetted Excellence", desc: "Every candidate undergoes rigorous technical testing by our engineering team." },
                { icon: Clock, title: "Reduced Hiring Time", desc: "Average time-to-hire of just 3 weeks compared to industry average of 8+ weeks." },
                { icon: Handshake, title: "Cultural Integration Support", desc: "We provide ongoing support to ensure smooth onboarding and cultural adaptation." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{benefit.title}</h4>
                    <p className="text-slate-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trusted companies */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">Trusted by leading Italian companies</p>
              <div className="flex gap-8 items-center opacity-50">
                {['Pirelli', 'Leonardo', 'Fiat', 'Luxottica'].map((company) => (
                  <span key={company} className="text-lg font-bold text-slate-400">{company}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-t-lg">
                <CardTitle className="text-white flex items-center gap-3">
                  <Send className="w-5 h-5 text-blue-400" />
                  Request Engineers
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Request Submitted!</h4>
                    <p className="text-slate-600">Our team will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="company_name" className="text-slate-700">Company Name</Label>
                      <Input
                        id="company_name"
                        value={formData.company_name}
                        onChange={(e) => setFormData({...formData, company_name: e.target.value})}
                        placeholder="Your company name"
                        required
                        className="mt-1.5"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-slate-700">Business Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="name@company.com"
                        required
                        className="mt-1.5"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="discipline" className="text-slate-700">Engineering Discipline Required</Label>
                      <Select 
                        value={formData.engineering_discipline} 
                        onValueChange={(value) => setFormData({...formData, engineering_discipline: value})}
                        required
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select discipline" />
                        </SelectTrigger>
                        <SelectContent>
                          {disciplines.map((disc) => (
                            <SelectItem key={disc} value={disc}>{disc} Engineering</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-slate-700">Additional Requirements (Optional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about the role, required experience level, specific skills..."
                        className="mt-1.5 h-24"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}