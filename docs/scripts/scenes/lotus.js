/* ===== 2 · ЛОГО 4.45–8.15 ===== */
scene('s2',4.0,7.7,{fi:.25,fo:.3});
A($('lg'),[{opacity:0,transform:'scale(.55)',filter:'blur(1.6cqw)'},{opacity:1,transform:'none',filter:'blur(0)'}],4.1,1.1,{easing:EZ});
A($('gl'),[{opacity:0},{opacity:1}],4.2,.9,{easing:'linear'});
A($('rays'),[{opacity:0,rotate:'0deg'},{opacity:.9,offset:.2},{opacity:.9,offset:.8},{opacity:0,rotate:'30deg'}],4.6,2.8,{easing:'linear'});
A($('gl'),[{transform:'scale(.94)'},{transform:'scale(1.1)'}],5.0,1.0,{direction:'alternate',iterations:2,easing:'ease-in-out',fill:'none'});
A($('rc'),[{strokeDashoffset:100},{strokeDashoffset:0}],4.5,1.3,{easing:'cubic-bezier(.4,0,.2,1)'});
A($('orb'),[{rotate:'0deg'},{rotate:'360deg'}],4.5,1.3,{easing:'cubic-bezier(.4,0,.2,1)'});
A($('dot'),[{opacity:0},{opacity:1,offset:.1},{opacity:1,offset:.8},{opacity:0}],4.5,1.5,{easing:'linear'});
A($('lw'),[{translate:'0 0'},{translate:'0 -1.6cqw'}],5.0,1.0,{direction:'alternate',iterations:2,fill:'none',easing:'ease-in-out'});
letters($('b1'),5.0,.05,i=>[{opacity:0,transform:'translateY(6cqw)',filter:'blur(.8cqw)'},{opacity:1,transform:'none',filter:'blur(0)'}],.5,EZ);
wipe($('b2'),6.0,.6,'translateX(-10cqw)');
// переход: камера проходит сквозь лотос
A($('lg'),[{scale:1,opacity:1},{scale:5,opacity:0}],7.5,.55,{fill:'forwards',easing:IN});
A($('gl'),[{scale:1},{scale:4}],7.5,.55,{fill:'forwards',easing:IN});
