function myFunction(id, description, location, holiday_title, time, prio) {

    const articleCard = document.createElement("article");
    articleCard.classList.add("article-card");
    articleCard.classList.add("articleCard");

    // id to safe the data to the Backend
    articleCard.id = "holiday-wish-" + id;

    const articleImage = document.createElement("figure");
    articleImage.classList.add("article-image");

    const imgCreator = document.createElement("img");

    const articleContent = document.createElement("div");
    articleContent.classList.add("article-content");

    const headTopicTwo = document.createElement("h2");
    headTopicTwo.id = ("holidayPlan")

    const cardCategoryContent = document.createElement("a");
    cardCategoryContent.classList.add("card-category");

    const divLocation = document.createElement("h3");
    divLocation.id = ("locationTxt");

    const divDescription = document.createElement("p");
    divDescription.id = ("descriptionTxt");

    // create div for Article card footer
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("cardFooter");

    // create Slider to get Prio value
    const cardFooterInput = document.createElement("input");
    cardFooterInput.classList.add("slider");
    cardFooterInput.id = "range-" + id;
    cardFooterInput.type = "range"
    cardFooterInput.min = 0
    cardFooterInput.max = 10
    cardFooterInput.defaultValue = prio || 0
    cardFooter.appendChild(cardFooterInput)

    const cardFooterPrioTxt = document.createElement("p");
    cardFooterPrioTxt.innerText = "Priorität: ";
    cardFooterPrioTxt.classList.add("prio");
    cardFooter.appendChild(cardFooterPrioTxt);

    // priotxt for display the Prio value on the cardfooter
    const cardFooterP = document.createElement("p");
    cardFooterP.id = "prio-" + id;
    cardFooterP.innerText = prio || 0;
    cardFooterInput.onchange = (e) => cardFooterP.innerText = e.target.value;
    cardFooter.appendChild(cardFooterP)

    // savebtn to save the Prio value to the backend
    const cardFooterButton = document.createElement("button");
    cardFooterButton.innerText = "Speichern"
    cardFooterButton.classList.add("saveBtn");
    cardFooterButton.id = "save-prio-" + id;
    cardFooterButton.onclick = (e) => savePrio(id, cardFooterInput.value)
    cardFooter.appendChild(cardFooterButton)





    // The appendChild() method allows you to add a node to the end of the list of child nodes of a specified parent node
    articleCard.appendChild(articleImage);
    articleImage.appendChild(imgCreator);
    articleCard.appendChild(articleContent);
    articleCard.appendChild(cardFooter);

    articleContent.appendChild(headTopicTwo);
    articleContent.appendChild(cardCategoryContent);
    articleContent.appendChild(divLocation);
    articleContent.appendChild(divDescription);


    headTopicTwo.textContent = holiday_title;
    cardCategoryContent.textContent = time;
    divLocation.textContent = location;
    divDescription.textContent = description;
    imgCreator.src = "./images/Urlaub.jpg "

    console.log(imgCreator.src);

    document.getElementById("acontainer").appendChild(articleCard);

};


// variable user for login
var user;

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("famBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// createDropOption for modal window to Login the Familymember
function createDropOption(id, name) {

    const option = document.createElement("option");
    option.value = id
    option.innerHTML = name
    $('#chooseDropFam').append(option);
}

// GET the Familymember for dropOption
function loadFamilyMember() {
    $.ajax({
        url: 'http://localhost:8090/familymember',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)

            data.forEach(function (familymember) {
                createDropOption(familymember.id, familymember.name)
            })

        },

    })

}

// GET the Posted data from createHoliday
function loadHolidayWishes() {
    $(".articleCard").remove()
    $.ajax({
        url: 'http://localhost:8090/holiday',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)

            // double ajaxRequest to GET prio
            $.ajax({
                url: 'http://localhost:8090/prio',
                type: 'GET',
                dataType: 'json',
                success: function (data2) {
                    console.log(data2)

                    // forEach loop which gets the Data and create the HolidayWish with Prio and myFunction
                    data.forEach(function (holiday) {
                        holiday.wishes.forEach(w => {
                            var prio;
                            var prioIndex = data2.findIndex((pr => pr.holidayWish.id === w.id && pr.familyMember.id === user.id));
                            if (prioIndex >= 0) {
                                prio = data2[prioIndex].priority
                            }
                            myFunction(w.id, w.description, w.location, holiday.title, holiday.time, prio)
                        })
                    })

                },
                error: function (request, error) {
                    alert("Request: " + JSON.stringify(request));
                }
            })

        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    })
}

// function for saveBtn to POST the prio 
function savePrio(wishId, prio) {
    $.ajax({
        url: 'http://localhost:8090/prio',
        type: 'POST',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        // return the data as json accepts it
        data: JSON.stringify({
            "familyMember": {
                "id": user.id
            },
            "holidayWish": {
                "id": parseInt(wishId)
            },
            "priority": parseInt(prio)
        }),
        success: function (data) {
            console.log("Gespeichert!")
        },
        error: function (request, error) {
            console.log("Gespeichert!")
        }
    })
}

// to GET the DropOption Familymember
function getFamilyMember(id) {
    $(".articleCard").remove()
    $.ajax({
        url: 'http://localhost:8090/familymember/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)
            user = data;
            modal.style.display = "none";
        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    })
}

// Function to display the UI after Login
$(document).ready(function () {
    $("#submitBtn").on("click", async (e) => {
        const famMemId = $("#chooseDropFam").val();
        await getFamilyMember(famMemId);
        loadHolidayWishes()
    })
})




loadFamilyMember()