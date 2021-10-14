var Se=Object.defineProperty,Be=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var ce=(a,t,n)=>t in a?Se(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,j=(a,t)=>{for(var n in t||(t={}))De.call(t,n)&&ce(a,n,t[n]);if(ue)for(var n of ue(t))Re.call(t,n)&&ce(a,n,t[n]);return a},V=(a,t)=>Be(a,Ne(t));import{e as S,h as G,i as de,j as h,k as q,l as ze,m as Ee,r as E,g as e,o,n as B,w as N,p as w,b as H,t as T,q as he,c,s as x,v as Pe,x as A,y as K,z as pe,A as ve,a as d,F as D,B as P,d as C,C as I,D as Ae,E as He,T as fe,G as O,H as Ie,I as J,J as Q,K as _e,u as me,f as R,L as be,M as ge,N as ke,O as Oe,P as $e,Q as Fe,R as X,S as Z,U as We,V as F,W as Ue,X as je,Y as Ve}from"./app.828c55ea.js";import{_ as Ge}from"./plugin-vue_export-helper.5a098b48.js";const qe=["href","rel","target","aria-label"],Ke=S({inheritAttrs:!1});function Xe(a){const t=a,n=G(),l=Pe(),{item:s}=de(t),$=h(()=>q(s.value.link)),m=h(()=>ze(s.value.link)||Ee(s.value.link)),b=h(()=>{if(!m.value){if(s.value.target)return s.value.target;if($.value)return"_blank"}}),r=h(()=>b.value==="_blank"),i=h(()=>!$.value&&!m.value&&!r.value),u=h(()=>{if(!m.value){if(s.value.rel)return s.value.rel;if(r.value)return"noopener noreferrer"}}),f=h(()=>s.value.ariaLabel||s.value.text),p=h(()=>{const k=Object.keys(l.value.locales);return k.length?!k.some(v=>v===s.value.link):s.value.link!=="/"}),g=h(()=>p.value?n.path.startsWith(s.value.link):!1),_=h(()=>i.value?s.value.activeMatch?new RegExp(s.value.activeMatch).test(n.path):g.value:!1);return(k,v)=>{const L=E("RouterLink"),y=E("OutboundLink");return e(i)?(o(),B(L,he({key:0,class:["nav-link",{"router-link-active":e(_)}],to:e(s).link,"aria-label":e(f)},k.$attrs),{default:N(()=>[w(k.$slots,"before"),H(" "+T(e(s).text)+" ",1),w(k.$slots,"after")]),_:3},16,["class","to","aria-label"])):(o(),c("a",he({key:1,class:"nav-link external",href:e(s).link,rel:e(u),target:e(b),"aria-label":e(f)},k.$attrs),[w(k.$slots,"before"),H(" "+T(e(s).text)+" ",1),e(r)?(o(),B(y,{key:0})):x("",!0),w(k.$slots,"after")],16,qe))}}const z=S(V(j({},Ke),{props:{item:{type:Object,required:!0}},setup:Xe})),Ye=["aria-labelledby"],Je={class:"hero"},Qe=["src","alt"],Ze={key:1,id:"main-title"},et={key:2,class:"description"},tt={key:3,class:"actions"},nt={key:0,class:"features"},at={class:"theme-default-content custom"},st=["innerHTML"],ot=["textContent"],rt=S({setup(a){const t=A(),n=K(),l=h(()=>t.value.heroImage?pe(t.value.heroImage):null),s=h(()=>t.value.heroText===null?null:t.value.heroText||n.value.title||"Hello"),$=h(()=>t.value.heroAlt||s.value||"hero"),m=h(()=>t.value.tagline===null?null:t.value.tagline||n.value.description||"Welcome to your VuePress site"),b=h(()=>ve(t.value.actions)?t.value.actions.map(({text:f,link:p,type:g="primary"})=>({text:f,link:p,type:g})):[]),r=h(()=>ve(t.value.features)?t.value.features:[]),i=h(()=>t.value.footer),u=h(()=>t.value.footerHtml);return(f,p)=>{const g=E("Content");return o(),c("main",{class:"home","aria-labelledby":e(s)?"main-title":void 0},[d("header",Je,[e(l)?(o(),c("img",{key:0,src:e(l),alt:e($)},null,8,Qe)):x("",!0),e(s)?(o(),c("h1",Ze,T(e(s)),1)):x("",!0),e(m)?(o(),c("p",et,T(e(m)),1)):x("",!0),e(b).length?(o(),c("p",tt,[(o(!0),c(D,null,P(e(b),_=>(o(),B(z,{key:_.text,class:I(["action-button",[_.type]]),item:_},null,8,["class","item"]))),128))])):x("",!0)]),e(r).length?(o(),c("div",nt,[(o(!0),c(D,null,P(e(r),_=>(o(),c("div",{key:_.title,class:"feature"},[d("h2",null,T(_.title),1),d("p",null,T(_.details),1)]))),128))])):x("",!0),d("div",at,[C(g)]),e(i)?(o(),c(D,{key:1},[e(u)?(o(),c("div",{key:0,class:"footer",innerHTML:e(i)},null,8,st)):(o(),c("div",{key:1,class:"footer",textContent:T(e(i))},null,8,ot))],64)):x("",!0)],8,Ye)}}}),Le=a=>!q(a)||/github\.com/.test(a)?"GitHub":/bitbucket\.org/.test(a)?"Bitbucket":/gitlab\.com/.test(a)?"GitLab":/gitee\.com/.test(a)?"Gitee":null,lt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},it=({docsRepo:a,docsBranch:t,docsDir:n,filePathRelative:l,editLinkPattern:s})=>{const $=Le(a);let m;return s?m=s:$!==null&&(m=lt[$]),m?m.replace(/:repo/,q(a)?a:`https://github.com/${a}`).replace(/:branch/,t).replace(/:path/,Ae(`${He(n)}/${l}`)):null},ut=S({setup(a){const t=l=>{l.style.height=l.scrollHeight+"px"},n=l=>{l.style.height=""};return(l,s)=>(o(),B(fe,{name:"dropdown",onEnter:t,onAfterEnter:n,onBeforeLeave:t},{default:N(()=>[w(l.$slots,"default")]),_:3}))}}),ct=["aria-label"],dt={class:"title"},ht=d("span",{class:"arrow down"},null,-1),pt=["aria-label"],vt={class:"title"},ft={class:"nav-dropdown"},_t={class:"dropdown-subtitle"},mt={key:1},bt={class:"dropdown-subitem-wrapper"},gt=S({props:{item:{type:Object,required:!0}},setup(a){const t=a,{item:n}=de(t),l=h(()=>n.value.ariaLabel||n.value.text),s=O(!1),$=G();Ie(()=>$.path,()=>{s.value=!1});const m=r=>{r.detail===0?s.value=!s.value:s.value=!1},b=(r,i)=>i[i.length-1]===r;return(r,i)=>(o(),c("div",{class:I(["dropdown-wrapper",{open:s.value}])},[d("button",{class:"dropdown-title",type:"button","aria-label":e(l),onClick:m},[d("span",dt,T(e(n).text),1),ht],8,ct),d("button",{class:"mobile-dropdown-title",type:"button","aria-label":e(l),onClick:i[0]||(i[0]=u=>s.value=!s.value)},[d("span",vt,T(e(n).text),1),d("span",{class:I(["arrow",s.value?"down":"right"])},null,2)],8,pt),C(ut,null,{default:N(()=>[J(d("ul",ft,[(o(!0),c(D,null,P(e(n).children,(u,f)=>(o(),c("li",{key:u.link||f,class:"dropdown-item"},[u.children?(o(),c(D,{key:0},[d("h4",_t,[u.link?(o(),B(z,{key:0,item:u,onFocusout:p=>b(u,e(n).children)&&u.children.length===0&&(s.value=!1)},null,8,["item","onFocusout"])):(o(),c("span",mt,T(u.text),1))]),d("ul",bt,[(o(!0),c(D,null,P(u.children,p=>(o(),c("li",{key:p.link,class:"dropdown-subitem"},[C(z,{item:p,onFocusout:g=>b(p,u.children)&&b(u,e(n).children)&&(s.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(o(),B(z,{key:1,item:u,onFocusout:p=>b(u,e(n).children)&&(s.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[Q,s.value]])]),_:1})],2))}}),kt={key:0,class:"navbar-links"},ye=S({setup(a){const t=()=>{const i=_e(),u=me(),f=K(),p=R();return h(()=>{var L,y;const g=Object.keys(f.value.locales);if(g.length<2)return[];const _=i.currentRoute.value.path,k=i.currentRoute.value.fullPath;return[{text:(L=p.value.selectLanguageText)!=null?L:"unkown language",ariaLabel:(y=p.value.selectLanguageAriaLabel)!=null?y:"unkown language",children:g.map(M=>{var ne,ae,se,oe,re,le;const W=(ae=(ne=f.value.locales)==null?void 0:ne[M])!=null?ae:{},ee=(oe=(se=p.value.locales)==null?void 0:se[M])!=null?oe:{},te=`${W.lang}`,Te=(re=ee.selectLanguageName)!=null?re:te;let U;if(te===f.value.lang)U=k;else{const ie=_.replace(u.value,M);i.getRoutes().some(Me=>Me.path===ie)?U=ie:U=(le=ee.home)!=null?le:M}return{text:Te,link:U}})}]})},n=()=>{const i=R(),u=h(()=>i.value.repo),f=h(()=>u.value?Le(u.value):null),p=h(()=>u.value&&!q(u.value)?`https://github.com/${u.value}`:u.value),g=h(()=>p.value?i.value.repoLabel?i.value.repoLabel:f.value===null?"Source":f.value:null);return h(()=>!p.value||!g.value?[]:[{text:g.value,link:p.value}])},l=i=>be(i)?ge(i):i.children?V(j({},i),{children:i.children.map(l)}):i,$=(()=>{const i=R();return h(()=>(i.value.navbar||[]).map(l))})(),m=t(),b=n(),r=h(()=>[...$.value,...m.value,...b.value]);return(i,u)=>e(r).length?(o(),c("nav",kt,[(o(!0),c(D,null,P(e(r),f=>(o(),c("div",{key:f.text,class:"navbar-links-item"},[f.children?(o(),B(gt,{key:0,item:f},null,8,["item"])):(o(),B(z,{key:1,item:f},null,8,["item"]))]))),128))])):x("",!0)}}),$t=["title"],Lt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},yt=Oe('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),wt=[yt],xt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Ct=d("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Tt=[Ct],Mt=S({setup(a){const t=R(),n=ke(),l=()=>{n.value=!n.value};return(s,$)=>(o(),c("button",{class:"toggle-dark-button",title:e(t).toggleDarkMode,onClick:l},[J((o(),c("svg",Lt,wt,512)),[[Q,!e(n)]]),J((o(),c("svg",xt,Tt,512)),[[Q,e(n)]])],8,$t))}}),St=["title"],Bt=d("div",{class:"icon","aria-hidden":"true"},[d("span"),d("span"),d("span")],-1),Nt=[Bt],Dt=S({emits:["toggle"],setup(a){const t=R();return(n,l)=>(o(),c("div",{class:"toggle-sidebar-button",title:e(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:l[0]||(l[0]=s=>n.$emit("toggle"))},Nt,8,St))}}),Rt=["src","alt"],zt=S({emits:["toggle-sidebar"],setup(a){const t=me(),n=K(),l=R(),s=ke(),$=O(null),m=O(null),b=h(()=>l.value.home||t.value),r=h(()=>s.value&&l.value.logoDark!==void 0?l.value.logoDark:l.value.logo),i=h(()=>n.value.title),u=O(0),f=h(()=>u.value?{maxWidth:u.value+"px"}:{}),p=h(()=>l.value.darkMode);$e(()=>{const _=719,k=g($.value,"paddingLeft")+g($.value,"paddingRight"),v=()=>{var L;window.innerWidth<=_?u.value=0:u.value=$.value.offsetWidth-k-(((L=m.value)==null?void 0:L.offsetWidth)||0)};v(),window.addEventListener("resize",v,!1),window.addEventListener("orientationchange",v,!1)});function g(_,k){var y,M,W;const v=(W=(M=(y=_==null?void 0:_.ownerDocument)==null?void 0:y.defaultView)==null?void 0:M.getComputedStyle(_,null))==null?void 0:W[k],L=Number.parseInt(v,10);return Number.isNaN(L)?0:L}return(_,k)=>{const v=E("RouterLink"),L=E("NavbarSearch");return o(),c("header",{ref:(y,M)=>{M.navbar=y,$.value=y},class:"navbar"},[C(Dt,{onToggle:k[0]||(k[0]=y=>_.$emit("toggle-sidebar"))}),d("span",{ref:(y,M)=>{M.siteBrand=y,m.value=y}},[C(v,{to:e(b)},{default:N(()=>[e(r)?(o(),c("img",{key:0,class:"logo",src:e(pe)(e(r)),alt:e(i)},null,8,Rt)):x("",!0),e(i)?(o(),c("span",{key:1,class:I(["site-name",{"can-hide":e(r)}])},T(e(i)),3)):x("",!0)]),_:1},8,["to"])],512),d("div",{class:"navbar-links-wrapper",style:Fe(e(f))},[w(_.$slots,"before"),C(ye,{class:"can-hide"}),w(_.$slots,"after"),e(p)?(o(),B(Mt,{key:0})):x("",!0),C(L)],4)],512)}}}),Et={class:"page-meta"},Pt={key:0,class:"meta-item edit-link"},At={key:1,class:"meta-item last-updated"},Ht={class:"meta-item-label"},It={class:"meta-item-info"},Ot={key:2,class:"meta-item contributors"},Ft={class:"meta-item-label"},Wt={class:"meta-item-info"},Ut=["title"],jt=H(", "),Vt=S({setup(a){const t=()=>{const r=R(),i=X(),u=A();return h(()=>{var y,M;if(!((M=(y=u.value.editLink)!=null?y:r.value.editLink)!=null?M:!0))return null;const{repo:p,docsRepo:g=p,docsBranch:_="main",docsDir:k="",editLinkText:v}=r.value;if(!g)return null;const L=it({docsRepo:g,docsBranch:_,docsDir:k,filePathRelative:i.value.filePathRelative,editLinkPattern:r.value.editLinkPattern});return L?{text:v!=null?v:"Edit this page",link:L}:null})},n=()=>{const r=K(),i=R(),u=X(),f=A();return h(()=>{var _,k,v,L;return!((k=(_=f.value.lastUpdated)!=null?_:i.value.lastUpdated)!=null?k:!0)||!((v=u.value.git)==null?void 0:v.updatedTime)?null:new Date((L=u.value.git)==null?void 0:L.updatedTime).toLocaleString(r.value.lang)})},l=()=>{const r=R(),i=X(),u=A();return h(()=>{var p,g,_,k;return((g=(p=u.value.contributors)!=null?p:r.value.contributors)!=null?g:!0)&&(k=(_=i.value.git)==null?void 0:_.contributors)!=null?k:null})},s=R(),$=t(),m=n(),b=l();return(r,i)=>(o(),c("footer",Et,[e($)?(o(),c("div",Pt,[C(z,{class:"meta-item-label",item:e($)},null,8,["item"])])):x("",!0),e(m)?(o(),c("div",At,[d("span",Ht,T(e(s).lastUpdatedText)+": ",1),d("span",It,T(e(m)),1)])):x("",!0),e(b)&&e(b).length?(o(),c("div",Ot,[d("span",Ft,T(e(s).contributorsText)+": ",1),d("span",Wt,[(o(!0),c(D,null,P(e(b),(u,f)=>(o(),c(D,{key:f},[d("span",{class:"contributor",title:`email: ${u.email}`},T(u.name),9,Ut),f!==e(b).length-1?(o(),c(D,{key:0},[jt],64)):x("",!0)],64))),128))])])):x("",!0)]))}}),Gt={key:0,class:"page-nav"},qt={class:"inner"},Kt={key:0,class:"prev"},Xt=H(" \u2190 "),Yt={key:1,class:"next"},Jt=H(" \u2192 "),Qt=S({setup(a){const t=r=>r===!1?null:be(r)?ge(r):We(r)?r:!1,n=(r,i,u)=>{const f=r.findIndex(p=>p.link===i);if(f!==-1){const p=r[f+u];return(p==null?void 0:p.link)?p:null}for(const p of r)if(p.children){const g=n(p.children,i,u);if(g)return g}return null},l=A(),s=Z(),$=G(),m=h(()=>{const r=t(l.value.prev);return r!==!1?r:n(s.value,$.path,-1)}),b=h(()=>{const r=t(l.value.next);return r!==!1?r:n(s.value,$.path,1)});return(r,i)=>e(m)||e(b)?(o(),c("nav",Gt,[d("p",qt,[e(m)?(o(),c("span",Kt,[Xt,C(z,{item:e(m)},null,8,["item"])])):x("",!0),e(b)?(o(),c("span",Yt,[C(z,{item:e(b)},null,8,["item"]),Jt])):x("",!0)])])):x("",!0)}}),Zt={class:"page"},en={class:"theme-default-content"},tn=S({setup(a){return(t,n)=>{const l=E("Content");return o(),c("main",Zt,[w(t.$slots,"top"),d("div",en,[C(l)]),C(Vt),C(Qt),w(t.$slots,"bottom")])}}}),we=a=>decodeURI(a).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),nn=(a,t)=>{if(t===void 0)return!1;if(a.hash===t)return!0;const n=we(a.path),l=we(t);return n===l},xe=(a,t)=>nn(a,t.link)?!0:t.children?t.children.some(n=>xe(a,n)):!1,an=(a,t)=>a.link?F(z,V(j({},t),{item:a})):F("p",t,a.text),sn=(a,t)=>{var n;return((n=a.children)===null||n===void 0?void 0:n.length)?F("ul",{class:{"sidebar-sub-items":t>0}},a.children.map(l=>F("li",F(Y,{item:l,depth:t+1})))):null},Y=({item:a,depth:t=0})=>{const n=G(),l=xe(n,a);return[an(a,{class:{"sidebar-heading":t===0,"sidebar-item":!0,active:l}}),sn(a,t)]};Y.displayName="SidebarChild";Y.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const on={class:"sidebar"},rn={class:"sidebar-links"},ln=S({setup(a){const t=Z();return(n,l)=>(o(),c("aside",on,[C(ye),w(n.$slots,"top"),d("ul",rn,[(o(!0),c(D,null,P(e(t),s=>(o(),B(e(Y),{key:s.link||s.text,item:s},null,8,["item"]))),128))]),w(n.$slots,"bottom")]))}}),un=S({setup(a){const t=X(),n=A(),l=R(),s=h(()=>n.value.navbar!==!1&&l.value.navbar!==!1),$=Z(),m=O(!1),b=v=>{m.value=typeof v=="boolean"?v:!m.value},r={x:0,y:0},i=v=>{r.x=v.changedTouches[0].clientX,r.y=v.changedTouches[0].clientY},u=v=>{const L=v.changedTouches[0].clientX-r.x,y=v.changedTouches[0].clientY-r.y;Math.abs(L)>Math.abs(y)&&Math.abs(L)>40&&(L>0&&r.x<=80?b(!0):b(!1))},f=h(()=>[{"no-navbar":!s.value,"no-sidebar":!$.value.length,"sidebar-open":m.value},n.value.pageClass]);let p;$e(()=>{p=_e().afterEach(()=>{b(!1)})}),Ue(()=>{p()});const g=je(),_=g.resolve,k=g.pending;return(v,L)=>(o(),c("div",{class:I(["theme-container",e(f)]),onTouchstart:i,onTouchend:u},[w(v.$slots,"navbar",{},()=>[e(s)?(o(),B(zt,{key:0,onToggleSidebar:b},{before:N(()=>[w(v.$slots,"navbar-before")]),after:N(()=>[w(v.$slots,"navbar-after")]),_:3})):x("",!0)]),d("div",{class:"sidebar-mask",onClick:L[0]||(L[0]=y=>b(!1))}),w(v.$slots,"sidebar",{},()=>[C(ln,null,{top:N(()=>[w(v.$slots,"sidebar-top")]),bottom:N(()=>[w(v.$slots,"sidebar-bottom")]),_:3})]),w(v.$slots,"page",{},()=>[e(n).home?(o(),B(rt,{key:0})):(o(),B(fe,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e(_),onBeforeLeave:e(k)},{default:N(()=>[C(tn,{key:e(t).path},{top:N(()=>[w(v.$slots,"page-top")]),bottom:N(()=>[w(v.$slots,"page-bottom")]),_:3})]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});const Ce=Ve(),cn=h(()=>{var a;return(a=Ce.value)==null?void 0:a.repoLink}),dn=h(()=>{var a;return(a=Ce.value)==null?void 0:a.marketplaceLink}),hn={components:{Layout:un},setup(){return{repoLink:cn,marketplaceLink:dn}}},pn=["href"],vn=d("svg",{focusable:"false",width:"20px",height:"20px",style:{padding:"6px"},viewBox:"0 0 700 700"},[d("defs",null,[d("mask",{id:"matte"},[d("rect",{width:"700",height:"700",fill:"#fff"}),d("g",{transform:"translate(0.000000,700.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},[d("path",{d:"M2017 5038 c-3 -944 -5 -1101 -18 -1148 -62 -223 -200 -330 -424 -330 -193 0 -354 77 -506 242 l-55 61 -223 -242 -224 -243 79 -80 c172 -175 328 -275 527 -338 249 -80 554 -81 799 -4 95 30 211 87 281 137 65 46 271 250 308 304 69 99 113 213 145 373 16 77 18 196 21 1223 l4 1137 -355 0 -355 0 -4 -1092z"}),d("path",{d:"M3400 4550 l0 -1581 878 4 c841 4 881 5 987 25 283 54 469 143 620 297 148 151 215 325 215 560 0 335 -158 561 -518 742 l-83 41 53 31 c137 79 234 182 299 317 55 115 72 196 73 344 1 148 -10 202 -69 326 -118 246 -323 383 -675 450 -86 16 -175 19 -937 22 l-843 3 0 -1581z m1552 955 c192 -40 280 -144 265 -314 -14 -160 -75 -234 -237 -287 -49 -16 -104 -18 -467 -22 l-413 -3 0 320 0 321 393 0 c301 0 408 -4 459 -15z m150 -1278 c92 -21 147 -48 197 -93 71 -63 94 -126 93 -250 -2 -122 -48 -208 -145 -268 -87 -54 -225 -66 -744 -66 l-403 0 0 351 0 351 468 -5 c371 -4 481 -8 534 -20z"}),d("path",{d:"M870 1115 l0 -215 1530 0 1530 0 0 215 0 215 -1530 0 -1530 0 0 -215z"})])])]),d("rect",{width:"700",height:"700",fill:"currentColor",mask:"url(#matte)"})],-1),fn=[vn],_n=["href"],mn=d("svg",{focusable:"false",height:"32px",width:"32px",viewBox:"-6.39108 -10.38875 55.38936 62.3325"},[d("g",{fill:"currentColor"},[d("path",{d:"M21.3035 0C9.5395 0 0 9.5373 0 21.3035c0 9.4122 6.1041 17.3976 14.5687 20.2146 1.0646.1972 1.4555-.4622 1.4555-1.0249 0-.5076-.0198-2.1861-.0289-3.9662-5.9266 1.2887-7.1772-2.5136-7.1772-2.5136-.9691-2.462-2.3654-3.1171-2.3654-3.1171-1.9329-1.3222.1457-1.295.1457-1.295 2.1392.1502 3.2656 2.1956 3.2656 2.1956 1.9001 3.2565 4.9837 2.315 6.1994 1.7706.1916-1.3765.7433-2.3167 1.3526-2.8487-4.7319-.5383-9.706-2.3653-9.706-10.5283 0-2.3255.8322-4.2259 2.195-5.7178-.2212-.537-.9504-2.7037.2067-5.638 0 0 1.789-.5723 5.8596 2.184 1.6994-.472 3.5218-.7088 5.3323-.7172 1.8104.008 3.6343.2451 5.3368.7172 4.0661-2.7563 5.8526-2.184 5.8526-2.184 1.1596 2.9343.4304 5.101.2092 5.638 1.366 1.4919 2.1921 3.3923 2.1921 5.7178 0 8.1827-4.9837 9.984-9.7275 10.5114.7642.6611 1.445 1.9576 1.445 3.9451 0 2.8505-.0243 5.1446-.0243 5.8462 0 .5673.3831 1.2316 1.463 1.0224 8.4603-2.8201 14.5566-10.8028 14.5566-20.212C42.6071 9.5372 33.0691 0 21.3036 0","fill-rule":"evenodd"}),d("path",{d:"M8.0689 30.587c-.047.1061-.2135.1379-.3651.0649-.155-.0695-.2413-.2138-.1913-.32.046-.1087.2124-.139.367-.0663.1545.0695.2426.2152.1894.3214m.863.9625c-.1016.0942-.3006.0504-.435-.0984-.1397-.1485-.1655-.3475-.0624-.4427.1048-.0942.2974-.0501.4367.0984.1397.1503.1669.3475.0607.4427m.8399 1.2268c-.1305.091-.3443.006-.4763-.1834-.1305-.1898-.1305-.417.003-.508.132-.091.3426-.009.4763.1788.1302.1926.1302.4198-.003.5126m1.1506 1.1855c-.1167.1287-.3654.0942-.5475-.0815-.1862-.1718-.238-.4156-.1213-.5444.1185-.129.3686-.0928.552.0815.185.1715.241.417.1168.5444m1.5876.6882c-.052.167-.291.2424-.5324.1715-.241-.073-.3986-.268-.35-.4367.0502-.1683.2908-.247.5338-.1711.2406.0727.3987.2667.3486.4364m1.7435.1275c.006.1757-.1986.3214-.4519.3245-.2547.006-.461-.1365-.4639-.3094 0-.1774.2004-.3213.4547-.326.2533-.005.4611.1366.4611.3109m1.6223-.276c.0303.171-.1457.3471-.3972.394-.2473.0455-.4763-.0607-.5077-.2303-.0307-.1757.1482-.3517.3955-.3972.2519-.0437.4773.0593.5094.2335"})])],-1),bn=[mn];function gn(a,t,n,l,s,$){const m=E("Layout",!0);return o(),B(m,null,{"navbar-after":N(()=>[d("a",{class:"icon-link",href:l.marketplaceLink,title:"Jetbrains Marketplace",target:"\u201D_blank\u201D"},fn,8,pn),d("a",{class:"icon-link",href:l.repoLink,title:"Github Repository",target:"\u201D_blank\u201D"},bn,8,_n)]),_:1})}var yn=Ge(hn,[["render",gn]]);export{yn as default};
