function dialogOeffnen(dialogId) {
    document.getElementById(dialogId).classList.add("sichtbar");
    document.getElementById("body-overlay").classList.add("sichtbar");
}


function dialogSchliessen(dialogId) {
    document.getElementById(dialogId).classList.remove("sichtbar")
    document.getElementById("body-overlay").classList.remove("sichtbar");

}

const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;

        document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
        console.log(uploaded_image);
    });
    reader.readAsDataURL(this.files[0]);
})