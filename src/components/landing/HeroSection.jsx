import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Briefcase } from 'lucide-react';

export default function HeroSection({ onNavigate }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight mt-12">
            Bridging Global
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Engineering Talent
            </span>
            with Italian Innovation
          </h1>

          {/* Sub-headline */}
          <motion.p 
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The only recruitment agency led by Engineers, for Engineers. 
            <span className="text-slate-300 block mt-2">Based in Milan, connecting the world's best talent with Italy's leading companies.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg font-semibold group"
              onClick={() => onNavigate('companies')}
            >
              <Building2 className="w-5 h-5 mr-2" />
              For Companies
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg font-semibold group"
              onClick={() => onNavigate('engineers')}
            >
              <Users className="w-5 h-5 mr-2" />
              For Engineers
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg font-semibold group"
              onClick={() => onNavigate('projects')}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Submit Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div 
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: "500+", label: "Engineers Placed" },
            { value: "150+", label: "Partner Companies" },
            { value: "98%", label: "Success Rate" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-slate-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}