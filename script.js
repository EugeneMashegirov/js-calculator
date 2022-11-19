let field = document.getElementById("field");

field.onfocus = () => field.blur();

let buttonsDiv = document.querySelector(".buttons");
let count  = document.getElementById("count");

buttonsDiv.onclick = function(event) {
    if (event.target.id == "clear") {
    	field.value = "";
    }
    
    if (event.target.tagName != "BUTTON") return;

    if (field.value.length == 14) return;

    let button = event.target;

    field.value += button.value;
}

count.onclick = function() {
    if (field.value == "") return;
    let decision = window.eval(field.value);
    field.value = decision;
}

document.onkeydown = function(event) {
    if (event.code != "Enter") return;
    count.focus();
    count.onclick();
}