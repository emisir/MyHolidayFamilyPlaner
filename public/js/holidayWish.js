function myFunction(holidayWishId, location, description, holidayId, holidayTitle, holidayTime, sumPrio) {
    console.log(holidayTime)
    const div1 = document.createElement("article");
    div1.classList.add("article-card");
    div1.classList.add("div1");
    div1.id = "holiday-wish-" + holidayWishId;




    const div2 = document.createElement("figure");
    div2.classList.add("article-image");

    const div3 = document.createElement("img");

    const div4 = document.createElement("div");
    div4.classList.add("article-content");

    const div5 = document.createElement("h2");
    div5.id = ("holidayPlan");

    const div6 = document.createElement("a");
    div6.classList.add("card-category");

    const divLocation = document.createElement("h3");
    divLocation.id = ("locationTxt");

    const divDescription = document.createElement("p");
    divDescription.id = ("descriptionTxt");


    let btnDelete = document.createElement("button");
    btnDelete.innerHTML = "Löschen";
    btnDelete.addEventListener('click', event => {
        deleteHolidayWish(holidayWishId)
    })

    let btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Bearbeiten";
    btnEdit.addEventListener('click', event => {
        loadIndividualHolidayWish(holidayId, holidayWishId, location, description)
    })


    div1.appendChild(div2);
    div2.appendChild(div3);
    div1.appendChild(div4);
    div4.appendChild(div5);
    div4.appendChild(div6);

    div4.appendChild(divLocation);
    div4.appendChild(divDescription);

    div4.appendChild(btnDelete);
    div4.appendChild(btnEdit);




    const text = document.createTextNode("");


    div5.textContent = holidayTitle;
    div6.textContent = holidayTime;
    divLocation.textContent = location;
    divDescription.textContent = description;
    div3.src = "./images/Urlaub.jpg "

    console.log(div3.src);

    document.getElementById("acontainer").appendChild(div1);

};




function createHolidayWish() {
    var form = $("#createHolidayWish")
    var location = form.find("#locationTag").val();
    var holidayId = form.find("#chooseDrop").val();
    var description = form.find("#descriptionTag").val();
    console.log(description)

    $.ajax({

        url: 'http://localhost:8090/holiday/' + holidayId + '/holiday-wish',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({


            "location": location,
            "description": description
        }),
        success: function (data) {
            document.getElementById("addWindow-dialog").classList.remove("sichtbar")
            document.getElementById("body-overlay").classList.remove("sichtbar");

        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    });


}


function loadHolidayWish() {
    $(".div1").remove()
    $.ajax({
        url: 'http://localhost:8090/holiday/',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)

            data.forEach(function (holidayWish, holiday) {
                myFunction(holidayWish.id, holidayWish.location, holidayWish.description, holiday.id, holiday.title, holiday.time, holiday.sumPrio)
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



function loadHolidayDrop() {
    $.ajax({
        url: 'http://localhost:8090/holiday',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)

            data.forEach(function (holiday) {
                createDropOption(holiday.id, holiday.title)
            })

        },
        error: function () {
            alert("Holiday daten konnten nicht geladen werden");

        }

    })

}

function loadHolidayWishes() {
    $(".div1").remove()
    $.ajax({
        url: 'http://localhost:8090/holiday',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)

            data.forEach(function (holiday) {
                holiday.wishes.forEach(w => {
                    myFunction(w.id, w.location, w.description, holiday.id, holiday.title, holiday.time, w.sumPriority)
                })
            })

        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    })


}


function deleteHolidayWish(id) {

    $.ajax({


        url: 'http://localhost:8090/holiday-wish/' + id,
        type: 'DELETE',
        success: function (data) {
            $("#holiday-wish-" + id).remove()
        },

    });
}

function loadIndividualHolidayWish(holidayId, holidayWishId, location, description) {
    dialogOeffnen('editWindow-dialog')
    $(".editWindow-dialog-daten #locationTag").val(location);
    $(".editWindow-dialog-daten #descriptionTag").val(description);
    $("#editHolidayWish").submit(function () {
        editHolidayWish(holidayId, holidayWishId)
    })

}

function editHolidayWish(holidayId, holidayWishId) {

    var locationDialog = $(".editWindow-dialog-daten #locationTag").val();
    var descriptionDialog = $(".editWindow-dialog-daten #descriptionTag").val();
    $.ajax({
        url: 'http://localhost:8090/holiday/' + holidayId + '/holiday-wish/' + holidayWishId,
        type: 'PUT',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            "id": holidayWishId,
            "location": locationDialog,
            "description": descriptionDialog
        }),

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