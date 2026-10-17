/* ===== 3 · ПРОГРАММА 8.1–15.25: по одному пункту ===== */
scene('s3',7.55,15.75,{fi:.05,fo:.25});
// v11.0.10 · Т2-1: диафрагма из центра лотоса — программа открывается расширяющимся кругом, по кромке бежит тонкое тёплое кольцо
$('s3').prepend(mk('','position:absolute;inset:0;background:radial-gradient(85% 55% at 50% 58%,rgba(150,60,170,.28),rgba(255,122,26,.07) 55%,transparent 75%)',$('s3')));
const IRZ='cubic-bezier(.55,0,.2,1)';
A($('s3'),[{clipPath:'circle(0cqw at 50cqw 58cqw)'},{clipPath:'circle(135cqw at 50cqw 58cqw)'}],7.55,.65,{easing:IRZ});
const iris=mk('','position:absolute;left:50cqw;top:58cqw;width:0;height:0;border-radius:50%;box-sizing:border-box;border:.7cqw solid rgba(255,206,140,.9);box-shadow:0 0 2cqw rgba(255,150,40,.6),inset 0 0 2cqw rgba(255,150,40,.3);z-index:5;pointer-events:none;opacity:0');
A(iris,[{opacity:0,width:'0cqw',height:'0cqw',marginLeft:'0cqw',marginTop:'0cqw'},{opacity:1,offset:.1},{opacity:1,offset:.75},{opacity:0,width:'270cqw',height:'270cqw',marginLeft:'-135cqw',marginTop:'-135cqw'}],7.55,.65,{easing:IRZ});
pop($('c0'),8.0,.5);A($('pb'),[{opacity:0},{opacity:1}],7.9,.25,{easing:'linear'});
const PS=[8.0,10.0,12.0,14.0],PE=16.0;
function spark(p,x,y,w,t,d){const e=mk('sk','left:'+x+'cqw;top:'+y+'cqw;width:'+w+'cqw',p,'<svg viewBox="0 0 24 24"><path fill="#fff6dd" d="M12 0L14.2 9.8 24 12 14.2 14.2 12 24 9.8 14.2 0 12 9.8 9.8Z"/></svg>');
 A(e,[{opacity:0,scale:.2,rotate:'0deg'},{opacity:1,scale:1.15,rotate:'45deg',offset:.4},{opacity:0,scale:.5,rotate:'90deg'}],t,d||.7,{easing:'ease-out'})}
['p1','p2','p3','p4'].forEach((id,i)=>{const s=PS[i],e=i<3?PS[i+1]:PE,c=$(id);
 A(c,[{opacity:0},{opacity:1}],s,.2,{easing:'linear'});
 if(i<3)A(c,[{opacity:1},{opacity:0}],e-.05,.3,{easing:'linear',fill:'forwards'});
 const gl=c.querySelector('.pg'),pi=c.querySelector('.pi');
 if(i!==2){const ic=c.querySelector('.pi .ic, .pi img');
  A(ic,[{opacity:0,transform:'scale(.55) rotate(-12deg)'},{opacity:1,transform:'none'}],s,.7,{easing:BO});drift(ic,s+1.0,3,-1.6,1.0)}
 A(gl,[{opacity:0,transform:'scale(.6)'},{opacity:1,transform:'none'}],s,.7);
 pop(c.children[1],s+.2,.5,{transform:'translateY(4cqw)'});pop(c.children[2],s+.45,.5);
 // вместо полоски прогресса: свеча на каждый пункт, зажигается на его старте и горит до конца сцены
 {const cn=mk('','position:relative;width:2.2cqw;height:5.5cqw;border-radius:.5cqw .5cqw .3cqw .3cqw;background:linear-gradient(#f3e6d0,#b9a78e)',$('pb'));
  const fl=mk('','position:absolute;left:50%;bottom:100%;width:2.2cqw;height:3.6cqw;margin-left:-1.1cqw;border-radius:50%/60% 60% 40% 40%;background:radial-gradient(circle at 50% 70%,#fff6d5,#ffb347 45%,rgba(255,122,26,0) 72%);transform-origin:50% 100%;opacity:0;filter:drop-shadow(0 0 .9cqw rgba(255,150,40,.7))',cn);
  A(fl,[{opacity:0,scale:'.2'},{opacity:1,scale:'1.25 1.45',offset:.35},{opacity:1,scale:'1'}],s+.1,.45,{easing:'ease-out'});
  A(fl,[{rotate:'-4deg',scale:'1 1'},{rotate:'3deg',scale:'.94 1.07'}],s+.55,.5,{direction:'alternate',iterations:Math.ceil((15.75-s-.55)/.5),fill:'none',easing:'ease-in-out'})}
 if(i===0){ // музыка: пластинка крутится, ноты улетают вверх
  A($('vrot'),[{rotate:'0deg'},{rotate:'360deg'}],s+.2,2.0,{iterations:Infinity,easing:'linear',fill:'none'});
  [['n1',.5],['n2',1.0]].forEach(([n,dl])=>A($(n),[{opacity:0,translate:'0 7cqw',scale:.6,rotate:'-8deg'},{opacity:1,offset:.3},{opacity:0,translate:'3cqw -9cqw',scale:1.05,rotate:'14deg'}],s+dl,1.5,{iterations:3,easing:'ease-out',fill:'none'}))}
 if(i===2){ // знакомства — мини-сюжет: один грустит → второй робко выглядывает → подплывает → касание, первый оживает
  const g1=$('gh1'),g2=$('gh2'),gF='drop-shadow(0 0 3cqw rgba(168,85,247,.75))';
  A(g1,[{opacity:0,translate:'0 10cqw',rotate:'-8deg',filter:gF+' brightness(.7)'},{opacity:1,translate:'0 4cqw',rotate:'-5deg',filter:gF+' brightness(.8)'}],s+.05,.6,{easing:EZ});
  A(g1,[{translate:'0 4cqw',rotate:'-5deg',filter:gF+' brightness(.8)'},{translate:'0 -1cqw',rotate:'6deg',filter:gF+' brightness(1.25)',offset:.5},{translate:'0 0',rotate:'6deg',filter:gF+' brightness(1)'}],s+1.2,.6,{easing:EZ,fill:'forwards'});
  A(g2,[{opacity:0,translate:'44cqw 9cqw',rotate:'14deg'},{opacity:1,translate:'30cqw 6cqw',rotate:'8deg'}],s+.35,.4,{easing:EZ});
  A(g2,[{translate:'30cqw 6cqw',rotate:'8deg'},{translate:'0 0',rotate:'-6deg'}],s+.8,.45,{easing:EZ,fill:'forwards'});
  A(g1,[{transform:'translateY(0)'},{transform:'translateY(-1.8cqw)'}],s+1.3,.5,{direction:'alternate',iterations:3,fill:'none',easing:'ease-in-out'});
  A(g2,[{transform:'translateY(0)'},{transform:'translateY(-1.8cqw)'}],s+1.3,.5,{direction:'alternate',iterations:3,fill:'none',easing:'ease-in-out'});
  spark(pi,47,12,7,s+1.2,.6);spark(pi,40,5,4.5,s+1.3,.6);spark(pi,56,7,5,s+1.38,.6);spark(pi,50,0,3.5,s+1.46,.6)}
 if(i===3){ // сюрприз: искры вокруг подарка
  spark(pi,20,4,6,s+.5);spark(pi,77,2,5,s+.62);spark(pi,82,26,5.5,s+.74);spark(pi,15,27,4.5,s+.86)}
});
