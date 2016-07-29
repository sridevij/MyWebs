

// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("ContentPlaceHolder1_txt_tinno").value;
var password = document.getElementById("ContentPlaceHolder1_txt_pwd").value;
var code=document.getElementById("ContentPlaceHolder1_txt_captcha").value;
if ( username == "12345678" && password == "efacts@2016"){
 if( code == "231f"){
        alert ("Login successfully");
        window.location = "SaveasAfterlogin_files/index.html"; // Redirecting to other page.
      
      }
    else
       {
  alert("Login failed ! Please enter valid code");
  document.getElementById("ContentPlaceHolder1_txt_captcha").value = "";
  
    }
    return false;
}
else{
alert("Login failed Please enter 12345678 and efacts@2016");
document.getElementById("ContentPlaceHolder1_txt_tinno").value = "";
document.getElementById("ContentPlaceHolder1_txt_pwd").value = "";
return false;
//}
}
}

