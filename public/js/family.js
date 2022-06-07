function myFunction() {


    const div1 = document.createElement("article");
    div1.classList.add("article-card");

    const div2 = document.createElement("figure");
    div2.classList.add("article-image");

    const div3 = document.createElement("img");

    const div4 = document.createElement("div");
    div4.classList.add("article-content");

    const div5 = document.createElement("h2");

    const div6 = document.createElement("a");
    div6.classList.add("card-category");

    const div7 = document.createElement("p");
    div7.classList.add("card-excerpt");

    div1.appendChild(div2);
    div2.appendChild(div3);
    div1.appendChild(div4);
    div4.appendChild(div5);
    div4.appendChild(div6);
    div4.appendChild(div7);



    const text = document.createTextNode("");

    let collection = document.getElementById("nameTag").value;
    console.log(collection);

    let collection1 = document.getElementById("rolleTag").value;
    console.log(collection1);

    let collection2 = document.getElementById("beschreibungTag").value;
    console.log(collection2);




    div5.textContent = collection;
    div6.textContent = collection1;
    div7.textContent = collection2;


    console.log(div3.src);

    const reader = new FileReader();
    reader.onload = () => {
        div3.src = reader.result
    }

    reader.readAsDataURL(document.getElementById("image-input").files[0])




    document.getElementById("acontainer").appendChild(div1);

};