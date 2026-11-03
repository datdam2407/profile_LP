"use client";
import React, { createContext, useContext, useState } from "react";
type Lang = "en" | "vi";
const LanguageContext = createContext<{lang:Lang;setLang:(v:Lang)=>void}>({lang:"en",setLang:()=>{}});
export function LanguageProvider({children}:{children:React.ReactNode}) {
  const [lang,setLang] = useState<Lang>("en");
  return <LanguageContext.Provider value={{lang,setLang}}>{children}</LanguageContext.Provider>;
}
export function useLanguage(){return useContext(LanguageContext);}
export function LanguageSwitch(){const {lang,setLang}=useLanguage();return <div className="language-switch" aria-label="Select language"><button className={lang==="en"?"active":""} onClick={()=>setLang("en")}>EN</button><span>/</span><button className={lang==="vi"?"active":""} onClick={()=>setLang("vi")}>VI</button></div>}
