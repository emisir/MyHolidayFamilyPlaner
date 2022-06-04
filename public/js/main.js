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
                        <div class="card-excerpt flex">
                            <div>${data[i].description}</div>
                            
                            <input
                                type="range"
                                min="1"
                                max="10"
                                value="1"
                                class="slider"
                                id="slider-${i}"
                            />
                            <p class="prio">Priorität: <span id="demo"></span></p>
                        </div>
                    </div>
                </article>`);

            $("#slider-" + i).change((value) => {
                console.log(value.target.value);
            });
        });
    });
});


