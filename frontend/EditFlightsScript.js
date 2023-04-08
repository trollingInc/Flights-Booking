const addButton = document.getElementById("a-submit-btn");
const editButton = document.getElementById("e-submit-btn");
const deleteButton = document.getElementById("d-submit-btn");
const modalBackground = document.getElementById("modal-background");
const loginForm = document.getElementById("form");
const loginBtn = document.getElementById("login-btn");
let failedAttempts = 0;
var option;


addButton.addEventListener("click", ()=>{
    modalBackground.style.opacity = "0.7";
    modalBackground.style.pointerEvents = "auto";
    loginForm.style.display = "flex"
    option = "add"

    // let from = document.getElementById("a-from");
    // let to = document.getElementById("a-to");
    // let takeOffTime = document.getElementById("a-take-off-time");
    // let arrivalTime = document.getElementById("a-arrive-time");
    // let planeType = document.getElementById("a-plane-type");
    // let normalTickes = document.getElementById("a-normal-tickets");
    // let businessTickets = document.getElementById("a-business-tickets");
    // let normalPrice = document.getElementById("a-normal-price");
    // let businessPrice = document.getElementById("a-business-price");
    // if(from.value != "" && to.value != "" && takeOffTime.value != "" && arrivalTime.value != "" && planeType.value != "" && normalTickes.value != "" && businessTickets.value != "" && normalPrice.value != "" && businessPrice.value != ""){
    //     fetch("https://localhost:7155/api/Flight", {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify({
    //             //id: "0",
    //             from: from.value,
    //             to: to.value,
    //             takeOffTime: takeOffTime.value,
    //             arrivalTime: arrivalTime.value,
    //             planeType: planeType.value,
    //             normalClassTickets: normalTickes.value,
    //             businessClassTickets: businessTickets.value,
    //             normalClassPrice: parseInt(normalPrice.value),
    //             businessClassPrice: parseInt(businessPrice.value)
    //         })
    //     }).then(respone =>{
    //         if(respone["status"] == 200){
    //             alert("all good. successfully made a flight.")
    //         }
    //         else{
    //             alert("something went wrong. last 2 fields should not have any symbols that aren't numbers.")
    //         }
    //     })
    // }
    // else{
    //     if(failedAttempts < 5)
    //     {
    //         alert("FILL ALL FIELDS! Please.");
    //         failedAttempts++;
    //     }
    //     else{
    //         alert("you're a lost cause... I'm dissapointed. no more job for you.")
    //     }
    // }
})


editButton.addEventListener("click", ()=>{
    modalBackground.style.opacity = "0.7";
    modalBackground.style.pointerEvents = "auto";
    loginForm.style.display = "flex"
    option = "edit"



    // let id = document.getElementById("e-ID");
    // let from = document.getElementById("e-from");
    // let to = document.getElementById("e-to");
    // let takeOffTime = document.getElementById("e-take-off-time");
    // let arrivalTime = document.getElementById("e-arrive-time");
    // let planeType = document.getElementById("e-plane-type");
    // let normalTickes = document.getElementById("e-normal-tickets");
    // let businessTickets = document.getElementById("e-business-tickets");
    // let normalPrice = document.getElementById("e-normal-price");
    // let businessPrice = document.getElementById("e-business-price");
    // if(id.value != "" && from.value != "" && to.value != "" && takeOffTime.value != "" && arrivalTime.value != "" && planeType.value != "" && normalTickes.value != "" && businessTickets.value != "" && normalPrice.value != "" && businessPrice.value != ""){
    //     fetch("https://localhost:7155/api/Flight", {
    //         method: "PUT",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify({
    //             id: parseInt(id.value),
    //             from: from.value,
    //             to: to.value,
    //             takeOffTime: takeOffTime.value,
    //             arrivalTime: arrivalTime.value,
    //             planeType: planeType.value,
    //             normalClassTickets: normalTickes.value,
    //             businessClassTickets: businessTickets.value,
    //             normalClassPrice: parseInt(normalPrice.value),
    //             businessClassPrice: parseInt(businessPrice.value)
    //         })
    //     }).then(respone =>{
    //         if(respone["status"] == 200){
    //             alert("all good. successfully edited a flight.")
    //         }
    //         else{
    //             alert("something went wrong. last 2 fields should not have any symbols that aren't numbers.")
    //         }
    //     })
    // }
    // else{
    //     if(failedAttempts < 5)
    //     {
    //         alert("FILL ALL FIELDS! Please.");
    //         failedAttempts++;
    //     }
    //     else{
    //         alert("you're a lost cause... I'm dissapointed. no more job for you.")
    //     }
    // }
})

deleteButton.addEventListener("click", ()=>{
    modalBackground.style.opacity = "0.7";
    modalBackground.style.pointerEvents = "auto";
    loginForm.style.display = "flex"
    option = "delete"



    // let id = document.getElementById("d-ID");
    // if(id.value != ""){
    //     fetch("https://localhost:7155/api/Flight", {
    //         method: "DELETE",
    //         //headers: {"Content-Type": "application/json"},
    //         body: id.value
    //         })
    //     .then(respone=>{
    //     if(respone["status"] == 200){
    //         alert("all good. successfully deleted a flight");
    //     }
    //     else{
    //         alert("something went wrong.");
    //         console.log(respone);
    //     }
    // })}
})


