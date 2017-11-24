webpackJsonp([104,221],{1328:function(t,n){t.exports={content:["article",["p","The default language of ",["code","antd@2.x"]," is Chinese as of yet.\nIf you want to use English or other languages, you can follow the instructions below."],["h2","LocaleProvider"],["p","antd provides a React Component ",["a",{title:null,href:"/components/locale-provider"},"LocaleProvider"]," for configuring antd locale text globally."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> LocaleProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> enUS <span class="token keyword">from</span> <span class="token string">\'antd/lib/locale-provider/en_US\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LocaleProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>enUS<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LocaleProvider</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { LocaleProvider } from 'antd';\nimport enUS from 'antd/lib/locale-provider/en_US';\n\nreturn (\n  <LocaleProvider locale={enUS}>\n    <App />\n  </LocaleProvider>\n);"]],["p","Note: ",["code","en_US"]," is the filename, follow below."],["p","Supported languages:"],["table",["thead",["tr",["th","Language"],["th","Filename"]]],["tbody",["tr",["td","Bulgarian"],["td","bg_BG"]],["tr",["td","Catalan"],["td","ca_ES"]],["tr",["td","Chinese (Traditional)"],["td","zh_TW"]],["tr",["td","Czech"],["td","cs_CZ"]],["tr",["td","Dutch (Belgium)"],["td","nl_BE"]],["tr",["td","Dutch"],["td","nl_NL"]],["tr",["td","English (Global)"],["td","en_GB"]],["tr",["td","English"],["td","en_US"]],["tr",["td","Estonian"],["td","et_EE"]],["tr",["td","Finnish"],["td","fi_FI"]],["tr",["td","French (Belgium)"],["td","fr_BE"]],["tr",["td","French (France)"],["td","fr_FR"]],["tr",["td","German"],["td","de_DE"]],["tr",["td","Greek"],["td","el_GR"]],["tr",["td","Italian"],["td","it_IT"]],["tr",["td","Japanese"],["td","ja_JP"]],["tr",["td","Korean"],["td","ko_KR"]],["tr",["td","Norwegian"],["td","nb_NO"]],["tr",["td","Persian"],["td","fa_IR"]],["tr",["td","Polish"],["td","pl_PL"]],["tr",["td","Portuguese (Brazil)"],["td","pt_BR"]],["tr",["td","Portuguese"],["td","pt_PT"]],["tr",["td","Russian"],["td","ru_RU"]],["tr",["td","Serbian"],["td","sr_RS"]],["tr",["td","Slovak"],["td","sk_SK"]],["tr",["td","Spanish"],["td","es_ES"]],["tr",["td","Swedish"],["td","sv_SE"]],["tr",["td","Turkish"],["td","tr_TR"]],["tr",["td","Vietnamese"],["td","vi_VN"]],["tr",["td","Thai"],["td","th_TH"]]]],["p","See usage and ways to contribute a new locale package at ",["a",{title:null,href:"/components/locale-provider"},"LocaleProvider"],"."],["h2","i18n sample"],["p","We also provide you a complete sample of internationalization usage, which is using ",["a",{title:null,href:"https://github.com/yahoo/react-intl"},"react-intl"]," and LocaleProvider: ",["a",{title:null,href:"https://github.com/ant-design/intl-example"},"ant-design/intl-example"],"."]],meta:{order:8,title:"Internationalization",filename:"docs/react/i18n.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#LocaleProvider",title:"LocaleProvider"},"LocaleProvider"]],["li",["a",{className:"bisheng-toc-h2",href:"#i18n-sample",title:"i18n sample"},"i18n sample"]]]}}});