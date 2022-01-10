Grocery = 20;
Ice_Cream = 15;
function check() {
    var a = document.getElementById("input").value;
    if (a >= (Grocery + Ice_Cream)) {
        alert("Grocery + Ice Cream (Amount Left = " + parseInt(a - (Grocery + Ice_Cream)) + ")");
    }
    else if (a >= Grocery) {
        alert("Grocery");
    }
    else {
        alert("Nothing");
    }
}