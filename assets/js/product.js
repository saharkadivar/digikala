const products = [
    {id : 1, describtion: "کفش طبی" , Image : "./assets/images/02.23-4.jpg" },
    {id : 2, describtion: "کفش طبی" , Image : "./assets/images/02.23-4.jpg" },
    {id : 3, describtion: "کفش طبی" , Image : "./assets/images/02.23-4.jpg" },
    
]

const productcontainer = document.getElementById("products");

product.map((item) => {
    const elementcard = document.createElement("div");
    elementcard.classList.add("col-md-3");
    elementcard.innerHTML = `
    <div class="card">
            <div class="card-body">
              <img style="width: 100%; height: auto;" src="./assets/images/02.23-4.jpg" alt="">
              <p>کفش طبی</p>
            </div>
          </div>`

          productcontainer.appendChild(elementcard);
})