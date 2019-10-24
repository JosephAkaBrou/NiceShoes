function ville(V){
        fetch('https://www.prevision-meteo.ch/services/json/'+V)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          console.log("ville", json)
        });
}
function ip(){

        fetch('https://ipapi.co/json/').then(function(response) { return response.json() }).then(function(json) {  
            console.log(json.city)
            ville(json.city) 
		var a = json.country_name	
		
		if(a != "France" || document.getElementById('text').value == '') {
			alert("Saisissez une adresse IP francaise");
			document.getElementById('text').value = '';
			
		}   
		
		}) ;  	      
		
}
