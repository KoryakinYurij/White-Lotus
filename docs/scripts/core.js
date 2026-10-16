const D=25.6;
const st=document.getElementById('st'),$=s=>document.getElementById(s),cam=$('cam'),fx=$('fx');
let seed=11;const rnd=()=>{seed=(seed+0x6D2B79F5)|0;let t=Math.imul(seed^(seed>>>15),1|seed);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296};const R=()=>rnd()*2-1;
document.querySelectorAll('img.L').forEach(i=>i.src=LOGO);
document.querySelectorAll('img[data-k]').forEach(i=>i.src=ASSETS[i.dataset.k]);
const EZ='cubic-bezier(.2,.8,.2,1)',BO='cubic-bezier(.34,1.56,.64,1)',SL='cubic-bezier(.8,0,.2,1)',IN='cubic-bezier(.6,0,.9,.4)',MV='cubic-bezier(.5,0,.2,1)';
const all=[];
function A(el,kf,s,d,o){const a=el.animate(kf,Object.assign({delay:s*1000,duration:d*1000,fill:'both',easing:EZ},o||{}));a.pause();all.push(a);return a}
function mk(cls,css,p,html){const e=document.createElement('div');e.className=cls||'';if(css)e.style.cssText=css;if(html)e.innerHTML=html;(p||cam).appendChild(e);return e}
function dec(k,css,o){o=o||{};const p=o.p?(typeof o.p==='string'?$(o.p):o.p):cam;const e=mk('d '+(o.c||''),css,p);const i=new Image();i.src=ASSETS[k];i.alt='';if(o.tilt)i.style.rotate=o.tilt+'deg';e.appendChild(i);return e}
const G='drop-shadow(0 0 5cqw rgba(255,150,40,.75))',GP='drop-shadow(0 0 7cqw rgba(255,130,20,.55))';
const GC='drop-shadow(0 0 1.6cqw rgba(255,150,40,.4))',GP2='drop-shadow(0 0 3.5cqw rgba(255,130,20,.3))'; // v11.0.10: тише свечи и тыквы, главный свет сцены — на тексте/лого/иконке
function rise(e,s,ty,o){o=o||{};A(e,[{opacity:0,translate:(o.tx||0)+'cqw '+ty+'cqw',scale:o.sc||1,rotate:(o.r||0)+'deg'},{opacity:1,translate:'0 0',scale:1,rotate:'0deg'}],s,o.d||.8,{easing:o.ez||BO})}
function sink(e,s,d,ty){A(e,[{opacity:1,translate:'0 0'},{opacity:0,translate:'0 '+(ty||40)+'cqw'}],s,d||.5,{fill:'forwards',easing:IN})}
function drift(e,s,n,dy,d){A(e,[{translate:'0 0',rotate:'0deg'},{translate:'0 '+dy+'cqw',rotate:(dy>0?2:-2)+'deg'}],s,d||1.2,{direction:'alternate',iterations:n,fill:'none',easing:'ease-in-out'})}
function scene(id,s,e,o){o=o||{};const el=$(id);if(o.first)el.style.opacity=1;else A(el,[{opacity:0},{opacity:1}],s,o.fi||.3,{easing:'linear'});if(!o.last)A(el,[{opacity:1},{opacity:0}],e,o.fo||.3,{easing:'linear',fill:'forwards'})}
function pop(e,s,d,from,ez){A(e,[Object.assign({opacity:0},from||{transform:'translateY(6cqw)'}),{opacity:1,transform:'none'}],s,d||.6,ez?{easing:ez}:{})}
function wipe(e,s,d,from){A(e,[{opacity:0,clipPath:'inset(0 100% 0 0)',transform:from||'translateX(-6cqw)'},{opacity:1,clipPath:'inset(0 0 0 0)',transform:'none'}],s,d||.5,{easing:SL})}
function spl(e){const t=e.textContent;e.textContent='';return[...t].map(c=>{const s=document.createElement('span');s.textContent=c===' '?'\u00a0':c;s.style.display='inline-block';e.appendChild(s);return s})}
function letters(e,s,gap,kf,d,ez){spl(e).forEach((l,i)=>A(l,kf(i),s+i*gap,d||.5,{easing:ez||BO}))}
// затухающий толчок камеры вместо случайной тряски
function flash(e,s,d,pk){A(e,[{opacity:0},{opacity:pk||.9,offset:.35},{opacity:0}],s,d,{easing:'linear'})}
function hit(s,amp,deg){amp=amp||1.6;const r=(deg||90)*Math.PI/180,dx=Math.cos(r),dy=Math.sin(r),kf=[];
 for(let i=0;i<=10;i++){const k=Math.exp(-i*.45)*Math.cos(i*1.9);kf.push({translate:(dx*amp*k).toFixed(2)+'cqw '+(dy*amp*k).toFixed(2)+'cqw'})}
 A(cam,kf,s,.42,{easing:'linear',fill:'none'})}
// живое пламя вместо стробоскопа flick: целые частоты, цикл бесшовный
function flame(e,s,per,base,amp){per=per||3.2;base=base||G;amp=amp||1;const kf=[],N=64;
 for(let i=0;i<=N;i++){const a=i/N*2*Math.PI,n=.55*Math.sin(3*a)+.3*Math.sin(7*a+1.7)+.15*Math.sin(17*a+.4);
  kf.push({filter:base+' brightness('+(1.08+.14*amp*n).toFixed(3)+')'})}
 A(e,kf,s,per,{iterations:Infinity,easing:'linear',fill:'none'})}
function bat(p,s,y,w,d,dir,t,dy){ // v11.0.10: полёт по дуге, глубина (ближе/дальше), наклон по траектории, разный взмах + планирование
 dy=dy==null?R()*6:dy;const e=dec(t,'left:0;top:'+y+'cqw;width:'+w+'cqw;opacity:0',{c:'sil',p}),i=e.firstChild;
 const x0=dir>0?-(w+6):106,X=(dir>0?106:-(w+6))-x0,amp=(rnd()<.5?-1:1)*(4+rnd()*7),a=.7+rnd()*.15,b=1.05+rnd()*.25,near=rnd()<.5,N=14,kf=[];
 for(let k=0;k<=N;k++){const u=k/N,yy=dy*u+amp*Math.sin(Math.PI*u),sl=(dy+amp*Math.PI*Math.cos(Math.PI*u))/Math.abs(X),ang=Math.max(-22,Math.min(22,dir*Math.atan(sl)*180/Math.PI*2.5));
  kf.push({offset:u,opacity:(k===0||k===N)?0:1,translate:(x0+X*u).toFixed(1)+'cqw '+yy.toFixed(1)+'cqw',rotate:ang.toFixed(1)+'deg',scale:(near?a+(b-a)*u:b+(a-b)*u).toFixed(3)})}
 A(e,kf,s,d,{easing:'linear'});
 const fp=.1+rnd()*.07,fk=.3+rnd()*.25,fd=d*(.5+rnd()*.3),off=rnd()*.08;
 A(i,[{transform:'scaleY(1) scaleX('+dir+')'},{transform:'scaleY('+fk.toFixed(2)+') scaleX('+dir+')'}],s+off,fp,{direction:'alternate',iterations:Math.max(2,Math.round(fd/fp)),easing:'ease-in-out',fill:'none'})}
