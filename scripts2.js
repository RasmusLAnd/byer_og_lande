// --------------- getting country.JSON-----------------------------------------------------------------

let xhr = new XMLHttpRequest();
xhr.open('GET', "Data/land.json", true);
xhr.responseType ='text';
xhr.send();

xhr.onload = function(){
    if(xhr.status===200){
        countryInfo= JSON.parse(xhr.responseText);
        console.log(countryInfo);
        
    }
}


// -------------------getting City.JSON--------------------------------------------------------------
let xhr2 = new XMLHttpRequest();
xhr2.open('GET', "Data/stad.json", true);
xhr2.responseType ='text';
xhr2.send();

xhr2.onload = function(){
   if(xhr2.status===200){
        cityInfo= JSON.parse(xhr2.responseText);
        console.log(cityInfo);

     }
}

// ---------------------------------------------------------------------------------

function display(x)
{
    // location.assign("city.html");
   
    // document.querySelector(".cities").innerHTML = cityInfo[x].stadname;
    document.querySelector(".conID").innerHTML = countryInfo[x].countryname;
    localStorage.setItem("id", countryInfo[x].id);
   
    
 // accesing cities with ID from Localstorage
    
    let ras = Object.keys(cityInfo);
    console.log(ras.length);


    document.querySelector(".cities").innerHTML = ras;
    console.log(ras);

    for(i=0; i<cityInfo.lenght; i++ ){
         console.log("hejsa");       
    }
   
}
    


