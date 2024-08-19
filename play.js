let name = "Kent"; //declaring and assignment of variable
let age = 21;
const fullname = "Kent Charles";
let hashobby = true;
let hobbies = ["Reading", "Coding", "Gaming"]; //this is an array

// accessing  array elements
// console.log(hobbies[0]);
// console.log(hobbies[1]);

// looping through array
//method 1
for(let hobby of hobbies){
    console.log(hobby);
}
// method 2
hobbies.map((hobby) => {
    console.log(hobby);
});
// method 3
hobbies.forEach((hobby) => {
    console.log(hobby);
});

// this is an object

function summarizeUser(userName, userAge, userhasHobby){
    return(
        "Name is " + userName + ", age is " + userAge + " and the user has hobbies:" + userhasHobby
    );
}

console.log(summarizeUser(name, age, hashobby));

if (hashobby == true){
    console.log(hobbies);

}
else{
    console.log(name, "has no hobbies");
}
if(age>21){
    console.log ("You are a Adult");
}
else{
    console.log("You are a  minor");
}
function studentPass(score){
    if(score>74){
        return "You Passed";
    }
    else{
        return "You Fail";
    }
}
console.log(studentPass(75));
const person = {
    name: "Kent",// key: pair = value
    age: 21,
    greet: function(){
        console.log("Hello, I am " + person.name);
    },
}
console.log(person.greet());