
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

import{d as p,u as c,r as v,p as g,n as d,g as o,z as m,w as h,c as y,t as n,i as e,A as f,Q as b}from"./index-CAe0BuuW.js";var _={pkg:{version:"3.7.0",dependencies:{"@element-plus/icons-vue":"^2.3.1","@headlessui/vue":"^1.7.22","@imengyu/vue3-context-menu":"^1.4.1","@vueuse/core":"^10.10.0","@vueuse/integrations":"^10.10.0",autoprefixer:"^10.4.19",axios:"^1.7.2",dayjs:"^1.11.11",echarts:"^5.5.0","element-plus":"^2.7.4",eruda:"^3.0.1","floating-vue":"5.2.2","hotkeys-js":"^3.13.7",less:"^4.2.0","lodash-es":"^4.17.21",marked:"^13.0.0","md-editor-v3":"^4.16.7",mitt:"^3.0.1",mockjs:"^1.1.0",nprogress:"^0.2.0",overlayscrollbars:"^2.8.3","overlayscrollbars-vue":"^0.5.9","path-browserify":"^1.0.1","path-to-regexp":"^6.2.2","resize-observer-polyfill":"^1.5.1",vconsole:"^3.15.1",vue:"^3.4.27","vue-m-message":"^4.0.2","vue-router":"^4.3.2"},devDependencies:{"@iconify/json":"^2.2.217","@iconify/vue":"^4.1.2","@types/lodash-es":"^4.17.12","@types/mockjs":"^1.0.10","@types/path-browserify":"^1.0.2","@unocss/core":"^0.61.0","@unocss/preset-mini":"^0.61.0","@vitejs/plugin-legacy":"^5.4.1","@vitejs/plugin-vue":"^5.0.5","@vitejs/plugin-vue-jsx":"^4.0.0",archiver:"^7.0.1",boxen:"^7.1.1",bumpp:"^9.4.1",eslint:"^9.4.0",esno:"^4.7.0","fs-extra":"^11.2.0","http-server":"^14.1.1",inquirer:"^9.2.23","npm-run-all2":"^6.2.0",picocolors:"^1.0.1",plop:"^4.0.1",sass:"^1.77.4",stylelint:"^16.6.1",svgo:"^3.3.2",typescript:"^5.4.5",unocss:"^0.60.4","unplugin-auto-import":"^0.17.6","unplugin-turbo-console":"^1.8.6","unplugin-vue-components":"^0.27.0",vite:"^5.2.12","vite-plugin-banner":"^0.7.1","vite-plugin-checker":"^0.6.4","vite-plugin-compression2":"^1.1.1","vite-plugin-fake-server":"^2.1.1","vite-plugin-pages":"^0.32.2","vite-plugin-svg-icons":"^2.0.1","vite-plugin-vue-devtools":"^7.2.1","vite-plugin-vue-meta-layouts":"^0.4.3","vue-tsc":"^2.0.19"}},lastBuildTime:"2024-07-31 14:07:48"};const k={key:0,class:"block truncate font-bold"},x="QUlXZWI=",S=p({name:"Logo",__name:"index",props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(w){const{pkg:i}=_,s=c(),t=v("AIWeb"),r=atob(x);if(!t.value.includes(r))throw document.body.innerHTML="<h1></h1>",new Error("");const l=g(()=>s.settings.home.enable?s.settings.home.fullPath:"");return(u,j)=>{const a=d("RouterLink");return o(),m(a,{to:e(l),class:b(["h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-inherit no-underline",{"cursor-pointer":e(s).settings.home.enable}]),title:e(t)},{default:h(()=>[u.showTitle?(o(),y("span",k,n(e(t))+"-"+n(e(i).version),1)):f("",!0)]),_:1},8,["to","class","title"])}}});export{S as _};