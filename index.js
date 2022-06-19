let p1=document.getElementById("p1");
let p2=document.getElementById("p2");
let p3=document.getElementById("p3");
let p4=document.getElementById("p4");
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var passwordLength = 12;



//crerate a fuction that generate 4 different passwords for each of p1 p2 p3 p4
function generate(){
    var password = "       ";
    var password1 = "      ";
    var password2 = "      ";
    var password3 = "      ";
   
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
        var randomNumber = Math.floor(Math.random() * chars.length);
        password1 += chars.substring(randomNumber, randomNumber +1);
        var randomNumber = Math.floor(Math.random() * chars.length);
        password2 += chars.substring(randomNumber, randomNumber +1);
        var randomNumber = Math.floor(Math.random() * chars.length);
        password3 += chars.substring(randomNumber, randomNumber +1);

       }
            p1.textContent=password;
            p2.textContent=password1;
            p3.textContent=password2;
            p4.textContent=password3;

}
