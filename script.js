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
        var C = document.getElementById("text").value;
        console.log("ip", C) 
		
        fetch('https://extreme-ip-lookup.com/json/'+C).then(function(response) { return response.json() }).then(function(json) {  
            ville(json.city) 

		var a = json.country	
		
		if(a != "France" || document.getElementById('text').value == '') {
			alert("Saisissez une adresse IP francaise");
			document.getElementById('text').value = '';
			
		}   
		
		}) ;  	      
		
}
