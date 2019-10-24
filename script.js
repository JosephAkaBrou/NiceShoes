function ville(V){
        fetch('https://www.prevision-meteo.ch/services/json/'+V)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
        document.body.innerHTML = json.city_info.name;
          console.log("ville", json)
        });
}
function ip(P){
<<<<<<< HEAD
<<<<<<< HEAD
        var C = document.getElementsByClassName(sr-only).value;
        fetch('https://extreme-ip-lookup.com/json/'+C).then(function(response) { return response.json() }).then(function(json) { 
            console.log("ip", json)  
            ville(json.city)            
=======
        var C = document.getElementsByClassName('sr').value;
=======
        var C = document.getElementById("text").value;
>>>>>>> origin
        console.log("ip", C) 
        fetch('https://extreme-ip-lookup.com/json/'+C).then(function(response) { return response.json() }).then(function(json) {  
            ville(json.city)  
            


>>>>>>> 5c5bbff33b52cb570ddf419abb21ba886b0608b9
        });          
}
    
