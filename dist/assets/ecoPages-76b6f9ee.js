import{_ as p,S as g,a as m,H as u,F as _,N as x,P as f,M as y,K as h,r as s,o as I,c as A,b as c,d as a}from"./index-f88e7fe6.js";const v={components:{Swiper:g,SwiperSlide:m,Header:u,Footer:_},setup(){return{modules:[x,f,y,h]}},data(){return{links:["BOSH SAHIFA","XIZMATLAR","YANGILIKLAR","XULOSALAR","LOYIHACHILAR REYTINGI","JAMOATCHILIK ESHITUVI","STATISTIKA","ALOQALAR"],activActivitie:1,isOpenLocation:!1,activeLocation:"Uz",locations:["Uz","Ru","En"],sliderInfo1:[{id:1,text:"Фаолият турлари бўйича лойиҳаолди ва лойиҳа ҳужжатларини давлат экологик экспертизасидан ўтказиш"},{id:2,text:"Шаҳарсозлик ҳужжатларини давлат экологик экспертизасидан ўтказиш"},{id:3,text:"Барча турдаги қурилиш учун ер участкаларини танлаш материалларини давлат экологик экспертизасидан ўтказиш"},{id:4,text:"Фаолият турлари бўйича лойиҳаолди ва лойиҳа ҳужжатларини давлат экологик экспертизасидан ўтказиш"},{id:5,text:"Шаҳарсозлик ҳужжатларини давлат экологик экспертизасидан ўтказиш"},{id:6,text:"Барча турдаги қурилиш учун ер участкаларини танлаш материалларини давлат экологик экспертизасидан ўтказиш"},{id:7,text:"Фаолият турлари бўйича лойиҳаолди ва лойиҳа ҳужжатларини давлат экологик экспертизасидан ўтказиш"},{id:8,text:"Шаҳарсозлик ҳужжатларини давлат экологик экспертизасидан ўтказиш"}],activitiesInfo:[{id:1,text:"I toifadagi faoliyat turlari",num:34,img:"./src/assets/images/eco_activity1.png"},{id:2,text:"II toifadagi faoliyat turlari",num:33,img:"./src/assets/images/eco_buyutma.png"},{id:3,text:"II toifadagi faoliyat turlari",num:61,img:"./src/assets/images/eco_shartnoma1.webp"},{id:4,text:"IV toifadagi faoliyat turlari",num:15,img:"./src/assets/images/eco_xulosa.png"}],news:[{id:1,text:"Minimal workspace for inspirations",date:"12.11.2023 y",img:"/src/assets/images/eco_news1.png"},{id:2,text:"Does productivity increase when working remotely ?",date:"10.11.2023 y",img:"/src/assets/images/eco_news2.png"},{id:3,text:"Morning routine to boost your mood",date:"08.11.2023 y",img:"/src/assets/images/eco_news3.png"},{id:4,text:"5+ tips to find comfortable co-working space",date:"03.11.2023 y",img:"/src/assets/images/eco_news4.png"}],publicProjets:[{id:1,text:"Қорақалпоғистон Республикаси Қораўзак туманидаги «Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш”",date:"12.11.2023 y",img:"/src/assets/images/eco_public1.png"},{id:2,text:"«Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш” ...",date:"12.11.2023 y",img:"/src/assets/images/eco_public2.png"},{id:3,text:"«Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш” ...",date:"12.11.2023 y",img:"/src/assets/images/eco_public3.png"},{id:4,text:"«Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш” ...",date:"12.11.2023 y",img:"/src/assets/images/eco_public4.png"},{id:1,text:"Қорақалпоғистон Республикаси Қораўзак туманидаги «Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш”",date:"12.11.2023 y",img:"/src/assets/images/eco_public1.png"},{id:2,text:"«Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш” ...",date:"12.11.2023 y",img:"/src/assets/images/eco_public2.png"},{id:3,text:"«Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш” ...",date:"12.11.2023 y",img:"/src/assets/images/eco_public3.png"},{id:4,text:"«Тебинбулоқ» кони ҳудудида тоғ-металлургия мажмуасини қуриш” ...",date:"12.11.2023 y",img:"/src/assets/images/eco_public4.png"}]}},computed:{otherLocations(){let e=[];for(let t=0;t<this.locations.length;t++)this.locations[t]!=this.activeLocation&&e.push(this.locations[t]);return e}},methods:{activeActivite(e){this.activActivitie=e+1,document.documentElement.style.setProperty("--ht1",e+1)},changeLocation(e){this.activeLocation=e.target.innerHTML},openLocation(){this.isOpenLocation?this.isOpenLocation=!1:this.isOpenLocation=!0},fillBottle2(){document.documentElement.style.setProperty("--ht2",document.querySelectorAll(".environmental-expertise .swiper-pagination-current")[0].innerHTML)},countUp(){document.querySelectorAll(".countUp").forEach(e=>{let t=0,i=parseInt(e.getAttribute("data-val")),o=Math.floor(5e3/i),n=setInterval(()=>{t+=1,e.textContent=t,t==i&&clearInterval(n)},o)})}},mounted(){this.fillBottle2(),this.countUp()}},L={class:"wrapper-eco"};function w(e,t,i,o,n,b){const r=s("Header"),l=s("RouterView"),d=s("Footer");return I(),A("div",L,[c("nav",null,[a(r)]),a(l),c("footer",null,[a(d)])])}const S=p(v,[["render",w]]);export{S as default};