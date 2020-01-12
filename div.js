//Keep 2 decimal for division result.
var randomNumber1
var randomNumber2
count = 0;
correct = 0

function timer() {
  setTimeout(function() {
    alert("Time is over")
    alert("Your total correct answers out of " + count + " are : " + correct + " 😎")
  }, 600000)
}

function loop() {
  randomNumber1 = Math.random()
  randomNumber1 = randomNumber1 * 100
  randomNumber1 = Math.floor(randomNumber1) + 1

  randomNumber2 = Math.random()
  randomNumber2 = randomNumber2 * 20
  randomNumber2 = Math.floor(randomNumber2) + 1
  document.querySelector(".number1").innerHTML = randomNumber1
  document.querySelector(".number2").innerHTML = randomNumber2
  count++

}
document.querySelector(".result").addEventListener("click", function() {
  var userInput = document.querySelector(".answer").value
  if (userInput == "") {
    alert("Please enter your answer before submit")
  }
  else {
  var subtstractionR = randomNumber1 / randomNumber2
  var subtstractionResult = subtstractionR.toFixed(1);
  if (userInput == subtstractionResult) {

    alert("Good job , Correct answer : " + subtstractionResult)
    correct++
  } else {
    alert("Oh Sorry , The correct answer is : " + subtstractionResult)
  }
  document.querySelector(".answer").value = ""
}})

document.querySelector(".next").addEventListener("click", function() {

  if (count >= 50) {
    alert("End of exam")
    alert("Your total correct answers out of " + count + " are : " + correct + " 😎")
  } else {
    loop();
  }
})
loop();
timer();
