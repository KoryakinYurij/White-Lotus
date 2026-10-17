/* ===== АТМОСФЕРА ===== */
for(let i=0;i<34;i++){const z=.25+rnd()*.5,e=mk('st','left:'+rnd()*100+'%;top:'+rnd()*62+'%;width:'+z+'cqw;height:'+z+'cqw;opacity:.5');A(e,[{opacity:.15},{opacity:.95}],rnd()*2,1+rnd()*2,{direction:'alternate',iterations:Infinity,fill:'none',easing:'ease-in-out'})}
A(cam,[{scale:1},{scale:1.07,offset:.84},{scale:1}],0,D,{easing:'linear'});
// луна: отступает вверх-вправо → всплывает за деревьями в сцене даты → уходит вверх
const moon=dec('moon','left:0;top:0;width:70cqw');
const MP=[[0,82,29,1,1],[4.2,82,24,1,1],[5.0,86,17,.72,.8],[7.8,86,17,.72,.8],[8.9,89,13,.55,.5],[15.7,89,13,.55,.5],[16.15,89,13,.55,.5,0],[16.36,50,104,1.25,.5,0],[17.1,50,57,1.25,.5],[21.1,50,57,1.25,.5],[22.0,50,-34,1.25,.5],[D,50,-34,1.25,.5]];
A(moon,MP.map(([t,x,y,s,b,o=1])=>({offset:t/D,opacity:o,translate:(x-35)+'cqw '+(y-34)+'cqw',scale:s,filter:'drop-shadow(0 0 6cqw rgba(255,150,60,.4)) brightness('+b+')',easing:MV})),0,D,{easing:'linear'});
A(moon,[{rotate:'0deg'},{rotate:'8deg'}],0,D,{easing:'linear'});
const tr=dec('trees','left:-10cqw;bottom:-14cqw;width:120cqw;opacity:.55',{c:'sil'});A(tr,[{translate:'-3cqw 0'},{translate:'5cqw 0',offset:.5},{translate:'-3cqw 0'}],0,D,{easing:'ease-in-out'});
const sm1=dec('smoke','left:-30cqw;bottom:-14cqw;width:150cqw;opacity:.5;z-index:2',{c:'scr'});A(sm1,[{translate:'-6cqw 0'},{translate:'8cqw 0',offset:.5},{translate:'-6cqw 0'}],0,D,{easing:'ease-in-out'});
const cols=['#ff9a3d','#ff7a1a','#c4a3ff','#a855f7','#fff'];
for(let i=0;i<26;i++){const z=.7+rnd()*1.6,c=cols[i%5],e=mk('sp','left:'+rnd()*100+'%;width:'+z+'cqw;height:'+z+'cqw;background:'+c+';box-shadow:0 0 '+z*2+'cqw '+c);A(e,[{translate:'0 0',opacity:0},{opacity:.9,offset:.2},{translate:R()*8+'cqw -'+(150+rnd()*60)+'cqw',opacity:0}],rnd()*4,4+rnd()*5,{iterations:Infinity,easing:'linear',fill:'none'})}
const web=dec('web','left:-3cqw;top:-2cqw;width:56cqw;z-index:2;transform-origin:0 0',{c:'web'});A(web,[{opacity:0,scale:.3},{opacity:1,scale:1}],.1,.8);A(web,[{opacity:1},{opacity:0}],3.6,.5,{fill:'forwards',easing:'linear'});
