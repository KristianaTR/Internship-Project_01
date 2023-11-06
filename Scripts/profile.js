const user = {
    name: "John",
    surname: "Newman",
    email: "john.newman@mail.com"
};

function renderUserDataElements (userData, userDataTitle) {

    const userDataElement = document.createElement("div");
    const userDataCellTitle = document.createElement("p");
    userDataCellTitle.className = "title";
    const userDataCellData = document.createElement("p");
    userDataCellTitle.textContent = ` ${userDataTitle} :`;
    userDataCellData.textContent = userData;

    userDataElement.appendChild(userDataCellTitle);
    userDataElement.appendChild(userDataCellData);

    return userDataElement;
};

function renderUserData (user) {
    const container = document.querySelector(".profile-data");
    container.innerHTML = '';
    
    for ( const userData in user) {
        const userDataElement = renderUserDataElements (user[userData], userData);
        container.appendChild(userDataElement);
    }

};

function resetEmail () {
    const resetBtn = document.querySelector(".reset-btn");
    
    resetBtn.addEventListener("click", () => {
        console.log("click")
        const resetEmail = prompt(
            "Please enter the new email:"
        )
        if (validateEmail(resetEmail)) {
            user.email = resetEmail;
            renderUserData(user);

        } else {
            alert("Email reset was not successfull!")
        }
    })
}


function validateEmail (email) {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email !== "" || emailPattern.test(email)) {
        return true;
    } 
}

renderUserData (user);
resetEmail ();