fetch("https://localhost:7155/api/Temps").then(respone =>{
    return respone.json();
}).then(respone =>{
    console.log(respone["id"]);
    document.getElementById("fid").value = respone["id"];
});


const availableTicketOptions = document.getElementById("ticket-class");
const chosenTicketClass = document.getElementById("remaining-ticket-classes");
const normalClassTicket = document.getElementById("normal");
const businessClassTicket = document.getElementById("business");
const flightId = document.getElementById("fid");
var flightWithThisId;

availableTicketOptions.addEventListener("click", () =>{
    if(normalClassTicket.style.display == "block" || businessClassTicket.style.display == "block")
    {
        normalClassTicket.style.display = "none";
        businessClassTicket.style.display = "none";
        return;
    }
    if(flightId.value == "")
    {
        alert("Flight ID has to be filled in.");
        return;
    }
    fetch("https://localhost:7155/api/Flight", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                Id: parseInt(flightId.value),
                from: "",
                to: "",
                takeOffTime: "",
                arrivalTime: "",
                planeType: "",
                normalClassTickets: "",
                businessClassTickets: "",
                normalClassPrice: parseInt("0"),
                businessClassPrice: parseInt("0")
            })
        }).then(response=>{
            if(response["status"] == 200)
            return response.json();
            else
            {
                alert("Something went wrong. Perhaps you got the wrong ID?")
            }
        }).then(response=>{
            console.log(response);
            console.log(flightId.value);
            if(parseInt(response["normalClassTickets"]) > 0)
            {
                normalClassTicket.style.display = "block";
            }
            if(parseInt(response["businessClassTickets"]) > 0)
            {
                businessClassTicket.style.display = "block";
            }
            flightWithThisId = response;
        })
})

normalClassTicket.addEventListener("click", ()=>{
    normalClassTicket.style.display = "none";
    businessClassTicket.style.display = "none";
    chosenTicketClass.innerText = "Normal class";
    document.getElementById("price").innerText = flightWithThisId["normalClassPrice"] + "$";
})

businessClassTicket.addEventListener("click", ()=>{
    normalClassTicket.style.display = "none";
    businessClassTicket.style.display = "none";
    chosenTicketClass.innerText = "Business class";
    document.getElementById("price").innerText = flightWithThisId["businessClassPrice"] + "$";
})