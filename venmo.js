
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
        //const file_name = saveFile();
        let dataArray = [];
        const profile = document.getElementById("profile").value;
        const amt = document.getElementById("amt").value;
        const desc = document.getElementById("desc").value;
        const username = document.getElementById("username").value;
        dataArray.push({ profile, amt, desc, username });
        console.log("Data: ", dataArray);
        window.sessionStorage.setItem("data",JSON.stringify(dataArray)); // session storage values must be strings, so stringify it
      });
}
else {
    console.log("Form doesn't exist")
}

// async function saveFile() {
//     // 'file' comes from the Blob or File API
//     const file = document.getElementById("fileupload").files[0];
//     uploadBytes(storageRef, file).then((snapshot) => {
//         console.log('Uploaded a blob or file!');
//     });

//     // const input = document.getElementById("fileupload");

//     // let selectedFile = input.files[0];

//     // const storageRef = JSON.parse(window.sessionStorage.getItem("ref"));

//     // const uploadTask = storageRef.child('images/${selectedFile.name}').put(selectedFile); //create a child directory called images, and place the file inside this directory
//     // uploadTask.on('state_changed', (snapshot) => {
//     // // Observe state change events such as progress, pause, and resume
//     // }, (error) => {
//     //     // Handle unsuccessful uploads
//     //     console.log(error);
//     // }, () => {
//     //     // Do something once upload is complete
//     //     console.log('success');
//     // });

//     // let formData = new FormData();
//     // formData.append("file", input.files[0]);
//     // await fetch("./upload.php", {method: "POST", body: formData});
//     // alert("The file " + input.value.substring(12) + " has been uploaded successfully");
//     // return input.value.substring(12); 
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
        //prof_pic.src = "./images/" + data[0]["file_name"];
        prof_pic.src = window.sessionStorage.getItem("img_url");
        // console.log(data[0]["profile"]);
    }
    else {
        console.log("data not assigned yet");
    }
}

function backArrow() {
    window.location.href = 'history.html';
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