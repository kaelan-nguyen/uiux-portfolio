import React from 'react';
import '../app/styles/GlassCard.css';

function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass-card">
      {children}
    </div>
  );
}

export default GlassCard;