"use client";

import Link from 'next/link';
import { Globe, MessageCircle, Briefcase, Mail, MapPin } from 'lucide-react';
import { useLang } from '@/context/LangContext';

export default function Footer() {
  const { lang } = useLang();

  const t = {
    TR: {
      desc: "Sıradan bariyerleri akıllı telefonunuzdan yönetebileceğiniz güvenli, hızlı ve yenilikçi IoT platformu.",
      quickLinks: "Hızlı Linkler",
      product: "Ürün",
      about: "Hakkımızda",
      contact: "İletişim",
      privacy: "Gizlilik Politikası",
      contactTitle: "İletişim",
      location: "İzmir Teknopark, TR",
      rights: `© ${new Date().getFullYear()} Free Park. Tüm hakları saklıdır.`
    },
    EN: {
      desc: "A secure, fast, and innovative IoT platform that lets you manage standard barriers from your smartphone.",
      quickLinks: "Quick Links",
      product: "Product",
      about: "About Us",
      contact: "Contact",
      privacy: "Privacy Policy",
      contactTitle: "Contact Us",
      location: "Izmir Technopark, TR",
      rights: `© ${new Date().getFullYear()} Free Park. All rights reserved.`
    }
  };

  const current = t[lang];

  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="container-strict section-rhythm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[64px] md:gap-[32px]">
          
          {/* Sol Kolon */}
          <div className="md:col-span-5 flex flex-col gap-[32px]">
            <Link href="/" className="flex items-center">
              <span className="font-display font-normal text-brand-dark text-3xl tracking-wide">FREE</span>
              <span className="font-display font-extrabold text-primary text-3xl tracking-wide ml-1">PARK</span>
            </Link>
            <p>
              {current.desc}
            </p>
            <div className="flex gap-[16px]">
              <a href="#" className="card-icon-box w-[48px] h-[48px] hover:text-primary transition-colors"><Globe size={20} /></a>
              <a href="#" className="card-icon-box w-[48px] h-[48px] hover:text-primary transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="card-icon-box w-[48px] h-[48px] hover:text-primary transition-colors"><Briefcase size={20} /></a>
            </div>
          </div>

          {/* Orta Kolon */}
          <div className="md:col-span-3 md:col-start-7 flex flex-col gap-[24px]">
            <h4 className="text-xl">{current.quickLinks}</h4>
            <Link href="/" className="text-text-muted hover:text-primary transition-colors">{current.product}</Link>
            <Link href="/about" className="text-text-muted hover:text-primary transition-colors">{current.about}</Link>
            <Link href="/contact" className="text-text-muted hover:text-primary transition-colors">{current.contact}</Link>
            <Link href="#" className="text-text-muted hover:text-primary transition-colors">{current.privacy}</Link>
          </div>

          {/* Sağ Kolon */}
          <div className="md:col-span-3 flex flex-col gap-[24px]">
            <h4 className="text-xl">{current.contactTitle}</h4>
            <div className="flex items-center gap-[16px]">
              <Mail size={20} className="text-text-muted" />
              <span className="text-text-muted">info@freepark.io</span>
            </div>
            <div className="flex items-center gap-[16px]">
              <MapPin size={20} className="text-text-muted" />
              <span className="text-text-muted">{current.location}</span>
            </div>
          </div>
          
        </div>
      </div>

      {/* Alt Bant */}
      <div className="border-t border-border bg-surface-2 py-[24px]">
        <div className="container-strict flex flex-col md:flex-row items-center justify-between gap-[16px]">
          <p className="text-sm">
            {current.rights}
          </p>
          <span className="text-xs font-bold tracking-wider px-[12px] py-[4px] bg-surface rounded-full border border-border">
            V1.0 DEMO
          </span>
        </div>
      </div>
    </footer>
  );
}