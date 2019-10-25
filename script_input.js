function input(){
document.getElementsByName("villeTest")[0].innerHTML = "";
const aff = document.getElementById('main_div');
aff.innerHTML = "<input class='form-control transparent-input' border = 'none'  background= 'tranparent' type='text' name='name' placeholder='Field title...'  required>";
}