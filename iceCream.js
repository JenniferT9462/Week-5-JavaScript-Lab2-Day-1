function secondFav() {
    myIceCreamHeader.innerHTML = "Butter Pecan";
    myIceCreamParagraph.innerHTML = "Is my second favorite!";

}
myIceCreamButton.onclick = secondFav;

function swapText() {
    let x = document.getElementById("textSwap");
    if (x.innerHTML === "Hiya Pal!") {
        x.innerHTML = "Swapped You!";
    } else {
        x.innerHTML = "Hiya Pal!";
    }
}