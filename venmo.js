if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed");
        console.log(error);
    });
} 
else {
    console.log("Service Worker not supported");
}

var profile, amt, desc;

function handleSubmit() {
    profile = document.getElementById("profile").value;
    amt = document.getElementById("amt").value;
    desc = document.getElementById("amt").value;
    console.log("HEY");
    console.log(profile, amt, desc);
    window.location.href='transaction.html';
}

function loadTransaction() {
    console.log("HEY");
    console.log(profile, amt, desc);
}

// const submit = document.getElementById("btn");

// submit.addEventListener('click', handleSubmit)