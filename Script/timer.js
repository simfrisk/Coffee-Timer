let countdownDuration1 = 3900;
let countdownDuration2 = 9900;
let countdownDuration3 = 34900;
let countdownDuration4 = 9900;
let countdownDuration5 = 9900;
let countdownDuration6 = 9900;
let countdownDuration7 = 9900;
let countdownDuration8 = 9900;
let countdownDuration9 = 9900;
let countdownDuration10 = 4900;
let countdownDuration11 = 54900;
let countdownDuration12 = 9900;

let timerInterval; // Declare timerInterval in a wider scope
let paused = false; // Track if the timer is paused
let remainingTime; // Store remaining time when paused

// Select the element where the timer will be displayed
const display = document.getElementById('display');
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("stopBtn"); // Pause button
const resetBtn = document.getElementById("resetBtn");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const step5 = document.getElementById("step5");
const step6 = document.getElementById("step6");
const step7 = document.getElementById("step7");
const step8 = document.getElementById("step8");
const step9 = document.getElementById("step9");
const step10 = document.getElementById("step10");
const step11 = document.getElementById("step11");
const step12 = document.getElementById("step12");
const step13 = document.getElementById("step13");
const containerInstructions = document.getElementById("containerInstructions");
const box = document.getElementById("box");



let currentStep = 1; // Track the current step of the timer



// Define the countdown function
function startCountdown(duration, nextStepCallback) {
    clearInterval(timerInterval); // Clear any existing timer
    // If not paused, initialize remaining time
    if (!paused) {
        remainingTime = duration;
    }

    // Update the timer every 100 milliseconds
    timerInterval = setInterval(() => {
        // Calculate seconds and milliseconds (1 digit for ms)
        const seconds = Math.floor(remainingTime / 1000);
        const milliseconds = Math.floor((remainingTime % 1000) / 100); // 1 digit (tenths)

        // Display the remaining time in "seconds.m" format
        display.textContent = `${seconds}`;

        // Decrease the remaining time by 100 milliseconds
        remainingTime -= 100;

        // Check if the countdown has finished
        if (remainingTime < 0) {
            clearInterval(timerInterval); // Stop the countdown
            if (nextStepCallback) nextStepCallback(); // Proceed to the next step
        }

    }, 100);
}

// Attach the click event to start the countdown
startBtn.onclick = function() {
    clearInterval(timerInterval);
    display.style.opacity = "1";
    startBtn.textContent = "Stop";
    startBtn.style.backgroundColor = "red";
    
    

    startCountdown(countdownDuration1, proceedToNextStep);
    currentStep = 1;
    paused = false; // Reset pause state when starting
};

