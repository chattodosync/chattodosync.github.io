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

    document.querySelector('.alert').style.display = 'block';
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
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