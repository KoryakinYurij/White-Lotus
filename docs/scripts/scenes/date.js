/* ===== переход · зум в тыкву (позже: сюрприз успевает прочитаться) ===== */
const zp=dec('pumpB','left:20cqw;top:76cqw;width:60cqw;opacity:0;transform-origin:50% 64%',{p:fx});
A(zp,[{opacity:0,translate:'0 80cqw'},{opacity:1,translate:'0 0'}],15.5,.45,{easing:BO});
A(zp,[{scale:1},{scale:18}],16.0,.45,{easing:'cubic-bezier(.7,0,.9,.5)'});
A(zp,[{opacity:1},{opacity:0}],16.5,.12,{fill:'forwards',easing:'linear'});
flash($('fl2'),16.25,.55,1); // тёплая заливка при входе в тыкву — вернул, так переход читается лучше


/* ===== 4 · ДАТА 16.4–21.1 ===== */
scene('s4',16.25,21.5,{fi:.2,fo:.25});
pop($('d0'),16.3,.5);
A($('d1'),[{opacity:0,transform:'scale(3.2) rotate(8deg)'},{opacity:1,transform:'none'}],16.45,.55,{easing:BO});hit(17.0,1.6,100);
A($('d1'),[{scale:1},{scale:1.035}],17.5,1.0,{direction:'alternate',iterations:4,fill:'none',easing:'ease-in-out'});
wipe($('d2'),17.5,.5,'translateX(-14cqw)');
A($('d3a'),[{opacity:0,transform:'translateY(3cqw)'},{opacity:1,transform:'none'}],18.0,.5);
A($('d3b'),[{opacity:0,transform:'scaleY(0)'},{opacity:1,transform:'none'}],18.25,.35,{easing:SL});
A($('d4'),[{opacity:0,transform:'translateX(4cqw)'},{opacity:1,transform:'none'}],18.5,.5);
const nbi=$('d5').querySelectorAll('i'),nbs=$('d5').querySelector('span');
A(nbi[0],[{transform:'scaleX(0)'},{transform:'none'}],19.0,.6,{easing:SL});A(nbi[1],[{transform:'scaleX(0)'},{transform:'none'}],19.0,.6,{easing:SL});
// Д9: печать подтверждения — короткий удар, сжатие и мягкий возврат без отдельного свечения
A(nbs,[{opacity:0,transform:'translateY(-2cqw) scale(1.12)'},{opacity:1,transform:'translateY(.35cqw) scale(.96)',offset:.65},{opacity:1,transform:'none'}],19.0,.65,{easing:'cubic-bezier(.2,.9,.2,1)'});
const dpC=dec('pumpC','left:-9cqw;bottom:-8cqw;width:36cqw;filter:'+GP2,{p:'s4',tilt:-9}),dpB=dec('pumpB','right:-9cqw;bottom:-7cqw;width:34cqw;filter:'+GP2,{p:'s4',tilt:8});
rise(dpC,16.85,35,{r:-25});rise(dpB,17.0,35,{r:25});flame(dpC,16.85,3.2,GP2);flame(dpB,17.05,2.8,GP2);
bat('s4',17.3,40,11,2.6,-1,'bat1');bat('s4',18.9,52,10,2.4,1,'bat2');

/* ===== переход · стая 20.8–21.8 ===== */
for(let i=0;i<15;i++){const dir=i%2?1:-1;bat(fx,21.0+rnd()*.45,8+rnd()*135,14+rnd()*24,.65+rnd()*.35,dir,i%2?'bat1':'bat2',-30+rnd()*50)}
