//using selectors inside the element
// Select all elements with the class "question"
const questions = document.querySelectorAll(".question");

// Iterate over each question
questions.forEach(function (question) {
  // Find the button within the current question
  const btn = question.querySelector('.question__btn');

  // Add a click event listener to the button
  btn.addEventListener("click", () => {
    // Iterate over all questions again
    questions.forEach(function (item) {
      // If the current question is not the clicked one
      if (item !== question) {
        // Hide the content of the other question
        item.classList.remove("show-text");
      }
    });

    // Toggle the visibility of the clicked question
    question.classList.toggle("show-text");
  });
});
