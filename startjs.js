let display = document.getElementById('display');

let nums = Array.from(document.getElementsByClassName("but"))
const tochange = document.getElementById("contn20")
const tobut = document.getElementById("n20")

let mode = true

function changemode() {
    if (mode){
       tochange.style.backgroundColor = 'blue' 
       tobut.style.backgroundColor = 'red'
       mode = false
    } else{
        tochange.style.backgroundColor = 'red'
        tobut.style.backgroundColor = 'blue'
        mode = true
    }
}

function nameDate() {
    let now = new Date()
    let set = document.getElementById("arafat").style.color;
    switch (set) {
        case "red":
            document.getElementById("arafat").style.color = "yellow";
            document.getElementById("arafat").style.border = "solid";
            document.getElementById("arafat").style.borderColor = "yellow";
            break;
        case "yellow":
            document.getElementById("arafat").style.color = "green";
            document.getElementById("arafat").style.border = "solid";
            document.getElementById("arafat").style.borderColor = "green";
            break;
        default:
            document.getElementById("arafat").style.color = "red";
            document.getElementById("arafat").style.border = "solid";
            document.getElementById("arafat").style.borderColor = "red";
            break;
    }
}
setInterval(nameDate,1500);

nums.map((but) =>(
    but.addEventListener('click',(e) =>{
        switch (e.target.innerText){
            case 'AC':
                display.innerText = "";
                break;
            case "DEL":
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1)
                };
                break;    
            case "=":
                try{
                    if(display.innerText != ""){
                        display.innerText = eval(display.innerText);
                    }
                } catch{
                    display.innerText = 'Error!'
                }
                break;
                default:
                    display.innerText += e.target.innerText;
                    break;
        }
    })
))
