/* ===== ЗЕРНО, ПЕТЛЯ ===== */
const gr=$('gr');gr.style.backgroundImage='url("data:image/svg+xml,'+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>")+'")';
A(gr,[{translate:'0 0'},{translate:'-3cqw 2cqw'},{translate:'2cqw -3cqw'},{translate:'-2cqw -1cqw'},{translate:'0 0'}],0,.5,{iterations:Infinity,easing:'steps(1)',fill:'none'});
/* v11.0.1: вейл убран — кадр 0 и петля без провала в чёрное */

/* ===== подгонка шрифтов: одна мера, а не «как влезет» ===== */
function natural(e){e.style.fontSize='10cqw';return e.offsetWidth||1}
function fitAll(){const W=st.clientWidth;
 document.querySelectorAll('.fit:not([data-g])').forEach(e=>{const t=(+e.dataset.w||88)/100*W;e.style.fontSize=Math.min(+e.dataset.m||40,10*t/natural(e))+'cqw'});
 const groups={};document.querySelectorAll('.fit[data-g]').forEach(e=>(groups[e.dataset.g]=groups[e.dataset.g]||[]).push(e));
 Object.values(groups).forEach(g=>{const s=Math.min(...g.map(e=>Math.min(+e.dataset.m,10*((+e.dataset.w)/100*W)/natural(e))));g.forEach(e=>e.style.fontSize=s+'cqw')})}
fitAll();document.fonts.ready.then(fitAll);addEventListener('resize',fitAll);
