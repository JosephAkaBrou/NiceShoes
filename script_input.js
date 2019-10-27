function input(){
document.getElementsByName("villeTest")[0].innerHTML = "";
const aff = document.getElementById('main_div');
aff.innerHTML = "<input id = 'input_check' class='form-control transparent-input' onkeyup='return forceLower(this)'  border = 'none' onkeypress='controle()' background= 'tranparent' type='text' name='name' placeholder='Field title...'  required>";
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
            var a = json.city_info.country;
            console.log(a);
            if(a != "France") {
                alert("Saisissez le nom d'une ville Française");
            }
            else{
                ville(json.city_info.name) ;
            }
        
        });
    }
    
}