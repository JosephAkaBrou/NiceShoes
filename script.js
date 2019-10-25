/*
* Those script allow to get weather information from the ip client device
*
* Autors: 
*  - theo-oriol
*  - JojoAkaBrou
*  - Affres
*  - SylvainPovia
*  - clementcisterne
*
*/



/*
desc  : get the ip client device and call ville(v) function 
param : v array the city of the ip client device
*/
function ville(v){
    fetch('https://www.prevision-meteo.ch/services/json/'+v).then(function(response) { return response.json(); })
        .then(function(json) {
            dom_modif_winfo(json)
        }
    );
}

/*
desc  : get the ip client device and call ville(v) function 
param : 
*/
function ip(){
    $('[data-toggle="tooltip"]').tooltip();

    fetch('https://ipapi.co/json/').then(function(response) { return response.json() }).then(function(json) {
		var a = json.country_name;
		
		if(a != "France") {
			alert("Saisissez une adresse IP francaise");
			document.getElementById('text').value = '';
		}
        else{
            ville(json.city) ;
        }
		
	});  	      
}

/*
desc  : append weather information in main div 
param : json data format from API https://www.prevision-meteo.ch/services/json
*/
function dom_modif_winfo(json){
    var main_div = document.getElementById('main_div')
    main_div.innerHTML = json.city_info.name+'<br><br><div id="result"></div>'
    console.log(json)
    for (var i = 0; i <= 3; i++) {
        var div = document.createElement('div')
        div.setAttribute("data-toggle","tooltip")
        div.setAttribute("data-placement","bottom")
        div.setAttribute("title",""+json['fcst_day_'+i].day_long+"")
        div.id = json['fcst_day_'+i].day_long
        var br = document.createElement('br')
        div.setAttribute('class', 'col-md-3 col-sd-6')
        div.appendChild(document.createTextNode(json['fcst_day_'+i].day_long))
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createTextNode(json['fcst_day_'+i].tmin+'° - '+json['fcst_day_'+i].tmax+'°'))
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createTextNode(json['fcst_day_'+i].condition))
        div.appendChild(document.createElement('br'))
        var myImg = new Image();
        myImg.src = ''+json['fcst_day_'+i].icon+'';
        div.appendChild(myImg);
        div.appendChild(document.createElement('br'))
        div.appendChild(document.createElement('br'))

         // L'image est ajoutée au DOM
        var result = document.getElementById('result')
        var parent = result.parentNode
        parent.insertBefore(div,result)
    }	
}
