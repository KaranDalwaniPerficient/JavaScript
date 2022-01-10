function display()
{
    var a=document.getElementById("first_name").value;
    var b=document.getElementById("last_name").value;
    document.getElementById("infor").innerHTML=("First Name: "+a[0].toUpperCase()+a.slice(1,));
    document.getElementById("infor").innerHTML+=("<br>Last Name: "+b[0].toUpperCase()+b.slice(1,));
}
