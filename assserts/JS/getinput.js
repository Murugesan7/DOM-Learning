const userInputEl = document.querySelector("#inputTxt");

const greetMsg  = document.querySelector("#someTxt");

const btn = document.querySelector("#btn");

const changeBg = document.querySelector("#changeBg");

const cyber = document.querySelector("#cyber");

const trailDiv = document.querySelector("#trailDiv");

const trailSpan = document.querySelector("#trailDiv > span");



btn.addEventListener("click", ()=> {
    showWelcomeCard();
    
    
})



changeBg.addEventListener("click",()=> {
    const bg = document.body;
bg.style.backgroundColor= "#" + ((Math.random() * 0xffffff)<< 0).toString(16).padStart(6,"0")
    
})

 // console.log(cyber)

function showWelcomeCard(){
    
    const inputName = userInputEl.value;
    // in 3 character ax 20 character 
    if(inputName.length > 3 && inputName.length<20){
        console.log(inputName.length)
    
        // captilize each words first letter
    
        const splitWords = inputName.split(" ");
    const capWords = splitWords.map((name)=> {
        return name.charAt(0).toUpperCase() + name.slice(1);
    })
        console.log(capWords.join(" "))
       // alert(`Welcome ${capWords.join(" ")}`);
       greetMsg.innerText = `Welcome . ${capWords.join(" ").trim()} our Website !`
      //  greetMsg.innerText= `Welcome Mr. ${inputName} to Our Website`
      //  alert(`Welcome ${inputName.trim()}`)
        }
        else {
            alert("Please Enter Proper Name")
        }
    
        
};
 
// Dom Loadingg

document.addEventListener("DOMContentLoaded",()=>{
   // cyber.style.color= "blue";
    cyber.style.fontWeight="bold";
    //cyber.className="text-[#0000FF]"
    cyber.classList.add(`text-violet-400`,`font-semibold`)
    cyber.classList.remove(`text-semibold`)

    // generate class and text from java script
    trailDiv.classList.add("bg-white", "max-w-xl", "mx-auto", "m-20", "p-10")
    trailSpan.classList.add("text-red-900", "bg-green-200","font-semibold","p-5")

})



// Key Board Event 

document.addEventListener("keydown",(e)=> {
     if(e.code==="Enter"){
    //     console.log("You Pressed Enter Key");
    // }
    // else{
    // console.log("Hey Your you are pressed the keys",e.code);
    // }
    //console.log(`Hey you are pressed in ${e.key} `);

    showWelcomeCard()
     }
});
