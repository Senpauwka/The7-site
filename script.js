const text = [
"> booting laboratory...",
"> loading modules...",
"> github connected",
"> system online"
];

const bootLines = [
"INITIALIZING...",
"LOADING MODULES...",
"CONNECTING TO GITHUB...",
"ACCESS GRANTED"
];

const loaderText = document.getElementById("loaderText");
const loader = document.getElementById("loader");

let i = 0;

function boot(){

if(i < bootLines.length){

loaderText.innerHTML = bootLines[i];
i++;

setTimeout(boot,700);

}else{

loader.classList.add("hideLoader");

}

}

boot();

let line = 0;
let char = 0;

const typed = document.getElementById("typed");

function type() {

if(line >= text.length) return;

if(char < text[line].length){

typed.innerHTML += text[line][char];
char++;

setTimeout(type,50);

}else{

typed.innerHTML += "<br>";
line++;
char = 0;

setTimeout(type,400);

}

}

type();