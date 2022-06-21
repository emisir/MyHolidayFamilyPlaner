

function myFunction(id, title, time) {

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


    const div7 = document.createElement("div");
    div7.classList.add("card-footer")


    var div8 = document.createElement('input');

    div8.id = "myRange";
    div8.className = "slider"
    div8.type = 'range';
    div8.min = 1;
    div8.max = 10;
    div8.value = 1;
    div4.appendChild(div8);



    var div9 = document.createElement("p");

    div9.className = "prio";
    div9.textContent = "Priorität: ";
    div4.appendChild(div9);





    var div10 = document.createElement("span");

    div10.id = "demo";
    div4.appendChild(div10);





    $("#myRange").change(function (e) {


        $("#demo").text(e.target.value);

        console.log(e.target.value);
    });


    $(function () {
        var div11 = document.createElement('button');

        div11.id = "saveSpot";
        div11.className = "saveBtn";
        div11.textContent = "Speichern";

        div4.appendChild(div11);


    });




    div1.appendChild(div2);
    div2.appendChild(div3);
    div1.appendChild(div4);
    div4.appendChild(div5);
    div4.appendChild(div6);





    const text = document.createTextNode("");



    div5.textContent = title;
    div6.textContent = time;
    div3.src = "./images/Urlaub.jpg "

    console.log(div3.src);

    document.getElementById("acontainer").appendChild(div1);

};






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