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

const form = document.getElementById("form");

if (form) {
    console.log("Adding event listener");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // prevent default behavior (??)
        let dataArray = [];
        const profile = document.getElementById("profile").value;
        const amt = document.getElementById("amt").value;
        const desc = document.getElementById("desc").value;
        dataArray.push({ profile, amt, desc });
        console.log("Data: ", dataArray);
        window.sessionStorage.setItem("data",JSON.stringify(dataArray)); // session storage values must be strings, so stringify it
        window.location.href = 'transaction.html';
      });
}
else {
    console.log("Form doesn't exist")
}




// function handleSubmit() {
//     profile = document.getElementById("profile").value;
//     amt = document.getElementById("amt").value;
//     desc = document.getElementById("amt").value;
//     console.log("HEY");
//     console.log(profile, amt, desc);
//     window.location.href='transaction.html';
// }

function loadTransaction() {
    const data = JSON.parse(window.sessionStorage.getItem("data"));
    console.log("HEY");
    if (data) {
        console.log(data[0]["profile"]);
    }
    else {
        console.log("data not assigned yet");
    }
}

// const submit = document.getElementById("btn");

// submit.addEventListener('click', handleSubmit)