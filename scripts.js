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
    let myDiv = document.querySelector(".buttons"); //ref to div
    let button = document.createElement('BUTTON'); //creating a button
    button.innerHTML = obj.countryname; //text = country name from JSON
    button.dataset.id = obj.id; //dataset with id from JSON

    button.addEventListener("click", function(event) {
        // id of button
        let countryID = button.dataset.id;
        // country name
        let countryName = button.innerHTML
        // id and country name to localstorage

        localStorage.setItem("id", countryID);
        localStorage.setItem("name", countryName);

        // link to different page
        location.assign("city.html");
    });

    myDiv.appendChild(button);
}


