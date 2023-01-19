# Plutonium

Backend cohort July 2022 - Nov 2022

# Assignment

Note: The below questions are very commonly asked in nodejs interviews

Q1.
// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
// Your route code will look like this
app.get("/sol1", function (req, res) {
//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
let arr= [1,2,3,5,6,7]
let missingNumber

       ///LOGIC WILL GO HERE
       res.send(  { data: missingNumber  }  );

});

Q2.
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
// Your route code will look like this
app.get("/sol2", function (req, res) {
//logic : sum of n consecutive numbers is [ n * (first + last) / 2 ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
let arr= [33, 34, 35, 37, 38]
let missingNumber

    	   ///LOGIC WILL GO HERE

    	   res.send(  { data: missingNumber  }  );

});

# Solutions here:

https://docs.google.com/document/d/1pNmnqddf6U6FzGY7AWmKKUouQyoWTXkKJ4eXo3DaO-0/edit?usp=sharing

# Videos here:

https://drive.google.com/file/d/1HeQ7ozDFBF7PHCRCN6i-E3hrENQt9x6D/view?usp=sharing
https://drive.google.com/file/d/1_OmOr6tflEezBba1ctwMzNrB1yOHkMKh/view?usp=sharing
