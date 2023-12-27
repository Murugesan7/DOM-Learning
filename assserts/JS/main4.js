const inputTxtEl = document.querySelector("#inputTxt");
if(inputTxtEl){
console.log(inputTxtEl.placeholder);
}

const n = document.getElementsByTagName("script");

// loop iteration way

for (let value of n){
    console.log(value.src);
}

// normal way
console.log(n[2].src)