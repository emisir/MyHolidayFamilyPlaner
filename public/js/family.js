function myFunction(id, name, bday) {


    const div1 = document.createElement("article");
    div1.classList.add("article-card");
    div1.classList.add("div1");

    const div2 = document.createElement("figure");
    div2.classList.add("article-image");

    const div3 = document.createElement("img");

    const div4 = document.createElement("div");
    div4.classList.add("article-content");

    const div5 = document.createElement("h2");

    const div6 = document.createElement("a");
    div6.classList.add("card-category");


    div1.appendChild(div2);
    div2.appendChild(div3);
    div1.appendChild(div4);
    div4.appendChild(div5);
    div4.appendChild(div6);




    const text = document.createTextNode("");



    div5.textContent = name;
    div6.textContent = bday;
    div3.src = "./images/homebutton.png "

    console.log(div3.src);

    document.getElementById("acontainer").appendChild(div1);

};

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
        success: function(data) {
            document.getElementById("addFamilymember-dialog").classList.remove("sichtbar")
            document.getElementById("body-overlay").classList.remove("sichtbar");
            loadFamilyMember()
        },
        error: function(request, error) {
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
        success: function(data) {
            console.log(data)

            data.forEach(function(familymember) {
                myFunction(familymember.id, familymember.name, familymember.bday)
            })

        },
        error: function(request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    })


}

loadFamilyMember()