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
        var C = document.getElementById("text").value;
        console.log("ip", C) 
        fetch('https://extreme-ip-lookup.com/json/'+C).then(function(response) { return response.json() }).then(function(json) {  
            ville(json.city)  
            


        });          
}
    


function dom_modif_winfo(elem, json){
    var doc = document.getElementById(elem)
    doc.innerHTML = json.city_info.name + '<br><br>'
}
