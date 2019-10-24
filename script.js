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
        var C = document.getElementById("text").value;
        console.log("ip", C) 
		
        fetch('https://extreme-ip-lookup.com/json/'+C).then(function(response) { return response.json() }).then(function(json) {  
            ville(json.city) 

		var a = json.country	
		
		if(a != "France" ) {
			alert("Saisissez une adresse IP francaise");
			document.getElementById('text').value = '';
			
		}   
		
		}) ;  	      
		
}
