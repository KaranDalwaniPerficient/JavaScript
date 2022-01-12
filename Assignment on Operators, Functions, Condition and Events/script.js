var Grocery = 20;
var Ice_Cream = 15;
function check() {
    var check = document.getElementById("input").value;
    var amt_left = check - (Grocery + Ice_Cream);
    if (check >= (Grocery + Ice_Cream)) {
        alert("Grocery + Ice Cream (Amount Left = " + parseInt(amt_left) + ")");
    }
    else if (check >= Grocery) {
        alert("Grocery");
    }
    else {
        alert("Nothing");
    }
}
