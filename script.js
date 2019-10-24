var data

function ville(V){
    fetch('https://www.prevision-meteo.ch/services/json/'+V)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) { 
            /*document.getElementById('main_div').innerHTML = json.city_info.name + '<br><br>' +
                                                            json.fcst_day_0.day_long + '<br>' +
                                                            json.current_condition.tmp + '°' + '<br>' +
                                                            json.current_condition.condition;*/
            dom_modif_winfo('main_div', json)
            // debug
            data = json
            console.log("ville", json)
            console.log('info_city', data)
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
    


function dom_modif_winfo(elem, json){
    var doc = document.getElementById(elem)
    doc.innerHTML = json.city_info.name + '<br><br>'
}
