// Function to create the Article card with DOM createElement
function createArticleCard(id, name, bday) {


    const articleCard = document.createElement("article");
    articleCard.classList.add("article-card");
    articleCard.classList.add("articleCard");

    // id to safe the data to the Backend
    articleCard.id = "familymember-" + id;

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

    // addEventlistener from dialog function deleteFamilyMember to make the button Work
    btnDelete.addEventListener('click', event => {
        deleteFamilyMember(id)
    })

    // create editBtn
    let btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Bearbeiten";
    btnEdit.class = "deleteAndEditBtn";

    // addEventlistener from dialog function editFamilyMember to make the button Work
    btnEdit.addEventListener('click', event => {
        loadIndividualFamilyMember(id, name, bday)
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
    headTopicTwo.textContent = name;
    cardCategoryContent.textContent = bday;
    imgCreator.src = "./images/homebutton.png "

    // shows in the console which image source it loads
    console.log(imgCreator.src);

    document.getElementById("acontainer").appendChild(articleCard);


};

// function for Posting the input by creating the Familymember to the backend
function createFamilyMember(e) {

    //$ for useing jquery but same as document.getElmentById = ("#createFamily") from family.html
    var form = $("#createFamily")

    //gets the id from family.html and the input in the addWindow
    var name = form.find("#nameTag").val();

    //formatDate function for deliver the date to json in yyyy-mm-dd format 
    var bday = formatDate(form.find("#bdayTag").val());
    console.log(bday)

    // ajax request to Post the created Familymember from the addWindow to the Backend which allows us to safe the data and not lose it by reloading
    $.ajax({

        url: 'http://localhost:8090/familymember',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            "name": name,
            "bday": bday
        }),

        // remove the modalWindow/addWindow and function to load the created Familymember
        success: function (data) {
            document.getElementById("addWindow-dialog").classList.remove("sichtbar")
            document.getElementById("body-overlay").classList.remove("sichtbar");
            loadFamilyMember()
        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    });
}

//formatDate function for deliver the date to json in yyyy-mm-dd format 
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

// GET the Posted data from createFamilymember
function loadFamilyMember() {
    $(".articleCard").remove()
    $.ajax({
        url: 'http://localhost:8090/familymember',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)

            // forEach loop which gets the input and create the Familymember with createArticleCard
            data.forEach(function (familymember) {
                createArticleCard(familymember.id, familymember.name, familymember.bday)
            })

        },
        // returns an alarm with the request 
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    })
}

// DELETE to remove the Posted data from Backend
function deleteFamilyMember(id) {

    $.ajax({

        url: 'http://localhost:8090/familymember/' + id,
        type: 'DELETE',
        success: function (data) {
            $("#familymember-" + id).remove()
        },

    });
}

// function for editBtn
function loadIndividualFamilyMember(id, name, bday) {
    // open editWindow
    dialogOeffnen('editWindow-dialog')

    // get the value of the input in editWindow
    $(".editWindow-dialog-daten #nameTag").val(name);
    $(".editWindow-dialog-daten #bdayTag").val(bday);
    $("#editFamily").submit(function () {
        editFamilyMember(id)
    })

}

// PUT request for update the edited Familymember
function editFamilyMember(id) {

    var nameDialog = $(".editWindow-dialog-daten #nameTag").val();
    var bdayDialog = $(".editWindow-dialog-daten #bdayTag").val();

    $.ajax({
        url: 'http://localhost:8090/familymember/' + id,
        type: 'PUT',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            "id": id,
            "name": nameDialog,
            "bday": bdayDialog
        }),

        // loadFamilyMemeber for loading the new edited FamilyMember
        success: function (data) {
            dialogSchliessen('editWindow-dialog')
            loadFamilyMember()

        },
        error: function (data) {

            console.log(data)
        },
    });
}




loadFamilyMember()