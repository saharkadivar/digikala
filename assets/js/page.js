const mahsolat = [
    {id : 1, describtion: "سرهمی", Image : "../assets/images/body.webp" },
    {id : 2, describtion: "سرهمی" , Image : "../assets/images/body.webp" },
    {id : 3, describtion: "سرهمی" , Image : "../assets/images/body.webp" },
    {id : 4, describtion: "سرهمی" , Image : "../assets/images/body.webp" },
    {id : 5, describtion: "سرهمی" , Image : "../assets/images/body.webp" },
    {id : 6, describtion: "سرهمی" , Image : "../assets/images/body.webp" },
    {id : 7, describtion: "سرهمی" , Image : "../assets/images/body.webp" },
    {id : 8, describtion: "سرهمی" , Image : "../assets/images/body.webp" },
    {id : 9, describtion: "سرهمی" , Image : "../assets/images/body.webp" },
    {id : 10, describtion: "سرهمی" , Image : "../assets/images/body.webp" },
    {id : 11, describtion: "سرهمی" , Image : "../assets/images/body.webp" },
   
    
]

const mahsolatcontainer = document.getElementById("mahsolat");

mahsolat.map((item) => {
    const elementcard = document.createElement("div");
    elementcard.classList.add("col-md-3");
    elementcard.innerHTML = `
    <div class="body shadow">
            <img class = "w-75" src="../assets/images/body.webp" alt="">
            <span
           class="translate-middle badge rounded-pill bg-danger">44% </span>
           <p class="text-center">سرهمی</p>

          </div>`


          mahsolatcontainer.appendChild(elementcard);
})