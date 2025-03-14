function loadcategories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=> res.json())
    .then((data)=> displaycategories (data.categories));
}

// {
//     "category_id": "1001",
//     "category": "Music"
// }

function displaycategories(categories){
    // get the container
    const categorycontainer = document.getElementById("category-container");

    // loop opration on array of object 
    for(let cat of categories ){
        console.log(cat)
        // creat element
        const categorydiv = document.createElement("div");
        categorydiv.innerHTML=`
         <button class="btn btn-sm hover:bg-red-600 hover:text-white ">${cat.category}</button>`;
    // append the element
    categorycontainer.append(categorydiv);
    }
     
}
loadcategories()