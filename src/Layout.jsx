import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #94a3b8;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>
      {children}
    </div>
  );
}