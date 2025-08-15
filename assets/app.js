document.addEventListener("DOMContentLoaded", () =>{
  const questions = document.querySelectorAll(".question");
  
  questions.forEach(question => {
    question.addEventListener("click", ()=> {
      question.classList.toggle("active");
      const answer = document.getElementsByClassName(".toggle");
      const icon = question.querySelector(".iconp");
      
      if (answer.style.display === "block") {
        answer.style.display = "none";
        // icon. = "+";
      } else {
        answer.style.display = "block";
        // icon.textContent ="-";
      }
    });
  });
  
  
});