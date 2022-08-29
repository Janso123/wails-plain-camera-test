// Get input + focus
let nameElement = document.getElementById("name");
nameElement.focus();

// Setup the greet function
window.greet = function () {
    // Get name
    let name = nameElement.value;

    // Check if the input is empty
    if (name === "") return;

    // Call App.Greet(name)
    try {
        window.go.main.App.Greet(name)
            .then((result) => {
                // Update result with data back from App.Greet()
                document.getElementById("result").innerText = result;
            })
            .catch((err) => {
                console.error(err);
            });
    } catch (err) {
        console.error(err);
    }
};

nameElement.onkeydown = function (e) {
    if (e.keyCode == 13) {
        window.greet();
    }
};

const video = document.querySelector('#video')
navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

  const constraints = { 
    video: true,
    audio: false
  }
  
  navigator.mediaDevices.getUserMedia(constraints).then(stream => video.srcObject = stream);
}else {
    console.error('getUserMedia() is not supported in your browser');
}