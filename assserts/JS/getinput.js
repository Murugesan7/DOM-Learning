const userInputEl = document.querySelector("#inputTxt");

const btn = document.querySelector("#btn");
btn.addEventListener("click", ()=> {
    // in 3 character ax 20 character 
    if(userInputEl.value.length > 3 && userInputEl.value.length<20){
    console.log(userInputEl.value.length)
    }
    else {
        alert("Please Enter Proper Name")
    }
    
})


