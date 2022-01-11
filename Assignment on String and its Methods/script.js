function display()
{
    var fname=document.getElementById("first_name").value;
    var lname=document.getElementById("last_name").value;
    document.getElementById("infor").innerHTML=("First Name: "+fname[0].toUpperCase()+fname.slice(1,));
    document.getElementById("infor").innerHTML+=("<br>Last Name: "+lname[0].toUpperCase()+lname.slice(1,));
}
