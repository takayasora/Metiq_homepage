window.onload = () => {
  alert("Enter Username and Password for Registration.");
  let uname = prompt("Enter Username")
  let pass = prompt("Enter Password")
  let ubox = document.getElementById("usern")
  let pbox = document.getElementById("pass")

  let form = document.getElementById("formw")
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (ubox.value === "20ec070" && pbox.value === "nameko1222") {
      alert("validated")
      location.assign("../loggedin/index.html")
    }
    else {
      alert("wrong password")
      location.assign("../error/index.html")
    }
  })
};
