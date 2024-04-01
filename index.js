#! /usr/bin/env node
import inquirer from "inquirer";
const username = "sadafshahab123";
let passWord = "sadafshahab";
let firstName = "Sadaf";
function greet() {
    return `Hey ${firstName}!, Welcome to Our Facebook Page`;
}
let myGreet = greet();
console.log(myGreet);
let operation = await inquirer.prompt([
    {
        name: "option",
        type: "list",
        message: "Select the option",
        choices: ["Signup", "Login"],
    },
]);
if (operation.option === "Login") {
    console.log("Enter Your Credentials!");
}
if (operation.option === "Login") {
    let accountLogin = await inquirer.prompt([
        {
            name: "Email",
            type: "input",
            message: "Email or Username",
        },
        {
            name: "password",
            type: "input",
            message: "Enter Your Password",
        },
        {
            name: "perform",
            type: "list",
            message: "Login to your account",
            choices: ["Login"],
        },
    ]);
    if (accountLogin.Email === username && accountLogin.password === passWord) {
        console.log("Login Success");
    }
    else {
        console.log("invalid username or password");
    }
}
else if (operation.option === "Signup") {
    console.log("Create a New Account");
    let createAccount = await inquirer.prompt([
        {
            name: "firstname",
            type: "input",
            message: "First Name",
        },
        {
            name: "lastname",
            type: "input",
            message: "Last Name",
        },
        {
            name: "username",
            type: "input",
            message: "Enter Your Email or phone number",
        },
        {
            name: "dateofbirth",
            type: "input",
            message: "Date of Birth",
        },
        {
            name: "newPassword",
            type: "input",
            message: "New Password",
        },
        {
            name: "confirmPassword",
            type: "input",
            message: "confrim Password",
        },
        {
            name: "perform",
            type: "list",
            message: "Do you want ot Signup or cancel?",
            choices: ["Signup", "Cancel"],
        },
    ]);
    if (createAccount.perform === "Signup") {
        console.log("Account Create Successfully!");
    }
    else if (createAccount.perform === "Cancel") {
        console.log("Go to home page");
    }
    else {
        console.log("invalid information");
    }
}
