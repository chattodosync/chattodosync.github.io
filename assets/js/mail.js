const firebaseConfig = {
    apiKey: "AIzaSyC8ud5SaUnU5rFBDm0-2nA42W4R7-F14xk",
    authDomain: "chattodo-pre-launch.firebaseapp.com",
    databaseURL: "https://chattodo-pre-launch-default-rtdb.firebaseio.com",
    projectId: "chattodo-pre-launch",
    storageBucket: "chattodo-pre-launch.appspot.com",
    messagingSenderId: "438482623621",
    appId: "1:438482623621:web:5da7062199346fda045dec",
    measurementId: "G-LQRV6BKBG8"
};

firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

var contactFormDB = firebase.database().ref('contactForm')

document.getElementById('contactForm').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault();

    var email = getElementVal('email');

    saveMessages(email);

    //analytics
    firebase.analytics().logEvent('email_submission', { email: email });

    // Get the <h3> element
    const subtextElement = document.querySelector('.subtext.opacity-60.font-size-30');
    // Get the alert div
    const alertElement = document.querySelector('.alert');

    if (subtextElement) {
        subtextElement.style.display = 'none';
    }
    if (alertElement) {
        alertElement.textContent = 'Email successfully sent';
        alertElement.style.display = 'block';
    }

    setTimeout(() => {
        if (alertElement) {
            alertElement.style.display = 'none';
        }
        if (subtextElement) {
            subtextElement.style.display = 'block';
        }
    }, 3000);

    document.getElementById('contactForm').reset();
}

const saveMessages = (email) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        email: email
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}