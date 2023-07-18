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

function login() {
  var getPersonalInformation = localStorage.getItem('personalInformation');
  var personalInformationObj = JSON.parse(getPersonalInformation);

  var password = $("#login__password").val();
  if(password !== personalInformationObj.password) {
    $("#myModal2").modal();
  }
}

function sendValues() {
  window.open('../login/login.html')
}
