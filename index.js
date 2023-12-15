const options = document.querySelectorAll(".rating-circle")
const feedbackPage = document.querySelector(".feedback");
const thankYouPage = document.querySelector(".thank-you");
const myInput = document.getElementById("input");
const submitButton = document.getElementById("enter");

let clickedOption;

options.forEach(option => {
    option.addEventListener("click", (e) => {
        clickedOption = e.target;

        options.forEach(opt => {
            opt.classList.remove('active'); // None of the elements start with active class
        });

        clickedOption.classList.add('active'); // Adds active class to the clicked option
    });
});


function feeback(){
    feedbackPage.style.display = "none";
    thankYouPage.style.display = "flex";
    myInput.textContent = clickedOption.id;
    console.log(clickedOption.id);
};

submitButton.addEventListener("click", feeback);


