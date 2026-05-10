"use client";

import { motion } from "framer-motion";
import { Lock, Zap, Smartphone, BatteryCharging, History, Wrench } from "lucide-react";
import { useLang } from '@/context/LangContext';

export default function FeaturesSection() {
  const { lang } = useLang();

  const t = {
    TR: {
      title: "Neden Free Park?",
      subtitle: "Donanım ve yazılımın mükemmel uyumuyla bekleme sürelerini ortadan kaldırmak için baştan aşağı tasarlandı.",
      features: [
        { 
          icon: <Lock size={24} />, 
          title: "Uçtan Uca Şifreleme", 
          desc: "AES-256 algoritmasıyla tüm komutlar donanım seviyesinde şifrelenir. Veriler bulutta değil, cihazda işlenir." 
        },
        { 
          icon: <Zap size={24} />, 
          title: "Sıfır Gecikme", 
          desc: "Bluetooth 5.0 ve Wi-Fi 6 hibrit mimarisi sayesinde 1 saniyenin altında tepki süresiyle kapıda beklemeye son." 
        },
        { 
          icon: <Smartphone size={24} />, 
          title: "Cross-Platform Desteği", 
          desc: "iOS, Android, Apple Watch ve Web üzerinden erişin. Misafirlerinize saniyeler içinde geçici yetki tanımlayın." 
        },
        { 
          icon: <History size={24} />, 
          title: "Geçmiş Kayıtları", 
          desc: "Bariyeriniz en son ne zaman açıldı? Kim açtı? 30 günlük detaylı log geçmişinden anında görün." 
        },
        { 
          icon: <BatteryCharging size={24} />, 
          title: "Akıllı Güç Yönetimi", 
          desc: "Özel Deep Sleep uyku modu sayesinde enerjiyi minimumda tutar. Otoparkınızın güç tüketimini etkilemez." 
        },
        { 
          icon: <Wrench size={24} />, 
          title: "Kodsuz Kurulum", 
          desc: "Anakarta sadece 2 kablo ile bağlanır. Teknik servise ihtiyaç duymadan 5 dakika içinde montajı tamamlayın." 
        }
      ]
    },
    EN: {
      title: "Why Free Park?",
      subtitle: "Designed from the ground up to eliminate waiting times through the perfect harmony of hardware and software.",
      features: [
        { 
          icon: <Lock size={24} />, 
          title: "End-to-End Encryption", 
          desc: "All commands are encrypted at the hardware level using AES-256. Data is processed on the device, not in the cloud." 
        },
        { 
          icon: <Zap size={24} />, 
          title: "Zero Latency", 
          desc: "No more waiting at the gate with sub-second response times thanks to Bluetooth 5.0 and Wi-Fi 6 hybrid architecture." 
        },
        { 
          icon: <Smartphone size={24} />, 
          title: "Cross-Platform Support", 
          desc: "Access via iOS, Android, Apple Watch, and Web. Grant temporary access to your guests in seconds." 
        },
        { 
          icon: <History size={24} />, 
          title: "History Logs", 
          desc: "When was your barrier last opened? By whom? See instantly from the detailed 30-day log history." 
        },
        { 
          icon: <BatteryCharging size={24} />, 
          title: "Smart Power Management", 
          desc: "Keeps energy at a minimum with a custom Deep Sleep mode. Does not affect your parking lot's power consumption." 
        },
        { 
          icon: <Wrench size={24} />, 
          title: "Codeless Installation", 
          desc: "Connects to the motherboard with just 2 cables. Complete the installation in 5 minutes without needing technical service." 
        }
      ]
    }
  };

  const current = t[lang];

  return (
    <section className="section-rhythm">
      <div className="container-strict">
        
        <div className="section-header">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {current.features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-standard"
            >
              <div className="card-icon-box">
                {feat.icon}
              </div>
              <div>
                <h3 className="text-xl mb-[8px]">{feat.title}</h3>
                <p className="text-base">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}