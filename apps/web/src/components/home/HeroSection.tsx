"use client";

import { motion } from "framer-motion";
import { Smartphone, ArrowRight } from "lucide-react";
import { useLang } from '@/context/LangContext';

export default function HeroSection() {
  const { lang } = useLang();

  const t = {
    TR: {
      badge: "Yeni Nesil Akıllı Bariyer",
      titleStart: "Park Etmek Artık ",
      titleHighlight: "Özgür.",
      desc: "Free Park ile otopark bariyerinizi telefonunuzdan, her yerden anında kontrol edin. Kodsuz kurulum, kesintisiz bağlantı.",
      startBtn: "Hemen Başla",
      howItWorksBtn: "Nasıl Çalışır?",
      mockupGarage: "Ev Garajı",
      mockupStatus: "AÇIK"
    },
    EN: {
      badge: "Next Generation Smart Barrier",
      titleStart: "Parking is Now ",
      titleHighlight: "Free.",
      desc: "Control your parking barrier instantly from your phone, from anywhere with Free Park. Codeless setup, seamless connection.",
      startBtn: "Get Started",
      howItWorksBtn: "How It Works?",
      mockupGarage: "Home Garage",
      mockupStatus: "OPEN"
    }
  };

  const current = t[lang];

  return (
    <section className="section-rhythm relative overflow-hidden">
      <div className="container-strict">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">
          
          {/* Content Column */}
          <div className="flex flex-col gap-[32px] z-10">
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-[12px] bg-surface-2 border border-border px-[16px] py-[8px] rounded-full w-max"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-primary)]"></span>
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-text-main">
                {current.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {current.titleStart} <br className="hidden md:block"/> <span className="text-[color:var(--color-primary-dark)]">{current.titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {current.desc}
            </motion.p>

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-[16px] mt-[16px]"
            >
              <button className="btn-primary">
                {current.startBtn}
                <ArrowRight size={20} />
              </button>
              <button className="btn-outline">
                {current.howItWorksBtn}
              </button>
            </motion.div>
          </div>

          {/* Visual Column */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center h-[600px] w-full"
          >
            {/* Decorative background blob */}
            <div className="absolute w-[400px] h-[400px] bg-surface-2 rounded-full blur-3xl -z-10"></div>
            
            {/* Phone Mockup */}
            <div className="relative w-[320px] h-[640px] bg-[#0f172a] rounded-[48px] border-[12px] border-[#0f172a] dark:border-[#1e293b] ring-1 ring-black/5 dark:ring-white/10 shadow-2xl overflow-hidden flex flex-col z-20">
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0f172a] dark:bg-[#1e293b] rounded-b-xl z-30"></div>
              
              {/* Screen Content */}
              <div className="flex-1 bg-surface-2 flex flex-col items-center justify-center p-[32px] relative">
                <h3 className="text-[color:var(--color-brand-dark)] text-2xl mb-[8px] z-10">{current.mockupGarage}</h3>
                <p className="font-mono text-sm text-text-muted mb-[64px] z-10">FP-2024-IZM</p>
                
                {/* Control Button Mock */}
                <div className="relative w-[180px] h-[180px] rounded-full flex items-center justify-center mb-[48px] z-10">
                   <div className="absolute inset-0 rounded-full border border-[color:var(--color-primary)] opacity-50 animate-[ping_3s_infinite]"></div>
                   <div className="absolute inset-2 rounded-full border-2 border-[color:var(--color-primary)]"></div>
                   <div className="absolute inset-4 rounded-full bg-[color:var(--color-brand-dark)] flex items-center justify-center shadow-lg shadow-[color:var(--color-primary)]">
                      <Smartphone size={48} color="var(--color-primary)" />
                   </div>
                </div>

                <div className="font-display font-bold text-4xl text-[color:var(--color-primary-dark)] tracking-widest z-10">
                  {current.mockupStatus}
                </div>
              </div>

              {/* Bottom Nav Mock */}
              <div className="h-[80px] bg-surface border-t border-border flex justify-around items-center px-[24px]">
                <div className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[color:var(--color-primary)]"></div>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-2"></div>
                <div className="w-10 h-10 rounded-full bg-surface-2"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}