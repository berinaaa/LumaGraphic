function login() {
    var getPersonalInformation = localStorage.getItem('personalInformation');
    var personalInformationObj = JSON.parse(getPersonalInformation);
  
    var password = $("#login__password").val();
    if(password !== personalInformationObj.password) {
      $("#myModal2").modal();
    } else {
      window.open("../login/logindone.html")
    }
  };