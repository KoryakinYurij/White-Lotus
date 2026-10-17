/* ===== 1 · ХУК 0–4.4 ===== */
scene('s1',0,3.8,{first:true});
const pk=dec('pumpB','left:20cqw;bottom:-8cqw;width:60cqw;filter:'+GP2,{p:'s1'});flame(pk,0,3.2,GP2);sink(pk,3.8,.6,50);
A(pk,[{scale:1},{scale:1.04}],0,1.0,{direction:'alternate',iterations:4,fill:'none',easing:'ease-in-out'});
const cA=dec('candleA','left:2cqw;bottom:9cqw;width:17cqw;filter:'+GC,{p:'s1'}),cB=dec('candleB','right:2cqw;bottom:9cqw;width:17cqw;filter:'+GC,{p:'s1'});
flame(cA,0,3.2,GC);flame(cB,.4,2.8,GC);sink(cA,3.8,.6,50);sink(cB,3.85,.6,50);
const sp1=dec('spider','left:63cqw;top:-2cqw;width:14cqw;z-index:2',{p:'s1',c:'sil'});
mk('','position:absolute;left:50%;bottom:99%;width:.35cqw;height:70cqw;background:#000;translate:-50% 0;filter:drop-shadow(0 0 .5cqw rgba(168,85,247,.9))',sp1);
A(sp1,[{translate:'0 -50cqw'},{translate:'0 34cqw'}],.4,.9,{easing:BO});
A(sp1,[{translate:'0 34cqw'},{translate:'0 38cqw'}],1.5,.5,{direction:'alternate',iterations:2,fill:'none',easing:'ease-in-out'});
letters($('a1'),-.5,.06,i=>[{translate:'0 1.3em'},{translate:'0 0'}],.6,'cubic-bezier(.2,.9,.25,1)');
hit(1.0,1.2,90);
A($('a1'),[{filter:'drop-shadow(0 0 3.2cqw rgba(255,122,26,.55))'},{filter:'drop-shadow(0 0 9cqw rgba(255,150,40,.95))'}],1.0,.5,{direction:'alternate',iterations:2,fill:'none'});
wipe($('a2'),1.0,.55,'translateX(8cqw)');
A($('a3'),[{opacity:0,transform:'translateY(3cqw)',filter:'blur(.8cqw)'},{opacity:1,transform:'none',filter:'blur(0)'}],1.5,.55);
bat('s1',1.0,18,13,3,1,'bat1');bat('s1',2.4,36,14,2.6,-1,'bat2');
