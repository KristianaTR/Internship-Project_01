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
const yourMovies = [];

const table = document.querySelector(".content-table tbody");

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
            
            const index = movieList.findIndex((m) => m.movieName === movie.movieName);
            console.log(index);
            if (index !== -1 && movieList[index].countInStock > 0) {
                movieList[index].countInStock--;
                yourMovies.push(movie);
                if (movieList[index].countInStock == 0) {
                    rentButton.textContent = "Out of stock";
                    rentButton.classList.add("out-of-stock");
                    rentButton.disabled = true;
                    stockImage.src = "../img/Cross.png";
                }
            }
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

