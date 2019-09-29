fetch("Data/land.json")
// mellem-then() skal altid skrives på denne/samme måde
.then((response)=>{
    // console.log(response);
    return response.json();
})
.then((data)=>{
    console.log(data);
    let dataSet = data;   

    // opret knapper(lande)
    dataSet.forEach(J_obj => {
        creatBut(J_obj);
    });
    

});

// ---------------------------------

fetch("Data/stad.json")
// mellem-then() skal altid skrives på denne/samme måde
.then((response)=>{
    
    return response.json();
})
.then((data1)=>{
    let dataSet1 = data1
    console.log(dataSet1);
});

// ---------------------------------

function creatBut(obj){
    let myDiv = document.querySelector(".buttons"); //ref til div
    let button = document.createElement('BUTTON'); //opret knap
    button.innerHTML = obj.countryname; //knap-tekst = land fra JSON
    button.dataset.id = obj.id; //data-indhold = id fra JSON
    button.addEventListener("click", function(event) {
        // have fat i buttons id.
        let countryID = button.dataset.id;
        // have fat i countryname
        let countryName = button.innerHTML
        // gemme id + countryname til LS.
        localStorage.setItem("id", countryID);
        localStorage.setItem("name", countryName);

        // sende til en anden side.
        location.assign("city.html");
    });
    myDiv.appendChild(button);
}

// function showCountry(id){
//    console.log(id);
// }