loginBtn.addEventListener("click", () =>{
    //let id = document.getElementById("iid");
    let username = document.getElementById("iuname");
    let password = document.getElementById("ipass");
    console.log("it has been clicked");
    if(username.value != "" && password != "")
    {
        fetch("https://localhost:7155/api/User", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                //id: id.value,
                username: username.value,
                password: password.value
            })
        }).then(respone=>{
            console.log("heres the status before if: " + respone)
                if(respone["status"] == 200)
                {
                    //remove the login prompts
                    modalBackground.style.opacity = "0";
                    modalBackground.style.pointerEvents = "none";
                    loginForm.style.display = "none"

                    //Add edit or delete
                    console.log("in the if status 200")
                    if(option == "add")
                    {
                        AddFlight();
                    }
                    else if(option == "edit")
                    {
                        EditFlight();
                    }
                    else if(option == "delete")
                    {
                        DeleteFlight();
                    }
                    else
                    {
                        alert("What is you doing? Have you ever done a sober stream brother?");
                    }
                }
                else
                {
                    alert(respone["status"] + " no no no no wrong credentials, hacker.");
                }
            })
    }
    else
    {
        alert("fill in the filed yo.")
    }
})

modalBackground.addEventListener("click", ()=>{
    modalBackground.style.opacity = "0";
    modalBackground.style.pointerEvents = "none";
    loginForm.style.display = "none"
})




function AddFlight(){
    let from = document.getElementById("a-from");
    let to = document.getElementById("a-to");
    let takeOffTime = document.getElementById("a-take-off-time");
    let arrivalTime = document.getElementById("a-arrive-time");
    let planeType = document.getElementById("a-plane-type");
    let normalTickes = document.getElementById("a-normal-tickets");
    let businessTickets = document.getElementById("a-business-tickets");
    let normalPrice = document.getElementById("a-normal-price");
    let businessPrice = document.getElementById("a-business-price");
    if(from.value != "" && to.value != "" && takeOffTime.value != "" && arrivalTime.value != "" && planeType.value != "" && normalTickes.value != "" && businessTickets.value != "" && normalPrice.value != "" && businessPrice.value != ""){
        fetch("https://localhost:7155/api/Flight", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                //id: "0",
                from: from.value,
                to: to.value,
                takeOffTime: takeOffTime.value,
                arrivalTime: arrivalTime.value,
                planeType: planeType.value,
                normalClassTickets: normalTickes.value,
                businessClassTickets: businessTickets.value,
                normalClassPrice: parseInt(normalPrice.value),
                businessClassPrice: parseInt(businessPrice.value)
            })
        }).then(respone =>{
            if(respone["status"] == 200){
                alert("all good. successfully made a flight.")
            }
            else{
                alert("something went wrong. last 2 fields should not have any symbols that aren't numbers.")
            }
        })
    }
    else{
        if(failedAttempts < 5)
        {
            alert("FILL ALL FIELDS! Please.");
            failedAttempts++;
        }
        else{
            alert("you're a lost cause... I'm dissapointed. no more job for you.")
        }
    }
}



function EditFlight(){
    let id = document.getElementById("e-ID");
    let from = document.getElementById("e-from");
    let to = document.getElementById("e-to");
    let takeOffTime = document.getElementById("e-take-off-time");
    let arrivalTime = document.getElementById("e-arrive-time");
    let planeType = document.getElementById("e-plane-type");
    let normalTickes = document.getElementById("e-normal-tickets");
    let businessTickets = document.getElementById("e-business-tickets");
    let normalPrice = document.getElementById("e-normal-price");
    let businessPrice = document.getElementById("e-business-price");
    if(id.value != "" && from.value != "" && to.value != "" && takeOffTime.value != "" && arrivalTime.value != "" && planeType.value != "" && normalTickes.value != "" && businessTickets.value != "" && normalPrice.value != "" && businessPrice.value != ""){
        fetch("https://localhost:7155/api/Flight", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: parseInt(id.value),
                from: from.value,
                to: to.value,
                takeOffTime: takeOffTime.value,
                arrivalTime: arrivalTime.value,
                planeType: planeType.value,
                normalClassTickets: normalTickes.value,
                businessClassTickets: businessTickets.value,
                normalClassPrice: parseInt(normalPrice.value),
                businessClassPrice: parseInt(businessPrice.value)
            })
        }).then(respone =>{
            if(respone["status"] == 200){
                alert("all good. successfully edited a flight.")
            }
            else{
                alert("something went wrong. last 2 fields should not have any symbols that aren't numbers.")
            }
        })
    }
    else{
        if(failedAttempts < 5)
        {
            alert("FILL ALL FIELDS! Please.");
            failedAttempts++;
        }
        else{
            alert("you're a lost cause... I'm dissapointed. no more job for you.")
        }
    }
}


function DeleteFlight(){
    let id = document.getElementById("d-ID");
    if(id.value != ""){
        fetch("https://localhost:7155/api/Flight?id=" + id.value, {
            method: "DELETE",
            //headers: {"Content-Type": "application/json"},
            })
        .then(respone=>{
        if(respone["status"] == 200){
            alert("all good. successfully deleted a flight");
        }
        else{
            alert("something went wrong.");
            console.log(respone);
        }
    })}
}