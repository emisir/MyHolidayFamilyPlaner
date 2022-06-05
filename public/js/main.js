var settings = {
    "url": "https://397176c9-192a-4b09-8f9c-c4b79a3d8a30.mock.pstmn.io//holiday-wishes",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json"
    },
};


$(document).ready(function () {
    $.ajax(settings).done(function (response) {
        console.log(response);
        let data = JSON.parse(response);

        console.log(data);
        $.each(data, function (i, order) {
            $(".article-container").append(`
                <article class="article-card">
                <figure class="article-image">
                    <img src="${data[i].image}" alt="Reiseziel Bild" />
                </figure>
                <div class="article-content">
                    <a href="#" class="card-category">Reiseziel</a>
                    <h3 class="card-title">
                        ${data[i].city}
                    </h3>
                    <div>${data[i].description}</div>
                </div>
                <div class = "cardFooter">
                    <input type="range" min="1" max="10" value="1" class="slider" id="myRange${i}" />
                    <p class="prio">Priorität: <span id="demo${i}">${data[i].prio}</span></p>
                    <button class ="saveBtn" id="saveSpot${i}">Speichern</button>
                </div>
                </article>`);



            $("#myRange" + i).change(function (e) {

                $("#demo" + i).text(e.target.value);

                console.log(e.target.value);
            });

            $("#saveSpot" + i).click(function (e) {


                let inputSave = {
                    'input': $("#myRange" + i).val(),

                };

                $.ajax({
                    type: 'POST', // define the type of HTTP verb we want to use(POST for our form)
                    contentType: 'application/json',
                    url: "https://397176c9-192a-4b09-8f9c-c4b79a3d8a30.mock.pstmn.io/priority", // url where we want to POST
                    data: JSON.stringify(inputSave), // data we want to POST
                    success: function (data, textStatus, jQxhr) {
                    },
                    error: function (jqXhr, textStatus, errorThrown) {
                        console.log(errorThrown);
                    }
                });

            });




        });
    });
});

$(document).ready(function () {


});



