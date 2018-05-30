// HEADING
let name = "Name: Jesse";
let capName = name.toUpperCase();
console.log(capName); 
let career = "Career: Full Stack Programmer"
console.log(career);
let myDescription = "Description: I am Jack's raging bile duct"
console.log(myDescription);
// INTERESTS
console.log("");
console.log("My Interests:");
console.log("* Programming");
console.log("* Video Games");
console.log("* Whiskey");
console.log("* Futurism");
console.log("* Star Wars");
console.log("");
// JOB TITLE
let job1 = " Jet Fighter Pilot -";
let job2 = " Stealth Assassin -";
let job3 = " Dark Lord of the Sith -";
// COMPANY NAME
let comp1 = "U.S. Air Force:";
let comp2 = "CLASSIFIED:";
let comp3 = "The Galactic Empire:";
// DESCRITPION
let desc1 = " Flew countless combat missions, highly decorated."
let desc2 = " ...."
let desc3 = " was considered impressive, most impressive."
// EXPERIENCE
console.log("My Previous Experience:")
console.log(displayPosition(comp1, job1, desc1));
console.log(displayPosition(comp2, job2, desc2));
console.log(displayPosition(comp3, job3, desc3));
console.log("");
// SkillS
console.log("My Skills:")
displaySkill("programming", true);
displaySkill("Video Games", false);
displaySkill("Bow Staff", true);
displaySkill("Force Lightning", true);
displaySkill("arguing", false);
displaySkill("sleeping", false);
displaySkill("eating", false);

// FUNCTIONS
function displayPosition(compName, jobTitle, description) {
    return "* " + compName + jobTitle + description;
}

function displaySkill(skill, cool) {
    if(cool) {
        console.log("* BAM: " + skill);
    } else {
        console.log("* " + skill);
    }
}