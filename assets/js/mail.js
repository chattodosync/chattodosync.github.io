// const firebaseConfig = {
//     apiKey: "AIzaSyC8ud5SaUnU5rFBDm0-2nA42W4R7-F14xk",
//     authDomain: "chattodo-pre-launch.firebaseapp.com",
//     databaseURL: "https://chattodo-pre-launch-default-rtdb.firebaseio.com",
//     projectId: "chattodo-pre-launch",
//     storageBucket: "chattodo-pre-launch.appspot.com",
//     messagingSenderId: "438482623621",
//     appId: "1:438482623621:web:5da7062199346fda045dec",
//     measurementId: "G-LQRV6BKBG8"
// };

const firebaseConfig = {
    apiKey: "AIzaSyA-hCL2fNdF3RD_0APX8eVnPTUQNe25C_0",
    authDomain: "chattodo-apps.firebaseapp.com",
    databaseURL: "https://chattodo-apps-default-rtdb.firebaseio.com",
    projectId: "chattodo-apps",
    storageBucket: "chattodo-apps.appspot.com",
    messagingSenderId: "1035673617495",
    appId: "1:1035673617495:web:96f2fe8ee126aa0ada4f12",
    measurementId: "G-24CF4X1N99"
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

    const subtextElement = document.querySelector('.input-group');
  
    const alertElement = document.querySelector('.alert');

    if (email.trim() !== "") {
    if (subtextElement) {
        subtextElement.style.display = 'none';
    }
    if (alertElement) {
        alertElement.textContent = "Thank you! You're on the list!";
        alertElement.style.display = 'block';
    }
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