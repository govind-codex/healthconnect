import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { staggerContainer, staggerItem } from '../utils/useAnimations';

const Footer: React.FC = () => {
  return (
    <footer className="py-3 px-6 flex flex-col items-center justify-center text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="flex flex-col items-center gap-3"
      >
        <motion.div variants={staggerItem} className="flex flex-col items-center gap-1">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-900">
            Govind Nagar
          </h3>

          <p className="text-[10px] uppercase font-bold text-blue-600 tracking-[0.15em]">
            Full Stack Developer & Product Designer
          </p>
        </motion.div>

        <motion.div variants={staggerItem} className="flex items-center gap-5">
          <motion.a
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/govind-codex"
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
          </motion.a>

          <motion.a
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/govind-nagar-6b16771ab/"
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
          </motion.a>
        </motion.div>

        <motion.div variants={staggerItem} className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 24 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-slate-100"
          />

          <p className="text-[9px] font-medium text-slate-300 tracking-wider">
            © {new Date().getFullYear()} • CREATED BY GOVIND
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;