



let rateButtons = document.querySelectorAll('.rating-btn');    

//for making a EventListener for each button
for (btn of rateButtons) {
    btn.addEventListener('click', function() {
        console.log(this);
        
        let preSelected = document.querySelector(".selected");
        console.log(preSelected);
        if (preSelected) {
            preSelected.classList.remove("selected");
        }
        this.classList.add("selected");
    });
}


let submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', function() {
    let rating = document.querySelector('.selected').innerText;
    let ratingSpan = document.querySelector('#rating');
    ratingSpan.innerText = rating;

    let ratingCard = document.querySelector('#rating-card');
    ratingCard.style.display = "none";
    let thankYou = document.querySelector('#thank-you-state');
    thankYou.style.display = "block";
});