function myFunction(id, location, description, title, time) {

    const div1 = document.createElement("article");
    div1.classList.add("article-card");
    div1.classList.add("div1");
    div1.id = "holiday-wish-" + id;




    const div2 = document.createElement("figure");
    div2.classList.add("article-image");

    const div3 = document.createElement("img");

    const div4 = document.createElement("div");
    div4.classList.add("article-content");

    const div5 = document.createElement("h2");

    const div6 = document.createElement("a");
    div6.classList.add("card-category");

    const divLocation = document.createElement("h3");

    const divDescription = document.createElement("p");












    let btnDelete = document.createElement("button");
    btnDelete.innerHTML = "Löschen";
    btnDelete.addEventListener('click', event => {
        deleteHoliday(id)
    })

    let btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Bearbeiten";
    btnEdit.addEventListener('click', event => {
        loadIndividualHoliday(id, location, description)
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


    div5.textContent = title;
    div6.textContent = time;
    divLocation.textContent = location;
    divDescription.textContent = description;
    div3.src = "./images/Urlaub.jpg "

    console.log(div3.src);

    document.getElementById("acontainer").appendChild(div1);

};




function createHolidayWish(id) {
    var form = $("#createHolidayWish")
    var location = form.find("#locationTag").val();
    var description = form.find("#descriptionTag").val();
    console.log(description)

    $.ajax({

        url: 'http://localhost:8090/holiday/1/holiday-wish',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({

            "location": location,
            "description": description
        }),
        success: function (data) {
            document.getElementById("addWindow-dialog").classList.remove("sichtbar")
            document.getElementById("body-overlay").classList.remove("sichtbar");
            loadHolidayWish(id)
        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    });


}


function loadHolidayWish() {
    $(".div1").remove()
    $.ajax({
        url: 'http://localhost:8090/holiday/1/holiday-wish',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)

            data.forEach(function (holidayWish, holiday) {
                myFunction(holidayWish.id, holidayWish.location, holidayWish.description, holiday.id, holiday.title, holiday.time)
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

function loadHoliday() {
    $(".div1").remove()
    $.ajax({
        url: 'http://localhost:8090/holiday',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)

            data.forEach(function (holiday) {
                myFunction(holiday.id, holiday.title, holiday.time)
            })

        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    })


}



loadHoliday()






loadHolidayDrop()






