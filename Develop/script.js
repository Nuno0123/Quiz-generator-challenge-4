// Here I am gathering all the elements in my html so I'm able to manipluate them through javascript 
var Quiz = document.getElementById("quiz");
var Results = document.getElementById("results");
var Score = document.getElementById("finalScore");
var gameOver = document.getElementById("gameOver");
var questions = document.getElementById("questions")
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startButton");
var beginQuiz = document.getElementById("startQuiz");
var highScoreCont = document.getElementById("highScoreContainer");
var highScoreDiv = document.getElementById("high-score");
var  highScoreDisplayName = document.getElementById("highScoreNameInput");
var highScoreName = document.getElementById("name");
var endGameButton = document.getElementById("endGameButton");
var DisplayScore = document.getElementById("highScore-score");
var submitScorebutton = document.getElementById("submiteScore");
var buttonA = document.getElementById("A")
var buttonB = document.getElementById("B")
var buttonC = document.getElementById("C")
var buttonD = document.getElementById("D")


// Here I'm gathering my questions for the quiz on my website
var Questions = [{
    Question: "What does DOM stand for?",
    optionA:"answer",
    optionB:"answer",
    optionC:"answer",
    optionD:"answer",
    correctAnswer:"C"},
 {
    Question: "",
    optionA:"answer",
    optionB:"answer",
    optionC:"answer",
    optionD:"answer",
    correctAnswer:"B"},
{
    Question: "",
    optionA:"answer",
    optionB:"answer",
    optionC:"answer",
    optionD:"answer",
    correctAnswer:"A"},
{
    Question: "",
    optionA:"answer",
    optionB:"answer",
    optionC:"answer",
    optionD:"answer",
    correctAnswer:"A"},
{
    Question: "",
    optionA:"answer",
    optionB:"answe",
    optionC:"answer",
    optionD:"answer",
    correctAnswer:"C"},
{   
    Question: "",
    optionA:"answer",
    optionB:"answer",
    optionC:"answer",
    optionD:"answer",
    correctAnswer:"B"},
{
    Question: "",
    optionA:"answer",
    optionB:"answer",
    optionC:"answer",
    optionD:"answer",
    correctAnswer:"B"},      
];
