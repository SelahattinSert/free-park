"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { useLang } from '@/context/LangContext';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { lang } = useLang();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const t = {
    TR: {
      heroTitle: "Bize Ulaşın",
      heroDesc: "Yeni projeler, teknik destek veya partnerlik için buradayız. 24 saat içinde yanıt veriyoruz.",
      formTitle: "Mesaj Gönder",
      formSubtitle: "Tüm alanların doldurulması zorunludur.",
      nameLabel: "Ad Soyad",
      namePlaceholder: "Adınız Soyadınız",
      emailLabel: "E-posta Adresi",
      emailPlaceholder: "ornek@email.com",
      subjectLabel: "Konu",
      subjects: ["Ürün Hakkında", "Teknik Destek", "Satın Alma", "Diğer"],
      messageLabel: "Mesaj",
      messagePlaceholder: "Detaylı mesajınızı buraya yazın...",
      submitBtn: "Hemen Gönder",
      successTitle: "Mesajınız Alındı!",
      successDesc: "İlginiz için teşekkür ederiz. Destek ekibimiz en kısa sürede size e-posta üzerinden dönüş yapacaktır.",
      newMsgBtn: "Yeni Mesaj Gönder",
      officeTitle: "Ofisimiz",
      email: "E-Posta",
      phone: "Telefon",
      location: "Konum",
      locationDesc: "İzmir Teknopark\nİzmir, Türkiye"
    },
    EN: {
      heroTitle: "Contact Us",
      heroDesc: "We are here for new projects, technical support, or partnerships. We respond within 24 hours.",
      formTitle: "Send a Message",
      formSubtitle: "All fields are required.",
      nameLabel: "Full Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "example@email.com",
      subjectLabel: "Subject",
      subjects: ["About Product", "Technical Support", "Purchasing", "Other"],
      messageLabel: "Message",
      messagePlaceholder: "Write your detailed message here...",
      submitBtn: "Send Now",
      successTitle: "Message Received!",
      successDesc: "Thank you for your interest. Our support team will get back to you via email as soon as possible.",
      newMsgBtn: "Send New Message",
      officeTitle: "Our Office",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationDesc: "Izmir Technopark\nIzmir, Turkey"
    }
  };

  const current = t[lang];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero */}
      <section className="section-rhythm bg-surface-2">
        <div className="container-strict flex flex-col items-center text-center">
          <motion.h1 
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-[24px]"
          >
            {current.heroTitle}
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

      {/* Main Content */}
      <section className="section-rhythm bg-surface">
        <div className="container-strict">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[96px]">
            
            {/* Form */}
            <motion.div 
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="section-header">
                <h2>{current.formTitle}</h2>
                <p>{current.formSubtitle}</p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-[24px]"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                      <div className="flex flex-col gap-[8px]">
                        <label className="text-sm font-bold uppercase tracking-widest text-text-main">{current.nameLabel}</label>
                        <input 
                          required 
                          type="text" 
                          placeholder={current.namePlaceholder} 
                          className="w-full bg-surface-2 border border-border rounded-xl px-[24px] py-[16px] focus:outline-none focus:border-[color:var(--color-primary)] transition-colors text-base"
                        />
                      </div>

                      <div className="flex flex-col gap-[8px]">
                        <label className="text-sm font-bold uppercase tracking-widest text-text-main">{current.emailLabel}</label>
                        <input 
                          required 
                          type="email" 
                          placeholder={current.emailPlaceholder} 
                          className="w-full bg-surface-2 border border-border rounded-xl px-[24px] py-[16px] focus:outline-none focus:border-[color:var(--color-primary)] transition-colors text-base"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-[8px]">
                      <label className="text-sm font-bold uppercase tracking-widest text-text-main">{current.subjectLabel}</label>
                      <div className="relative">
                        <select className="w-full bg-surface-2 border border-border rounded-xl px-[24px] py-[16px] focus:outline-none focus:border-[color:var(--color-primary)] transition-colors text-base appearance-none cursor-pointer">
                          {current.subjects.map(s => <option key={s}>{s}</option>)}
                        </select>
                        <div className="absolute right-[24px] top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                          <ChevronDownIcon />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-[8px]">
                      <label className="text-sm font-bold uppercase tracking-widest text-text-main">{current.messageLabel}</label>
                      <textarea 
                        required 
                        rows={6} 
                        placeholder={current.messagePlaceholder}
                        className="w-full bg-surface-2 border border-border rounded-xl px-[24px] py-[16px] focus:outline-none focus:border-[color:var(--color-primary)] transition-colors text-base resize-none"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-primary mt-[16px] py-[20px]">
                      {current.submitBtn}
                      <ArrowRight size={20} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center bg-surface-2 rounded-3xl p-[64px]"
                  >
                    <div className="card-icon-box w-[96px] h-[96px] bg-[color:var(--color-primary)] text-white mb-[32px]">
                      <CheckCircle size={48} />
                    </div>
                    <h3 className="mb-[16px]">{current.successTitle}</h3>
                    <p className="mb-[48px]">
                      {current.successDesc}
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="btn-outline"
                    >
                      {current.newMsgBtn}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Info & Office */}
            <div className="flex flex-col gap-[64px]">
              
              <div>
                <div className="section-header">
                  <h2>{current.officeTitle}</h2>
                </div>
                <div className="flex flex-col gap-[24px]">
                  
                  <div className="card-standard flex-row items-center !p-[24px] !gap-[24px]">
                    <div className="card-icon-box">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase text-text-main mb-[4px]">{current.email}</p>
                      <p className="text-base text-text-muted">info@freepark.io</p>
                    </div>
                  </div>

                  <div className="card-standard flex-row items-center !p-[24px] !gap-[24px]">
                    <div className="card-icon-box">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase text-text-main mb-[4px]">{current.phone}</p>
                      <p className="text-base text-text-muted">+90 232 000 00 00</p>
                    </div>
                  </div>

                  <div className="card-standard flex-row items-center !p-[24px] !gap-[24px]">
                    <div className="card-icon-box">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase text-text-main mb-[4px]">{current.location}</p>
                      <p className="text-base text-text-muted whitespace-pre-line">{current.locationDesc}</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}