var nameTag = document.querySelector("#loqueseleccione");
function print_seleccion(element){
    var value = element.options[element.selectedIndex].value;
    console.log(value);
}