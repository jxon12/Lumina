'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Radar, Heart, RotateCcw, MessageCircle } from 'lucide-react';
import { useGlobalState } from '@/context/GlobalState';
import { toast } from 'sonner';

interface SparkMatchmakerProps {
  isOpen: boolean;
  onClose: () => void;
}

const topics = ['AI/ML', 'Biotechnology', 'Web3/Blockchain', 'Quantum Computing', 'Robotics', 'Data Science'];
const durations = ['15 mins', '30 mins', '45 mins', '1 hour'];

const MATCHED_MENTOR_ID = 'mentor-sarah';

export default function SparkMatchmaker({ isOpen, onClose }: SparkMatchmakerProps) {
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState('');
  const [problem, setProblem] = useState('');
  const [duration, setDuration] = useState('15 mins');
  

  const { addMentor } = useGlobalState();

  const handleSubmit = () => {
    setStep(2);
    setTimeout(() => setStep(3), 2500);
  };

  const handleConnect = () => {
   
    addMentor(MATCHED_MENTOR_ID);
    
    
    toast.success("Mentor Connected!", {
      description: "Dr. Sarah Chen has been added to your network."
    });

    
    onClose();
    setTimeout(handleReset, 300);
  };

  const handleReset = () => {
    setStep(1);
    setTopic('');
    setProblem('');
    setDuration('15 mins');
  };

  const handleClose = () => {
    onClose();
    setTimeout(handleReset, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            
            className="fixed left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50 px-4"
          >
            <div className="glass-strong rounded-3xl p-8 relative overflow-hidden border border-white/10 shadow-2xl">
             
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-white/10 transition-all z-20 text-muted-foreground hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="relative z-10"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow shadow-lg shadow-primary/20">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">Ignite a Spark</h2>
                        <p className="text-sm text-slate-400">Find your perfect mentor match</p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="space-y-6 text-lg font-medium text-slate-300">
                        <div className="flex flex-wrap items-center gap-2">
                          <span>I am exploring</span>
                          
                          <style jsx>{`
                            select option { background-color: #0f172a; color: white; }
                          `}</style>
                          <select
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            className="bg-slate-900/50 border-b-2 border-primary text-white px-3 py-1 rounded-t focus:outline-none focus:bg-slate-900 transition-colors cursor-pointer min-w-[200px]"
                          >
                            <option value="">select a field...</option>
                            {topics.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <span>but I am stuck on</span>
                          <input
                            type="text"
                            value={problem}
                            onChange={(e) => setProblem(e.target.value)}
                            placeholder="e.g. transformer attention"
                            className="bg-slate-900/50 border-b-2 border-secondary text-white px-3 py-1 rounded-t focus:outline-none focus:bg-slate-900 transition-all flex-1 min-w-[250px] placeholder:text-slate-600"
                          />
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <span>I need</span>
                          <select
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className="bg-slate-900/50 border-b-2 border-accent text-white px-3 py-1 rounded-t focus:outline-none focus:bg-slate-900 transition-colors cursor-pointer"
                          >
                            {durations.map((d) => (
                              <option key={d} value={d}>{d}</option>
                            ))}
                          </select>
                          <span>of guidance.</span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSubmit}
                        disabled={!topic || !problem}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-lg shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                      >
                        <Sparkles className="w-5 h-5" />
                        Find My Mentor
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative z-10 flex flex-col items-center justify-center py-16"
                  >
                    <div className="relative w-40 h-40 mb-8 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 rounded-full border-t-4 border-l-4 border-primary/30"
                      />
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-4 rounded-full border-b-4 border-r-4 border-secondary/30"
                      />
                      <Radar className="w-16 h-16 text-white animate-pulse" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 animate-pulse">Scanning Neural Network...</h3>
                    <p className="text-slate-400 text-center max-w-md">
                      Analyzing {topic} experts and matching based on personality & skills...
                    </p>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="relative z-10"
                  >
                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-4 py-1 rounded-full border border-teal-500/50 mb-4"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                        <span className="text-sm font-bold">98% Match Found</span>
                      </motion.div>
                    </div>

                    <div className="glass-strong rounded-2xl p-6 mb-8 border border-primary/20 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                      
                      <div className="relative flex items-start gap-5">
                        
                        <div className="relative">
                          <img 
                            src="https://i.pravatar.cc/300?u=sarah_chen_ai_lab" 
                            alt="Dr. Sarah Chen" 
                            className="w-20 h-20 rounded-2xl object-cover border-2 border-white/20 shadow-lg"
                          />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-slate-900 rounded-full"></div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-xl font-bold text-white">Dr. Sarah Chen</h4>
                              <p className="text-sm text-primary mb-2">PhD in {topic || 'AI'} • Stanford AI Lab</p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2 py-1 rounded-md bg-slate-900/50 text-xs text-slate-300 border border-white/10">
                              Python
                            </span>
                            <span className="px-2 py-1 rounded-md bg-slate-900/50 text-xs text-slate-300 border border-white/10">
                              NLP
                            </span>
                            <span className="px-2 py-1 rounded-md bg-purple-500/20 text-xs text-purple-300 border border-purple-500/30 flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              Also loves Sci-Fi
                            </span>
                          </div>

                          <div className="bg-slate-900/50 rounded-xl p-3 text-sm text-slate-300 italic border border-white/5">
                            "I love helping students break through complex problems. Your challenge with {problem} sounds fascinating!"
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <button 
                        onClick={handleReset}
                        className="col-span-1 py-4 rounded-xl border border-white/10 hover:bg-white/5 text-slate-400 font-medium transition-colors"
                      >
                        Skip
                      </button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleConnect}
                        className="col-span-2 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Connect ({duration})
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}