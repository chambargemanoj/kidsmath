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
  randomNumber2 = randomNumber2 * 100
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
  var additionResult = randomNumber1 + randomNumber2
  if (userInput == additionResult) {

    alert("Good job , Correct answer : " + additionResult)
    correct++
  } else {
    alert("Oh Sorry , The correct answer is : " + additionResult)
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
