fetch("Data/stad.json")
// mellem-then() skal altid skrives på denne/samme måde
.then((response)=>{
    
    return response.json();
})
.then((data)=>{

    let dataSet = data
    let count = +""; //used for calc. of total population
    let numbers = +""; //determining the number of visited cities

    dataSet.forEach(city => {
        
        let idD = city.id
        let population = parseInt(city.population);
        let cityName = city.stadname;
        let cityArray = [];
        
        let myDiv = document.querySelector(".my_cities"); //ref to div
        let listitem = document.createElement('Li'); //list element created

        // does LS contain "array"
        if(localStorage.getItem("array")) {
            let temp = JSON.parse(localStorage.getItem("array"));
            cityArray = temp;
            } 
        // if not - create an empty []
        else { 
            cityArray = [];
            } 
            
        // which city-Ids are matched between "all cities" and "my cities"
        cityArray.forEach(visitedId => {
                                
            if(visitedId == idD){
                //counter total population
                count = (count + population);
                numbers = numbers +1;                
                listitem.innerHTML = cityName;            
                myDiv.appendChild(listitem);
            }
            
        
        });

    });
    // div with number of cities and the total population
    let myDiv = document.querySelector(".my_cities"); //ref to existing div
    let deleteDiv = document.querySelector(".delete");
    let divCount = document. createElement('DIV');
    let comment =document.createElement('DIV');
    divCount.innerHTML = `Population in all ${numbers} cities:   ${count}`; 
    comment.innerHTML ="Cities vistited twice (or more) are only shown once - but are part of the total population";
    myDiv.appendChild(divCount); 
    divCount.appendChild(comment);

    // button to memory-erase
    let deleteBut = document.querySelector(".delete");

    deleteBut.addEventListener("click", function(){
    localStorage.clear();
    myDiv.style.display="none";
    deleteDiv.style.display="none";
    }); 
    
})

