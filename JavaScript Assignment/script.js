let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("res");
document.getElementById("clrs").onclick = () =>
{
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("res").value="";
}
document.getElementById("addition").onclick = () =>
{
    result.value = parseInt(num1.value) + parseInt(num2.value);
}
document.getElementById("subtraction").onclick = () =>
{
    result.value = parseInt(num1.value) - parseInt(num2.value);
}
document.getElementById("division").onclick = () =>
{
    result.value = parseInt(num1.value) / parseInt(num2.value);
}
document.getElementById("mod").onclick = () =>
{
    result.value = parseInt(num1.value) % parseInt(num2.value);
}
document.getElementById("multiplication").onclick = () =>
{
    result.value = parseInt(num1.value) * parseInt(num2.value);
}
