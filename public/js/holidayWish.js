function createArticleCard(holidayWishId, location, description, holidayId, holidayTitle, holidayTime, sumPrio) {
    console.log(holidayTime)
    const articleCard = document.createElement("article");
    articleCard.classList.add("article-card");
    articleCard.classList.add("articleCard");

    // id to safe the data to the Backend
    articleCard.id = "holiday-wish-" + holidayWishId;

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

    // create deleteBtn
    let btnDelete = document.createElement("button");

    // shows what the button says
    btnDelete.innerHTML = "Löschen";

    // addEventlistener from dialog.js function deleteHolidayWish to make the button Work
    btnDelete.addEventListener('click', event => {
        deleteHolidayWish(holidayWishId)
    })

    // create editBtn
    let btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Bearbeiten";

    // addEventlistener from dialog.js function editHolidayWish to make the button Work
    btnEdit.addEventListener('click', event => {
        loadIndividualHolidayWish(holidayId, holidayWishId, location, description)
    })

    // The appendChild() method allows you to add a node to the end of the list of child nodes of a specified parent node
    articleCard.appendChild(articleImage);
    articleImage.appendChild(imgCreator);
    articleCard.appendChild(articleContent);
    articleContent.appendChild(headTopicTwo);
    articleContent.appendChild(cardCategoryContent);

    articleContent.appendChild(divLocation);
    articleContent.appendChild(divDescription);

    articleContent.appendChild(btnDelete);
    articleContent.appendChild(btnEdit);

    // textcontent to assign the desired values to the created elements 
    headTopicTwo.textContent = holidayTitle;
    cardCategoryContent.textContent = holidayTime;
    divLocation.textContent = location;
    divDescription.textContent = description;
    imgCreator.src = "./images/Urlaub.jpg "

    // shows in the console which image source it loads
    console.log(imgCreator.src);


    document.getElementById("acontainer").appendChild(articleCard);

};


// function for Posting the input by creating the HolidayWish to the backend
function createHolidayWish() {

    //$ for useing jquery but same as document.getElmentById = ("#createholidayWish") from holidayWish.html
    var form = $("#createHolidayWish")

    //gets the id from holidayWish.html and the input in the addWindow
    var location = form.find("#locationTag").val();
    var holidayId = form.find("#chooseDrop").val();
    var description = form.find("#descriptionTag").val();

    console.log(description)

    // ajax request to Post the created HolidayWish from the addWindow to the Backend which allows us to safe the data and not lose it by reloading
    $.ajax({

        url: 'http://localhost:8090/holiday/' + holidayId + '/holiday-wish',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            "location": location,
            "description": description
        }),

        // remove the modalWindow/addWindow and function to load the created HolidayWish
        success: function (data) {
            document.getElementById("addWindow-dialog").classList.remove("sichtbar")
            document.getElementById("body-overlay").classList.remove("sichtbar");

        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    });

}

// GET the Posted data from createHoliday
function loadHolidayWish() {
    $(".div1").remove()
    $.ajax({
        url: 'http://localhost:8090/holiday/',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)

            // forEach loop which gets the input and create the HolidayWish with createArticleCard
            // holiday included because of the Relationship between Holiday and HolidayWish
            data.forEach(function (holidayWish, holiday) {
                createArticleCard(holidayWish.id, holidayWish.location, holidayWish.description, holiday.id, holiday.title, holiday.time, holiday.sumPrio)
            })

        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    })

}


// to get the title from the created Holiday in a DropDownOption
function loadHolidayDrop() {
    $.ajax({
        url: 'http://localhost:8090/holiday',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)
            data.forEach(function (holiday) {

                // create the DropDownOption with the given input
                createDropOption(holiday.id, holiday.title)
            })

        },
        error: function () {
            alert("Holiday daten konnten nicht geladen werden");

        }

    })

}

// Function for creating a DropOption
function createDropOption(id, title) {
    const option = document.createElement("option");
    option.id = "dropHoliday"
    option.value = id
    option.innerHTML = title
    $('#chooseDrop').append(option);
}


// GET the Posted data from createHoliday
function loadHolidayWishes() {
    $(".div1").remove()
    $.ajax({
        url: 'http://localhost:8090/holiday',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)

            // double forEach loop which gets the input from wishes and create the HolidayWish and Holiday with createArticleCard
            data.forEach(function (holiday) {
                holiday.wishes.forEach(w => {
                    createArticleCard(w.id, w.location, w.description, holiday.id, holiday.title, holiday.time, w.sumPriority)
                })
            })
        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    })

}

// DELETE to remove the Posted data from Backend
function deleteHolidayWish(id) {

    $.ajax({


        url: 'http://localhost:8090/holiday-wish/' + id,
        type: 'DELETE',
        success: function (data) {
            $("#holiday-wish-" + id).remove()
        },

    });
}

// function for editBtn
function loadIndividualHolidayWish(holidayId, holidayWishId, location, description) {

    // open editWindow
    dialogOeffnen('editWindow-dialog')

    // get the value of the input and selection in editWindow
    $(".editWindow-dialog-daten #locationTag").val(location);
    $(".editWindow-dialog-daten #descriptionTag").val(description);
    $("#editHolidayWish").submit(function () {
        editHolidayWish(holidayId, holidayWishId)
    })

}

// PUT request for update the edited Holiday
function editHolidayWish(holidayId, holidayWishId) {

    var locationDialog = $(".editWindow-dialog-daten #locationTag").val();
    var descriptionDialog = $(".editWindow-dialog-daten #descriptionTag").val();
    $.ajax({
        // url were we want to update the HolidayWish included Holidayid because the Relationship 
        url: 'http://localhost:8090/holiday/' + holidayId + '/holiday-wish/' + holidayWishId,
        type: 'PUT',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            "id": holidayWishId,
            "location": locationDialog,
            "description": descriptionDialog
        }),

        // loadHolidayWish for loading the new edited HolidayWish
        success: function (data) {
            dialogSchliessen('editWindow-dialog')
            loadHolidayWish()

        },
        error: function (data) {
            console.log(data)
        },
    });
}

loadHolidayWishes()
loadHolidayDrop()