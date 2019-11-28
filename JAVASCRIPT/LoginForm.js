function validate(){
//alert("Inside  validate");
var username=document.getElementById("username").value;
var password= document.getElementById("password").value;

var x = document.forms["myForm"]["radioGroupName"].value;
if (x == "") {
document.getElementById("message").innerHTML = "Select atleast one option";
} else {
document.getElementById("message").innerHTML = "Submitted Successfully";

}



if(username=="")
{

var usrname=document.getElementById("usernameError");
usrname.innerHTML="Username can not be blank";

{
    alert("Username can not be blank");
    return false;
}else if(password=="")
{
    alert("password can not be blank");
    return false;
}else {
    var form = document.getElementById("frm");
    form.action="Home.html";
    form.submit();
}


}
