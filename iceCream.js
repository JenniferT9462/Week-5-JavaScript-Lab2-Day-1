function secondFav() {
    myIceCreamHeader.innerHTML = "Butter Pecan";
    myIceCreamParagraph.innerHTML = "Is my second favorite!";

}
myIceCreamButton.onclick = secondFav;
// Wanted to figure out how to loop through with one button...or reset
function swapText() {
    let x = document.getElementById("textSwap");
    if (x.innerHTML === "Hiya Pal!") {
        x.innerHTML = "Ya Swapped!";
    } else {
        x.innerHTML = "Hiya Pal!";
    }
}