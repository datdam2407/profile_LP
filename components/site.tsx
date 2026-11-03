"use client";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { LanguageSwitch, useLanguage } from "./language";
export function SiteHeader() {
  const {lang}=useLanguage(); const vi=lang==="vi";
  return <header className="site-header"><div className="shell nav-wrap">
    <Link href="/" className="brand"><span className="brand-mark">J<span>.</span></span><span className="brand-name">JollyD<span>APP</span></span></Link>
    <nav><Link href="/apps">{vi?"Ứng dụng":"Apps"}</Link><Link href="/about">{vi?"Giới thiệu":"About"}</Link><Link href="/support">{vi?"Hỗ trợ":"Support"}</Link></nav>
    <div className="nav-right"><LanguageSwitch/><Link href="/support" className="nav-contact">{vi?"Liên hệ":"Contact"} <ArrowUpRight size={15}/></Link></div>
  </div></header>;
}
export function SiteFooter() {
  const {lang}=useLanguage(); const vi=lang==="vi";
  return <footer className="site-footer"><div className="shell footer-main">
    <div><Link href="/" className="brand"><span className="brand-mark">J<span>.</span></span><span className="brand-name">JollyD<span>APP</span></span></Link><p className="footer-note">{vi?"Ứng dụng hữu ích cho học tập và cuộc sống.":"Thoughtful digital products for everyday life."}</p></div>
    <div className="footer-col"><b>{vi?"KHÁM PHÁ":"EXPLORE"}</b><Link href="/apps">{vi?"Ứng dụng":"Our apps"}</Link><Link href="/about">{vi?"Về chúng tôi":"About us"}</Link><Link href="/support">{vi?"Trung tâm hỗ trợ":"Support center"}</Link></div>
    <div className="footer-col"><b>{vi?"PHÁP LÝ":"LEGAL"}</b><Link href="/privacy">{vi?"Chính sách quyền riêng tư":"Privacy policy"}</Link><Link href="/terms">{vi?"Điều khoản sử dụng":"Terms of service"}</Link><Link href="/delete-account">{vi?"Xóa tài khoản":"Account deletion"}</Link></div>
    <div className="footer-col"><b>{vi?"LIÊN HỆ":"CONTACT"}</b><a href="mailto:damtiendat24072000@gmail.com"><Mail size={14}/> damtiendat24072000@gmail.com</a><span>JollyD App · Developer Studio</span></div>
  </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} JollyD App. {vi?"Đã đăng ký bản quyền.":"All rights reserved."}</span><span>{vi?"Phát triển với sự tận tâm.":"Made with care. Built to be useful."}</span></div></footer>;
}