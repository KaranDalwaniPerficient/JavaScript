function display()
{
    var form={
        firstName: document.getElementById("first_name").value,
        lastName: document.getElementById("last_name").value,
        address: document.getElementById("address").value,
        bloodGroup: document.getElementById("blood_group").value,
        dob: document.getElementById("dob").value,
        placeOfBirth: document.getElementById("pob").value
    };
    document.getElementById("infor").innerHTML +=("Name of user is"+form.firstName+" "+form.lastName+" His/Her Address is "+form.address+" His/Her Blood Group is "+form.bloodGroup+" His/Her Date of Birth is on "+form.dob+"and his/her Place of Birth is "+form.placeOfBirth);
}
