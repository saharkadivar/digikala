const loginbtn = document.getElementById("login-btn");


const users = [
    {username: "user 1" , email: "a@sample.com" , password: "12345"},
    {username: "user 2" , email: "b@sample.com" , password: "12345"},
    {username: "user 3" , email: "c@sample.com" , password: "12345"},
    {username: "user 4" , email: "d@sample.com" , password: "12345"},
];

loginbtn.addEventListener("click" , (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const pass = document.getElementById("password");
    const modalbody = document.querySelector(".modal-body");

    const user = users.filter((item) => item.email === email.value);
    console.log("user");

    if (user.length !=0 && user[0].password === pass.value){
       
        modalbody.innerHTML = "login successful";
   
    } else {
       
        modalbody.innerHTML = "invalid";
    }


    localStorage.setItem("user-name", JSON.stringify(user[0].username))
});
