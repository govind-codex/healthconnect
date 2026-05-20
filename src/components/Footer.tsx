import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

const Footer: React.FC = () => {
  return (
    <footer className="py-3 px-6 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-900">
            Nihal Goud
          </h3>

          <p className="text-[10px] uppercase font-bold text-blue-600 tracking-[0.15em]">
            Full Stack Developer & Product Designer
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/nihalgd"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-1 transition-all duration-300"
            title="GitHub Profile"
          >
            <div className="p-1.5 rounded-full border border-slate-100 bg-white group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md">
              <Github className="h-3.5 w-3.5 text-slate-400 group-hover:text-white transition-colors" />
            </div>

            <span className="text-[8px] uppercase font-black tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
              GitHub
            </span>
          </a>

          <a
            href="https://linkedin.com/in/nihal-goud-43a76b293"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-1 transition-all duration-300"
            title="LinkedIn Profile"
          >
            <div className="p-1.5 rounded-full border border-slate-100 bg-white group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md">
              <Linkedin className="h-3.5 w-3.5 text-slate-400 group-hover:text-white transition-colors" />
            </div>

            <span className="text-[8px] uppercase font-black tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
              LinkedIn
            </span>
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-px bg-slate-100"></div>

          <p className="text-[9px] font-medium text-slate-300 tracking-wider">
            © {new Date().getFullYear()} • CREATED BY NIHAL
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;