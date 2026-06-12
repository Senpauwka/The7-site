const text = [
"> booting system...",
"> loading modules...",
"> github connected",
"> access granted"
];

const bootLines = [
"INITIALIZING...",
"LOADING MODULES...",
"CONNECTING TO GITHUB...",
"ACCESS GRANTED"
];

const loaderText = document.getElementById("loaderText");
const loader = document.getElementById("loader");

let bootIndex = 0;

function boot(){

if(bootIndex < bootLines.length){

loaderText.innerHTML = bootLines[bootIndex];
bootIndex++;

setTimeout(boot,700);

}else{

loader.classList.add("hideLoader");

}

}

boot();

let line = 0;
let char = 0;

const typed = document.getElementById("typed");

function type(){

if(line >= text.length) return;

if(char < text[line].length){

typed.innerHTML += text[line][char];

char++;

setTimeout(type,40);

}else{

typed.innerHTML += "<br>";

line++;
char = 0;

setTimeout(type,300);

}

}

setTimeout(type,3200);

const light = document.getElementById("light");

document.addEventListener("mousemove",(e)=>{

light.style.left = e.clientX + "px";
light.style.top = e.clientY + "px";

});

document.addEventListener("touchmove",(e)=>{

light.style.left = e.touches[0].clientX + "px";
light.style.top = e.touches[0].clientY + "px";

});

const artifact = document.getElementById("artifact");

document.addEventListener("mousemove",(e)=>{

const x = (e.clientX/window.innerWidth - 0.5) * 20;
const y = (e.clientY/window.innerHeight - 0.5) * 20;

artifact.style.transform =
`translate(-50%,-50%) rotateY(${x}deg) rotateX(${-y}deg)`;

});