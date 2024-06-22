function favDog() {
    myDogHeader.innerHTML = "It's Daisy!";
    myDogParagraph.innerHTML = "Daisy the Amazing Doggie!!";
    
    // Took me forever to figure out but this displays the hidden img
    daisyImage.style.display = "block";

}
myDogButton.onclick = favDog;