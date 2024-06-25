const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
const question = "Who was the first American woman in space? ";
const correctAnswer = "Sally Ride";
const correctAnswerResponse = "Great work!  Sally Ride was the first American woman in space.";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [];
questions.push("Who was the first American woman in space? ");
questions.push("True or false: 5 kilometer == 5000 meters? ");
questions.push("(5 + 3)/2 * 10 = ? ");
questions.push("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
questions.push("What is the minimum crew size for the ISS? ");
let correctAnswers = [];
correctAnswers.push("Sally Ride");
correctAnswers.push("true");
correctAnswers.push("40");
correctAnswers.push("Trajectory");
correctAnswers.push("3");
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? > ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer = input.question(question);
}

function askQuestions() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  /* Commenting out to implement part 2
  let answer = String(candidateAnswers);
  if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
    console.log(correctAnswerResponse);
  } else {
    console.log("That's not the answer I was looking for.")
  }
  */

  let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.

  for (let i = 0; i < questions.length; i++) {
    if (String(candidateAnswers[i]).toLowerCase() === String(correctAnswers[i]).toLowerCase()) {
      grade += 1/questions.length * 100;
      console.log(`That's correct: ${correctAnswers[i]}`);
    } else {
      console.log("That's not the answer I was looking for.");
    }
    console.log(`current grade: ${grade}`);
  }

  grade = Math.round(grade);

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hi, ${candidateName}!  Thanks for taking the following quiz!`);
  //askQuestion();
  askQuestions();
  //gradeQuiz(candidateAnswer);
  let grade = gradeQuiz(candidateAnswers);
  console.log(`Quiz Grade: ${grade}`);
  if (grade >= 80) {
    console.log("This is a passing grade.");
  } else {
    console.log("This is not a passing grade, please try again.");
  }
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

// variable is a container, object, mutable
// everything in JavaScript is an Object except for primitive data types
// primitives are immutable which means they can't be changed
// 