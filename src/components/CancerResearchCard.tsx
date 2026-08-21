import React from 'react';
import { ArrowUpRight, CalendarDays, FlaskConical, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import type { CancerResearchUpdate, CancerUpdateStatus } from '../data/cancerResearchUpdates';

const statusStyles: Record<CancerUpdateStatus, string> = {
  Approved: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Clinical Trial': 'bg-blue-50 text-blue-700 border-blue-100',
  Research: 'bg-violet-50 text-violet-700 border-violet-100',
  'Future Development': 'bg-amber-50 text-amber-700 border-amber-100',
};

interface CancerResearchCardProps {
  update: CancerResearchUpdate;
  compact?: boolean;
}

const CancerResearchCard: React.FC<CancerResearchCardProps> = ({ update, compact = false }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="geometric-card h-full p-5 sm:p-6 rounded-[24px] sm:rounded-[28px] flex flex-col"
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-widest ${statusStyles[update.status]}`}
        >
          {update.status === 'Approved' ? <ShieldCheck className="h-3.5 w-3.5" /> : <FlaskConical className="h-3.5 w-3.5" />}
          {update.status}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <CalendarDays className="h-3.5 w-3.5" />
          {update.date}
        </span>
      </div>

      <h3 className={`${compact ? 'text-base' : 'text-lg sm:text-xl'} font-black text-slate-900 tracking-tight leading-snug mb-3`}>
        {update.title}
      </h3>
      <p className="text-sm text-slate-500 font-medium leading-relaxed mb-5 flex-1">
        {update.description}
      </p>

      <div className="border-t border-slate-100 pt-4 mt-auto">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-1">Cancer Type</p>
        <p className="text-sm font-bold text-slate-700 mb-4">{update.cancerType}</p>
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-bold text-slate-500">{update.source}</span>
          <a
            href={update.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-700"
            aria-label={`Read more from ${update.source}`}
          >
            Read More
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default CancerResearchCard;
