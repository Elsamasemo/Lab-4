let tasks: string[] = [];
const inputt = document.getElementById("inputt") as HTMLInputElement;
const firstt = document.getElementById("firstt") as HTMLDivElement;
const dosny = document.getElementById("dosny") as HTMLButtonElement;
function render():void{
    firstt.innerHTML = "";
    for(let i=0;i<tasks.length;i++){
const x=tasks[i];
const p= document.createElement("p");
p.textContent=tasks[i];
firstt.appendChild(p);
    }
}

function addTask():void{
    const input =inputt.value;
    if (!input) return; 
    tasks.push(input);
    inputt.value = "";
    render();
}
dosny.addEventListener('click', addTask);