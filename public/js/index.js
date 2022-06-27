function createArticleCard(id, description, location, holiday_title, time, sumPrio) {

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

    const divPrio = document.createElement("p");
    divPrio.id = "prioTxt";

    // The appendChild() method allows you to add a node to the end of the list of child nodes of a specified parent node
    articleCard.appendChild(articleImage);
    articleImage.appendChild(imgCreator);
    articleContent.appendChild(headTopicTwo);
    articleContent.appendChild(cardCategoryContent);
    articleCard.appendChild(articleContent);

    articleContent.appendChild(divLocation);
    articleContent.appendChild(divDescription);
    articleContent.appendChild(divPrio);


    document.getElementById("acontainer").appendChild(articleCard);

    // textcontent to assign the desired values to the created elements 
    headTopicTwo.textContent = holiday_title;
    cardCategoryContent.textContent = time;
    divLocation.textContent = location;
    divDescription.textContent = description;
    divPrio.textContent = "Priorität: " + sumPrio;

    imgCreator.src = "./images/Urlaub.jpg "

    console.log(imgCreator.src);


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
    $(".articleCard").remove()
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



function createDropOption(id, title) {

    const option = document.createElement("option");
    option.id = "dropHoliday"
    option.value = id
    option.innerHTML = title
    $('#chooseDrop').append(option);
}



// to get the title from the created Holiday in a DropDownOption
function loadHolidayDrop() {
    $.ajax({
        url: 'http://localhost:8090/holiday',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)
        },

        error: function () {
            alert("Holiday daten konnten nicht geladen werden");

        }

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

            // double forEach loop which gets the input from wishes and create the HolidayWish and Holiday with createArticleCard
            data.forEach(function (holiday) {
                holiday.wishes.forEach(w => {
                    createArticleCard(w.id, w.description, w.location, holiday.title, holiday.time, w.sumPriority)
                })
            })

        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    })


}

loadHolidayWishes()
loadHolidayDrop()