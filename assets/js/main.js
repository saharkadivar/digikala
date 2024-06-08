const username = JSON.parse(localStorage.getItem("user-name"));

const user = document.getElementById("user-name");
user.innerHTML = username;