
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
    
    // skaber lande-overskrift (Sverige, Norge, el Finland)
    let cityDiv=document.querySelector(".country");
    let h= document.createElement("H1");
    h.innerHTML = countyName;
    cityDiv.appendChild(h);

    // looper data-array
    dataSet1.forEach(J_obj => {
        creatList(J_obj);
    });
  

});

function creatList(obj){

    let myDiv = document.querySelector(".cities"); //ref to div
    let text = document.createElement("P");
    text.className = "city_w_button"
    let listitem = document.createElement('Li'); //list-obj created
    
    // if country-id equals cityID

    if(obj.countryid==localStorage.getItem("id")){
       
        // create list item
        listitem.innerHTML = obj.stadname; //text in list item = city name (fromJSON)

        // creating dataset with id from JSON
        listitem.dataset.id = obj.id; 
        
        //create popup with info
        let pop = document.createElement("DIV");
        pop.className = "popUp";
        // pop.style="display:none";
        pop.innerHTML ="info on town: bla, bla, bla";

        // creating new button
        let button = document.createElement('BUTTON');
        button.className = "visitedButton"
        button.innerHTML = "Visited";
        text.appendChild(listitem)
        text.appendChild(button);
        text.appendChild(pop);
        myDiv.appendChild(text);        

        // creating a "click avent"
        button.addEventListener("click", function(event) { //adding visited cities to list
            
            let cityArray = [];

            if(localStorage.getItem("array")) {
                let temp = JSON.parse(localStorage.getItem("array"));
                cityArray = temp;
            } else {
                cityArray = [];
            }

            // getting ID from listitems dataset
            let cityID = listitem.dataset.id;
            
            // pushing to cityArray
            cityArray.push(cityID);

            // saving array in Localstorage - stringify need when saving [] in LS
            localStorage.setItem("array", JSON.stringify(cityArray));

            //change colour of button
            this.style.backgroundColor = "pink";
        }); 

        

        };

}


