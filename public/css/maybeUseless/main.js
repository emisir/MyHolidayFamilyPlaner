var settings = {
    "url": "http://localhost:8090/holiday/",

    "method": "GET",
    "headers": {
        "Content-Type": "application/json"
    },
};

var user;


/* $(document).ready(function() {
    $.ajax(settings).done(function(response) {
        console.log(response);
        let data = response;

        console.log(data);
        $.each(data, function(i, order) {
            $(".article-container").append(`
                <article class="article-card">
                <figure class="article-image">
                    <img src="./maybeUseless/images/Urlaub.png" alt="Reiseziel Bild" />
                </figure>
                <div class="article-content">
                    <a href="#" class="card-category">Reiseziel</a>
                    <h3 class="card-title">
                        ${data[i].title}
                    </h3>
                    <div>${data[i].time}</div>
                </div>
                <div class = "cardFooter">
                    <input type="range" min="1" max="10" value="1" class="slider" id="myRange${i}" />
                    <p class="prio">Priorität: <span id="demo${i}">${data[i].prio}</span></p>
                    <button class ="saveBtn" id="saveSpot${i}">Speichern</button>
                </div>
              
                </article>`);



            $("#myRange" + i).change(function(e) {

                $("#demo" + i).text(e.target.value);

                console.log(e.target.value);
            });

            $("#saveSpot" + i).click(function(e) {


                let inputSave = {
                    'input': $("#myRange" + i).val(),

                };

                $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: "http://localhost:8090/prio", // url where we want to POST
                    data: JSON.stringify(inputSave),
                    success: function(data, textStatus, jQxhr) {},
                    error: function(jqXhr, textStatus, errorThrown) {
                        console.log(errorThrown);
                    }
                });

            });




        });
    });
}); */


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("famBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
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
        success: function(data) {
            console.log(data)

            data.forEach(function(familymember) {
                createDropOption(familymember.id, familymember.name)
            })

        },

    })

}

function myFunction(id, description, location, holiday_title, time, prio) {

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

    const cartFooter = document.createElement("div");
    cartFooter.classList.add("cardFooter");
    const cartFooterInput = document.createElement("input");
    cartFooterInput.classList.add("slider");
    cartFooterInput.id = "range-" + id;
    cartFooterInput.type = "range"
    cartFooterInput.min = 0
    cartFooterInput.max = 10
    cartFooterInput.defaultValue = prio || 0
    cartFooter.appendChild(cartFooterInput)
    const cartFooterP = document.createElement("p");
    cartFooterP.classList.add("prio");
    cartFooterP.id = "prio-" + id;
    cartFooterP.innerText = prio || 0;
    cartFooterInput.onchange = (e) => cartFooterP.innerText = e.target.value;
    cartFooter.appendChild(cartFooterP)
    const cartFooterButton = document.createElement("button");
    cartFooterButton.innerText = "Speichern"
    cartFooterButton.classList.add("saveBtn");
    cartFooterButton.id = "save-prio-" + id;
    cartFooterButton.onclick = (e) => savePrio(id, cartFooterInput.value)
    cartFooter.appendChild(cartFooterButton)





    div1.appendChild(div2);
    div2.appendChild(div3);
    div1.appendChild(div4);
    div4.appendChild(div5);
    div4.appendChild(div6);
    div4.appendChild(divLocation);
    div4.appendChild(divDescription);
    div1.appendChild(cartFooter);






    const text = document.createTextNode("");


    div5.textContent = holiday_title;
    div6.textContent = time;
    divLocation.textContent = location;
    divDescription.textContent = description;
    div3.src = "./images/Urlaub.jpg "

    console.log(div3.src);

    document.getElementById("acontainer").appendChild(div1);

};

function loadHolidayWishes() {
    $(".div1").remove()
    $.ajax({
        url: 'http://localhost:8090/holiday',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data)

            $.ajax({
                url: 'http://localhost:8090/prio',
                type: 'GET',
                dataType: 'json',
                success: function(data2) {
                    console.log(data2)

                    data.forEach(function(holiday) {
                        holiday.wishes.forEach(w => {
                            var prio;
                            var prioIndex = data2.findIndex((pr => pr.holidayWish.id === w.id && pr.familyMember.id === user.id));
                            if (prioIndex >= 0) {
                                prio = data2[prioIndex].priority
                            }
                            myFunction(w.id, w.description, w.location, holiday.title, holiday.time, prio)
                        })
                    })

                },
                error: function(request, error) {
                    alert("Request: " + JSON.stringify(request));
                }
            })



        },
        error: function(request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    })
}

function savePrio(wishId, prio) {
    $.ajax({
        url: 'http://localhost:8090/prio',
        type: 'POST',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            "familyMember": {
                "id": user.id
            },
            "holidayWish": {
                "id": parseInt(wishId)
            },
            "priority": parseInt(prio)
        }),
        success: function(data) {
            alert("Gespeichert!")
        },
        error: function(request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    })
}

function getFamilyMember(id) {
    $(".div1").remove()
    $.ajax({
        url: 'http://localhost:8090/familymember/' + id,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data)
            user = data;
            modal.style.display = "none";
        },
        error: function(request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    })
}

$(document).ready(function() {
    $("#submitBtn").on("click", async(e) => {
        const famMemId = $("#chooseDrop").val();
        await getFamilyMember(famMemId);
        loadHolidayWishes()
    })
})




loadFamilyMember()