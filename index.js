window.onload = () => {
  let ubox = document.getElementById("usern")
  let pbox = document.getElementById("pass")

  let form = document.getElementById("formw")
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (uname === "20ec070@ms.dendai.ac.jp" && pass === "nameko1222") {
      alert("validated")
      location.assign("./loggedin/index.html")
    }
    else {
      alert("wrong password")
      location.assign("./error/index.html")
    }

  })
};


