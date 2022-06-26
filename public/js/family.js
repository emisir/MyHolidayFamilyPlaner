function myFunction(id, name, bday) {


    const div1 = document.createElement("article");
    div1.classList.add("article-card");
    div1.classList.add("div1");
    div1.id = "familymember-" + id;

    const div2 = document.createElement("figure");
    div2.classList.add("article-image");

    const div3 = document.createElement("img");

    const div4 = document.createElement("div");
    div4.classList.add("article-content");

    const div5 = document.createElement("h2");
    div5.id = ("holidayPlan")

    const div6 = document.createElement("a");
    div6.classList.add("card-category");

    let btnDelete = document.createElement("button");
    btnDelete.innerHTML = "Löschen";
    btnDelete.class = "deleteAndEditBtn";
    btnDelete.addEventListener('click', event => {
        deleteFamilyMember(id)
    })

    let btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Bearbeiten";
    btnEdit.class = "deleteAndEditBtn";

    btnEdit.addEventListener('click', event => {
        loadIndividualFamilyMember(id, name, bday)
    })

    div1.appendChild(div2);
    div2.appendChild(div3);
    div1.appendChild(div4);
    div4.appendChild(div5);
    div4.appendChild(div6);
    div4.appendChild(btnDelete);
    div4.appendChild(btnEdit);


    const text = document.createTextNode("");

    div5.textContent = name;
    div6.textContent = bday;
    div3.src = "./images/homebutton.png "

    console.log(div3.src);

    document.getElementById("acontainer").appendChild(div1);

};

function dialogOeffnen(dialogId) {
    document.getElementById(dialogId).classList.add("sichtbar");
    document.getElementById("body-overlay").classList.add("sichtbar");
}

function dialogSchliessen(dialogId) {
    document.getElementById(dialogId).classList.remove("sichtbar")
    document.getElementById("body-overlay").classList.remove("sichtbar");

}


function createFamilyMember(e) {
    var form = $("#createFamily")
    var name = form.find("#nameTag").val();
    var bday = formatDate(form.find("#bdayTag").val());
    console.log(bday)

    $.ajax({

        url: 'http://localhost:8090/familymember',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            "name": name,
            "bday": bday
        }),
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

function loadFamilyMember() {
    $(".div1").remove()
    $.ajax({
        url: 'http://localhost:8090/familymember',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data)

            data.forEach(function (familymember) {
                myFunction(familymember.id, familymember.name, familymember.bday)
            })

        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    })
}

function deleteFamilyMember(id) {

    $.ajax({

        url: 'http://localhost:8090/familymember/' + id,
        type: 'DELETE',
        success: function (data) {
            $("#familymember-" + id).remove()
        },

    });
}

function loadIndividualFamilyMember(id, name, bday) {
    dialogOeffnen('editWindow-dialog')
    $(".editWindow-dialog-daten #nameTag").val(name);
    $(".editWindow-dialog-daten #bdayTag").val(bday);
    $("#editFamily").submit(function () {
        editFamilyMember(id)
    })

}

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