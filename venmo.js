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

function handleSubmit() {
    var profile = document.getElementById("profile").value;
    var amt = document.getElementById("amt").value;
    var desc = document.getElementById("amt").value;
    console.log("HEY");
    console.log(profile, amt, desc);
    window.location.href='transaction.html';
}

// const submit = document.getElementById("btn");

// submit.addEventListener('click', handleSubmit)