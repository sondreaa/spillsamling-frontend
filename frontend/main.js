function phydig(bool){
    if (bool){
        return "Fysisk"
    }else{
        return "Digitalt"
    }
}

function dscheck(){
    let checkbox = document.getElementById("DS")
}

function ds3check(){
    let checkbox = document.getElementById("3DS")
}

function gbcheck(){
    let checkbox = document.getElementById("GameBoy")
}

function switchcheck(){
    let checkbox = document.getElementById("Switch")
}

function ps2check(){
    let checkbox = document.getElementById("PS2")
}

function pccheck(){
    let checkbox = document.getElementById("")
}

function phycheck(){
    let checkbox = document.getElementById("")
}

function digcheck(){
    let checkbox = document.getElementById("")
}

let checkbox = document.getElementById("Alle");
function alle(){

    let filter = document.getElementsByClassName("filter")

    if (checkbox.checked == true){
        for (let i = 0; i < filter.length; i++) {
            filter[i].checked = true
        }
    }else{
        for (let i = 0; i < filter.length; i++) {
            filter[i].checked = false
        }
    }
}

let PROJECT_ID = '34pxatbq';
let DATASET = 'production';
let QUERY = encodeURIComponent('*[_type == "spill"] | order(title asc)');
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

fetch(URL)
.then((response) =>{
    return response.json()
})
.then((data) =>{console.log(data.result)
    
    titles = []

    Physicalgames = []
    Digitalgames = []

    DSgames = []
    DS3games = []
    GBgames = []
    Switchgames = []
    PS2games = []
    PCgames = []

    for (let i = 0; i < data.result.length; i++) {
        let a = data.result[i]
        //console.log(a.title, a.platform, a.physical)

        titles.push(a.title)

        if (a.physical) {
            Physicalgames.push(a)
        }else{
            Digitalgames.push(a)
        }

        let p = a.platform
        if (p == "DS"){
            DSgames.push(a)
        }else if (p == "3DS"){
            DS3games.push(a)
        }else if (p == "GameBoy"){
            GBgames.push(a)
        }else if (p == "Switch"){
            Switchgames.push(a)
        }else if (p == "PS2"){
            PS2games.push(a)
        }else if (p == "PC"){
            PCgames.push(a)
        }

        const container = document.getElementById("container");

        const text = document.createElement("p");
        text.innerHTML = ' ‎ ‎ '+a.title+' ‎ ‎ | ‎ ‎ '+a.platform+' ‎ ‎ | ‎ ‎ '+phydig(a.physical);
        text.classList.add("box");
        container.appendChild(text);        
    }

    // console.log(Physicalgames)
    // console.log(Digitalgames)


})
