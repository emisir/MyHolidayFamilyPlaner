function myFunction(id, title, time) {

    const div1 = document.createElement("article");
    div1.classList.add("article-card");
    div1.classList.add("div1");
    div1.id = "holiday-" + id;




    const div2 = document.createElement("figure");
    div2.classList.add("article-image");

    const div3 = document.createElement("img");

    const div4 = document.createElement("div");
    div4.classList.add("article-content");

    const div5 = document.createElement("h2");

    const div6 = document.createElement("a");
    div6.classList.add("card-category");







    let btnDelete = document.createElement("button");
    btnDelete.innerHTML = "Löschen";
    btnDelete.addEventListener('click', event => {
        deleteHoliday(id)
    })

    let btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Bearbeiten";
    btnEdit.addEventListener('click', event => {
        loadIndividualHoliday(id, title, time)
    })


    div1.appendChild(div2);
    div2.appendChild(div3);
    div1.appendChild(div4);
    div4.appendChild(div5);
    div4.appendChild(div6);
    div4.appendChild(btnDelete);
    div4.appendChild(btnEdit);




    const text = document.createTextNode("");



    div5.textContent = title;
    div6.textContent = time;
    div3.src = "./images/Urlaub.jpg "

    console.log(div3.src);

    document.getElementById("acontainer").appendChild(div1);

};




function deleteHoliday(id) {

    $.ajax({

        url: 'http://localhost:8090/holiday/' + id,
        type: 'DELETE',
        success: function (data) {
            $("#holiday-" + id).remove()
        },

    });
}

function loadIndividualHoliday(id, title, time) {
    dialogOeffnen('editHoliday-dialog')
    $(".editHoliday-dialog-daten #titleTag").val(title);
    $("#timeTag :selected").text(time);
    $("#editHoliday").submit(function () {
        editHoliday(id)
    })

}

function editHoliday(id) {

    var titleDialog = $(".editHoliday-dialog-daten #titleTag").val();
    var timeDialog = $(".editHoliday-dialog-daten #timeTag :selected").text();

    $.ajax({
        url: 'http://localhost:8090/holiday/' + id,
        type: 'PUT',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            "id": id,
            "title": titleDialog,
            "time": timeDialog
        }),

        success: function (data) {
            dialogSchliessen('editHoliday-dialog')

        },
        error: function (data) {

            console.log(data)
        },
    });
}







function createHoliday(e) {
    var form = $("#createHoliday")
    var title = form.find("#titleTag").val();
    var time = $("#timeTag :selected").text();
    console.log(time)

    $.ajax({

        url: 'http://localhost:8090/holiday',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            "title": title,
            "time": time
        }),
        success: function (data) {
            document.getElementById("addFamilymember-dialog").classList.remove("sichtbar")
            document.getElementById("body-overlay").classList.remove("sichtbar");
            loadHoliday()
        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    });


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

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var addFamBtn = document.getElementById("famBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
addFamBtn.onclick = function () {
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

var submitBtnFam = document.getElementById("submitBtn");

submitBtnFam.onclick = function () {
    document.name.submit();

}




function createDropOption(id, name) {

    const option = document.createElement("option");
    option.value = id
    option.innerHTML = name
    $('#chooseDrop').append(option);
}


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






loadFamilyMember()