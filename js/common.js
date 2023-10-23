function copyLinkToClipboard(textToCopy) {
    // Create a new textarea element to hold the text to be copied
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);

    // Select the text and copy it to the clipboard
    textArea.select();
    document.execCommand('copy');

    // Remove the temporary textarea element
    document.body.removeChild(textArea);

    alert('Link copied to clipboard: ' + textToCopy);
}



function shareLink(linkToShare) {
    if (navigator.share) {
        navigator.share({
            title: 'Shared Link',
            text: 'Check out this link:',
            url: linkToShare
        })
            .then(() => console.log('Link shared successfully'))
            .catch((error) => console.error('Error sharing link:', error));
    } else {
        window.open(linkToShare);
    }
}


function validateField(field, condition) {
    if (condition) {
        field.classList.add("border-danger");
        field.focus();
        document.querySelector(`label[for='${field.id}']`).classList.add("text-warning")
        return false;
    } else {
        document.querySelector(`label[for='${field.id}']`).classList.remove("text-warning")
        field.classList.remove("border-danger");
    }
    return true;
}

function renderSuccessError(flag, link) {
    return `
    <div style="z-index: 1;" class="alert alert-${flag === true ? "success" : "warning"
        }" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>
      Your link is ready to make your friend wished. share below link with your friend.
      </p>
      <hr />
      <button class="btn btn-primary" onclick="shareLink('${link}')">Preview</button>
      <button class="btn btn-success" onclick="copyLinkToClipboard('${link}')">Copy link to clickboard</button>
  </div>`;
}


const confettiTypes = {
    sc: () => {
        sideConfetti("tsparticles");
    },
    exc: () => {
        explosionConfetti();
    },
    fscreenc: () => {
        fullScreen();
    },
    cc: () => {
        centerConfetti();
        setTimeout(() => {
            fireworks();
            setTimeout(() => {
                document.querySelector("#fireworks img").click();
            }, 500);
        }, 3000);
    },
    scc: () => {
        snowConfetti();
    },
    fwc: () => {
        fireworks();
        setTimeout(() => {
            document.querySelector("#fireworks img").click();
        }, 300);
    },
};


function getRandomIndex(len) {
    return Math.floor(Math.random() * len);
}

function isDateGreaterThanToday(date) {
    const today = new Date();
    const dateParts = date.split('/');
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    const parsedDate = new Date(formattedDate);
    parsedDate.setHours(0, 0, 0, 0);

    today.setHours(0, 0, 0, 0);

    return parsedDate > today;
}

function updateCountdownTimer(dateParam) {
    if (dateParam) {
        if (isDateGreaterThanToday(dateParam)) {

            const dateParts = dateParam.split('/');
            const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

            // Calculate the time difference
            const date = new Date(formattedDate);
            const now = new Date();
            const timeDifference = date - now;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Update the countdown element
            return {isToday : false, days, hours, minutes, seconds};
        } else {
            // Date is today or in the past, so you can take action (e.g., booking)
            return {isToday : true};
        }
    }else{
        return {isDateValid: true}
    }

}



const brokenLinkError = (DOMId) => {


    const htmlData = `
    <div class="container my-5">
    <div class="alert alert-warning" role="alert">
    Link is not valid or broken, please check again!
    </div>

<div class="alert alert-warning d-flex align-items-center mt-2" role="alert">
    Send great wishes to your friend.
    <br />
    <a href="/" class="btn btn-warning">GO HOME</a>
</div>
</div>

    `;


    document.getElementById(DOMId).innerHTML = htmlData;

}