function loadcategories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=> res.json())
    .then((data)=> displaycategories (data.categories));
}

// {
//     "category_id": "1001",
//     "category": "Music"
// }

// {
//     "category_id": "1001",
//     "video_id": "aaad",
//     "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
//     "title": "Smells Like Teen Spirit",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
//             "profile_name": "Oliver Harris",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "5.4K",
//         "posted_date": "1672656000"
//     },
//     "description": "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances."
// }



function loadvideose(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayvideos(data.videos))
}



function displaycategories(categories){
    // get the container
    const categorycontainer = document.getElementById("category-container");

    // loop opration on array of object 
    for(let cat of categories ){
        // console.log(cat)
        // creat element
        const categorydiv = document.createElement("div");
        categorydiv.innerHTML=`
         <button class="btn btn-sm hover:bg-red-600 hover:text-white ">${cat.category}</button>`;
    // append the element
    categorycontainer.append(categorydiv);
    }
     
}

const displayvideos = (videos) => {

    const videoContainer = document.getElementById("video-Container");


    videos.forEach(video=>{
        console.log(video)
        // creat alement
        const videoCard = document.createElement("div");

        videoCard.innerHTML=`

        <div class="card bg-base-100 ">
            <figure class="relative">
                <span class="absolute bottom-2 px-2 text-sm rounded right-2 bg-black text-white ">3hrs 56 min ago</span>
              <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="">
            </figure>
            <div class=" flex py-5 gap-3 px-0 ">
              <div class="profail">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
              </div>
              <div class="inro">
                <h2 class="text-sm font-semibold">Midnight Serenade</h2>
                <p class="text-sm text-gray-500 flex gap-1">
                ${video.authors[0].profile_name}
                <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                <p class="text-sm text-gray-500">${video.others.views}views</p>
              </div>
            </div>
          </div>

        `;

        // append the element

        videoContainer.append(videoCard);

    });
};






loadcategories();
loadvideose();