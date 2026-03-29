
async function FetchApi() {
    document.querySelector(".rotate").style.display = "block";
    const userinput = document.getElementById("movie-title");
var uservalue = userinput.value;  // get the value
     const url = `http://www.omdbapi.com/?i=tt3896198&apikey=224f83de&s=${encodeURIComponent(uservalue)}`;
    

    const moviesContainer = document.querySelector(".movies");
    
    // Clear previous results before a new search
    moviesContainer.innerHTML = "";

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        document.querySelector(".rotate").style.display = "none";

        if (data.Response === "True") {
            data.Search.forEach((movie) => {
                // 1. Create unique elements for EACH movie
                const movieCard = document.createElement("div");
                const heading = document.createElement("h2");
                const paragraph = document.createElement("p");
                const image = document.createElement("img");

                // Creating a new div
                var elements= document.createElement("elements");
                  var button= document.createElement("button");
                    var span1= document.createElement("span");
                      var span2= document.createElement("s");

               

                // 2. Configure elements
                movieCard.classList.add("movie-card");
                heading.textContent = movie.Title;
                paragraph.textContent = movie.Year;
                image.src = movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"; // Handle missing posters

                // 3. Assemble the card
                movieCard.appendChild(image);
                movieCard.appendChild(heading);
                movieCard.appendChild(paragraph);

                // 4. Add the finished card to the page
                moviesContainer.appendChild(movieCard);
                     //   Configuring the element
                    elements.classList.add(".elements")
                   button.textContent="Watch";
                   span1.textContent= "❤️"
                   span2.textContent="👍"
                   
                   elements.appendChild(button)
                   elements.appendChild(span1)
                     elements.appendChild(span2)
                 movieCard.appendChild(elements);
            });
        } else {
            document.querySelector(".error").textContent = `Movie not found!`;
        }
    } catch (err) {
        document.querySelector(".rotate").style.display = "none";
        alert(`Error connecting to the API ,${err.message} Movie`)
        // document.querySelector(".error").innerHTML = `An error occurred: ${error.message}`;
    }
}





// var title = document.querySelector("h2");
// var img = document.querySelector("img");
// var text = document.querySelector("p")
// var card = document.querySelector(".movie-card");
// var error = document.querySelector(".error");

// var movieCard = document.createElement("div");  // Create a div
// var image = document.createElement("img"); 
// var heading = document.createElement("h2"); 
// var paragraph = document.createElement("p"); 
// var element2 = document.createElement("div"); 
// var button = document.createElement("button"); 
// var span1 = document.createElement("span"); 
// var span2 = document.createElement("span"); 
// var result=element.classList.add("movie-card");
            
                 
// async function FetchApi(){
//     document.querySelector(".rotate").style.display="block"
//     var uservalue = userinput.value;\
//      const url = `http://www.omdbapi.com/?i=tt3896198&apikey=224f83de&s=${encodeURIComponent(uservalue)}`;
//      alert("Your request is waiting");
//      try{
//     var response = await fetch(url);
//     var data = await response.json();
//     console.log(data)
//     var arr = data.Search;
//     document.querySelector(".rotate").style.display="none"
//     var mapped =  arr.map((data)=>{
//         return 
//      heading.textContent=data.Title;
//      paragraph.textContent=data.Year;
//     })
//     movieCard.appendChild(mapped)
//     movieCard.classList.add("movie-card")
//     document.querySelector(".movies").appendChild(movieCard)
//      }
     
//      catch (error) {
//          document.querySelector(".rotate").style.display="none"
//          error.innerHTML=`An error occurred: ${error.message}`;
//         }
        
//     }
    
    
//     title.innerHTML= arr.Title;
//     img.src=arr.Poster;
//     var limit = arr.Plot.substring(0,60);
//     text.innerHTML=limit;
//     card.style.display="flex"
// arr.map((ele)=>{
//     return
//     result.appenChild()
// })
