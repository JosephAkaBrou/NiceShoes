function input(){
document.getElementsByName("villeTest")[0].innerHTML = "";
const aff = document.getElementById('main_div');
aff.innerHTML = "<input id = 'input_check' class='form-control transparent-input' onkeyup='return forceLower(this)'  border = 'none' onkeypress='controle()' background= 'tranparent' type='text' name='name' placeholder='Mettre une ville' style='margin-right:30%;margin-left:30%;font-size:18pt;height:20%;width:40%;Text-ALIGN:center';>";
}


function forceLower(strInput) 
{
strInput.value=strInput.value.toLowerCase();
}


function controle(){
    var P = document.getElementById('input_check').value;
    console.log(P)
    if (event.keyCode === 13) {
        fetch('https://www.prevision-meteo.ch/services/json/'+P).then(function(response) { return response.json() }).then(function(json){
            console.log("1",json);
            console.log("2",json.errors);
            test = json.city_info ;
            if(test != undefined){
                var a = json.city_info.country;
                console.log(a);
            }
            else {
                var a = "";
            }
                
            if(a != "France") {
                alert("Saisissez le nom d'une ville Française");
            }
            else{
                ville(json.city_info.name) ;
            }
        
        });
    }
    
}