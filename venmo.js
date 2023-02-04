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
        const file_name = saveFile();
        let dataArray = [];
        const profile = document.getElementById("profile").value;
        const amt = document.getElementById("amt").value;
        const desc = document.getElementById("desc").value;
        const username = document.getElementById("username").value;
        dataArray.push({ profile, amt, desc, username, file_name });
        console.log("Data: ", dataArray);
        window.sessionStorage.setItem("data",JSON.stringify(dataArray)); // session storage values must be strings, so stringify it
        window.location.href = 'transaction.html';
      });
}
else {
    console.log("Form doesn't exist")
}

async function saveFile() {
    const input = document.getElementById("fileupload");

    let formData = new FormData();
    formData.append("file", input.files[0]);
    await fetch("./upload.php", {method: "POST", body: formData});
    alert("The file " + input.files[0].name + " has been uploaded successfully");
    return input.files[0].name;
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
        const profile = document.getElementById("t_name");
        const amt = document.getElementById("t_amt");
        const desc = document.getElementById("t_desc");
        const date = document.getElementById("date");
        const paidTo = document.getElementById("paid_to");
        const prof_pic = document.getElementById("profile_pic");
        profile.innerText = data[0]["profile"];
        amt.innerText = "- $" + data[0]["amt"];
        desc.innerText = "\"" + data[0]["desc"] + "\"";
        date.innerText = convertDate(new Date());
        paidTo.innerText = data[0]["username"];
        prof_pic.src = "./images/" + data[0]["file_name"];
        // console.log(data[0]["profile"]);
    }
    else {
        console.log("data not assigned yet");
    }
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function convertDate(date) {
    var month = monthNames[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var ampm = "AM";
    if (hours > 12) {
        hours -= 12;
        ampm = "PM";
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    return month + " " + day + ", " + year + " " + hours + ":" + mins + " " + ampm;
}

// const submit = document.getElementById("btn");

// submit.addEventListener('click', handleSubmit)