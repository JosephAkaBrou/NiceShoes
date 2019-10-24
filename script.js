function ville(V){
        fetch('https://www.prevision-meteo.ch/services/json/'+V)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          dom_modif_winfo(json)
          console.log("ville", json)
        });
}
function ip(){

        fetch('https://ipapi.co/json/').then(function(response) { return response.json() }).then(function(json) {  
            console.log(json.country_name)
		var a = json.country_name;
		
		if(a != "France") {
			alert("Saisissez une adresse IP francaise");
			document.getElementById('text').value = '';
			
		}
        else{
            ville(json.city) ;
        }
		
		}) ;  	      
		
}
function dom_modif_winfo(json){
    var main_div = document.getElementById('main_div')
    main_div.innerHTML = json.city_info.name+'<br><br><div id="result"></div>'

    for (var i = 0; i <= 3; i++) {
        var div = document.createElement('div')
        var br = document.createElement('br')
        div.setAttribute('class', 'col-md-3')
        div.appendChild(document.createTextNode(json['fcst_day_'+i].day_long))
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createTextNode(json['fcst_day_'+i].tmin+'° - '+json['fcst_day_'+i].tmax+'°'))
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createTextNode(json['fcst_day_'+i].condition))
        var subscribe = document.getElementById('result')
        var parent = subscribe.parentNode
        parent.insertBefore(div,subscribe)
    }	
}
