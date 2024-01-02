const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=> {
    const itemLen = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () =>{
        clickCounter++;
        if (itemLen - (4+clickCounter) >= 0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value-330
            }px)`;
        }else{
            movieLists[i].style.transform = "translatex(0)";
            clickCounter = 0;
        }
   
    });
})