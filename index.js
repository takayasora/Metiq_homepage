window.onload = () => {
  // alert("Enter Username and Password for Registration.");
  // let uname = prompt("Enter Username")
  // let pass = prompt("Enter Password")
  let ubox = document.getElementById("usern")
  let pbox = document.getElementById("pass")

  let form = document.getElementById("formw")
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if ("20ec070" === ubox.value && "nameko1222" === pbox.value) {
      location.assign("./loggedin/index.html")
    }
    else {
      location.assign("./error/index.html")
    }

  })
};


