function display()
{
    var form={
        First_Name: document.getElementById("first_name").value,
        Last_Name: document.getElementById("last_name").value,
        Address: document.getElementById("address").value,
        Blood_Group: document.getElementById("blood_group").value,
        DOB: document.getElementById("dob").value,
        Place_Of_Birth: document.getElementById("pob").value
    };
    document.getElementById("infor").innerHTML +=("Name of user is"+form.First_Name+" "+form.Last_Name+" His/Her Address is "+form.Address+" His/Her Blood Group is "+form.Blood_Group+" His/Her Date of Birth is on "+form.DOB+"and his/her Place of Birth is "+form.Place_Of_Birth);
}