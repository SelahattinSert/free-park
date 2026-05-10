"use client";

import { motion } from "framer-motion";
import { Bluetooth, Smartphone, Unlock } from "lucide-react";
import { useLang } from '@/context/LangContext';

export default function HowItWorksSection() {
  const { lang } = useLang();

  const t = {
    TR: {
      title: "Nasıl Çalışır?",
      subtitle: "Sadece üç basit adımla geleneksel otopark bariyerinizi akıllı bir sisteme dönüştürün.",
      steps: [
        {
          num: "01",
          icon: <Bluetooth size={32} />,
          title: "Cihazı Bağla",
          desc: "Bariyerinize Free Park modülünü takın, uygulamadan Wi-Fi veya Bluetooth ile saniyeler içinde eşleştirin."
        },
        {
          num: "02",
          icon: <Smartphone size={32} />,
          title: "Uygulamayı Aç",
          desc: "iOS veya Android cihazınızdan uygulamayı açın, bariyeriniz anında kontrol paneline eklensin."
        },
        {
          num: "03",
          icon: <Unlock size={32} />,
          title: "Kontrol Et",
          desc: "Tek dokunuşla bariyeri aç ya da kapat. Geçmiş hareketleri takip et, yetki paylaş."
        }
      ]
    },
    EN: {
      title: "How It Works?",
      subtitle: "Transform your traditional parking barrier into a smart system in just three simple steps.",
      steps: [
        {
          num: "01",
          icon: <Bluetooth size={32} />,
          title: "Connect Device",
          desc: "Install the Free Park module to your barrier, pair it in seconds via Wi-Fi or Bluetooth from the app."
        },
        {
          num: "02",
          icon: <Smartphone size={32} />,
          title: "Open App",
          desc: "Open the app from your iOS or Android device, and your barrier instantly appears on your dashboard."
        },
        {
          num: "03",
          icon: <Unlock size={32} />,
          title: "Control It",
          desc: "Open or close the barrier with a single tap. Track history logs and share access permissions."
        }
      ]
    }
  };

  const current = t[lang];

  return (
    <section className="section-rhythm bg-surface-2">
      <div className="container-strict">
        <div className="section-header items-center text-center">
          <motion.h2 
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            {current.title}
          </motion.h2>
          <motion.p 
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {current.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px]">
          {current.steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="card-icon-box w-[96px] h-[96px] bg-surface shadow-sm mb-[24px]">
                {step.icon}
              </div>
              <h3 className="mb-[16px]">{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}