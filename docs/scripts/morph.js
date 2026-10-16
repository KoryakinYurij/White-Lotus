/* ===== Х9 · «В КРУГУ СВОИХ» складывается в кольцо лого =====
   строка распадается на буквы, они перелетают на окружность вокруг будущего лотоса (центр 50,58),
   кольцо крутится, сжимается к кольцу лого и гаснет, пока рисуется #rc */
const morph={els:[],anims:[]};
function buildMorph(){
  morph.anims.forEach(a=>{a.cancel();const i=all.indexOf(a);if(i>=0)all.splice(i,1)});
  morph.els.forEach(e=>e.remove());morph.anims=[];morph.els=[];
  const mA=(el,kf,s,d,o)=>{const a=A(el,kf,s,d,o);morph.anims.push(a);return a};
  const a1=$('a1'),a2=$('a2'),a3=$('a3'),txt=a2.textContent,F=parseFloat(a2.style.fontSize)||12;
  // замер букв строки в «покое» (когда она уже выехала), потом время возвращаем
  const saved=all.map(a=>a.currentTime);all.forEach(a=>a.currentTime=2500);
  const cr=cam.getBoundingClientRect(),u=st.clientWidth/100*(cr.width/cam.offsetWidth),node=a2.firstChild,rr=document.createRange(),L=[];
  for(let i=0;i<txt.length;i++){rr.setStart(node,i);rr.setEnd(node,i+1);const r=rr.getBoundingClientRect();
    L.push({ch:txt[i],cx:(r.left+r.width/2-cr.left)/u,cy:(r.top+r.height/2-cr.top)/u,w:r.width/u})}
  all.forEach((a,i)=>{if(i<saved.length)a.currentTime=saved[i]});
  const CX=50,CY=58,N=32,STEP=360/N,PHI0=-92.5,RA=40,kEnd=6.4/F,GOLD='#ffd7a0';
  const pos=k=>{const a=PHI0+k*STEP,r=a*Math.PI/180;return{a,x:RA*Math.sin(r),y:-RA*Math.cos(r)}};
  const ring=mk('','position:absolute;left:'+CX+'cqw;top:'+CY+'cqw;width:0;height:0;z-index:4;pointer-events:none',cam);morph.els.push(ring);
  mA(ring,[{opacity:0},{opacity:1,offset:.001},{opacity:1,offset:.74},{opacity:0}],3.0,2.05,{easing:'linear'});
  mA(ring,[{rotate:'0deg'},{rotate:'70deg'}],3.3,1.7,{easing:'cubic-bezier(.4,0,.5,1)'});
  mA(ring,[{scale:1},{scale:.8625}],4.0,.6,{easing:EZ});
  const T=(x,y)=>x.toFixed(2)+'cqw '+y.toFixed(2)+'cqw';
  const mkL=(ch,w)=>{const e=mk('disp wt','position:absolute;left:0;top:0;display:block;white-space:pre;line-height:1;height:1em;font-size:'+F+'cqw;width:'+w.toFixed(2)+'cqw',ring,ch);morph.els.push(e);return e};
  // 1-я копия: настоящие буквы строки перелетают на дугу
  L.forEach((l,i)=>{if(l.ch===' ')return;const e=mkL(l.ch,l.w),p=pos(i);
    mA(e,[{translate:T(l.cx-l.w/2-CX,l.cy-F/2-CY),rotate:'0deg',scale:1,color:'#fff'},
          {translate:T(p.x-l.w/2,p.y-F/2),rotate:p.a.toFixed(1)+'deg',scale:kEnd,color:GOLD}],3.0+i*.025,.65,{easing:'cubic-bezier(.45,0,.15,1)'})});
  // 2-я копия и звёздочки-разделители проявляются на своих местах и замыкают кольцо
  L.forEach((l,j)=>{if(l.ch===' ')return;const p=pos(16+j),e=mkL(l.ch,l.w);
    e.style.translate=T(p.x-l.w/2,p.y-F/2);e.style.rotate=p.a.toFixed(1)+'deg';e.style.color=GOLD;
    mA(e,[{opacity:0,scale:kEnd*.5},{opacity:1,scale:kEnd}],3.45+j*.03,.4,{easing:EZ})});
  [14,30].forEach((k,n)=>{const p=pos(k),e=mk('','position:absolute;left:0;top:0;width:3.6cqw;height:3.6cqw',ring,'<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="#ffb347" d="M12 0L14.2 9.8 24 12 14.2 14.2 12 24 9.8 14.2 0 12 9.8 9.8Z"/></svg>');morph.els.push(e);
    e.style.translate=T(p.x-1.8,p.y-1.8);e.style.rotate=p.a.toFixed(1)+'deg';
    mA(e,[{opacity:0,scale:.3},{opacity:1,scale:1}],3.6+n*.15,.4,{easing:BO})});
  // прямая строка уступает место буквам-перелётам, остальной текст хука уходит
  mA(a2,[{opacity:1},{opacity:0}],3.0,.001,{fill:'forwards',easing:'linear'});
  mA(a3,[{opacity:1},{opacity:0}],2.75,.3,{fill:'forwards',easing:'linear'});
  [...a1.querySelectorAll('span')].forEach((l,i)=>mA(l,[{opacity:1,filter:'blur(0) brightness(1)',translate:'0 0'},
    {opacity:0,filter:'blur(.6cqw) brightness(2)',translate:((i-3.5)*.9).toFixed(1)+'cqw -6cqw'}],2.7+i*.02,.35,{fill:'forwards',easing:'cubic-bezier(.5,0,.8,.4)'}));
  // паук уползает по нити, чтобы не мешать кольцу
  mA(sp1,[{translate:'0 34cqw'},{translate:'0 -50cqw'}],3.0,.55,{fill:'forwards',easing:IN});
  all.forEach(a=>a.currentTime=t*1000);
}
buildMorph();document.fonts.ready.then(buildMorph);addEventListener('resize',buildMorph);
rg.max=D*1000;set(0);requestAnimationFrame(tick);
