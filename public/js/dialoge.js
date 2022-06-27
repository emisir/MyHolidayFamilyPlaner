// function for open the Dialog Window to add Holiday, Holiday Wish and Familymember
function dialogOeffnen(dialogId) {
    document.getElementById(dialogId).classList.add("sichtbar");
    document.getElementById("body-overlay").classList.add("sichtbar");
}

// function for closeing the Dialog Window to add Holiday, Holiday Wish and Familymember
function dialogSchliessen(dialogId) {
    document.getElementById(dialogId).classList.remove("sichtbar")
    document.getElementById("body-overlay").classList.remove("sichtbar");

}