function empty(){
    if(document.querySelector('#screen').value === ''){return true}
}
function screenLength(){
    if(document.querySelector('#screen').value.length === 11){
        return  true;
    }
}

function screenAns(){
    if(document.querySelector('#scr').value !== "" && document.querySelector('#screen').value === ""){
        document.querySelector('#screen').value = "Ans "
    }
} 

function addScreen(num){
    if(screenLength()){return};
    document.querySelector('#screen').value += num;
}
function addPlus(){
    if(screenLength()){return};
    if(empty()){return};
    screenAns()
    addScreen("+")
}

function addMinus(){
    if(empty()){return}
    if(screenLength()){return;}
    screenAns()
    addScreen("-")
}


function addTimes(){
    if(empty()){return};
    if(screenLength()){return};
    screenAns()
    addScreen("*")
}

function addDot(){
    if(screenLength()){return};
    let val = document.querySelector('#screen').value;
    if(val === ""){
        addScreen("0.")
    }else{
        addScreen(".")
    }
}


function addNegate(){
    if(screenLength()){return};
    if(document.querySelector('#screen').value.split("")[0] === "-"){
        document.querySelector('#screen').value = document.querySelector('#screen').value.slice(1);
        return;
    }
    if(document.querySelector('#screen').value.split("")[0] !== "-"){
        let val =  document.querySelector('#screen').value;
        val =  val.split("")
        val.unshift("-")
        document.querySelector('#screen').value = val.join("")    
    }
}

function addDivide(){
    if(empty()){return};
    if(screenLength()){return};
    screenAns()
    addScreen("/")
}
document.querySelector("#reset").addEventListener("click", function(){
    document.querySelector('#screen').value = ""
    document.querySelector('#scr').value = ""
})

document.querySelector('#delete').addEventListener("click", function(){
    let val = document.querySelector('#screen').value;
    val = val.split("");
    val.pop();
    document.querySelector('#screen').value = val.join("");
})

document.querySelector('#equ').addEventListener("click", function(){
    if(document.querySelector('#screen').value.includes("Ans")){
        let ans = document.querySelector('#screen').value.split(" ");
        ans[0] = document.querySelector('#scr').value;
        document.querySelector('#screen').value = ans.join(" ")
    }
    let val = document.querySelector('#screen').value;
	if(eval(val) === undefined){return}
    document.querySelector('#scr').value = eval(val);
    document.querySelector('#screen').value = "";
})