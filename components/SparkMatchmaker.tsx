'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Radar, Heart, RotateCcw } from 'lucide-react';

interface SparkMatchmakerProps {
  isOpen: boolean;
  onClose: () => void;
}

const topics = ['AI/ML', 'Biotechnology', 'Web3/Blockchain', 'Quantum Computing', 'Robotics', 'Data Science'];
const durations = ['15 mins', '30 mins', '45 mins', '1 hour'];

export default function SparkMatchmaker({ isOpen, onClose }: SparkMatchmakerProps) {
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState('');
  const [problem, setProblem] = useState('');
  const [duration, setDuration] = useState('15 mins');

  const handleSubmit = () => {
    setStep(2);
    setTimeout(() => setStep(3), 2500);
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50 px-4"
          >
            <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full glass hover:glass-strong transition-all z-10"
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
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">Ignite a Spark</h2>
                        <p className="text-sm text-muted-foreground">Find your perfect mentor match</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <p className="text-lg leading-relaxed">
                          I am exploring{' '}
                          <select
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            className="glass-strong px-4 py-2 rounded-xl border-2 border-primary/30 focus:border-primary outline-none transition-all mx-1 text-primary font-semibold bg-transparent cursor-pointer"
                          >
                            <option value="" className="bg-slate-900">select a field</option>
                            {topics.map((t) => (
                              <option key={t} value={t} className="bg-slate-900">{t}</option>
                            ))}
                          </select>
                        </p>

                        <p className="text-lg leading-relaxed">
                          but I am stuck on{' '}
                          <input
                            type="text"
                            value={problem}
                            onChange={(e) => setProblem(e.target.value)}
                            placeholder="your specific challenge"
                            className="glass-strong px-4 py-2 rounded-xl border-2 border-secondary/30 focus:border-secondary outline-none transition-all mx-1 min-w-[300px] bg-transparent placeholder:text-muted-foreground"
                          />
                        </p>

                        <p className="text-lg leading-relaxed">
                          I need{' '}
                          <select
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className="glass-strong px-4 py-2 rounded-xl border-2 border-accent/30 focus:border-accent outline-none transition-all mx-1 text-accent font-semibold bg-transparent cursor-pointer"
                          >
                            {durations.map((d) => (
                              <option key={d} value={d} className="bg-slate-900">{d}</option>
                            ))}
                          </select>
                          {' '}of guidance.
                        </p>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSubmit}
                        disabled={!topic || !problem}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold text-lg neon-glow disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                      >
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
                    className="relative z-10 flex flex-col items-center justify-center py-12"
                  >
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
                        scale: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
                      }}
                      className="w-32 h-32 rounded-full border-4 border-primary/30 border-t-primary flex items-center justify-center mb-6 neon-glow"
                    >
                      <Radar className="w-16 h-16 text-primary" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-2">Scanning the Network</h3>
                    <p className="text-muted-foreground text-center max-w-md">
                      Analyzing {topic} experts and matching based on your needs...
                    </p>

                    <div className="flex gap-2 mt-6">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                          className="w-2 h-2 rounded-full bg-primary"
                        />
                      ))}
                    </div>
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
                    <div className="text-center mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="inline-block"
                      >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-teal-400 flex items-center justify-center mx-auto mb-4 teal-glow">
                          <Heart className="w-10 h-10 text-white fill-white" />
                        </div>
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">Perfect Match Found!</h3>
                      <p className="text-muted-foreground">We found someone ideal for your needs</p>
                    </div>

                    <div className="glass-strong rounded-2xl p-6 mb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
                          SC
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold mb-1">Dr. Sarah Chen</h4>
                          <p className="text-sm text-muted-foreground mb-3">PhD in {topic} • Stanford AI Lab</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full glass text-xs font-medium border border-primary/30 text-primary">
                              Expert in {topic}
                            </span>
                            <span className="px-3 py-1 rounded-full glass text-xs font-medium border border-accent/30 text-accent flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              Also loves Sci-Fi
                            </span>
                          </div>

                          <p className="text-sm text-muted-foreground">
                            "I love helping students break through complex problems. Your challenge with {problem} sounds fascinating!"
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleClose}
                        className="flex-1 py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold text-lg neon-glow"
                      >
                        Connect ({duration})
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleReset}
                        className="px-6 py-4 rounded-xl glass-strong hover:glass transition-all"
                      >
                        <RotateCcw className="w-5 h-5" />
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
