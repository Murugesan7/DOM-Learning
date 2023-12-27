// DOM Event

const btnEl = document.querySelector("button");

btnEl.addEventListener(`click`,() => {
alert("Hey i am clicked by addEventListener")
})

const innerEl = document.querySelector("#inner");


innerEl.addEventListener("dblclick", ()=> {
    alert("Inner Body is Clicked ")
})

const outer = document.querySelector("#outer");
outer.addEventListener("contextmenu", ()=> {
    alert("Right click is Blocked ")
})

const over= document.querySelector("#overall");
over.addEventListener("contextmenu", ()=> {
    alert("Right Click is Disabled")
})