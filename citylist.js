
// ---------------------------------

fetch("Data/stad.json")
// mellem-then() skal altid skrives på denne/samme måde
.then((response)=>{
    
    return response.json();
})
.then((data1)=>{
    let dataSet1 = data1
    console.log(dataSet1);

    let countyName = localStorage.getItem("name") 
    
    // skaber lande-overskrift
    let cityDiv=document.querySelector(".country");
    let h= document.createElement("H1");
    h.innerHTML = countyName;
    cityDiv.appendChild(h);

    // looper data-array
    dataSet1.forEach(J_obj => {
        creatList(J_obj);
    });
    
    
});

// ---------------------------------
// let popu_arr = [];


function creatList(obj){

    let myDiv = document.querySelector(".cities"); //ref til div
    let listitem = document.createElement('Li'); //opret list-pkt

    // hvis country ID er lig med localstorage id
    if(obj.countryid==localStorage.getItem("id")){
        console.log(localStorage.getItem("id"));
        // opret listitem
        let listDiv = document.createElement("div");
        listDiv.className = "listDiv";
        listitem.innerHTML = obj.stadname; //tekst = by-navn fra JSON
        // knytter id til listitem i dataset
        listitem.dataset.id = obj.id; //data-indhold = id fra JSON
        
        // skaber knap
        let button = document. createElement('BUTTON');
        button.innerHTML = "Visited";
        listitem.appendChild(button);
        listDiv.appendChild(listitem);
        myDiv.appendChild(listDiv);

        // opretter et klikevent
        button.addEventListener("click", function(event) { //tilføj besøgte byer til liste
            // hent popu fra JSON
            let cityArray = [];

            if(localStorage.getItem("array")) {
                let temp = JSON.parse(localStorage.getItem("array"));
                cityArray = temp;
            } else {
                cityArray = [];
            }

            // henter ID fra listitems dataset
            let cityID = listitem.dataset.id;
            
            // pusher til cityArray
            cityArray.push(cityID);

            // gem array til Localstorage
            localStorage.setItem("array", JSON.stringify(cityArray));
        }); 
    }   
}  
function createMyCities(){
let link= document.querySelector("myPic");  
link.addEventListener("click", function(event){
console.log("hej");
});
}


