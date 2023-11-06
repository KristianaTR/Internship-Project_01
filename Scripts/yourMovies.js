const yourMovies = JSON.parse(localStorage.getItem("yourMovies")) || [];
const movieList = JSON.parse(localStorage.getItem("movieList"));
console.log(yourMovies);
console.log(movieList);

const table = document.querySelector(".content-table tbody");
console.log(table);
let rentTime = JSON.parse(localStorage.getItem("rentTime")) || 12;

function renderYourMoviesList (yourMovies) {
    yourMovies.forEach((movie) => {
        const row = document.createElement("tr");
            
        const nameCell = document.createElement("td");
        nameCell.textContent = movie.movieName;
        
        const genreCell = document.createElement("td");
        genreCell.textContent = movie.movieGenre;
        
        const timeCell = document.createElement("td");
        timeCell.className = "count-display";

        const countButtonDecrement = document.createElement("button");
        countButtonDecrement.className = "decrement-btn";
        countButtonDecrement.innerHTML = "&lt;";

        const rentTimeElement = document.createElement("span");
        rentTimeElement.textContent = rentTime + "h";

        const countButtonIncrement = document.createElement("button");
        countButtonIncrement.className = "increment-btn";
        countButtonIncrement.innerHTML = "&gt;";

        timeCell.appendChild(countButtonDecrement);
        timeCell.appendChild(rentTimeElement);
        timeCell.appendChild(countButtonIncrement);
        
        const priceCell = document.createElement("td");
        priceCell.textContent = movie.rentalPrice.toFixed(2) + "€";

        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Remove";

        deleteCell.appendChild(deleteButton);
     
        row.appendChild(nameCell);
        row.appendChild(genreCell);
        row.appendChild(timeCell);
        row.appendChild(priceCell);
        row.appendChild(deleteCell);
    
        table.appendChild(row);
    })
}

function handleDeleteMovie (yourMovies) {
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", () => {
            const row = deleteButton.closest("tr");
            const deletedMovieName = row.querySelector("td:first-child").textContent;
            
            const index = yourMovies.findIndex((movie) => movie.movieName === deletedMovieName);
    
            if (index !== -1) {
                yourMovies.splice(index, 1);
                localStorage.setItem("yourMovies", JSON.stringify(yourMovies));
                table.removeChild(row);

                const deletedMovieInList = movieList.find((movie) => deletedMovieName === movie.movieName);
                if (deletedMovieInList) {
                    deletedMovieInList.countInStock++;
                }
                localStorage.setItem("movieList", JSON.stringify(movieList));
            }
        });
    })
}

function handleRentTimeChanges () {
    const decrementBtns = document.querySelectorAll(".decrement-btn");
    const incrementBtns = document.querySelectorAll(".increment-btn");
    
    decrementBtns.forEach((decrementBtn) => {
        decrementBtn.addEventListener("click", () => {
            const countDisplay = decrementBtn.closest(".count-display");
            const rentTimeText = countDisplay.querySelector("span");
            let currentRentTime = parseInt(rentTimeText.textContent);
            if (currentRentTime > 12) {
                rentTime -= 12;
                rentTimeText.textContent = rentTime + "h";
            } else if (currentRentTime === 12) {
                alert("This is the minimum of the rent time!")
            };
        });
    });

    incrementBtns.forEach((incrementBtn) => {
        incrementBtn.addEventListener("click", () => {
            const countDisplay = incrementBtn.closest(".count-display");
            const rentTimeText = countDisplay.querySelector("span");
            let currentRentTime = parseInt(rentTimeText.textContent);
            if (currentRentTime < 168) {
                rentTime += 12;
                rentTimeText.textContent = rentTime + "h";
            } else if (currentRentTime === 168) {
                alert("You reached the maximum of the rent time!")
            };

            localStorage.setItem("rentTime", JSON.stringify(rentTime));
        });
    });


}

renderYourMoviesList(yourMovies);
handleDeleteMovie(yourMovies);
handleRentTimeChanges();