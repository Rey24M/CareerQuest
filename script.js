// Define questions, options and associated categories
const quizData=[
    {
        question: "What subject do you enjoy the most?" ,
        options:[
            {answer: "Physics", category:"Analytics"},
            {answer: "Painting", category:"Creativity"},
            {answer: "Programming", category:"Maths"},
            {answer: "History", category:"Physics"}
            
            ],
            weight:1 //Question 1 has weight of 1
    },
    {
        question: "What activity do you prefer?",
        options:[
            {answer: "Solving puzzles", category:"Analytics"},
            {answer: "Drawing", category:"Creativity"},
            {answer: "Building things", category:"Maths"},
            {answer: "Reading books", category:"Physics"}
        ],
        weight:2 //Question 2 has weightof 2
    },
    {
        question: "Which job sounds the most interesting?",
        options:[
            {answer:"Research Scientist", category:"Analytics"},
            {answer: "Graphic Designer", category:"Creativity"},
            {answer: "Software Developer", category:"Maths"},
            {answer: "Historian", category:"Physics"}
        ],
        weight:3 //Question 3 has weight of 3
        }
];
// Object to store category scores
let categoryScores = {
    Analytics:0
    Creativity:0
    Maths:0
    Physics:0
   };
   // Display quiz questions
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    function displayQuiz() {
        const output = quizData.map(current Question, questionIndex) {
            const options = currentQuestion.options.map(
                option =>
                <label>
                    <input type="radio" name="question"questionIndex value="option.category"></input>
                    </label>
            )
            .join("");
            return
            <div class="question"currentQuestion.question></div>
            < class="options"options</div>
        }
        quizContainer.innerHTML = output.join("");
    }
    //Calculate and display results
    function showResults() {
        //Reset category scores before calculation
        for(let category in categoryScores)  {
            categoryScores[category] = 0;
        }
        //Loop through questions and calculate scores based on selected answers and question weights
        quizData.forEach(currentQuestion, questionIndex) {
            const selectedOption = document.querySelector('input[name= question(questionIndex)]:checked');
            if (selectedOption){
                const selectedCategory = selectedOption.value;
                categoryScores[selectedCategory] += currentQuestion.weight; //Add points based on question weight
            }
        });
        //Sort categories by scores to find the top  two
        const sortedCategories = Object.entries(categoryScores)
        .sort((a,b)) => b[1] -a[1] //sort by scores in descending order
        .slice(0,2); //Get the top two categories

        //Display the top two categories and their scores
        resultsContainer.innerHTML = 
        Your top categories are :
        <br>1.(sortedCategories[0][0]) with (sortedCategories[0][1]) points</br>
        <br>2.(sortedCategories[1][0]) with (sortedcategories[1][1]) points</br>
        ;            
        }
        //LoadQuiz and set up events listner for submit button
        displayQuiz();
        submitButton.addEventListener("click",showResults);
    }