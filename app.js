"use strict";
let tasks = [];
const inputt = document.getElementById("inputt");
const firstt = document.getElementById("firstt");
const dosny = document.getElementById("dosny");
function render() {
    firstt.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const x = tasks[i];
        const p = document.createElement("p");
        p.textContent = tasks[i];
        firstt.appendChild(p);
    }
}
function addTask() {
    const input = inputt.value;
    if (!input)
        return;
    tasks.push(input);
    inputt.value = "";
    render();
}
dosny.addEventListener('click', addTask);
