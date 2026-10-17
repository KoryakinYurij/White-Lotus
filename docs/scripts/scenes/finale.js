/* ===== 5 · УЧАСТИЕ 21.2–25.6 ===== */
scene('s5',21.5,D,{last:true,fi:.25});
A($('lg2'),[{opacity:0,transform:'scale(.55)',filter:'blur(1.6cqw)'},{opacity:1,transform:'none',filter:'blur(0)'}],21.6,1.0,{easing:EZ});
A($('gl2'),[{opacity:0},{opacity:1}],21.7,.8,{easing:'linear'});A($('gl2'),[{transform:'scale(.94)'},{transform:'scale(1.1)'}],22.0,1,{direction:'alternate',iterations:3,easing:'ease-in-out',fill:'none'});
A($('lw2'),[{translate:'0 0'},{translate:'0 -1.4cqw'}],22.0,1.0,{direction:'alternate',iterations:3,fill:'none',easing:'ease-in-out'});
wipe($('e0'),22.0,.55,'translateX(-8cqw)');A($('e0b'),[{opacity:0,transform:'translateX(8cqw)'},{opacity:1,transform:'none'}],23.0,.55);
// элегантный призыв: орнамент → «ссылка» (золото, мерцание) → «в шапке профиля» → стрелка вверх
const ob=$('orn').querySelectorAll('i');
A(ob[0],[{transform:'scaleX(0)'},{transform:'none'}],23.25,.6,{easing:SL});A(ob[1],[{transform:'scaleX(0)'},{transform:'none'}],23.25,.6,{easing:SL});
A($('orn').querySelector('svg'),[{opacity:0,transform:'scale(0) rotate(-90deg)'},{opacity:1,transform:'none'}],23.45,.5,{easing:BO});
A($('k1'),[{opacity:0,transform:'translateY(5cqw) scale(.94)',filter:'blur(1.2cqw) drop-shadow(0 0 3cqw rgba(255,122,26,.5))'},{opacity:1,transform:'none',filter:'blur(0) drop-shadow(0 0 3cqw rgba(255,122,26,.5))'}],23.5,.8);
// Ф2: короткий блик на ссылке раз в такт (120 BPM), после появления текста
A($('k1'),[{backgroundPosition:'100% 0'},{backgroundPosition:'100% 0',offset:.4},{backgroundPosition:'0% 0',offset:.7},{backgroundPosition:'100% 0'}],23.5,2.0,{iterations:Infinity,easing:'ease-in-out'});
A($('lkx'),[{scale:1},{scale:1.03}],24.0,.5,{direction:'alternate',iterations:4,fill:'none',easing:'ease-in-out'});
A($('ulx'),[{opacity:0,transform:'scaleX(0)'},{opacity:1,transform:'none'}],24.0,.7,{easing:SL});
A($('cp'),[{opacity:0,letterSpacing:'.6em',transform:'translateY(1.5cqw)'},{opacity:1,letterSpacing:'.3em',transform:'none'}],24.0,.8);
A($('upr'),[{opacity:0},{opacity:1}],24.5,.4,{easing:'linear'});
A($('upr').querySelector('svg'),[{translate:'0 .7cqw'},{translate:'0 -.9cqw'}],24.5,.5,{direction:'alternate',iterations:4,fill:'none',easing:'ease-in-out'});
A($('pg2'),[{transform:'scale(1)',opacity:.8},{transform:'scale(1.9)',opacity:0}],24.5,1.0,{iterations:2,fill:'none',easing:'ease-out'});
const fA=dec('pumpA','left:-8cqw;bottom:-8cqw;width:36cqw;filter:'+GP2,{p:'s5',tilt:-8}),fS=dec('pumpS','right:-4cqw;bottom:-6cqw;width:28cqw;filter:'+GP2,{p:'s5',tilt:7});
rise(fA,21.5,35,{r:-25});rise(fS,21.65,35,{r:25});flame(fA,21.5,3.2,GP2);flame(fS,21.7,2.8,GP2);
