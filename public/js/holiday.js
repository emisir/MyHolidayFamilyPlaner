// Function to create the Article card with DOM createElement
function createArticleCard(id, title, time) {


    const articleCard = document.createElement("article");
    articleCard.classList.add("article-card");
    articleCard.classList.add("articleCard");

    // id to safe the data to the Backend
    articleCard.id = "holiday-" + id;

    const articleImage = document.createElement("figure");
    articleImage.classList.add("article-image");

    const imgCreator = document.createElement("img");

    const articleContent = document.createElement("div");
    articleContent.classList.add("article-content");

    const headTopicTwo = document.createElement("h2");
    headTopicTwo.id = ("holidayPlan")

    const cardCategoryContent = document.createElement("a");
    cardCategoryContent.classList.add("card-category");

    // create deleteBtn
    let btnDelete = document.createElement("button");

    // shows what the button says
    btnDelete.innerHTML = "Löschen";
    btnDelete.class = "deleteAndEditBtn";

    // addEventlistener from dialog.js function deleteHoliday to make the button Work
    btnDelete.addEventListener('click', event => {
        deleteHoliday(id)
    })

    // create editBtn
    let btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Bearbeiten";
    btnEdit.class = "deleteAndEditBtn";

    // addEventlistener from dialog.js function editHoliday to make the button Work
    btnEdit.addEventListener('click', event => {
        loadIndividualHoliday(id, title, time)
    })

    // The appendChild() method allows you to add a node to the end of the list of child nodes of a specified parent node
    articleCard.appendChild(articleImage);
    articleImage.appendChild(imgCreator);
    articleCard.appendChild(articleContent);
    articleContent.appendChild(headTopicTwo);
    articleContent.appendChild(cardCategoryContent);
    articleContent.appendChild(btnDelete);
    articleContent.appendChild(btnEdit);

    // textcontent to assign the desired values to the created elements 
    headTopicTwo.textContent = title;
    cardCategoryContent.textContent = time;
    imgCreator.src = "./images/Urlaub.jpg "

    // shows in the console which image source it loads
    console.log(imgCreator.src);

    document.getElementById("acontainer").appendChild(articleCard);


};


// function for Posting the input by creating the Holiday to the backend
function createHoliday(e) {

    //$ for useing jquery but same as document.getElmentById = ("#createholiday") from holiday.html
    var form = $("#createHoliday")

    //gets the id from holiday.html and the input in the addWindow
    var title = form.find("#titleTag").val();

    // gets the selected option in the dropDown menu
    var time = $("#timeTag :selected").text();
    console.log(time)

    // ajax request to Post the created Holiday from the addWindow to the Backend which allows us to safe the data and not lose it by reloading
    $.ajax({

        url: 'http://localhost:8090/holiday',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            "title": title,
            "time": time
        }),

        // remove the modalWindow/addWindow and function to load the created Holiday
        success: function (data) {
            document.getElementById("addWindow-dialog").classList.remove("sichtbar")
            document.getElementById("body-overlay").classList.remove("sichtbar");
            loadHoliday()
        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    });
}

// GET the Posted data from createHoliday
function loadHoliday() {
    $(".articleCard").remove()
    $.ajax({
        url: 'http://localhost:8090/holiday',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)

            // forEach loop which gets the input and create the Holiday with createArticleCard
            data.forEach(function (holiday) {
                createArticleCard(holiday.id, holiday.title, holiday.time)
            })

        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    })


}

loadHoliday()

// DELETE to remove the Posted data from Backend
function deleteHoliday(id) {

    $.ajax({

        url: 'http://localhost:8090/holiday/' + id,
        type: 'DELETE',
        success: function (data) {
            $("#holiday-" + id).remove()
        },

    });
}

// function for editBtn
function loadIndividualHoliday(id, title, time) {

    // open editWindow
    dialogOeffnen('editWindow-dialog')

    // get the value of the input and selection in editWindow
    $(".editWindow-dialog-daten #titleTag").val(title);
    $("#timeTag :selected").text(time);
    $("#editHoliday").submit(function () {
        editHoliday(id)
    })

}

// PUT request for update the edited Holiday
function editHoliday(id) {

    var titleDialog = $(".editWindow-dialog-daten #titleTag").val();
    var timeDialog = $(".editWindow-dialog-daten #timeTag :selected").text();

    $.ajax({
        url: 'http://localhost:8090/holiday/' + id,
        type: 'PUT',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            "id": id,
            "title": titleDialog,
            "time": timeDialog
        }),
        // loadHoliday for loading the new edited Holiday
        success: function (data) {
            dialogSchliessen('editWindow-dialog')
            loadHoliday()

        },
        error: function (data) {

            console.log(data)
        },
    });
}
