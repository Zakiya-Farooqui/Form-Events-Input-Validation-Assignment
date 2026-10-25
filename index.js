// Question 1

// Section 1 – Form and Input Events
// 1. Handle Form Submit Event
// Create a simple form with a name input and submit button. Use the submit event to display a message
// when the form is submitted.
// Example:
// Input:
// Name: Rahul
// Output:
// Form submitted successfully!

const form= document.querySelector("#form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("Form submitted successfully!");
})

// Question 2
// 2. Prevent Form Submission
// Create a form with a submit button and use preventDefault() inside the submit event to stop the page
// from refreshing.
// Example:
// Expected Result:
// When the user clicks Submit, the form should not reload the page.

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("Form not reload");
})

// Question  3

// 3. Display Input Using the input Event
// Create an input field and use the input event to display the value entered by the user in a paragraph.
// Example:
// Input:
// JavaScript
// Output:
// You entered: JavaScript

const input = document.querySelector("#username") 
const para= document.querySelector("p")

input.addEventListener("input", (e)=>{
    para.textContent= "You entered: " + e.target.value
})

// Question 4

// 4. Detect Changes Using the change Event
// Create a <select> dropdown containing three programming languages. Use the change event to display the selected language.
// Example:
// Options:
// HTML
// CSS
// JavaScript
// When JavaScript is selected:
// Selected Language: JavaScript

    const language= document.querySelector("#programming-language")

    language.addEventListener('change',(e)=>{
        console.log("Selected Language: " + e.target.value);
    })


    // Question5
//     5. Handle the focus Event
// Create an input field and use the focus event to change its border or background color when the user
// clicks inside it.
// Example:
// Before Focus:
// Normal input style
// After Focus:
// Input border changes.

input.addEventListener("focus",(e)=>{
    input.style.outlineColor= "red"
})

// Question 6

// 6. Handle the blur Event
// Create an input field and use the blur event to display a message when the user moves away from the
// input field.
// Example:
// After leaving the input:
// You left the input field.


input.addEventListener('blur',(e)=>{
    console.log("You left the input field");
})

// Question 7

// Section 2 – Basic Form Validation
// 7. Validate a Required Name Field
// Create a form with a name input. When the form is submitted, check whether the name field is empty.
// Display an error message if it is empty.
// Example:
// Input:
// Name:
// Output:
// Name is required.


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(input.value.trim().length === 0){
        console.log("Name is required");
    }
    else {
        console.log("Form valid");
    }
})



// Question 8
// 8. Validate Email Field
// Create a form with an email input and check whether the email field is empty during form submission.
// Display an appropriate message if no email is entered.
// Example:
// Input:
// Email:
// Output:
// Email is required.

const email= document.querySelector("#email")
form.addEventListener("submit", (e)=>{
        e.preventDefault();
    if(email.value.trim().length === 0){
        console.log("Email is required");
    }else{
        console.log("Form valid");
    }
})

// Question 9

// 9. Validate Password Length
// Create a password field and validate that the password contains at least 6 characters.
// Example:
// Input:
// Password: abc
// Output:
// Password must be at least 6 characters.

const password= document.querySelector("#password")
form.addEventListener("submit", (e)=>{
        e.preventDefault();
    if(password.value.trim().length < 6){
        console.log("Password must be at least 6 characters.");
    }else{
        console.log("Form valid");
    }
})

// Question 10
// 10. Validate Multiple Form Fields
// Create a form containing name, email, and password fields. On submission, check whether any of the fields are empty and display an appropriate error message.
// Example:
// Input:
// Name: Rahul
// Email:
// Password: 123456
// Output:
// Email is required.

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(input.value.trim().length === 0){
        console.log("Name is required");
    }
    else if(email.value.trim().length === 0){
        console.log("Email is required");
    }
    else if(password.value.trim().length < 6){
        console.log("Password must be at least 6 characters.");
    }
    else {
        console.log("Form valid");
    }
})