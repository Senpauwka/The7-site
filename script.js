const loaderLines = [

"INITIALIZING...",
"LOADING PROFILE...",
"CONNECTING...",
"ACCESS GRANTED"

];

const loader =
document.getElementById("loader");

const loaderText =
document.getElementById("loaderText");

let step = 0;

function boot(){

if(step < loaderLines.length){

loaderText.innerText =
loaderLines[step];

step++;

setTimeout(boot,900);

}else{

loader.classList.add("hideLoader");

}

}

boot();

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");

musicBtn.onclick = ()=>{

if(music.paused){

music.play();

musicBtn.innerText =
"♫ PAUSE";

}else{

music.pause();

musicBtn.innerText =
"♫ MUSIC";

}

};

const light =
document.getElementById("light");

document.addEventListener(
"mousemove",
(e)=>{

light.style.left =
e.clientX + "px";

light.style.top =
e.clientY + "px";

}
);

document.addEventListener(
"touchmove",
(e)=>{

light.style.left =
e.touches[0].clientX + "px";

light.style.top =
e.touches[0].clientY + "px";

}
);