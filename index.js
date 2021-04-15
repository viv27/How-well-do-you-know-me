let readlineSync = require("readline-sync")
const chalk = require('chalk');

var score = 0
var userName = readlineSync.question("Whats your name? ")

console.log("Welcome "+userName+" to do you know Vivek? ")

function play(question,answer){
  var userAnswer = readlineSync.question(chalk.blueBright(question))
  if(userAnswer == answer){
    console.log(chalk.green("Right!"))
    score+=1
    
  }
  else{
    console.log(chalk.red("Wrong!, ")+"correct answer is: "+ chalk.green.underline(answer))
  }
  console.log(chalk.yellow("Current Score: ")+score)
  console.log("--------------")
}

// play("Where do I live?","Bangalore")



var questions = [{
  question:"Where do I live? ",
  answer:"Bangalore"
},{
  question:"My favourite superhero? ",
  answer:"Batman"
},{
  question:"Favourite Colour? ",
  answer:"Black"
},{
  question:"Mother Tongue ",
  answer:"Malayalam"
}
]

for(var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log(chalk.green.underline("Total score: "+score+"!"))