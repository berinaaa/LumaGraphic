function sendValues() {
    var personalInformation = {};
  
    var username = $("#login__username").val();
    var password = $("#login__password").val();
    var confirmPassword = $("#confirm__password").val();
  
    personalInformation.username = username;
    personalInformation.password = password;
    personalInformation.confirmPassword = confirmPassword;
  
    if (password !== confirmPassword) {
      alert("Your confirm password does not match the password");
    } else {
      localStorage.setItem('personalInformation',JSON.stringify(personalInformation));
      window.open("../login/login.html")
    }
}