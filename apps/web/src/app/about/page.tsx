"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, UserCheck } from "lucide-react";
import { useLang } from '@/context/LangContext';

export default function AboutPage() {
  const { lang } = useLang();

  const t = {
    TR: {
      heroTitleStart: "Parkı ",
      heroTitleHighlight: "Özgürleştiriyoruz.",
      heroDesc: "Free Park, sıradan bir teknolojiyi günlük hayatın pürüzsüz bir parçasına dönüştürme misyonuyla kurulmuştur.",
      missionQuote: "\"Teknoloji, özgürlüğü demokratikleştirmek için vardır.\"",
      missionDesc: "2024 yılında İzmir Teknopark'ta filizlenen fikrimiz, güvenlik ve hızı bir araya getiren yepyeni bir IoT standardı oluşturmak üzerine kuruldu. Her gün yaşadığımız park ve bekleme stresini, cebimizdeki telefonla çözebileceğimize inandık ve Free Park'ı hayata geçirdik.",
      valuesTitle: "Temel Değerlerimiz",
      values: [
        {
          title: "Basitlik",
          desc: "Karmaşık kurulum süreçlerine, anlaşılamayan kullanım kılavuzlarına inanmıyoruz. Bizim için bir ürün, tıpkı odanın ışığını açmak kadar doğal ve pürüzsüz çalışmalıdır. Her tıklama, her menü geçişi bu sadelik felsefesiyle şekillendirildi.",
          icon: <Sparkles size={32} />
        },
        {
          title: "Askeri Düzeyde Güvenlik",
          desc: "Ev garajınızın veya sitenizin güvenliği bizim için en önemli konudur. Tüm sistemimiz, verilerinizin bulutta değil sadece sizin cihazınızda kalmasını sağlayan uçtan uca şifreleme ile donatılmıştır.",
          icon: <Shield size={32} />
        },
        {
          title: "Herkes İçin Erişilebilirlik",
          desc: "Sadece teknoloji meraklıları için değil, her yaştan, her seviyeden kullanıcı için net, büyük puntolu ve kapsayıcı bir arayüz tasarladık. Uygulamamızı açan herkes ne yapması gerektiğini anında bilir.",
          icon: <UserCheck size={32} />
        }
      ],
      teamTitle: "Arkamızdaki Ekip",
      teamRoles: ["CEO & Kurucu", "CTO", "Ürün Tasarımcısı"]
    },
    EN: {
      heroTitleStart: "We Are Liberating ",
      heroTitleHighlight: "Parking.",
      heroDesc: "Free Park was founded with the mission of turning ordinary technology into a seamless part of daily life.",
      missionQuote: "\"Technology exists to democratize freedom.\"",
      missionDesc: "Our idea, which blossomed in Izmir Technopark in 2024, was founded on creating a brand-new IoT standard that brings together security and speed. We believed we could solve the daily stress of parking and waiting with the phone in our pocket, and brought Free Park to life.",
      valuesTitle: "Our Core Values",
      values: [
        {
          title: "Simplicity",
          desc: "We do not believe in complicated installation processes or incomprehensible user manuals. For us, a product should work as naturally and smoothly as turning on a light. Every click is shaped by this philosophy of simplicity.",
          icon: <Sparkles size={32} />
        },
        {
          title: "Military-Grade Security",
          desc: "The security of your home garage or residence is our top priority. Our entire system is equipped with end-to-end encryption that ensures your data stays only on your device, not in the cloud.",
          icon: <Shield size={32} />
        },
        {
          title: "Accessibility For All",
          desc: "We designed a clear, large-font, and inclusive interface not just for tech enthusiasts, but for users of all ages and levels. Anyone who opens our app instantly knows what to do.",
          icon: <UserCheck size={32} />
        }
      ],
      teamTitle: "The Team Behind Us",
      teamRoles: ["CEO & Founder", "CTO", "Product Designer"]
    }
  };

  const current = t[lang];

  const team = [
    { initials: "AK", name: "Ahmet Kaya", role: current.teamRoles[0] },
    { initials: "ZA", name: "Zeynep Arslan", role: current.teamRoles[1] },
    { initials: "MD", name: "Mert Demir", role: current.teamRoles[2] }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero */}
      <section className="section-rhythm bg-surface-2 relative overflow-hidden">
        <div className="container-strict text-center flex flex-col items-center">
          <motion.h1 
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-[24px]"
          >
            {current.heroTitleStart} <span className="text-[color:var(--color-primary-dark)]">{current.heroTitleHighlight}</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl max-w-2xl"
          >
            {current.heroDesc}
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-rhythm bg-surface">
        <div className="container-strict">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
            <motion.div 
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2>
                {current.missionQuote}
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-lg">
                {current.missionDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-rhythm bg-surface-2">
        <div className="container-strict">
          <div className="section-header text-center items-center">
             <motion.h2 
               initial={{ y: 24, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
             >
               {current.valuesTitle}
             </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            {current.values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card-standard"
              >
                <div className="card-icon-box">
                   {val.icon}
                </div>
                <div>
                  <h3 className="text-xl mb-[8px]">{val.title}</h3>
                  <p className="text-base">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-rhythm bg-surface">
        <div className="container-strict">
          <div className="section-header text-center items-center">
             <motion.h2 
               initial={{ y: 24, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
             >
               {current.teamTitle}
             </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px]">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-[160px] h-[160px] rounded-[40px] bg-surface-2 flex items-center justify-center mb-[24px] shadow-sm">
                  <span className="font-display font-bold text-4xl text-[color:var(--color-primary-dark)]">{member.initials}</span>
                </div>
                <h4 className="text-2xl mb-[4px]">{member.name}</h4>
                <p className="text-sm font-bold uppercase tracking-wider text-text-muted">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}