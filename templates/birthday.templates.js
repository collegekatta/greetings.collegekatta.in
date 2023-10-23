/**
 * ====== HOW TO USE ======
 * To create a new template function, follow these steps:
 * 1. At the end of this file, create a new function.
 * 2. In this new function, design the layout and HTML content as desired, and then return the HTML.
 * 3. You will receive the 'name', a random 'quote', and 'dob' as function arguments. Use them to customize the HTML content.
 * 4. Add the name of the newly created function to the {templates_list} array.
 */



export const templates_list = [birthdayTemplate_1];

 function birthdayTemplate_1 (name, quote, dob) {

    // Update and display the countdown timer
    let getTime = updateCountdownTimer(dob);
    let dateShow;

    if (getTime.isDateValid) {
        dateShow = "<div class=' mb-5'><h4 class='heading-timer-end'>It's your special day! Enjoy it to the fullest! </h4>🎉🥳</div>";
    } else {
        if (getTime.isToday) {
            dateShow = "<div class=' mb-5'><h4 class='heading-timer-end'>It's your special day! Enjoy it to the fullest! </h4>🎉🥳</div>";
        } else {
            dateShow = timer(getTime.days, getTime.hours, getTime.minutes, getTime.seconds);
        }
    }

    return `
    <div class="container d-flex align-items-center justify-content-center flex-column w-100 vh-100">
        <div id="ck_countdown">
            ${dateShow}
        </div>
            <div class="card mt-3">
                <div class="card-body text-center py-3" style="
                background-image: url(./assets/Blue-Happy-Birthday-Card.png) !important;
                background-repeat: no-repeat !important;
                background-position: center !important;
                background-size: 100% 100% !important;
                ">
                    <div style="padding: 10% 16% 20% 18%;">
                        <h3 class="text-dark-0" style="font-family: 'Alice', serif;">HAPPY</h3>
                        <h1 style="font-family: 'Mea Culpa', cursive;" class="text-dark-0">Birthday</h1>
                        <h3 class="text-dark-0 text-capitalize" style="font-family: 'Alice', serif;">${name}</h5>
                        <p class="text-dark-1">
                        ${quote}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}


const timer = (d, h, m, s) => {
    return `
    <div><h4 class='heading-timer-end'>Happy birthday in advance! </h4>🎉🥳</div>
        <h4>The countdown to celebrate 🎉🕒. </h4>
    <div class="timer-box">
        <div class="timer-element">
            <span class="timer-number" id="days">${d}</span>
            <span class="timer-label">D</span>
        </div>
        <div class="timer-element">
            <span class="timer-number" id="hours">${h}</span>
            <span class="timer-label">H</span>
        </div>
        <div class="timer-element">
            <span class="timer-number" id="minutes">${m}</span>
            <span class="timer-label">M</span>
        </div>
        <div class="timer-element">
            <span class="timer-number" id="seconds">${s}</span>
            <span class="timer-label">S</span>
        </div>
    </div>
    `
}