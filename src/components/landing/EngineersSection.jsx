import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { base44 } from '@/api/base44Client';
import { toast } from "sonner";
import { 
  Cpu, 
  Cog, 
  Building, 
  Code, 
  Bot, 
  CircuitBoard,
  Upload,
  Loader2,
  CheckCircle2,
  MapPin,
  Briefcase,
  GraduationCap,
  Globe
} from 'lucide-react';

const disciplines = [
  { name: "Electronic", icon: CircuitBoard, color: "from-blue-500 to-blue-600" },
  { name: "Mechanical", icon: Cog, color: "from-slate-500 to-slate-600" },
  { name: "Civil", icon: Building, color: "from-amber-500 to-amber-600" },
  { name: "Software", icon: Code, color: "from-purple-500 to-purple-600" },
  { name: "Automation", icon: Cpu, color: "from-green-500 to-green-600" },
  { name: "Robotics", icon: Bot, color: "from-red-500 to-red-600" }
];

const benefits = [
  { icon: MapPin, title: "Work in Italy", desc: "Join innovative companies in Milan, Turin, and beyond" },
  { icon: Briefcase, title: "Career Growth", desc: "Access top-tier positions with competitive packages" },
  { icon: GraduationCap, title: "Skill Development", desc: "Continuous learning and professional development" },
  { icon: Globe, title: "Cultural Support", desc: "Comprehensive relocation and integration assistance" }
];

export default function EngineersSection() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    country_of_origin: '',
    specialization: '',
    years_experience: '',
    linkedin_url: ''
  });
  const [cvFile, setCvFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    let cvUrl = '';
    if (cvFile) {
      const { file_url } = await base44.integrations.Core.UploadFile({ file: cvFile });
      cvUrl = file_url;
    }
    
    await base44.entities.EngineerApplication.create({
      ...formData,
      years_experience: parseInt(formData.years_experience) || 0,
      cv_url: cvUrl
    });
    
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success("Application submitted successfully!");
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ full_name: '', email: '', country_of_origin: '', specialization: '', years_experience: '', linkedin_url: '' });
      setCvFile(null);
    }, 3000);
  };

  return (
    <section id="engineers" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            For Engineers
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Launch Your <span className="text-blue-600">Italian Career</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join a community of exceptional engineers who have made Italy their home. 
            We'll guide you every step of the way.
          </p>
        </motion.div>

        {/* Disciplines Grid */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-slate-900 text-center mb-8">
            Engineering Disciplines We Recruit
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {disciplines.map((disc, index) => (
              <motion.div
                key={disc.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden">
                  <CardContent className="p-5 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${disc.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <disc.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-medium text-slate-700 text-sm">{disc.name}</span>
                  </CardContent>
                </Card>
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
              Why Choose Engineers Planet?
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="border-0 shadow-md h-full">
                    <CardContent className="p-5">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                        <benefit.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-slate-600">{benefit.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Success Story */}
            <motion.div 
              className="mt-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                  alt="Success story"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-slate-300 italic mb-3">
                    "Engineers Planet made my transition to Italy seamless. From technical interviews 
                    to cultural guidance, they supported me at every step."
                  </p>
                  <p className="text-white font-semibold">Carlos M.</p>
                  <p className="text-blue-400 text-sm">Electronic Engineer, now at Pirelli</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-t-lg">
                <CardTitle className="text-white flex items-center gap-3">
                  <GraduationCap className="w-5 h-5" />
                  Apply Now
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Application Submitted!</h4>
                    <p className="text-slate-600">We'll review your profile and get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <Label htmlFor="full_name" className="text-slate-700">Full Name</Label>
                        <Input
                          id="full_name"
                          value={formData.full_name}
                          onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                          placeholder="Your full name"
                          required
                          className="mt-1.5"
                        />
                      </div>
                      
                      <div className="col-span-2">
                        <Label htmlFor="eng_email" className="text-slate-700">Email</Label>
                        <Input
                          id="eng_email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your@email.com"
                          required
                          className="mt-1.5"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="country" className="text-slate-700">Country of Origin</Label>
                        <Input
                          id="country"
                          value={formData.country_of_origin}
                          onChange={(e) => setFormData({...formData, country_of_origin: e.target.value})}
                          placeholder="e.g., Brazil"
                          required
                          className="mt-1.5"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="experience" className="text-slate-700">Years of Experience</Label>
                        <Input
                          id="experience"
                          type="number"
                          min="0"
                          value={formData.years_experience}
                          onChange={(e) => setFormData({...formData, years_experience: e.target.value})}
                          placeholder="e.g., 5"
                          className="mt-1.5"
                        />
                      </div>
                      
                      <div className="col-span-2">
                        <Label htmlFor="specialization" className="text-slate-700">Specialization</Label>
                        <Select 
                          value={formData.specialization} 
                          onValueChange={(value) => setFormData({...formData, specialization: value})}
                          required
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select your specialization" />
                          </SelectTrigger>
                          <SelectContent>
                            {disciplines.map((disc) => (
                              <SelectItem key={disc.name} value={disc.name}>{disc.name} Engineering</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="col-span-2">
                        <Label htmlFor="linkedin" className="text-slate-700">LinkedIn Profile (Optional)</Label>
                        <Input
                          id="linkedin"
                          value={formData.linkedin_url}
                          onChange={(e) => setFormData({...formData, linkedin_url: e.target.value})}
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="mt-1.5"
                        />
                      </div>
                      
                      <div className="col-span-2">
                        <Label className="text-slate-700">Upload CV/Resume</Label>
                        <div className="mt-1.5 border-2 border-dashed border-slate-200 rounded-lg p-4 text-center hover:border-blue-400 transition-colors cursor-pointer">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                            id="cv-upload"
                          />
                          <label htmlFor="cv-upload" className="cursor-pointer">
                            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                            {cvFile ? (
                              <span className="text-blue-600 font-medium">{cvFile.name}</span>
                            ) : (
                              <>
                                <span className="text-slate-600 block">Click to upload</span>
                                <span className="text-slate-400 text-sm">PDF, DOC, DOCX (max 5MB)</span>
                              </>
                            )}
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 py-6 mt-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                    
                    <p className="text-xs text-slate-500 text-center mt-4">
                      By submitting, you agree to our privacy policy and terms of service.
                    </p>
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