const movieList = [
    {
        movieName: "Batman",
        movieGenre: "Action",
        rentalPrice: 4.55,
        countInStock: 10,
    },
    {
        movieName: "Titanic",
        movieGenre: "Drama",
        rentalPrice: 4.00,
        countInStock: 5,
    },
    {
        movieName: "Mamma Mia!",
        movieGenre: "Musical",
        rentalPrice: 4.55,
        countInStock: 4,
    },
    {
        movieName: "Ace Ventura",
        movieGenre: "Comedy",
        rentalPrice: 4.00,
        countInStock: 2,
    },
    {
        movieName: "Psycho",
        movieGenre: "Horror",
        rentalPrice: 2.55,
        countInStock: 0,
    },
    {
        movieName: "Coco",
        movieGenre: "Animation",
        rentalPrice: 8.00,
        countInStock: 6,
    },
    {
        movieName: "The Addams Family",
        movieGenre: "Animation",
        rentalPrice: 3.00,
        countInStock: 3,
    },
    {
        movieName: "Gladiator",
        movieGenre: "Action",
        rentalPrice: 7.00,
        countInStock: 17,
    },

];
let yourMovies = [];

const table = document.querySelector(".content-table tbody");
const signOutBtn = document.querySelector(".btn-signOut");

function renderMovieList (movieList) {
    movieList.forEach((movie) => {
        const row = document.createElement("tr");
            
        const nameCell = document.createElement("td");
        nameCell.textContent = movie.movieName;
        
        const genreCell = document.createElement("td");
        genreCell.textContent = movie.movieGenre;
        
        const priceCell = document.createElement("td");
        priceCell.textContent = movie.rentalPrice.toFixed(2) + "€";
    
        const stockCell = document.createElement("td");
        const stockImage = document.createElement("img");
        stockImage.src = movie.countInStock > 0 ? 
        "../img/check.png" : "../img/Cross.png";
        stockImage.alt = movie.countInStock <= 0 ?
        "in stock" : "out of stock";
        stockCell.appendChild(stockImage);
    
        const rentCell = document.createElement("td");
        const rentButton = document.createElement("button");
        rentButton.className = "rent-btn";

        if (movie.countInStock > 0) {
            rentButton.textContent = "Rent";
            rentButton.addEventListener("click", () => {
                handleRentClick(movie, rentButton, stockImage)
            })
        } else {
            rentButton.textContent = "Out of stock";
            rentButton.classList.add("out-of-stock");
            rentButton.disabled = true;
        }

        rentCell.appendChild(rentButton);
     
        row.appendChild(nameCell);
        row.appendChild(genreCell);
        row.appendChild(priceCell);
        row.appendChild(stockCell);
        row.appendChild(rentCell);
    
        table.appendChild(row);
    })   
}

function handleRentClick (movie, rentButton, stockImage) {
    
    const index = movieList.findIndex((m) => m.movieName === movie.movieName);
             
    if (index !== -1 && movieList[index].countInStock > 0) {
        movieList[index].countInStock--;
        if (localStorage.getItem("yourMovies")) {
            yourMovies = JSON.parse(localStorage.getItem("yourMovies"));
            
        }
        yourMovies.push(movie);
        localStorage.setItem("yourMovies", JSON.stringify(yourMovies));
        localStorage.setItem("movieList", JSON.stringify(movieList));
        console.log(yourMovies);

        if (movieList[index].countInStock == 0) {
            rentButton.textContent = "Out of stock";
            rentButton.classList.add("out-of-stock");
            rentButton.disabled = true;
            stockImage.src = "../img/Cross.png";
        }
    } else {
        rentButton.textContent = "Out of stock";
        rentButton.classList.add("out-of-stock");
        rentButton.disabled = true;
    }
}

function handleSignOut () {
    signOutBtn.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    })
}

renderMovieList(movieList);
handleSignOut();