// Function to update instructions and start the next countdown
function proceedToNextStep() {
    if (currentStep === 1) {

        // change the look and position of instructions
        containerInstructions.style.transition = "transform 0.7s ease";
        containerInstructions.style.transform = "translateY(-46px)";

        //Step 1
        step1.style.fontSize = "1.2rem";
        step1.style.opacity = ".5";
        // Step 2
        step2.style.fontSize = "2rem";
        step2.style.opacity = "1";

        // Step 3
        step3.style.fontSize = "1.2rem";
        step3.style.opacity = ".5"; 

        startCountdown(countdownDuration2, proceedToNextStep);
        currentStep = 2;

    } else if (currentStep === 2) {

         // change the look and position of instructions
         containerInstructions.style.transition = "transform 0.7s ease";
         containerInstructions.style.transform = "translateY(-78px)";
        
        //Step 1
        step1.style.fontSize = "0.4rem";
        step1.style.opacity = "0";
        // Step 2
        step2.style.fontSize = "1.2rem";
        step2.style.opacity = ".5";
        // Step 3
        step3.style.fontSize = "2rem";
        step3.style.opacity = "1";
        // Step 4
        step4.style.fontSize = "1.2rem";
        step4.style.opacity = ".5"; 

        startCountdown(countdownDuration3, proceedToNextStep); // Last step, no next step callback
        currentStep = 3;


    } else if (currentStep === 3) {

         // change the look and position of instructions
         containerInstructions.style.transition = "transform 0.7s ease";
         containerInstructions.style.transform = "translateY(-110px)";
        
        //Step 2
        step2.style.fontSize = "0.4rem";
        step2.style.opacity = "0";
        // Step 3
        step3.style.fontSize = "1.2rem";
        step3.style.opacity = ".5";
        // Step 4
        step4.style.fontSize = "2rem";
        step4.style.opacity = "1";
        // Step 5
        step5.style.fontSize = "1.2rem";
        step5.style.opacity = ".5";


        startCountdown(countdownDuration3, proceedToNextStep); // Last step, no next step callback
        currentStep = 4;


    } else if (currentStep === 4) {

        // change the look and position of instructions
         containerInstructions.style.transition = "transform 0.7s ease";
         containerInstructions.style.transform = "translateY(-142px)";
        
       //Step 3
       step3.style.fontSize = "0.4rem";
       step3.style.opacity = "0";
       // Step 4
       step4.style.fontSize = "1.2rem";
       step4.style.opacity = ".5";
       // Step 5
       step5.style.fontSize = "2rem";
       step5.style.opacity = "1";
       // Step 6
       step6.style.fontSize = "1.2rem";
       step6.style.opacity = ".5"; 


        startCountdown(countdownDuration4, proceedToNextStep); // Last step, no next step callback
        currentStep = 5;
        

    } else if (currentStep === 5) {

        // change the look and position of instructions
        containerInstructions.style.transition = "transform 0.7s ease";
        containerInstructions.style.transform = "translateY(-174px)";
       
        //Step 4
        step4.style.fontSize = "0.4rem";
        step4.style.opacity = "0";
        // Step 5
        step5.style.fontSize = "1.2rem";
        step5.style.opacity = ".5";
        // Step 6
        step6.style.fontSize = "2rem";
        step6.style.opacity = "1";
        // Step 7
        step7.style.fontSize = "1.2rem";
        step7.style.opacity = ".5"; 


        startCountdown(countdownDuration5, proceedToNextStep); // Last step, no next step callback
        currentStep = 6;
    } else if (currentStep === 6) {

            // change the look and position of instructions
            containerInstructions.style.transition = "transform 0.7s ease";
            containerInstructions.style.transform = "translateY(-206px)";
           
            //Step 5
            step5.style.fontSize = "0.4rem";
            step5.style.opacity = "0";
            // Step 6
            step6.style.fontSize = "1.2rem";
            step6.style.opacity = ".5";
            // Step 7
            step7.style.fontSize = "2rem";
            step7.style.opacity = "1";
            // Step 8
            step8.style.fontSize = "1.2rem";
            step8.style.opacity = ".5"; 

        startCountdown(countdownDuration6, proceedToNextStep); // Last step, no next step callback
        currentStep = 7;
    } else if (currentStep === 7) {

            // change the look and position of instructions
            containerInstructions.style.transition = "transform 0.7s ease";
            containerInstructions.style.transform = "translateY(-238px)";
            //Step 6
            step6.style.fontSize = "0.4rem";
            step6.style.opacity = "0";
            // Step 7
            step7.style.fontSize = "1.2rem";
            step7.style.opacity = ".5";
            // Step 8
            step8.style.fontSize = "2rem";
            step8.style.opacity = "1";
            // Step 9
            step9.style.fontSize = "1.2rem";
            step9.style.opacity = ".5"; 
            
        startCountdown(countdownDuration7, proceedToNextStep); // Last step, no next step callback
        currentStep = 8;
    } else if (currentStep === 8) {

            // change the look and position of instructions
            containerInstructions.style.transition = "transform 0.7s ease";
            containerInstructions.style.transform = "translateY(-270px)";
           
            //Step 7
            step7.style.fontSize = "0.4rem";
            step7.style.opacity = "0";
            // Step 8
            step8.style.fontSize = "1.2rem";
            step8.style.opacity = ".5";
            // Step 9
            step9.style.fontSize = "2rem";
            step9.style.opacity = "1";
            // Step 10
            step10.style.fontSize = "1.2rem";
            step10.style.opacity = ".5"; 
            
        startCountdown(countdownDuration8, proceedToNextStep); // Last step, no next step callback
        currentStep = 9;
    } else if (currentStep === 9) {

            // change the look and position of instructions
            containerInstructions.style.transition = "transform 0.7s ease";
            containerInstructions.style.transform = "translateY(-302px)";
           
            //Step 8
            step8.style.fontSize = "0.4rem";
            step8.style.opacity = "0";
            // Step 9
            step9.style.fontSize = "1.2rem";
            step9.style.opacity = ".5";
            // Step 10
            step10.style.fontSize = "2rem";
            step10.style.opacity = "1";
            // Step 11
            step11.style.fontSize = "1.2rem";
            step11.style.opacity = ".5"; 
            
        startCountdown(countdownDuration9, proceedToNextStep); // Last step, no next step callback
        currentStep = 10;
    } else if (currentStep === 10) {

            // change the look and position of instructions
            containerInstructions.style.transition = "transform 0.7s ease";
            containerInstructions.style.transform = "translateY(-334px)";
           
            //Step 9
            step9.style.fontSize = "0.4rem";
            step9.style.opacity = "0";
            // Step 10
            step10.style.fontSize = "1.2rem";
            step10.style.opacity = ".5";
            // Step 11
            step11.style.fontSize = "2rem";
            step11.style.opacity = "1";
            // Step 12
            step12.style.fontSize = "1.2rem";
            step12.style.opacity = ".5"; 
            
        startCountdown(countdownDuration10, proceedToNextStep); // Last step, no next step callback
        currentStep = 11;
    } else if (currentStep === 11) {

            // change the look and position of instructions
            containerInstructions.style.transition = "transform 0.7s ease";
            containerInstructions.style.transform = "translateY(-366px)";
           
            //Step 10
            step10.style.fontSize = "0.4rem";
            step10.style.opacity = "0";
            // Step 11
            step11.style.fontSize = "1.2rem";
            step11.style.opacity = ".5";
            // Step 12
            step12.style.fontSize = "2rem";
            step12.style.opacity = "1";
            // Step 13
            step13.style.fontSize = "1.2rem";
            step13.style.opacity = ".5"; 
            
        startCountdown(countdownDuration11, proceedToNextStep); // Last step, no next step callback
        currentStep = 12;
    } else if (currentStep === 12) {

            // change the look and position of instructions
            containerInstructions.style.transition = "transform 0.7s ease";
            containerInstructions.style.transform = "translateY(-398px)";
           
            //Step 11
            step11.style.fontSize = "0.4rem";
            step11.style.opacity = "0";
            // Step 12
            step12.style.fontSize = "1.2rem";
            step12.style.opacity = ".5";
            // Step 13
            step13.style.fontSize = "2rem";
            step13.style.opacity = "1";
    
            
        startCountdown(null); // Last step, no next step callback
        currentStep = 12;
    }
    
}









// // Attach the click event to pause the countdown
// pauseBtn.onclick = function() {
//     clearInterval(timerInterval); // Stop the countdown
//     paused = true; // Set the pause state to true
// };

// // Reset button logic
// resetBtn.onclick = function () {
//     clearInterval(timerInterval); // Stop the countdown if it's running
//     display.style.opacity = "0%";
//     delay(1000);
//     display.textContent = "3"; // Reset the display to the initial time
//     step1.textContent = "Start the timer!"; // Reset the instructions
//     step2.textContent = "Pour 50g of water to bloom";
//     currentStep = 1; // Reset to step 1
//     paused = false; // Reset pause state
// };


