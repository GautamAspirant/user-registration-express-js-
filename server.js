const express = require('express');

const app = express();

app.use(express.urlencoded({extended:false}));

app.get('/user_reg', function(req,res) {
    res.sendFile(__dirname + '/public/user_reg.html');
});

app.post('/user_reg_submit', function(req,res) {

    res.send(
        "<h2>User Details</h2>" +
        "First Name: " + req.body.fname + "<br>" +
        "Middle Name: " + req.body.mname + "<br>" +
        "Last Name: " + req.body.lname + "<br>" +
        "Gender: " + req.body.gender + "<br>" +
        "Date of Birth: " + req.body.dob + "<br>" +
        "Email: " + req.body.email + "<br>" +
        "Security Question: " + req.body.question + "<br>" +
        "Answer: " + req.body.answer + "<br>" +
        "Hobbies: " + req.body.hobbies
    );

});

app.listen(3000, function() {
    console.log("Server started");
});