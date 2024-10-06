function checkAnswer() {
    // Function body
    let correctAnswer="4";
    let userAnswer=document.querySelector("input[name='quiz']:checked").value
    let feedback=document.getElementById('feedback')
    if(correctAnswer==userAnswer){
        feedback.textContent='Correct! Well done'
        
    }
    else{
        feedback.textContent="That's incorrect. Try again!"
    }
}

//button
document.getElementById('submit-answer').addEventListener('click',checkAnswer)