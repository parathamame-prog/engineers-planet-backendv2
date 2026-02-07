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
  Briefcase, 
  Upload, 
  FileText, 
  X, 
  Loader2,
  CheckCircle2,
  Paperclip
} from 'lucide-react';

const disciplines = ["Electronic", "Mechanical", "Civil", "Software", "Automation", "Robotics", "Multiple Disciplines"];

export default function ProjectSubmissionSection() {
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
    phone: '',
    project_title: '',
    abstract: '',
    engineering_discipline: ''
  });
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Upload all files
      const uploadedUrls = [];
      for (const file of files) {
        const { file_url } = await base44.integrations.Core.UploadFile({ file });
        uploadedUrls.push(file_url);
      }
      
      // Create project submission
      await base44.entities.ProjectSubmission.create({
        ...formData,
        attachment_urls: uploadedUrls
      });
      
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Project submitted successfully! We'll be in touch soon.");
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ company_name: '', email: '', phone: '', project_title: '', abstract: '', engineering_discipline: '' });
        setFiles([]);
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Failed to submit project. Please try again.");
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4">
            Project Submission
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Submit Your <span className="text-blue-400">Engineering Project</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Share your project details and requirements. Our team of expert engineers 
            will review and get back to you with the best talent solutions.
          </p>
        </motion.div>

        {/* Submission Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-0 shadow-2xl bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-xl">
              <CardTitle className="text-white flex items-center gap-3">
                <Briefcase className="w-6 h-6" />
                Project Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-semibold text-slate-900 mb-2">Project Submitted!</h4>
                  <p className="text-slate-600">Our team will review your project and contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company_name" className="text-slate-700 font-medium">
                        Company/Organization Name *
                      </Label>
                      <Input
                        id="company_name"
                        value={formData.company_name}
                        onChange={(e) => setFormData({...formData, company_name: e.target.value})}
                        placeholder="Your company name"
                        required
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="proj_email" className="text-slate-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="proj_email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="contact@company.com"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-slate-700 font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+39 123 456 7890"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="proj_discipline" className="text-slate-700 font-medium">
                        Engineering Discipline *
                      </Label>
                      <Select 
                        value={formData.engineering_discipline} 
                        onValueChange={(value) => setFormData({...formData, engineering_discipline: value})}
                        required
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select primary discipline" />
                        </SelectTrigger>
                        <SelectContent>
                          {disciplines.map((disc) => (
                            <SelectItem key={disc} value={disc}>{disc}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <Label htmlFor="project_title" className="text-slate-700 font-medium">
                      Project Title *
                    </Label>
                    <Input
                      id="project_title"
                      value={formData.project_title}
                      onChange={(e) => setFormData({...formData, project_title: e.target.value})}
                      placeholder="e.g., Industrial Automation System for Manufacturing Plant"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="abstract" className="text-slate-700 font-medium">
                      Project Abstract *
                    </Label>
                    <Textarea
                      id="abstract"
                      value={formData.abstract}
                      onChange={(e) => setFormData({...formData, abstract: e.target.value})}
                      placeholder="Provide a detailed description of your project, including objectives, scope, required skills, timeline, and any specific requirements..."
                      required
                      className="mt-2 h-40 resize-none"
                    />
                    <p className="text-sm text-slate-500 mt-2">
                      {formData.abstract.length} characters
                    </p>
                  </div>

                  {/* File Upload */}
                  <div>
                    <Label className="text-slate-700 font-medium flex items-center gap-2">
                      <Paperclip className="w-4 h-4" />
                      Project Attachments
                    </Label>
                    <p className="text-sm text-slate-500 mb-3">
                      Upload relevant documents, specifications, diagrams, or RFPs
                    </p>
                    
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer bg-slate-50">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.zip"
                        onChange={handleFileChange}
                        className="hidden"
                        id="project-files"
                        multiple
                      />
                      <label htmlFor="project-files" className="cursor-pointer">
                        <Upload className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                        <span className="text-slate-700 font-medium block mb-1">
                          Click to upload files
                        </span>
                        <span className="text-slate-500 text-sm">
                          PDF, DOC, Images, ZIP (max 10MB each)
                        </span>
                      </label>
                    </div>

                    {/* File List */}
                    {files.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {files.map((file, index) => (
                          <div 
                            key={index}
                            className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-4 py-3"
                          >
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-blue-600" />
                              <div>
                                <p className="text-sm font-medium text-slate-900">{file.name}</p>
                                <p className="text-xs text-slate-500">
                                  {(file.size / 1024).toFixed(1)} KB
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting Project...
                        </>
                      ) : (
                        <>
                          <Briefcase className="w-5 h-5 mr-2" />
                          Submit Project
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-slate-500 text-center mt-4">
                      By submitting, you agree to our privacy policy and terms of service.
                    </p>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Why Submit Section */}
        <motion.div 
          className="mt-12 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { title: "Fast Response", desc: "Get feedback within 24 hours" },
            { title: "Expert Matching", desc: "We connect you with perfectly suited engineers" },
            { title: "Full Support", desc: "From vetting to onboarding and beyond" }
          ].map((item, i) => (
            <Card key={i} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}