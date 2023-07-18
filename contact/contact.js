function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myULpt2");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    ul.style.display = "block";
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1 && filter !== '') {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


  function sendValues() {
    var personalInformation = {};

    var yourName = $("#yourName").val();
    var yourEmail = $("#yourEmail").val();
    var yourPhone = $("#yourPhone").val();
    var yourMessage = $("#yourMessage").val();
    var password = $("#psw").val();

    personalInformation.yourName = yourName;
    personalInformation.yourEmail = yourEmail;
    personalInformation.yourPhone = yourPhone;
    personalInformation.yourMessage = yourMessage;
    personalInformation.password = password;

    if (yourName && yourEmail && yourPhone && yourMessage && password) {
      alert("Your confirm password does not match the password");
    } else {
      localStorage.setItem('personalInformation', 
      JSON.stringify(personalInformation));
      window.open('messagesent.html', '_blank');
    }
  }
   
  function login() {
    var getPersonalInformation = localStorage.getItem('personalInformation');
    var personalInformationObj = JSON.parse(getPersonalInformation);
  
    var password = $("#login__password").val();
    if(password !== personalInformationObj.password) {
      $("#myModal2").modal();
    }
  }
  
  function sendValuess() {
    window.open('../login/login.html')
  }