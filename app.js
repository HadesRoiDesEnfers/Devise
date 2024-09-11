// 1$ = 4536ar
// 1€ = 4887ar
// 1¥ = 30ar

function ca(){
    switch (t) {
        case "usd":
            lab.innerHTML = "Devise en $"
            in_2.value = parseFloat(in_1.value/val.usd).toFixed(2)
            break;
        case "eur":
            lab.innerHTML = "Devise en €"
            in_2.value = parseFloat(in_1.value/val.eur).toFixed(2)
            break;
        case "yen":
            lab.innerHTML = "Devise en ¥"
            in_2.value = parseFloat(in_1.value/val.yen).toFixed(2)
            break;
        case "liv":
            lab.innerHTML = "Devise en £"
            in_2.value = parseFloat(in_1.value/val.livr).toFixed(2)
            break;
    
        default:
            break;
    }
}

let t = "usd"
function ar() {
    lis.forEach(li =>{
        li.addEventListener("click", ()=>{
            lis.forEach(li_a =>{
                if(li != li_a){
                    li_a.classList.remove("c")
                } 
            })
            
            li.classList.add("c")
            t = li.id
            ca()        
        })
    })
}

const val = {
    usd: 4536,
    eur: 4887,
    yen: 30,
    livr: 5782
}
const lab = document.querySelector("#j")
const in_1 = document.querySelector("#Ar")
const in_2 = document.querySelector("#other")
const ul = document.querySelector("ul")
const lis = document.querySelectorAll("li")

// var t = 'usd'
ar()
// console.log(t)
in_1.addEventListener("input", function(){
    switch (t) {
        case "usd":
            in_2.value = parseFloat(in_1.value/val.usd).toFixed(2)
            break;
        case "eur":
            in_2.value = parseFloat(in_1.value/val.eur).toFixed(2)
            break;
        case "yen":
            in_2.value = parseFloat(in_1.value/val.yen).toFixed(2)
            break;
        case "liv":
            in_2.value = parseFloat(in_1.value/val.livr).toFixed(2)
            break;
        default:
            break;
    }
})
