const mainDiv = document.querySelector('main');
const sectionDiv = document.querySelector('section');
const submitBtn = document.querySelector('.sub-mit-btn');
const ratingButtons = document.querySelectorAll('.num-button-div button');
const ratingDisplay = document.getElementById('selected-rating');
let selectedRating = null;

console.log(ratingButtons, ratingDisplay);


ratingButtons.forEach(button => {
  button.addEventListener('click', () => {

    ratingButtons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');
    selectedRating = button.getAttribute('data-value');
  });
});


submitBtn.addEventListener('click', () => {
  if (selectedRating) {
    ratingDisplay.textContent = `${selectedRating}`;
    mainDiv.style.display = 'block';
    sectionDiv.style.display = 'none';
  } else {
    alert("Please select a rating before submitting.");
  }
});




const goBackBtn = document.querySelector('.go-back-btn');

goBackBtn.addEventListener('click', () => {
  mainDiv.style.display = 'none';
  sectionDiv.style.display = 'block';
});
