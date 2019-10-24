function ville(V){
        fetch('https://www.prevision-meteo.ch/services/json/'+V)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          console.log("ville", json)
        });
}
function ip(P){
        fetch('https://extreme-ip-lookup.com/json/'+P).then(function(response) { return response.json() }).then(function(json) { 
            console.log("ip", json)  
            ville(json.city)  
            


        });          
}

    
ip("90.113.110.0");