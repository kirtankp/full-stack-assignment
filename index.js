const express = require('express')
const app = express()
const port = 1234

app.use(express.json())

const USERS = [];

const QUESTIONS = [
  {
    title: "Question 1",
    description: "This is the first question",
    testcases: [],
    id: 1,
  },
  {
    title: "Question 2",
    description: "This is the second question",
    testcases: [],
    id: 2,
  },
  {
    title: "Question 3",
    description: "This is the third question",
    testcases: [],
    id: 3,
  },
];
const SUBMISSIONS = [
  {
    id: 1,
    userId: 1,
    questionId: 1,
    code: 'console.log("hello world")',
    language: "javascript",
    createdAt: new Date("2022-01-01"),
  },
  {
    id: 2,
    userId: 1,
    questionId: 2,
    code: "print('hello world')",
    language: "python",
    createdAt: new Date("2022-01-02"),
  },
];


const SUBMISSION = [

]

app.post('/signup', function(req, res) {
  // Add logic to decode body
  // body should have email and password
  //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesnt exist)
  const userData = req.body;
  const { email, password, role } = userData;
  
  // return back 200 status code to the client
  if(USERS.find(user => user.email === email)){
    return res.status(201).send('User already exists');
  }else{
    USERS.push(userData);
    res.status(200).send(`User ${email} registered successfully`);
  }
  
})

app.post('/login', function(req, res) {
  // Add logic to decode body
  // body should have email and password

  // Check if the user with the given email exists in the USERS array
  // Also ensure that the password is the same.

  // If the password is the same, return back 200 status code to the client
  // Also send back a token (any random string will do for now)
  // If the password is not the same, return back 401 status code to the client
  const userData = req.body
  const { email, password, role } = userData

  if(USERS.find(user => user.email === email) && USERS.find(user => user.password === password)){
    return res.status(200).send('logged in successfully');
  }else{
    res.status(401).send(`User NOT FOUND`);
  }
  
})

app.get('/questions', function(req, res) {

  //return the user all the questions in the QUESTIONS array
  res.status(200).json(QUESTIONS);
})

app.get("/submissions", function(req, res) {
   // return the users submissions for this problem
  res.send("Hello World from route 4!")
});


app.post("/submissions", function(req, res) {
   // let the user submit a problem, randomly accept or reject the solution
   // Store the submission in the SUBMISSION array above
  res.send("Hello World from route 4!")
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})