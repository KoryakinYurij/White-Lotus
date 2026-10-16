/* ===== плеер ===== */
const rg=$('rg'),tm=$('tm'),pp=$('pp'),sf=$('sf'),sfb=$('sfb');let t=0,playing=true,last=performance.now();
const f=x=>'0:'+String(Math.floor(x)).padStart(2,'0');
const au=$('au');let unlocked=false,muted=false;au.volume=.9;
function syncAudio(seek){if(!unlocked||muted)return;if(playing){if(au.paused)au.play().catch(()=>{});if(seek||Math.abs(au.currentTime-t)>.25)au.currentTime=Math.min(t,au.duration||t)}else au.pause()}
function unlock(){if(unlocked)return;unlocked=true;au.currentTime=t;if(playing)au.play().catch(()=>{unlocked=false})}
addEventListener('pointerdown',unlock);addEventListener('keydown',unlock);
au.play().then(()=>{unlocked=true}).catch(()=>{});
function set(x,seek){const wrap=x<t-1;t=Math.max(0,Math.min(D,x));all.forEach(a=>a.currentTime=t*1000);syncAudio(seek||wrap);rg.value=t*1000;tm.textContent=f(t)+' / '+f(Math.ceil(D))}
function tick(n){const dt=Math.min((n-last)/1000,.1);last=n;if(playing){let x=t+dt;if(x>=D)x=0;set(x)}requestAnimationFrame(tick)}
pp.onclick=()=>{playing=!playing;pp.textContent=playing?'⏸':'▶';syncAudio(true)};$('rs').onclick=()=>set(0,true);
$('snd').onclick=()=>{muted=!muted;$('snd').textContent=muted?'🔇':'🔊';if(muted)au.pause();else{unlocked=true;syncAudio(true)}};rg.oninput=()=>set(rg.value/1000,true);
sfb.onclick=()=>{sf.classList.toggle('on');sfb.classList.toggle('on')};
addEventListener('keydown',e=>{if(e.code==='Space'){e.preventDefault();pp.click()}if(e.key==='s'||e.key==='S')sfb.click();if(e.key==='m'||e.key==='M')$('snd').click()});
