const render = (finaldata)






 const getusersbtn = document.getElementById("get-users");
 const getpostsbtn = document.getElementById("get-posts");

getusersbtn.addEventlistener("click" , () => {
    send("https://www.digikala.com/main/dk-ds-gift-card/" , "users")
});

getpostsbtn.addEventlistener("click" , () => {
    send("https://www.digikala.com/main/food-beverage/")
})