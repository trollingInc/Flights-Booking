// create all the cruises dynamically
const createFlights = (data) =>{
    for(i = 0; i < data.length; i++){
        let flight = document.createElement("div");
        flight.classList.add("details-container");
        flight.style.borderWidth = "2px";
        flight.innerHTML = `<div class="flex-row-container flights-separation">
        <details-id-string class="add-border-between-sections">${data[i]["id"]}</details-id-string>
        <p class="no-details-info flight-name add-border-between-sections">${data[i]["normalClassPrice"]}</p>
        <details-id-string class="add-border-between-sections" style="width: 20%;">${data[i]["businessClassPrice"]}</details-id-string>
        <button id="${"show-details" + i.toString()}" class="details-button no-details-info active-details-button">Details</button>
    </div>
    <div id="${"details" + i.toString()}" class="more-details" style="display: none;">
        <div class="flex-row-container info-separation">
            <details-id-string class="add-border-between-sections more-details-text">ID</details-id-string>
            <p class="no-details-info more-details-text" style="margin-left: 2px;">${data[i]["id"]}</p>
        </div>
        <div class="flex-row-container info-separation">
            <details-id-string class="add-border-between-sections more-details-text">From</details-id-string>
            <p class="no-details-info more-details-text" style="margin-left: 2px;">${data[i]["from"]}</p>
        </div>
        <div class="flex-row-container info-separation">
            <details-id-string class="add-border-between-sections more-details-text">To</details-id-string>
            <p class="no-details-info more-details-text" style="margin-left: 2px;">${data[i]["to"]}</p>
        </div>
        <div class="flex-row-container info-separation">
            <details-id-string class="add-border-between-sections more-details-text">Take off time</details-id-string>
            <p class="no-details-info more-details-text" style="margin-left: 2px;">${data[i]["takeOffTime"]}</p>
        </div>
        <div class="flex-row-container info-separation">
            <details-id-string class="add-border-between-sections more-details-text">Time of arrival</details-id-string>
            <p class="no-details-info more-details-text" style="margin-left: 2px;">${data[i]["arrivalTime"]}</p>
        </div>
        <div class="flex-row-container info-separation">
            <details-id-string class="add-border-between-sections more-details-text">Plane type</details-id-string>
            <p class="no-details-info more-details-text" style="margin-left: 2px;">${data[i]["planeType"]}</p>
        </div>
        <div class="flex-row-container info-separation">
            <details-id-string class="add-border-between-sections more-details-text">Normal class</details-id-string>
            <p class="no-details-info more-details-text" style="margin-left: 2px;">Remaining tickets: ${data[i]["normalClassTickets"]}</p>
        </div>
        <div class="flex-row-container info-separation">
            <details-id-string class="add-border-between-sections more-details-text">Business class</details-id-string>
            <p class="no-details-info more-details-text" style="margin-left: 2px;">Remaining tickets: ${data[i]["businessClassTickets"]}</p>
        </div>
        <p id="${"book" + i.toString()}" class="book-ticket-btn">Book flight!</p>
    </div>
        `;

        console.log("this is the data");
        console.log(data);
        
        document.getElementById("flights").appendChild(flight);
        //console.log(cruise);
        let detailBtn = document.getElementById("show-details" + i.toString());
        let detail = document.getElementById("details" + i.toString());
        console.log(document.getElementById("details" + i.toString()));
        //need to add book eventlistener!
        let tempID = data[i]["id"]
        document.getElementById("book" + i.toString()).addEventListener("click", ()=>{
            fetch("https://localhost:7155/api/Temps", {
                method : "POST",
                headers: {"Content-Type": "application/json"},
                 body: JSON.stringify({ id: "" + tempID})})
            .then(response => {
                console.log("this is temp id (id i need)");
                console.log(tempID);
                return response.json();
            }).then(response =>{
                console.log("this is the respone");
                console.log(response);
            })
            location.href = "BookView.html";
        })
        detailBtn.addEventListener("click", () => {
            showMoreDetails(detail);
        });
    };
};



// http GET all request function
const httpGetRequest = (url) => {
    fetch(url).then(response => {
        return response.json();
    }).then(responseData =>{
        createFlights(responseData);
    })
};



var lastDetailsButton = "";

//hide modal windows with more details
function hideMoreDetails(details){
    //var details = document.getElementById(element);
    if(details.style.display == "block"){
        details.style.display = "none";
        //document.getElementById("modal-background").style.display = "none";
        modalBackground.style.opacity = "0";
        modalBackground.style.pointerEvents = "none";
        //modalBackground.style.userSelect = "none";
    }
}

//show modal windows with more details
function showMoreDetails(details){
    //var details = document.getElementById(element)
    if(details.style.display == "none"){
        details.style.display = "block";
        //document.getElementById("modal-background").style.display = "block";
        modalBackground.style.opacity = "0.7";
        modalBackground.style.pointerEvents = "auto";
        //lastDetailsButton = element;
        modalBackground.addEventListener("click", () => {
            hideMoreDetails(details)});
    }
}


httpGetRequest("https://localhost:7155/api/Flight");


var flightWindows = document.querySelectorAll(".details-container");
const modalBackground = document.getElementById("modal-background");